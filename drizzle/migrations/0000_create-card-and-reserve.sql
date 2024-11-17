CREATE TABLE `cards` (
	`id` text(36) PRIMARY KEY NOT NULL,
	`label` text NOT NULL,
	`closing_date` text(2) NOT NULL,
	`due_date` text(2) NOT NULL,
	`currency` text(3) NOT NULL,
	`create_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`update_at` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `cards_id_unique` ON `cards` (`id`);--> statement-breakpoint
CREATE UNIQUE INDEX `card_label_unique` ON `cards` (`label`);--> statement-breakpoint
CREATE TABLE `reserves` (
	`id` text(36) PRIMARY KEY NOT NULL,
	`label` text NOT NULL,
	`bank` text,
	`currency` text(3) NOT NULL,
	`create_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`update_at` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `reserves_id_unique` ON `reserves` (`id`);