import styled from 'styled-components';

const VideosList = styled.table`
    border-collapse: collapse;
    margin-bottom: 2rem;
    padding: 0;
    width: 100%;

    caption {
        font-weight: bold;
        padding-top: 1rem;
        padding-bottom: 2rem;
    }

    td, th {
        border: 1px solid var(--white);
        border-color: var(--primary);
        padding: 5px;
        text-align: center;
    }
`;

export default VideosList;
