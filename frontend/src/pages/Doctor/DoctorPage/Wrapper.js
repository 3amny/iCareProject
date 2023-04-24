import styled from "styled-components";

const Wrapper = styled.main`
  .main-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: clamp(160px, 5vw, 200px);
    aspect-ratio: 1 / 1;
    overflow: hidden;
    background: var(--primary-500);
    border-radius: var(--borderRadius);
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--white);
  }

  .main-icon span {
    color: white;
    font-size: 18px;
    font-weight: bold;
  }
  p {
    margin: 5px 0;
    span {
      font-weight: bold;
    }
  }
  .doc-details {
    h4 {
      margin-bottom: 0;
      font-weight: bold;
    }
  }
  .doc-image {
    grid-area: image;
    display: flex;

    padding: 1rem 0;
  }
  .checkbox {
    display: flex;
    align-items: center;
    p {
      margin-top: 0px;
      margin-bottom: 0px;
      margin-right: 6px;
    }
    input[type="checkbox"] {
      vertical-align: middle;
    }
  }

  .profile {
    display: grid;
    align-items: center;
    grid-template-columns: 20% 40% 40%;
    row-gap: 40px;
    column-gap: 20px;
    grid-template-areas:
      "image details appointment"
      "image details appointment"
      "overview overview overview";
    margin-bottom: 40px;
  }
  .doc-details {
    grid-area: details;
  }
  .doc-overview {
    grid-area: overview;
  }
  .doc-appointment {
    grid-area: appointment;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .link {
    padding: 0.8rem 0.8rem;
    background: var(--primary-700);
  }

  @media screen and (max-width: 45em) {
    .profile {
      display: grid;
      align-items: center;
      grid-template-columns: repeat(2, 1fr);
      grid-template-areas:
        "image details "
        "image details "
        "appointment appointment"
        "overview overview ";
    }
  }


`;

export default Wrapper;
