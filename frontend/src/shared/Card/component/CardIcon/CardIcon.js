import styled from "styled-components";

export const CardIcon = ({ items }) => {
  return (
    <div className="card">
      {items.map((item) => {
        return (
          <div key={item.id} className="card-container">
            <div className="card-icon">{item.icon}</div>
            <div className="card-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const Wrapper = styled.div`
  
  .card-container {
    padding: 20px 30px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    text-align: start;
    background: white;
  }

  .card-icon {
    font-size: 30px;
  }
  .card-content {
    h3 {
      font-size: 16px;
      font-weight: 700;
    }
    p {
      color: var(--fontSmColor);
      font-size: 14px;
    }
  }
`;
