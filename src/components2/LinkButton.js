import styled from 'styled-components';
import { colors } from './Theme.js';

export const LinkButton = styled.a`
    padding: 10px;
    color: ${colors.orange};

    &:hover {
        color: ${colors.purple};
    }
`;