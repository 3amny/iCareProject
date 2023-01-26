import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import {
  Landing,
  SingleDoctor,
  SingleClinic,
  Clinics,
  Error,
  Doctors,
  About,
  SharedLayout,
} from "./pages";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Landing />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Error />} />
          <Route path="api/clinics" element={<Clinics />} />
          <Route path="api/clinics/:clinicId" element={<SingleClinic />} />
          <Route path="api/doctors" element={<Doctors />} />
          <Route path="api/doctors/:doctorId" element={<SingleDoctor />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
