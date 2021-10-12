import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.15rem solid var(--lightDark);
  border-color: var(--lightDark);
  color: var(--lightDark);
  border-radius: 0.5rem;
  padding: 0.3rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.35s ease-in-out;
  &:hover {
    background: var(--mainDark);
    color: var(--mainWhite);
  }
`;
