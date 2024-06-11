import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type TimetableUpdateInput = {
  content?: string | null;
  student?: StudentWhereUniqueInput | null;
};
