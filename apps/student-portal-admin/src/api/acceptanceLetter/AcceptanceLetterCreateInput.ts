import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type AcceptanceLetterCreateInput = {
  content?: string | null;
  student?: StudentWhereUniqueInput | null;
};
