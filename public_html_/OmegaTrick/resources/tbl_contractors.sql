/*
 Navicat Premium Data Transfer

 Source Server         : ローカルホスト
 Source Server Type    : MySQL
 Source Server Version : 50145
 Source Host           : localhost
 Source Database       : SpreadOfficeControlCenter

 Target Server Type    : MySQL
 Target Server Version : 50145
 File Encoding         : utf-8

 Date: 04/28/2010 19:47:01 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_contractors`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_contractors`;
CREATE TABLE `tbl_contractors` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `del` tinyint(4) NOT NULL COMMENT '削除フラグ',
  `name` varchar(20) NOT NULL COMMENT 'アカウント名',
  `company` varchar(255) NOT NULL,
  `company_kana` varchar(255) NOT NULL,
  `zip` char(7) NOT NULL,
  `pref` bigint(20) NOT NULL,
  `town` varchar(255) NOT NULL,
  `addr` varchar(255) NOT NULL,
  `addr2` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `last_name_kana` varchar(255) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `first_name_kana` varchar(255) NOT NULL,
  `division` varchar(255) NOT NULL,
  `tel` varchar(255) NOT NULL,
  `fax` varchar(255) NOT NULL,
  `email` varchar(1024) NOT NULL,
  `bill_company` varchar(255) NOT NULL,
  `bill_company_kana` varchar(255) NOT NULL,
  `bill_zip` char(7) NOT NULL,
  `bill_pref` bigint(20) NOT NULL,
  `bill_town` varchar(255) NOT NULL,
  `bill_addr` varchar(255) NOT NULL,
  `bill_addr2` varchar(255) NOT NULL,
  `bill_last_name` varchar(255) NOT NULL,
  `bill_last_name_kana` varchar(255) NOT NULL,
  `bill_first_name` varchar(255) NOT NULL,
  `bill_first_name_kana` varchar(255) NOT NULL,
  `bill_division` varchar(255) NOT NULL,
  `bill_tel` varchar(255) NOT NULL,
  `bill_fax` varchar(255) NOT NULL,
  `bill_email` varchar(255) NOT NULL,
  `modified_user` bigint(20) NOT NULL,
  `modified` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP,
  `created_user` bigint(20) NOT NULL,
  `created` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

