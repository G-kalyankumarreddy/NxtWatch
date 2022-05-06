import styled from 'styled-components'

export const GamingListItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: transparent;
  width: 50%;
  @media screen and (min-width: 576px) {
    width: 32%;
  }
`

export const GameImage = styled.img`
  width: 100%;
`

export const GameTitle = styled.h1`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 10px;
  color: ${props => (props.fontColor ? '#f8fafc' : '#1e293b')};
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`

export const GameViews = styled.p`
  font-family: 'Roboto';
  margin-top: 0px;
  font-size: 17px;
  color: #64748b;
`
