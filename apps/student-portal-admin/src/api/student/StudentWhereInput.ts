import { AcceptanceLetterListRelationFilter } from "../acceptanceLetter/AcceptanceLetterListRelationFilter";
import { AdmissionLetterListRelationFilter } from "../admissionLetter/AdmissionLetterListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";
import { TimetableListRelationFilter } from "../timetable/TimetableListRelationFilter";

export type StudentWhereInput = {
  acceptanceLetters?: AcceptanceLetterListRelationFilter;
  admissionLetters?: AdmissionLetterListRelationFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  password?: StringNullableFilter;
  payments?: PaymentListRelationFilter;
  paymentStatus?: "Option1";
  timetables?: TimetableListRelationFilter;
};
