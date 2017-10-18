-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: sys
-- ------------------------------------------------------
-- Server version	5.7.19-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `shareuser`
--

DROP TABLE IF EXISTS `shareuser`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `shareuser` (
  `username` varchar(100) DEFAULT NULL,
  `foldername` varchar(40) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shareuser`
--

LOCK TABLES `shareuser` WRITE;
/*!40000 ALTER TABLE `shareuser` DISABLE KEYS */;
INSERT INTO `shareuser` VALUES ('th','picture.jpeg'),('ht','picture.jpeg'),('undefined','undefined'),('undefined','undefined'),('undefined','undefined'),('undefined','undefined'),('undefined','undefined'),('undefined','undefined'),('undefined','undefined'),('hanisha','03.Node.js ver2.pdf'),('hanishathirtham@gmail.com','03.Node.js ver2.pdf'),('hani','03.Node.js ver2.pdf'),('yah','03.Node.js ver2.pdf'),('do','03.Node.js ver2.pdf'),('mohan','03.Node.js ver2.pdf'),('krishna','03.Node.js ver2.pdf'),('','03.Node.js ver2.pdf'),('','03.Node.js ver2.pdf'),('','03.Node.js ver2.pdf'),('thirthamhanisha@gmail.com, hanisha@gmail.com','03.Node.js ver2.pdf'),('thirthamhanisha@gmail.com, hanisha@gmail.com','03.Node.js ver2.pdf'),('thirthamhanisha@gmail.com','03.Node.js ver2.pdf'),(' hanisha@yahoo.com','03.Node.js ver2.pdf'),('hani','first@last.com'),(' thir','first@last.com'),(' kj','first@last.com'),('gng','03.Node.js ver2.pdf'),('t@h.com','dropbox-logo1.jpeg'),('a@b.com','dropbox-logo1.jpeg'),('mt@gmail.com','dropbox-logo1.jpeg'),('mt@gmail.com','dropbox-logo1.jpeg'),('saru.t@gmail.com','dropbox-logo1.jpeg'),('mt@gmail.com','dropbox-logo1.jpeg'),('saru.t@gmail.com','dropbox-logo1.jpeg'),('mt@gmail.com','dropbox-logo1.jpeg'),('saru.t@gmail.com','dropbox-logo1.jpeg'),('mt@gmail.com','dropbox-logo1.jpeg'),('saru.t@gmail.com','dropbox-logo1.jpeg'),('mt@gmail.com','undefined'),('mt@gmail.com','dropbox-logo1'),('mt@gmail.com','dropbox-logo1'),('mt@gmail.com','dropbox-logo1'),('mt@gmail.com','dropbox-logo1'),('mt@gmail.com','dropbox-logo1'),('ume@gmail.com','03.Node.js ver2 (2).pdf'),(' ume1@gmail.com','03.Node.js ver2 (2).pdf'),('sarut@gmail.com','03.Node.js ver2 (1).pdf'),('ume@gmail.com','03.Node.js ver2 (1).pdf'),('mt@gmail.com','dropbox-logo1'),('mt@gmail.com','dropbox-logo1'),('thirthamhanisha@gmail.com','Readme.txt');
/*!40000 ALTER TABLE `shareuser` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-10-17 18:28:50
