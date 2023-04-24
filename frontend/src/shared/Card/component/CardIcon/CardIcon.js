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

