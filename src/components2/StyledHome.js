import styled from 'styled-components';
import { colors } from './Theme.js';

export const StyledHome = styled.body`
  text-align: center;
  background-color: ${colors.blue};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 125px;

  div-home {
    display: flex;
    flex-direction: column;
    padding:  30px;
    align-self: center;
    background-color: ${colors.white};
    border-radius: 50px;
    margin: auto;
    width: 50%;
  }

  img {
    width: 10%;
    height: 10%;
    border-radius: 150px;
    padding: 20px;
  }

`;