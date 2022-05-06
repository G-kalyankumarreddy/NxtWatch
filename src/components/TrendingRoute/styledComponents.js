import styled from 'styled-components'

export const TrendingVideosPageContainer = styled.div`
  background-color: ${props => (props.bgColor ? '#0f0f0f' : '#f9f9f9')};
  display: flex;
  flex-direction: row;
  height: 100vh;
`
export const FailureViewContainer = styled.div`
  background-color: ${props => (props.bgColor ? ' #181818' : '#f9f9f9')};
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const FailureViewImage = styled.img`
  width: 50%;
  @media screen and (min-width: 768px) {
    width: 30%;
  }
`

export const FailureViewTitle = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  margin-bottom: 15px;
  color: ${props => (props.fontColor ? '#f1f5f9' : `#181818`)};
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`

export const FailureViewDescription = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: #94a3b8;
  text-align: center;
  margin-top: 0px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

export const FailureViewButton = styled.button`
  font-family: 'Roboto';
  font-size: 12px;
  color: #f1f1f1;
  background-color: #4f46e5;
  width: 80px;
  height: 30px;
  border-radius: 5px;
  border: none;
  @media screen and (min-width: 768px) {
    width: 100px;
    height: 40px;
    font-size: 15px;
  }
`
export const TrendingVideosListContainer = styled.ul`
  margin-top: 0px;
  padding-left: 10px;
  width: 100%;
  overflow-y: auto;
  @media screen and (min-width: 768px) {
    width: 70%;
    padding-left: 20px;
  }
  @media screen and (min-width: 1200px) {
    width: 60%;
  }
`

export const BannerAndTrendingVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 0px;
`

export const BannerContainer = styled.div`
  background-color: ${props => (props.bgColor ? '#383838' : '#e2e8f0')};
  width: 100%;
  margin-bottom: 0px;
  margin-top: 0px;
  display: flex;
  flex-direction: row;
  @media screen and (min-width: 768px) {
    width: 70%;
  }
  @media screen and (min-width: 1200px) {
    width: 60%;
  }
`
export const TrendingVideosIconContainer = styled.div`
  background-color: ${props => (props.bgColor ? '#000000' : '#cbd5e1')};
  display: flex;
  font-size: 30px;
  color: #ff0000;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 60px;
  border-radius: 40px;
  margin: 10px;
  @media screen and (min-width: 768px) {
    margin: 20px;
    height: 80px;
    width: 80px;
    font-size: 40px;
  }
`

export const TrendingVideosHeading = styled.h1`
  font-family: 'Roboto';
  align-self: center;
  font-size: 18px;
  font-weight: 900;
  color: ${props => (props.fontColor ? '#ffffff' : '#212121')};
  @media screen and (min-width: 576px) {
    font-size: 30px;
  }
`
