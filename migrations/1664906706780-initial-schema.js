const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class initialSchema1664906706780 {
    name = 'initialSchema1664906706780'

    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "email" varchar NOT NULL, "password" varchar NOT NULL, "admin" boolean NOT NULL DEFAULT (0))`);
        await queryRunner.query(`CREATE TABLE "item" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "approved" boolean NOT NULL DEFAULT (0), "name" varchar NOT NULL, "category" varchar NOT NULL, "brand" varchar NOT NULL, "quantity" integer NOT NULL, "price" integer NOT NULL, "userId" integer)`);
        await queryRunner.query(`CREATE TABLE "admin" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "username" varchar NOT NULL, "password" varchar NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "items" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "category" varchar NOT NULL, "quantity" integer NOT NULL, "price" integer NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "users" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "username" varchar NOT NULL, "password" varchar NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "temporary_item" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "approved" boolean NOT NULL DEFAULT (0), "name" varchar NOT NULL, "category" varchar NOT NULL, "brand" varchar NOT NULL, "quantity" integer NOT NULL, "price" integer NOT NULL, "userId" integer, CONSTRAINT "FK_5369db3bd33839fd3b0dd5525d1" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_item"("id", "approved", "name", "category", "brand", "quantity", "price", "userId") SELECT "id", "approved", "name", "category", "brand", "quantity", "price", "userId" FROM "item"`);
        await queryRunner.query(`DROP TABLE "item"`);
        await queryRunner.query(`ALTER TABLE "temporary_item" RENAME TO "item"`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "item" RENAME TO "temporary_item"`);
        await queryRunner.query(`CREATE TABLE "item" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "approved" boolean NOT NULL DEFAULT (0), "name" varchar NOT NULL, "category" varchar NOT NULL, "brand" varchar NOT NULL, "quantity" integer NOT NULL, "price" integer NOT NULL, "userId" integer)`);
        await queryRunner.query(`INSERT INTO "item"("id", "approved", "name", "category", "brand", "quantity", "price", "userId") SELECT "id", "approved", "name", "category", "brand", "quantity", "price", "userId" FROM "temporary_item"`);
        await queryRunner.query(`DROP TABLE "temporary_item"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "items"`);
        await queryRunner.query(`DROP TABLE "admin"`);
        await queryRunner.query(`DROP TABLE "item"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }
}
