
import { Suspense } from "react";
import { Route } from "react-router-dom";
import { AboutPageAsync } from "pages/About/AboutPage.async.js";
import { SharedLayout } from "pages/SharedLayout/SharedLayout";
import { LandingPage } from "pages/Landing/LandingPage";
import { SigninPageAsync } from "pages/Signin/SigninPage.async";
import { SignupPageAsync } from "pages/Signup/SignupPage.async";
import { ClinicPageAsync } from "pages/Clinic/ClinicPage.async";
import { ClinicsPageAsync } from "pages/Clinics/ClinicsPage.async";
import { DoctorPageAsync } from "pages/Doctor/DoctorPage.async";
import { DoctorsPageAsync } from "pages/Doctors/DoctorsPage.async";
import { AdminDashboardAsync } from "pages/AdminDashboard/AdminDashboard.async";
import { AdminSharedLayout } from "pages/AdminSharedLayout/AdminSharedLayout";
import { DoctorSignPageAsync } from "pages/DoctorSingUp/DoctorSignPage.async";
import { ErrorPage } from "pages/Error/ErrorPage";
import { ProtectedRouteAdmin } from "./ProtectedRoutes";


export const Root = (
  <>
    <Route path="/" element={<SharedLayout />}>
      <Route index element={<LandingPage/>} />
      <Route
        path="about"
        element={<AboutPageAsync />}
        fallbackElement={<div>AAAA</div>}
      />
      <Route path="account/signup" element={<SignupPageAsync />} />
      <Route path="account/signin" element={<SigninPageAsync />} />
      <Route path="api/clinics" element={<ClinicPageAsync />}>
        <Route path=":clinicId" element={<ClinicsPageAsync />} />
      </Route>
      <Route path="api/doctors" element={<DoctorsPageAsync />}>
        <Route path=":doctorId" element={<DoctorPageAsync />} />
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
      <Route index element={<AdminDashboardAsync />} />
    </Route>
    <Route path="/account/doctor/singup" element={<DoctorSignPageAsync />} />
  </>
);
