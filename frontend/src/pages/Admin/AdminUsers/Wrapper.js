import styled from "styled-components";

const Wrapper = styled.main`
  table {
    border-collapse: collapse;
    width: 100%;
  }

  th,
  td {
    border: 1px solid black;
    padding: 8px;
    text-align: left;
  }
  table {
  border-collapse: collapse;
  width: 100%;
}

thead {
  background-color: #f2f2f2;
}

th,
td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  font-weight: bold;
}

tr:hover {
  background-color: #f5f5f5;
}
`;

export default Wrapper;
