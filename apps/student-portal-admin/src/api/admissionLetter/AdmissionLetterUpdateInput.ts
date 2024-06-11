import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type AdmissionLetterUpdateInput = {
  content?: string | null;
  student?: StudentWhereUniqueInput | null;
};
