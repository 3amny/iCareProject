import styled from "styled-components";

const Wrapper = styled.main`
  .banner{
    max-width: 80%;
  }
  .banner-error {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
  }
 
  @media screen and (max-width: 45rem){
    img{
      max-width: 100%;
    }
    .banner-error {
    text-align: center;
    }
    h2{
      font-size: 5vw;
    }
    p{
      font-size: 3vw;
    }
  }
`;


export default Wrapper;
