import React from "react";
import Wrapper from "./Wrapper";
const AdminUsersPage = () => {
  return (
    <Wrapper>
      <div className="container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Address</th>
              <th>Date of Birth</th>
              <th>Role</th>
              <th>Appointment</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>John</td>
              <td>Doe</td>
              <td>john.doe@example.com</td>
              <td>(123) 456-7890</td>
              <td>123 Main St, Anytown USA</td>
              <td>01/01/1980</td>
              <td>Doctor</td>
              <td>12/31/2023 10:00AM</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jane</td>
              <td>Smith</td>
              <td>jane.smith@example.com</td>
              <td>(234) 567-8901</td>
              <td>456 Second St, Othertown USA</td>
              <td>02/02/1990</td>
              <td>Nurse</td>
              <td>01/15/2024 02:30PM</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Wrapper>
  );
};

export default AdminUsersPage;
