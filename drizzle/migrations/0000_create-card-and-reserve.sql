CREATE TABLE `cards` (
	`id` text(36) PRIMARY KEY NOT NULL,
	`label` text NOT NULL,
	`bank` text,
	`due_day` text(2) NOT NULL,
	`currency` text(3) NOT NULL,
	`create_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`update_at` text,
	`reserve_id` text,
	FOREIGN KEY (`reserve_id`) REFERENCES `reserves`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `cards_id_unique` ON `cards` (`id`);--> statement-breakpoint
CREATE TABLE `reserves` (
	`id` text(36) PRIMARY KEY NOT NULL,
	`label` text NOT NULL,
	`bank` text,
	`balance` integer DEFAULT 0 NOT NULL,
	`currency` text(3) NOT NULL,
	`create_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`update_at` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `reserves_id_unique` ON `reserves` (`id`);