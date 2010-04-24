<?php

/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/**
 * OmegaTrick_List Class File
 *
 * PHP versions 5
 *
 * @category   OmegaTrick
 * @package    OmegaTrick_List
 * @author     Kazuhiro Kotsutsumi <kotsutsumi@xenophy.com>
 * @copyright  Copyright (c) 2006-2010 Xenophy.CO.,LTD All rights Reserved.
 * @license    http://www.gnu.org/licenses/gpl-3.0.html GPL v3
 */

// {{{ OmegaTrick_List

/**
 * OmegaTrick_List Class
 *
 * このクラスでは、MySQLを利用したデータ取得を前提に実装されています。
 * 利用するDDLは次の通りです。
 *
 * [DDL]
 *
 * SET NAMES utf8;
 * SET FOREIGN_KEY_CHECKS = 0;
 *
 * -- ----------------------------
 * --  Table structure for `tbl_list`
 * -- ----------------------------
 * DROP TABLE IF EXISTS `tbl_list`;
 * CREATE TABLE `tbl_list` (
 *   `id` bigint(20) NOT NULL AUTO_INCREMENT,
 *   `caption` varchar(255) NOT NULL,
 *   `modified` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP,
 *   `created` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
 *   PRIMARY KEY (`id`)
 * ) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
 *
 * -- ----------------------------
 * --  Records of `tbl_list`
 * -- ----------------------------
 * INSERT INTO `tbl_list` VALUES
 * ('1', 'リストアイテム１', '2010-04-16 21:57:37', '2010-04-16 21:57:34'),
 * ('2', 'リストアイテム２', '2010-04-16 21:57:39', '2010-04-16 21:57:37'),
 * ('3', 'リストアイテム３', '2010-04-16 21:58:04', '2010-04-16 21:58:00');
 *
 * 必要に応じて、OmegaTrick_Listクラスを継承しメソッドをオーバライドしてくださ
 * い。
 *
 * @category   OmegaTrick
 * @package    OmegaTrick_List
 * @author     Kazuhiro Kotsutsumi <kotsutsumi@xenophy.com>
 * @copyright  Copyright (c) 2006-2010 Xenophy.CO.,LTD All rights Reserved.
 * @license    http://www.gnu.org/licenses/gpl-3.0.html GPL v3
 */
class OmegaTrick_List extends xFrameworkPX_Model
{
    // {{{ props

    /**
     * 使用テーブル設定
     *
     * @var string
     */
    public $usetable = 'tbl_list';

    // }}}
    // {{{ getList

    /**
     * 一覧データ取得メソッド
     */
    public function readList($start, $limit, $sort, $dir, $query)
    {
        $option = array();

        if($query && is_string($query)) {
            $option['conditions'] = array(
                'caption' => 'LIKE %%' . $query . '%%',
                'OR',
                'modified' => 'LIKE %%' . $query . '%%',
                'OR',
                'created' => 'LIKE %%' . $query . '%%'
            );
        } else if($query && is_object($query)) {
            foreach($query as $key => $value) {
                if($key == 'caption') {
                    $option['conditions'][$key] = 'LIKE %%' . $value . '%%';
                }
                if($key == 'modified' || $key == 'created') {

                    if(isset($value->from) && !isset($value->to)) {
                        $option['conditions'][$key] = ">= " . $value->from;
                    } else if(!isset($value->from) && isset($value->to)) {
                        $option['conditions'][$key] = "<= " . $value->to;
                    } else if(isset($value->from) && isset($value->to)) {

                        $option['conditions'][] = array(
                            $key => '>=' . $value->from
                        );
                        $option['conditions'][] = array(
                            $key => '<=' . $value->to
                        );
                    }
                }
            }
        }

        $option['order'] = array(
            $sort . ' ' . $dir
        );

        $option['field'] = array(
            'id',
            'caption',
            'modified',
            'modified as from_modified',
            'modified as to_modified',
            'created'
        );

        return array(
            'items' => $this->get('all', $option),
            'total' => $this->get('count', $option)
        );

    }

    // }}}
    // {{{ getUnit

    public function getUnit($id)
    {
        return $this->get(
            'first',
            array(
                'conditions' => array(
                    array(
                        'id' => $id,
                    )
                )
            )
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

