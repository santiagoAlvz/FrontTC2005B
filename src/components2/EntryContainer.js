import styled from 'styled-components';
import { colors } from './Theme.js';

export const EntryContainer = styled.div`

    label {
        color: ${colors.black};        
    }

    span {
        color: ${colors.red};
    }

    input {
        background-color: ${colors.lightBlue};
        border-style:  solid;
        border-color:  ${colors.lightBlue};
        text-align: center;
        border-radius: 15px;
        height: 30px;
        width: 100%;
        margin-bottom: 10px;       
    }

    p {
        margin-top: 0;
        margin-bottom: 0;
        color: ${colors.red};
    }
`;