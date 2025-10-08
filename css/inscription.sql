-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: sql209.byetcluster.com
-- Generation Time: Nov 27, 2024 at 03:52 PM
-- Server version: 10.6.19-MariaDB
-- PHP Version: 7.2.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `if0_36380253_iocity`
--

-- --------------------------------------------------------

--
-- Table structure for table `inscription`
--

CREATE TABLE `inscription` (
  `idins` int(11) NOT NULL COMMENT 'cle inscription',
  `nom` varchar(50) NOT NULL,
  `prenom` varchar(50) NOT NULL,
  `mobile` int(11) NOT NULL,
  `email` text NOT NULL,
  `password` text NOT NULL,
  `passwordconfirm` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Inscription des residents cite';

--
-- Dumping data for table `inscription`
--

INSERT INTO `inscription` (`idins`, `nom`, `prenom`, `mobile`, `email`, `password`, `passwordconfirm`) VALUES
(1, 'Hanifi', 'Khelaf', 770190218, 'hanifi.rssi@gmail.com', 'City2024+', 'City2024+'),
(2, 'Samy', '28c', 696380479, 'samy.rssi@gmail.com', 'City2024+', 'City2024+'),
(3, 'HANI', 'Khelaf', 696380479, 'hanifi.rssi@gmail.com', 'City2024+', 'xcxc wx ddfvs');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `inscription`
--
ALTER TABLE `inscription`
  ADD PRIMARY KEY (`idins`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `inscription`
--
ALTER TABLE `inscription`
  MODIFY `idins` int(11) NOT NULL AUTO_INCREMENT COMMENT 'cle inscription', AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
