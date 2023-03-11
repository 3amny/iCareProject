import { Route } from "react-router-dom";
import { AboutPageAsync } from "pages/About/AboutPage.async.js";
import { SharedLayout } from "pages/SharedLayout/SharedLayout";
import { LandingPage } from "pages/Landing/LandingPage";
import { SigninPageAsync } from "pages/Signin/SigninPage.async";
import { SignupPageAsync } from "pages/Signup/SignupPage.async";
import { AccountDetailsAsync } from "pages/AccountDetails/AccountDetailsPage.async";
import { ClinicPageAsync } from "pages/Clinic/ClinicPage.async";
import { ClinicsPageAsync } from "pages/Clinics/ClinicsPage.async";
import { DoctorPageAsync } from "pages/Doctor/DoctorPage/DoctorPage.async";
import { DoctorsPageAsync } from "pages/Doctor/Doctors/DoctorsPage.async";
import { AdminDashboardAsync } from "pages/Admin/AdminDashboard/AdminDashboard.async";
import { AdminSharedLayout } from "pages/Admin/AdminSharedLayout/AdminSharedLayout";
import { DoctorSignPageAsync } from "pages/Doctor/DoctorSingUp/DoctorSignPage.async";
import { ErrorPage } from "pages/Error/ErrorPage";
import { ProtectedRouteAdmin } from "./ProtectedRoutes";
import { AdminUsersAsync } from "pages/Admin/AdminUsers/AdminUsersPage.async";
import { AdminUserEditAsync } from "pages/Admin/AdminUserEdit/AdminUserEditPage.async";

export const Root = (
  <>
    <Route path="/" element={<SharedLayout />}>
      <Route index element={<LandingPage />} />
      <Route path="about" element={<AboutPageAsync />} />
      <Route path="account/signup" element={<SignupPageAsync />} />
      <Route path="account/signin" element={<SigninPageAsync />} />
      <Route path="account/details" element={<AccountDetailsAsync />} />
      <Route path="api/clinics" element={<ClinicPageAsync />}>
        <Route path=":clinicId" element={<ClinicsPageAsync />} />
      </Route>
      <Route path="api/doctors" element={<DoctorsPageAsync />}>
        <Route path=":doctorId" element={<DoctorPageAsync />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Route>
    <Route
      path="/admin"
      element={
        <ProtectedRouteAdmin>
          <AdminSharedLayout />
        </ProtectedRouteAdmin>
      }
    >
      <Route index element={<AdminDashboardAsync />} />

      <Route path="users" element={<AdminUsersAsync />} />
      <Route path="users/edit" element={<AdminUserEditAsync />} />
    </Route>
    <Route path="/account/doctor/singup" element={<DoctorSignPageAsync />} />
  </>
);
