import styled from 'styled-components';
import { colors } from './Theme.js';

export const EntryContainer = styled.div`

    label {
        color: ${colors.black};     
    }

    span {
        color: ${colors.red};
    }

    input, textarea {
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
        margin-bottom: 20px;
        color: ${colors.red};
    }

    form {
        display: flex;
        align-items: left;
        justify-content: left;
        border-radius: 1px;
        margin-bottom: 20px;
        margin-top: 10px;
    }

    label-radio {
        position: relative;
        padding-left: 30px;
        display: inline-block;
        line-height: 1.6;
        margin-right: 15px;
    }       
`;