import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TimetableModuleBase } from "./base/timetable.module.base";
import { TimetableService } from "./timetable.service";
import { TimetableController } from "./timetable.controller";
import { TimetableResolver } from "./timetable.resolver";

@Module({
  imports: [TimetableModuleBase, forwardRef(() => AuthModule)],
  controllers: [TimetableController],
  providers: [TimetableService, TimetableResolver],
  exports: [TimetableService],
})
export class TimetableModule {}
