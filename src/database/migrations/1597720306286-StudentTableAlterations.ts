import {MigrationInterface, QueryRunner} from "typeorm";

export class StudentTableAlterations1597720306286 implements MigrationInterface {
    name = 'StudentTableAlterations1597720306286'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "student" ADD "email" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "student" DROP COLUMN "email"`);
    }

}
