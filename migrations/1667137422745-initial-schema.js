const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class initialSchema1667137422745 {
    name = 'initialSchema1667137422745'

    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "item" DROP COLUMN "imageurl"`);
        await queryRunner.query(`ALTER TABLE "item" ADD "category" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "item" ADD "imageUrl" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "item" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "item" ADD "price" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "item" ALTER COLUMN "userId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "item" ADD CONSTRAINT "FK_5369db3bd33839fd3b0dd5525d1" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "item" DROP CONSTRAINT "FK_5369db3bd33839fd3b0dd5525d1"`);
        await queryRunner.query(`ALTER TABLE "item" ALTER COLUMN "userId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "item" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "item" ADD "price" double precision NOT NULL`);
        await queryRunner.query(`ALTER TABLE "item" DROP COLUMN "imageUrl"`);
        await queryRunner.query(`ALTER TABLE "item" DROP COLUMN "category"`);
        await queryRunner.query(`ALTER TABLE "item" ADD "imageurl" integer`);
    }
}
