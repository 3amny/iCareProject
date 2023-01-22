import { BrowserRouter, Route, Routes } from "react-router-dom";

import {
  Landing,
  SingleDoctor,
  SingleClinic,
  Clinics,
  Error,
  Doctors,
  About,
} from "./pages";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}>
          <Route path="about" element={<About />} />
          <Route path="*" element={<Error />} />
          <Route path="api/clinics" element={<Clinics />} />
          <Route path="api/doctors" element={<Doctors />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
