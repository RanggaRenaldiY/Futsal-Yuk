/*
 Navicat Premium Data Transfer

 Source Server         : Me
 Source Server Type    : MySQL
 Source Server Version : 100424
 Source Host           : localhost:3306
 Source Schema         : db_futsal

 Target Server Type    : MySQL
 Target Server Version : 100424
 File Encoding         : 65001

 Date: 07/06/2022 17:03:37
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for lapangan
-- ----------------------------
DROP TABLE IF EXISTS `lapangan`;
CREATE TABLE `lapangan`  (
  `lapangan_id` int(3) NOT NULL AUTO_INCREMENT,
  `lapangan_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `lapangan_harga` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `lapangan_lokasi` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `lapangan_alas` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `lapangan_ukuran` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `lapangan_nomor` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `lapangan_foto` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`lapangan_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of lapangan
-- ----------------------------
INSERT INTO `lapangan` VALUES (1, 'DEWA FUTSAL', '85.000 - 100.000', 'Jl.peta 1 no .10', 'Interlock', '25mx15m', '1', 'D:\\Rangga\\Mobile\\Bootcamp\\SanberCode\\FinalProject\\FutsalYuk\\src\\assets\\image\\lapang.png');
INSERT INTO `lapangan` VALUES (2, 'MU FUTSAL', '85.000 - 100.000', 'Jl.lombok  no .20', 'Interlock', '25mx15m', '1', 'D:\\Rangga\\Mobile\\Bootcamp\\SanberCode\\FinalProject\\FutsalYuk\\src\\assets\\image\\lapang1.png');
INSERT INTO `lapangan` VALUES (3, 'MU FUTSAL', '85.000 - 100.000', 'Jl.lombok  no .20', 'Interlock', '25mx15m', '2', 'D:\\Rangga\\Mobile\\Bootcamp\\SanberCode\\FinalProject\\FutsalYuk\\src\\assets\\image\\lapang2.png');
INSERT INTO `lapangan` VALUES (4, 'Meteor Futsal', '85.000 - 100.000', 'Jl. Terusan Jakarta', 'Interlock', '25mx15m', '1', 'D:\\Rangga\\Mobile\\Bootcamp\\SanberCode\\FinalProject\\FutsalYuk\\src\\assets\\image\\lapang3.png');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `customer_id` int(3) NOT NULL AUTO_INCREMENT,
  `customer_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `customer_email` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `customer_password` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`customer_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, 'rangga', 'rangga@gmail.com', '123456');

SET FOREIGN_KEY_CHECKS = 1;
