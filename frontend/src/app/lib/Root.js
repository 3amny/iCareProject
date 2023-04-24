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
import { AdminDoctorsAsync } from "pages/Admin/AdminDoctors/AdminDoctorsPage.async";
import { AdminClinicsAsync } from "pages/Admin/AdminClinics/AdminClinicsPage.async";
import { AdminAddClinicAsync } from "pages/Admin/AdminAddClinic/AdminAddClinicPage.async";
import { AdminDoctorEditAsync } from "pages/Admin/AdminDoctorEdit/AdminDoctorEditPage.async";
import RolesPage from "pages/Admin/Roles/RolesPage";
import { CreateRoleAsync } from "pages/Admin/CreateRole/CreateRolePage.async";
import { SpecialtiesPageAsync } from "pages/Admin/Specialties/SpecialtiesPage.async";
import { CreateSpecialtyAsync } from "pages/Admin/CreateSpecialty/CreateSpecialtyPage.async";

export const Root = (
  <>
    <Route path="/" element={<SharedLayout />}>
      <Route index element={<LandingPage />} />
      <Route path="about" element={<AboutPageAsync />} />
      <Route path="account/signup" element={<SignupPageAsync />} />
      <Route path="account/signin" element={<SigninPageAsync />} />
      <Route path="account/details" element={<AccountDetailsAsync />} />
      <Route path="api/clinics" element={<ClinicsPageAsync />} />
      <Route path="api/clinics/:id" element={<ClinicPageAsync />} />
      <Route path="api/doctors" element={<DoctorsPageAsync />}></Route>
      <Route path="api/doctors/:id" element={<DoctorPageAsync />} />
      <Route path="*" element={<ErrorPage />} />
      <Route path="account/doctor/signup" element={<DoctorSignPageAsync />} />
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
      <Route path="clinics" element={<AdminClinicsAsync />} />
      <Route path="clinics/create" element={<AdminAddClinicAsync />} />
      <Route path="doctors" element={<AdminDoctorsAsync />} />
      <Route path="doctors/edit" element={<AdminDoctorEditAsync />} />
      <Route path="roles" element={<RolesPage />} />
      <Route path="roles/create" element={<CreateRoleAsync />} />
      <Route path="specialties" element={<SpecialtiesPageAsync />} />
      <Route path="specialties/create" element={<CreateSpecialtyAsync />} />
    </Route>
  </>
);
