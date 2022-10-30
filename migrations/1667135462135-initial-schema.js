const { MigrationInterface, QueryRunner } = require('typeorm');

module.exports = class initialSchema1667135462135 {
  async up(queryRunner) {
    await queryRunner.query(`ALTER TABLE item ADD COLUMN imageUrl int`);
  }

  async down(queryRunner) {
    await queryRunner.query(`DROP TABLE ""item""`);
    await queryRunner.query(`DROP TABLE ""user""`);
  }
};
