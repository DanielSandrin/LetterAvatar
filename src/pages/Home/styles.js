import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Card = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;

  width: 50%;
  height: 30%;
  padding: 10px 15px; 
  background: #1A202C;
  border-radius: 5px;
  box-shadow: 0 0 1em black;
  gap: 10%;
`;
