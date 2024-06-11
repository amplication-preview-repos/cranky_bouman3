import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AcceptanceLetterResolverBase } from "./base/acceptanceLetter.resolver.base";
import { AcceptanceLetter } from "./base/AcceptanceLetter";
import { AcceptanceLetterService } from "./acceptanceLetter.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AcceptanceLetter)
export class AcceptanceLetterResolver extends AcceptanceLetterResolverBase {
  constructor(
    protected readonly service: AcceptanceLetterService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
