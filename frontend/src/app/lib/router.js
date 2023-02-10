import {
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Route } from "react-router-dom";
import { LandingPage } from "../../pages/Landing";
import { AboutPage } from "../../pages/About";
import { ErrorPage } from "../../pages/Error";
import { SignupPage } from "../../pages/SignUp";
import { SigninPage } from "../../pages/SignIn";
import { ClinicsPage } from "../../pages/Clinics";
import { ClinicPage } from "../../pages/Clinic";
import { DoctorsPage } from "../../pages/Doctors";
import { DoctorPage } from "../../pages/Doctor";
import { SharedLayout } from "../../pages/SharedLayout";
import { AdminSharedLayout } from "../../pages/AdminSharedLayout";
import { AdminDashboard } from "../../pages/AdminDashboard";
import { DoctorSignUp } from "../../pages/DoctorSingUp";
import { ProtectedRouteAdmin } from "./ProtectedRoutes";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="account/signup" element={<SignupPage />} />
        <Route path="account/signin" element={<SigninPage />} />
        <Route path="api/clinics" element={<ClinicsPage />}>
          <Route path=":clinicId" element={<ClinicPage />} />
        </Route>
        <Route path="api/doctors" element={<DoctorsPage />}>
          <Route path=":doctorId" element={<DoctorPage />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Route>

      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRouteAdmin>
            <AdminSharedLayout />
          </ProtectedRouteAdmin>
        }
      >
        <Route index element={<AdminDashboard />} />
      </Route>
      <Route path="/account/doctor/singup" element={<DoctorSignUp />} />
    </>
  )
);
