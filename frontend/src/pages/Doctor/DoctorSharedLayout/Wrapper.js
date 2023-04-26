import styled from "styled-components";

const Wrapper = styled.div`
  main {
    position: absolute;
    height: 100% !important;
    width: calc(100% - 80px);
    left: 80px;
    transition: all 0.5s ease;
  }
  aside.active ~ main{
    width: calc(100% - 250px);
    left: 250px;
  }
`;

export default Wrapper;

