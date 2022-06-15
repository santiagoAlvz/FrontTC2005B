import styled from 'styled-components';
import { colors } from './Theme.js';

export const StyledHome = styled.body`
  text-align: center;
  background-color: ${colors.blue};
  display: flex;
  align-items: center;
  padding: 150px;

  h1 {
    font-weight: 800;
    color: ${colors.black};
    font-size: 2rem;
  }

  div {
    display: flex;
    flex-direction: column;
    padding:  20px;
    align-self: center;
    background-color: ${colors.white};
    border-radius: 50px;
    margin: auto;
    width: 50%;
  }

`;