import styled from 'styled-components';

export const Loading = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    font-size: 3em;
    color: var(--primary);
    animation-name: gradienteDeCor;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-timing-function: ease-in;

    @keyframes gradienteDeCor {
        from {
            color: var(--primary);
        }
        to {
            color: var(--white);
        }
    }

`;

export const LoadingLogo = styled.img`
    scale: 1.5;
    animation-name: animaLogo;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-timing-function: ease-in;

    @keyframes animaLogo {
        0% {
            opacity: 0%;
        }
        100% {
            opacity: 100%;
        }
    }
`;
