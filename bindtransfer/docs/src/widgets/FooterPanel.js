/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/**
 * Docs.FooterPanel Class File
 *
 * JavaScript
 *
 * @category   xFrameworkPX 3.5 Samples
 * @package    Docs
 * @author     Kazuhiro Kotsutsumi <kotsutsumi@xenophy.com>
 * @copyright  Copyright (c) 2006-2010 Xenophy.CO.,LTD All rights Reserved.
 * @license    http://www.opensource.org/licenses/mit-license.html MIT License
 * @version    SVN $Id: FooterPanel.js 981 2009-12-26 10:41:03Z kotsutsumi $
 */

// {{{ Docs.FooterPanel

/**
 * Docs.FooterPanel Class
 *
 * @category   xFrameworkPX 3.5 Samples
 * @package    Docs
 * @author     Kazuhiro Kotsutsumi <kotsutsumi@xenophy.com>
 * @copyright  Copyright (c) 2006-2010 Xenophy.CO.,LTD All rights Reserved.
 * @license    http://www.opensource.org/licenses/mit-license.html MIT License
 * @version    Release: 1.0
 */
Docs.FooterPanel = Ext.extend(Ext.Panel, {

    // {{{ initComponent

    /**
     * �R���|�[�l���g���������\�b�h
     */
    initComponent : function()
    {
        // �����ݒ�
        Ext.applyIf(this, {id: Ext.id()});

        // �ݒ�K�p
        Ext.apply(this, {

            // HTML�ݒ�
            html: {

                // �^�O�ݒ�
                tag: 'address',

                // HTML�ݒ�
                html: 'Copyright &copy; 2006-2010 Xenophy.CO.,LTD All rights Reserved.'
            }
        });

        // �X�[�p�[�N���X���\�b�h�R�[��
        Docs.FooterPanel.superclass.initComponent.call( this );
    }

    // }}}

});

// }}}
// {{{ register xtype

Ext.reg('Docs.footer', Docs.FooterPanel);

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
