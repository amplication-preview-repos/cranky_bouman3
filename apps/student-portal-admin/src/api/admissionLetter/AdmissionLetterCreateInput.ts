import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type AdmissionLetterCreateInput = {
  content?: string | null;
  student?: StudentWhereUniqueInput | null;
};
