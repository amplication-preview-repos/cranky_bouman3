/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Lesson as PrismaLesson } from "@prisma/client";

export class LessonServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.LessonCountArgs, "select">): Promise<number> {
    return this.prisma.lesson.count(args);
  }

  async lessons<T extends Prisma.LessonFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.LessonFindManyArgs>
  ): Promise<PrismaLesson[]> {
    return this.prisma.lesson.findMany<Prisma.LessonFindManyArgs>(args);
  }
  async lesson<T extends Prisma.LessonFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.LessonFindUniqueArgs>
  ): Promise<PrismaLesson | null> {
    return this.prisma.lesson.findUnique(args);
  }
  async createLesson<T extends Prisma.LessonCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.LessonCreateArgs>
  ): Promise<PrismaLesson> {
    return this.prisma.lesson.create<T>(args);
  }
  async updateLesson<T extends Prisma.LessonUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.LessonUpdateArgs>
  ): Promise<PrismaLesson> {
    return this.prisma.lesson.update<T>(args);
  }
  async deleteLesson<T extends Prisma.LessonDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.LessonDeleteArgs>
  ): Promise<PrismaLesson> {
    return this.prisma.lesson.delete(args);
  }
}
