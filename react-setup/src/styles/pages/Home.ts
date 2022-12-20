import styled from "styled-components";

export const Containter = styled.div`
width: 100vw;
heigth: 100vh;

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

h1 {
  font-size: flex;
  color: ${props => props.theme.colors.primary});
  margin-top: 40px;
}

p {
  margin-top: 24px;
  font-size: 24px;
  line-heigth: 32px;
}

`

