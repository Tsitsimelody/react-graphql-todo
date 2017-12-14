import styled from "styled-components";

const Button = styled.button`
  background: #31c2f3;
  color: white;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  outline: none;
  padding: 2px 10px;
  transition: all 300ms ease;
  &:hover {
    background: #197796;
  }
`;

export default Button;
