import {MigrationInterface, QueryRunner} from "typeorm";

export class LessonClassRelation1597376854895 implements MigrationInterface {
    name = 'LessonClassRelation1597376854895'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "lesson" ADD "schoolClassId" uuid`);
        await queryRunner.query(`ALTER TABLE "lesson" ADD CONSTRAINT "FK_cfca34c68c58fb1d0b185a10731" FOREIGN KEY ("schoolClassId") REFERENCES "class"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "lesson" DROP CONSTRAINT "FK_cfca34c68c58fb1d0b185a10731"`);
        await queryRunner.query(`ALTER TABLE "lesson" DROP COLUMN "schoolClassId"`);
    }

}
