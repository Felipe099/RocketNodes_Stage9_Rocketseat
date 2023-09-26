import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    > header {
        width: 100%;
        height: 144px;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

        display: flex;
        align-items: center;

        padding: 0 124px;

        svg {
            font-size: 24px;
            color: ${({ theme }) => theme.COLORS.WHITE};
        }

        button {
            background: none;
            border: none;
        }
    }
`;

export const Form = styled.form`
    max-width: 340px;

    margin: 0 auto 32px;

    > div:nth-child(4) {
        margin-top: 24px;
    }
`;

export const Avatar = styled.div`
    position: relative;
    margin: -90px auto 32px;

    width: 186px;
    height: 186px;

    img {
        width: 186px;
        height: 186px;

        border-radius: 50%;
    }

    label {
        width: 48px;
        height: 48px;

        position: absolute;
        bottom: 7px;
        right: 7px;

        border-radius: 50%;
        background-color: ${({ theme }) => theme.COLORS.ORANGE};

        display: flex;
        align-items: center;
        justify-content: center;

        cursor: pointer;
    }

    svg {
        width: 20px;
        height: 20px;

        color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }

    input {
        display: none;
    }
`;
