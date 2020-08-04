import styled from 'styled-components';

const Loading = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3em;
    color: var(--primary);
    animation-name: gradienteDeCor;
    animation-duration: .8s;
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

export default Loading;
