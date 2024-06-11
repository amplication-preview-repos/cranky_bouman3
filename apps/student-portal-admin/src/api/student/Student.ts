import { AcceptanceLetter } from "../acceptanceLetter/AcceptanceLetter";
import { AdmissionLetter } from "../admissionLetter/AdmissionLetter";
import { Payment } from "../payment/Payment";
import { Timetable } from "../timetable/Timetable";

export type Student = {
  acceptanceLetters?: Array<AcceptanceLetter>;
  admissionLetters?: Array<AdmissionLetter>;
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  password: string | null;
  payments?: Array<Payment>;
  paymentStatus?: "Option1" | null;
  timetables?: Array<Timetable>;
  updatedAt: Date;
};
