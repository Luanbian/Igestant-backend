-- CreateTable
CREATE TABLE `Feed` (
    `id` CHAR(36) NOT NULL,
    `question` VARCHAR(191) NOT NULL,
    `shortAnswer` VARCHAR(191) NOT NULL,
    `longAnswer` TEXT NOT NULL,
    `reference` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
