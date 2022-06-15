import styled from 'styled-components';
import { colors } from './Theme.js';

export const Button = styled.button `
   background: ${colors.blue};
   cursor: pointer;
   font-size: 1em;
   margin: 2em;
   padding: 10px 12px;
   border: 2px solid ${colors.blue};
   border-radius: 15px;
   color: ${colors.white};

   &:hover {
    background: ${colors.darkBlue};
    border: 2px solid ${colors.darkBlue};
   }
`;

