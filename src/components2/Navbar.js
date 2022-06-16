import styled from 'styled-components';
import { colors } from './Theme.js';

export const Navbar = styled.nav`
    position: fixed;
    height: 100%;
    background-color: ${colors.black};

    ul > li {
        text-align: left;
        padding: 10px 10px;
        list-style-type: none;
        width: 100%;
        
        margin-bottom: 5px;
        background: ${colors.blue};
        border-radius: 15px;
        text-align: center;
    }

    a{
        cursor: pointer;
        font-size: 1em;
        color: ${colors.white};
        text-decoration: none; 
        
    }

    a:hover{
        color: ${colors.orange};
    }
`;