/*
  Warnings:

  - You are about to drop the `email-change` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `email-verification` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `password-reset` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "email-change" DROP CONSTRAINT "email-change_userId_fkey";

-- DropForeignKey
ALTER TABLE "email-verification" DROP CONSTRAINT "email-verification_userId_fkey";

-- DropForeignKey
ALTER TABLE "password-reset" DROP CONSTRAINT "password-reset_userId_fkey";

-- DropTable
DROP TABLE "email-change";

-- DropTable
DROP TABLE "email-verification";

-- DropTable
DROP TABLE "password-reset";

-- DropTable
DROP TABLE "user";

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "avatar" TEXT,
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "birthDate" DATE,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT timezone('UTC'::text, now()),
    "updatedAt" TIMESTAMP(6) NOT NULL DEFAULT timezone('UTC'::text, now()),

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
