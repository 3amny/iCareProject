import {
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Route } from "react-router-dom";
import {
  Landing,
  SingleDoctor,
  SingleClinic,
  Clinics,
  Error,
  Doctors,
  About,
  SharedLayout,
  Signup,
  Login,
} from "../../pages";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<SharedLayout />}>
      <Route index element={<Landing />} />

      <Route path="about" element={<About />} />
      <Route path="account/signup" element={<Signup />} />
      <Route path="account/signin" element={<Login />} />
      <Route path="api/clinics" element={<Clinics />}>
        <Route path=":clinicId" element={<SingleClinic />} />
      </Route>
      <Route path="api/doctors" element={<Doctors />}>
        <Route path=":doctorId" element={<SingleDoctor />} />
      </Route>

      <Route path="*" element={<Error />} />
    </Route>
  )
);
