import styled from 'styled-components';
import { colors } from './Theme.js';

export const Navbar = styled.nav`

    text-decoration: none;
    position: fixed;
    width: 200px;
    height: 100%;
    background-color: ${colors.black};
    left: 0px;
    top:  0px;

    ul > li {
        text-align: left;
        padding: 15px 10px;
        list-style: none;
        list-style-type: none;
    }
`;