import { AcceptanceLetterUpdateManyWithoutStudentsInput } from "./AcceptanceLetterUpdateManyWithoutStudentsInput";
import { AdmissionLetterUpdateManyWithoutStudentsInput } from "./AdmissionLetterUpdateManyWithoutStudentsInput";
import { PaymentUpdateManyWithoutStudentsInput } from "./PaymentUpdateManyWithoutStudentsInput";
import { TimetableUpdateManyWithoutStudentsInput } from "./TimetableUpdateManyWithoutStudentsInput";

export type StudentUpdateInput = {
  acceptanceLetters?: AcceptanceLetterUpdateManyWithoutStudentsInput;
  admissionLetters?: AdmissionLetterUpdateManyWithoutStudentsInput;
  email?: string | null;
  name?: string | null;
  password?: string | null;
  payments?: PaymentUpdateManyWithoutStudentsInput;
  paymentStatus?: "Option1" | null;
  timetables?: TimetableUpdateManyWithoutStudentsInput;
};
