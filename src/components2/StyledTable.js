import styled from 'styled-components';
import { colors } from './Theme.js';

export const StyledTable = styled.table `
    margin: auto;
    border-collapse: collapse;
    background-color: ${colors.white};
    border-radius: 15px;
    
    thead > tr {
        border-bottom: 2px solid ${colors.black};
        color: ${colors.blue};
        
    }

    tbody > tr {
        border-bottom: 1px solid ${colors.lightGray};
        
    }

    th, td {
        text-align: center;
        padding: 5px;

        input, textarea, select {
            background-color: ${colors.lightBlue};
            border-style:  solid;
            border-color:  ${colors.lightBlue};
            text-align: center;
            border-radius: 15px;
            height: 30px;
            width: 100%;
            margin-bottom: 10px;  
        }
    }
`;