import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type PaymentUpdateInput = {
  amount?: number | null;
  date?: Date | null;
  student?: StudentWhereUniqueInput | null;
  typeField?: "Option1" | null;
};
