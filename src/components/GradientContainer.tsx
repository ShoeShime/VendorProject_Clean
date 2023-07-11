import styled from 'styled-components'

export const GradientContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    background-image: linear-gradient(
        130deg,
        hsl(257deg 42% 13%) 35%,
        hsl(216deg 51% 17%) 76%,
        hsl(201deg 55% 19%) 87%,
        hsl(192deg 37% 23%) 93%,
        hsl(178deg 19% 29%) 96%,
        hsl(155deg 9% 37%) 98%,
        hsl(177deg 19% 29%) 99%,
        hsl(190deg 40% 22%) 99%,
        hsl(197deg 71% 17%) 99%,
        hsl(207deg 82% 14%) 100%,
        hsl(233deg 52% 13%) 100%
    );
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

