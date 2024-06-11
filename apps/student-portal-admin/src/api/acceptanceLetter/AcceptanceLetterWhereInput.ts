import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type AcceptanceLetterWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  student?: StudentWhereUniqueInput;
};
