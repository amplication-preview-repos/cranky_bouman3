import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type TimetableCreateInput = {
  content?: string | null;
  student?: StudentWhereUniqueInput | null;
};
