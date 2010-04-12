<?php

/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/**
 * OmegaTrick_Auth Class File
 *
 * PHP versions 5
 *
 * @category   OmegaTrick
 * @package    OmegaTrick_Auth
 * @author     Kazuhiro Kotsutsumi <kotsutsumi@xenophy.com>
 * @copyright  Copyright (c) 2006-2010 Xenophy.CO.,LTD All rights Reserved.
 * @license    http://www.gnu.org/licenses/gpl-3.0.html GPL v3
 */

// {{{ OmegaTrick_Auth

/**
 * OmegaTrick_Auth Class
 *
 * このクラスでは、MySQLを利用したユーザ管理を前提に実装されています。
 * 利用するDDLは次の通りです。
 *
 * [DDL]
 *
 * SET NAMES utf8;
 * SET FOREIGN_KEY_CHECKS = 0;
 *
 * -- ----------------------------
 * --  Table structure for `tbl_users`
 * -- ----------------------------
 * DROP TABLE IF EXISTS `tbl_users`;
 * CREATE TABLE `tbl_users` (
 *   `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT COMMENT 'ID',
 *   `del` tinyint(4) NOT NULL COMMENT '削除フラグ',
 *   `auto_signin_key` char(32) NOT NULL COMMENT '自動サインインキー',
 *   `email` varchar(255) NOT NULL COMMENT 'メールアドレス',
 *   `password` varchar(255) NOT NULL COMMENT 'パスワード',
 *   `last_name` varchar(255) NOT NULL COMMENT '姓',
 *   `first_name` varchar(255) NOT NULL COMMENT '名',
 *   `last_name_kana` varchar(255) NOT NULL COMMENT '姓カナ',
 *   `first_name_kana` varchar(255) NOT NULL COMMENT '名カナ',
 *   `modified` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新日時',
 *   `created` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '作成日時',
 *   PRIMARY KEY (`id`)
 * ) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
 * 
 * -- ----------------------------
 * --  Records of `tbl_users`
 * -- ----------------------------
 * INSERT INTO `tbl_users` VALUES ('1', '0', '8bdbc34f1f79a875581bdc15acb47b1f', 'master@omegatrick.com', 'trickmaster', '尾女鹿', '鳥区', 'オメガ', 'トリック', '2010-04-12 12:36:37', '2010-04-12 11:49:44');
 *
 * 必要に応じて、OmegaTrick_Authクラスを継承しメソッドをオーバライドしてくださ
 * い。
 *
 * @category   OmegaTrick
 * @package    OmegaTrick_Auth
 * @author     Kazuhiro Kotsutsumi <kotsutsumi@xenophy.com>
 * @copyright  Copyright (c) 2006-2010 Xenophy.CO.,LTD All rights Reserved.
 * @license    http://www.gnu.org/licenses/gpl-3.0.html GPL v3
 */
class OmegaTrick_Auth extends xFrameworkPX_Model
{
    // {{{ props

    /**
     * 使用テーブル設定
     *
     * @var string
     */
    public $usetable = 'tbl_users';

    /**
     * ユーザーセッションキー
     */
    public $userSessionKey = 'OMEGATRICK_USER_SESSION_KEY';

    /**
     * 自動サインイン暗号化キー
     */
    public $autoSigninEncryptKey = 'OMEGATRICK_AUTO_SIGNIN_KEY';

    // }}}
    // {{{ autoSignin

    /**
     * 自動サインインメソッド
     *
     * @param $key 自動サインインキー
     * @return array サインイン結果配列
     */
    public function autoSignin($key) {

        $key = decrypt(
            $this->autoSigninEncryptKey,
            $key
        );

        $ret = $this->count(
            array(
                'where' => array(
                    'auto_signin_key = :auto_signin_key',
                ),
                'bind' => array(
                    'auto_signin_key' => $key,
                ),
            )
        );

        if ($ret === 1) {

            // ユーザー情報取得
            $ret = $this->get(
                'first',
                array(
                    'conditions' => array(
                        'auto_signin_key' => $key,
                    ),
                )
            );

            // 自動ログイン用キー更新
            $autoSigninKey = md5(uniqid("",1));
            $this->set(
                array(
                    'id' => $ret['id'],
                    'auto_signin_key' => $autoSigninKey
                )
            );

            // セッションへユーザーデータ保存
            $this->controller->Session->write(
                $this->userSessionKey,
                array(
                    'id' => $ret['id'],
                    'last_name' => $ret['last_name'],
                    'first_name' => $ret['first_name'],
                )
            );

            return array(
                'success' => true,
                'auto_signin_key' => encrypt(
                    $this->autoSigninEncryptKey,
                    $autoSigninKey
                )
            );
        }

        return array(
            'success' => false
        );
    }

    // }}}
    // {{{ isSignin

    /**
     * サインイン確認メソッド
     *
     * @return array サインイン結果配列
     */
    public function isSignin() {

        $ret = $this->controller->Session->read($this->userSessionKey);

        if ($ret) {
            return array(
                'first_name' => $ret['first_name'],
                'last_name' => $ret['last_name']
            );
        }

        return false;
    }

    // }}}
    // {{{ execute

    /**
     * 認証処理メソッド
     *
     * @param $param サインパラメータ配列
     * @return array サインイン結果配列
     */
    public function execute($param) {

        $ret = $this->count(
            array(
                'where' => array(
                    'del = :del',
                    'email = :email',
                    'password = :password'
                ),
                'bind' => array(
                    'del' => 0,
                    'email' => $param->email,
                    'password' => $param->pass
                ),
            )
        );

        if ($ret === 1) {

            // ユーザー情報取得
            $ret = $this->get(
                'first',
                array(
                    'conditions' => array(
                        'email' => $param->email,
                        'password' => $param->pass
                    ),
                )
            );

            // 自動ログイン用キー更新
            $autoSigninKey = md5(uniqid("",1));
            $this->set(
                array(
                    'id' => $ret['id'],
                    'auto_signin_key' => $autoSigninKey
                )
            );

            // セッションへユーザーデータ保存
            $this->controller->Session->write(
                $this->userSessionKey,
                array(
                    'id' => $ret['id'],
                    'last_name' => $ret['last_name'],
                    'first_name' => $ret['first_name'],
                )
            );

            return array(
                'success' => true,
                'auto_signin_key' => encrypt(
                    $this->autoSigninEncryptKey,
                    $autoSigninKey
                )
            );
        }

        return array(
            'success' => false
        );
    }

    // }}}
    // {{{ signout

    /**
     * サインアウトメソッド
     *
     * @return array サインアウト結果配列
     */
    public function signout() {

        // セッションへユーザーデータ保存
        $ret = $this->controller->Session->read($this->userSessionKey);

        // セッションのユーザーデータ破棄
        $this->controller->Session->remove($this->userSessionKey);

        // 自動ログイン用キー更新
        $autoSigninKey = md5(uniqid("",1));
        $this->set(
            array(
                'id' => $ret['id'],
                'auto_signin_key' => $autoSigninKey
            )
        );

        return array(
            'success' => true
        );
    }

    // }}}

}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */

