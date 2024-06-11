import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type TimetableWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  student?: StudentWhereUniqueInput;
};
