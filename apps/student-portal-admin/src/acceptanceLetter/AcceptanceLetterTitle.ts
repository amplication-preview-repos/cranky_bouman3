import { AcceptanceLetter as TAcceptanceLetter } from "../api/acceptanceLetter/AcceptanceLetter";

export const ACCEPTANCELETTER_TITLE_FIELD = "id";

export const AcceptanceLetterTitle = (record: TAcceptanceLetter): string => {
  return record.id?.toString() || String(record.id);
};
