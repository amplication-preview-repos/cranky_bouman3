import { Student } from "../student/Student";

export type AcceptanceLetter = {
  content: string | null;
  createdAt: Date;
  id: string;
  student?: Student | null;
  updatedAt: Date;
};
