import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AcceptanceLetterServiceBase } from "./base/acceptanceLetter.service.base";

@Injectable()
export class AcceptanceLetterService extends AcceptanceLetterServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
