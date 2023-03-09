import React, { useState, useMemo } from "react";
import styled from "styled-components";

export const Slider = ({ value, onChange }) => {
  const memoizedSlider = useMemo(
    () => (
      <Wrapper className="switch-container">
        <label className="switch">
          <input type="checkbox" value={value} onChange={onChange} />
          <div className="slider"></div>
        </label>
      </Wrapper>
    ),
    [value, onChange]
  );
  return memoizedSlider;
};

const Wrapper = styled.div`
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
    outline: none;
  }
  .switch input {
    position: absolute;
    top: -99999px;
    left: -99999px;
  }
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 34px;
  }
  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }
  input:checked + .slider {
    background-color: var(--primary-600);
  }
  input:focus + .slider {
    box-shadow: 0 0 1px var(--primary-500);
  }
  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`;
