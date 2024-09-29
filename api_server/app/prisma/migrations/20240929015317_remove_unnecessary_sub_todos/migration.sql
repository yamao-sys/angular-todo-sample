/*
  Warnings:

  - You are about to drop the `sub_todos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `sub_todos` DROP FOREIGN KEY `sub_todos_todo_id_fkey`;

-- DropTable
DROP TABLE `sub_todos`;
