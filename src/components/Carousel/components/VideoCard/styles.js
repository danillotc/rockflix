import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  border: 2px solid;
  border-color: ${props => props.primaryColor};
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-color: ${props => props.primaryColor};
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: flex-end;

  transition: border-color .3s, box-shadow .3s, background-color .3s;
  &:hover,
  &:focus {
    border-color: var(--primary);
    box-shadow: 0px 0px 10px yellow inset;
    background-color: var(--primary)
  }

  &:not(:first-child) {
    margin-left: 20px;
  }

`;
