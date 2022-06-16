import styled from 'styled-components';
import { colors } from './Theme.js';

export const StyledTable = styled.table `
    margin: auto;
    border-collapse: collapse;
    //background-color: ${colors.blue};
    //border: 2px solid black;
    
    thead > tr {
        border-bottom: 2px solid black;
    }

    tbody > tr {
        //border: 2px solid black;
    }

    th, td {
        //border: 2px solid black;
        text-align: center;
        padding: 15px;
    }

`;