import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AcceptanceLetterService } from "./acceptanceLetter.service";
import { AcceptanceLetterControllerBase } from "./base/acceptanceLetter.controller.base";

@swagger.ApiTags("acceptanceLetters")
@common.Controller("acceptanceLetters")
export class AcceptanceLetterController extends AcceptanceLetterControllerBase {
  constructor(
    protected readonly service: AcceptanceLetterService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
