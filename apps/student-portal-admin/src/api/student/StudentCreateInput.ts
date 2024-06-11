import { AcceptanceLetterCreateNestedManyWithoutStudentsInput } from "./AcceptanceLetterCreateNestedManyWithoutStudentsInput";
import { AdmissionLetterCreateNestedManyWithoutStudentsInput } from "./AdmissionLetterCreateNestedManyWithoutStudentsInput";
import { PaymentCreateNestedManyWithoutStudentsInput } from "./PaymentCreateNestedManyWithoutStudentsInput";
import { TimetableCreateNestedManyWithoutStudentsInput } from "./TimetableCreateNestedManyWithoutStudentsInput";

export type StudentCreateInput = {
  acceptanceLetters?: AcceptanceLetterCreateNestedManyWithoutStudentsInput;
  admissionLetters?: AdmissionLetterCreateNestedManyWithoutStudentsInput;
  email?: string | null;
  name?: string | null;
  password?: string | null;
  payments?: PaymentCreateNestedManyWithoutStudentsInput;
  paymentStatus?: "Option1" | null;
  timetables?: TimetableCreateNestedManyWithoutStudentsInput;
};
