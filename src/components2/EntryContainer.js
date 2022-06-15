import styled from 'styled-components';
import { colors } from './Theme.js';

export const EntryContainer = styled.div`

    label {
        
    }

    span {
        color: ${colors.red};
    }

    input {
        background-color: ${colors.lightGray};
        border-style:  solid;
        border-color:  ${colors.gray};
        text-align: center;
        border-radius: 15px;
        height: 30px;
        width: 100%;
       
    }

    p {
        margin-top: 0;
        margin-bottom: 0;
        color: ${colors.red};
    }
`;