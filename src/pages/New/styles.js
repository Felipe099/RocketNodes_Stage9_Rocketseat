import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 105px auto;

    grid-template-areas:
        'header'
        'content';

    > main {
        grid-area: content;
        overflow-y: auto;
        padding: 64px 0;
    }
`;

export const Form = styled.form`
    max-width: 800px;
    margin: 38px auto;

    > header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        margin-bottom: 36px;

        a {
            font-size: 20px;
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }
    }

    .tags {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
`;
