import styled from 'styled-components';
import { colors } from './Theme.js';

export const StyledLayout = styled.section`
    margin-left: 250px;
    padding: 10px;

    header {
        text-align: right;
        font-weight: bold;
        padding: 2em;
    }

    div-dash {
        padding-left: 220px;
    }

    h1 {
        font-weight: 800;
        color: ${colors.black};
        font-size: 2rem;
    }

    table {
        margin: auto;
        border-collapse: collapse;
        thead > tr {
            border-bottom: 2px solid black;
        }

        thead > th {
            padding: 0.5em;
        }
    }

    p {

    }

`;