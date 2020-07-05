CREATE DATABASE `agenciaviajes`

CREATE TABLE `viajes`(
    `id` int(11) NOT NULL,
    `titulo` varchar(60) NOT NULL,
    `precio` varchar(10) NOT NULL,
    `fecha_ida` date NOT NULL,
    `fecha_vuelta` date NOT NULL,
    `imagen` varchar(20) NOT NULL,
    `descripcion` longtext NOT NULL,
    `disponibles` varchar(3) NOT NULL
);

ALTER TABLE `viajes`
    ADD PRIMARY KEY (`id`);

ALTER TABLE `viajes`
    MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

