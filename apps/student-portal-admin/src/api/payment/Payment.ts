import { Student } from "../student/Student";

export type Payment = {
  amount: number | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  student?: Student | null;
  typeField?: "Option1" | null;
  updatedAt: Date;
};
