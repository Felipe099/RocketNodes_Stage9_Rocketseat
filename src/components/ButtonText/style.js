import styled from 'styled-components';

export const Container = styled.button`
    background: none;
    border: none;

    color: ${({ theme, $isactive }) =>
        $isactive ? theme.COLORS.GRAY_100 : theme.COLORS.ORANGE};

    font-size: 16px;
`;
