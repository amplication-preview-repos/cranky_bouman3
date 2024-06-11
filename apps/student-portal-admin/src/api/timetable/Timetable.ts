import { Student } from "../student/Student";

export type Timetable = {
  content: string | null;
  createdAt: Date;
  id: string;
  student?: Student | null;
  updatedAt: Date;
};
