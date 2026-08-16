CREATE TABLE `reservations` (
	`id` int AUTO_INCREMENT NOT NULL,
	`reservationCode` varchar(32) NOT NULL,
	`fullName` varchar(120) NOT NULL,
	`email` varchar(320) NOT NULL,
	`phone` varchar(64) NOT NULL,
	`reservationDate` varchar(10) NOT NULL,
	`reservationTime` varchar(5) NOT NULL,
	`partySize` int NOT NULL,
	`seatingPreference` varchar(32) NOT NULL,
	`occasion` text,
	`status` enum('confirmed','cancelled') NOT NULL DEFAULT 'confirmed',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `reservations_id` PRIMARY KEY(`id`),
	CONSTRAINT `reservations_reservationCode_unique` UNIQUE(`reservationCode`)
);
