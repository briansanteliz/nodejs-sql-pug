CREATE DATABASE `agenciaviajes`

/* Tabla para los viajes */

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

/* Tabla para testimoniales */

CREATE TABLE `testimoniales`(
    `id` int(11) NOT NULL,
    `nombre` varchar(60) NOT NULL,
    `correo` varchar(40) NOT NULL,
    `mensaje` longtext NOT NULL
);

ALTER TABLE `testimoniales`
    ADD PRIMARY KEY (`id`);

ALTER TABLE `testimoniales`
    MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
