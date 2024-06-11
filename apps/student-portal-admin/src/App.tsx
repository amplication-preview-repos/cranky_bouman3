import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { StudentList } from "./student/StudentList";
import { StudentCreate } from "./student/StudentCreate";
import { StudentEdit } from "./student/StudentEdit";
import { StudentShow } from "./student/StudentShow";
import { PaymentList } from "./payment/PaymentList";
import { PaymentCreate } from "./payment/PaymentCreate";
import { PaymentEdit } from "./payment/PaymentEdit";
import { PaymentShow } from "./payment/PaymentShow";
import { LessonList } from "./lesson/LessonList";
import { LessonCreate } from "./lesson/LessonCreate";
import { LessonEdit } from "./lesson/LessonEdit";
import { LessonShow } from "./lesson/LessonShow";
import { AdmissionLetterList } from "./admissionLetter/AdmissionLetterList";
import { AdmissionLetterCreate } from "./admissionLetter/AdmissionLetterCreate";
import { AdmissionLetterEdit } from "./admissionLetter/AdmissionLetterEdit";
import { AdmissionLetterShow } from "./admissionLetter/AdmissionLetterShow";
import { TimetableList } from "./timetable/TimetableList";
import { TimetableCreate } from "./timetable/TimetableCreate";
import { TimetableEdit } from "./timetable/TimetableEdit";
import { TimetableShow } from "./timetable/TimetableShow";
import { AcceptanceLetterList } from "./acceptanceLetter/AcceptanceLetterList";
import { AcceptanceLetterCreate } from "./acceptanceLetter/AcceptanceLetterCreate";
import { AcceptanceLetterEdit } from "./acceptanceLetter/AcceptanceLetterEdit";
import { AcceptanceLetterShow } from "./acceptanceLetter/AcceptanceLetterShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"StudentPortal"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Student"
          list={StudentList}
          edit={StudentEdit}
          create={StudentCreate}
          show={StudentShow}
        />
        <Resource
          name="Payment"
          list={PaymentList}
          edit={PaymentEdit}
          create={PaymentCreate}
          show={PaymentShow}
        />
        <Resource
          name="Lesson"
          list={LessonList}
          edit={LessonEdit}
          create={LessonCreate}
          show={LessonShow}
        />
        <Resource
          name="AdmissionLetter"
          list={AdmissionLetterList}
          edit={AdmissionLetterEdit}
          create={AdmissionLetterCreate}
          show={AdmissionLetterShow}
        />
        <Resource
          name="Timetable"
          list={TimetableList}
          edit={TimetableEdit}
          create={TimetableCreate}
          show={TimetableShow}
        />
        <Resource
          name="AcceptanceLetter"
          list={AcceptanceLetterList}
          edit={AcceptanceLetterEdit}
          create={AcceptanceLetterCreate}
          show={AcceptanceLetterShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
