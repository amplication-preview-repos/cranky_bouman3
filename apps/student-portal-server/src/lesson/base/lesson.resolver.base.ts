/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Lesson } from "./Lesson";
import { LessonCountArgs } from "./LessonCountArgs";
import { LessonFindManyArgs } from "./LessonFindManyArgs";
import { LessonFindUniqueArgs } from "./LessonFindUniqueArgs";
import { CreateLessonArgs } from "./CreateLessonArgs";
import { UpdateLessonArgs } from "./UpdateLessonArgs";
import { DeleteLessonArgs } from "./DeleteLessonArgs";
import { LessonService } from "../lesson.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Lesson)
export class LessonResolverBase {
  constructor(
    protected readonly service: LessonService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Lesson",
    action: "read",
    possession: "any",
  })
  async _lessonsMeta(
    @graphql.Args() args: LessonCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Lesson])
  @nestAccessControl.UseRoles({
    resource: "Lesson",
    action: "read",
    possession: "any",
  })
  async lessons(@graphql.Args() args: LessonFindManyArgs): Promise<Lesson[]> {
    return this.service.lessons(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Lesson, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Lesson",
    action: "read",
    possession: "own",
  })
  async lesson(
    @graphql.Args() args: LessonFindUniqueArgs
  ): Promise<Lesson | null> {
    const result = await this.service.lesson(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Lesson)
  @nestAccessControl.UseRoles({
    resource: "Lesson",
    action: "create",
    possession: "any",
  })
  async createLesson(@graphql.Args() args: CreateLessonArgs): Promise<Lesson> {
    return await this.service.createLesson({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Lesson)
  @nestAccessControl.UseRoles({
    resource: "Lesson",
    action: "update",
    possession: "any",
  })
  async updateLesson(
    @graphql.Args() args: UpdateLessonArgs
  ): Promise<Lesson | null> {
    try {
      return await this.service.updateLesson({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Lesson)
  @nestAccessControl.UseRoles({
    resource: "Lesson",
    action: "delete",
    possession: "any",
  })
  async deleteLesson(
    @graphql.Args() args: DeleteLessonArgs
  ): Promise<Lesson | null> {
    try {
      return await this.service.deleteLesson(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
