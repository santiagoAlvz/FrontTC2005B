import styled from 'styled-components';
import { colors } from './Theme.js';

export const StyledPage = styled.body`
  

    nav {
        width: 15%;
        float: left;
    }

    header {
        text-align: right;
        color: ${colors.black};
        padding: 10px 10px;
    }

    div {
        display: flex;
        flex-direction: column;
        align-self: center;
        text-align: center;
        width: 85%;
        float: right;
    }

`;