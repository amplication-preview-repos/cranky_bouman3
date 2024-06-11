import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type AcceptanceLetterUpdateInput = {
  content?: string | null;
  student?: StudentWhereUniqueInput | null;
};
