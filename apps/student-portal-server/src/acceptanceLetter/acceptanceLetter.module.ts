import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AcceptanceLetterModuleBase } from "./base/acceptanceLetter.module.base";
import { AcceptanceLetterService } from "./acceptanceLetter.service";
import { AcceptanceLetterController } from "./acceptanceLetter.controller";
import { AcceptanceLetterResolver } from "./acceptanceLetter.resolver";

@Module({
  imports: [AcceptanceLetterModuleBase, forwardRef(() => AuthModule)],
  controllers: [AcceptanceLetterController],
  providers: [AcceptanceLetterService, AcceptanceLetterResolver],
  exports: [AcceptanceLetterService],
})
export class AcceptanceLetterModule {}
