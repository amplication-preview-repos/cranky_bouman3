import { AdmissionLetter as TAdmissionLetter } from "../api/admissionLetter/AdmissionLetter";

export const ADMISSIONLETTER_TITLE_FIELD = "id";

export const AdmissionLetterTitle = (record: TAdmissionLetter): string => {
  return record.id?.toString() || String(record.id);
};
