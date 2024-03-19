import { MigrationInterface, QueryRunner } from "typeorm";

export class Movie1698321512351 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
    CREATE TABLE movies (
      id CHAR(36) NOT NULL PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      description VARCHAR(255) NOT NULL,
      director VARCHAR(255) NOT NULL,
      year INT NOT NULL,
      rating VARCHAR(255) NOT NULL,
      image VARCHAR(255) NOT NULL,
      cast VARCHAR(255) NOT NULL,
      createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  )      
          `),
      undefined;
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "movies"`, undefined);
  }
}
