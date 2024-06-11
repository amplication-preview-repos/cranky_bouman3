import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TimetableService } from "./timetable.service";
import { TimetableControllerBase } from "./base/timetable.controller.base";

@swagger.ApiTags("timetables")
@common.Controller("timetables")
export class TimetableController extends TimetableControllerBase {
  constructor(
    protected readonly service: TimetableService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
