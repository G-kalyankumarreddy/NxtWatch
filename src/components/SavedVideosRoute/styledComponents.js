import styled from 'styled-components'

export const SavedVideosPageContainer = styled.div`
  background-color: ${props => (props.bgColor ? '#0f0f0f' : '#f9f9f9')};
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
`

export const NoSavedVideosContainer = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const NoSavedVideosImage = styled.img`
  width: 80%;
  @media screen and (min-width: 576px) {
    width: 60%;
  }
`

export const NoSavedVideosFound = styled.h1`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 800;
  margin-top: 15px;
  margin-bottom: 12px;
  color: ${props => (props.fontColor ? '#ffffff' : '#231f20')};
  @media screen and (min-width: 576px) {
    font-size: 24px;
  }
`

export const NoSavedVideosDescription = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => (props.fontColor ? '#f4f4f4' : '#313131')};
  @media screen and (min-width: 576px) {
    font-size: 16px;
  }
`
export const BannerAndSavedVideosContainer = styled.div`
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
export const SavedVideosIconContainer = styled.div`
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

export const SavedVideosHeading = styled.h1`
  font-family: 'Roboto';
  align-self: center;
  font-size: 18px;
  font-weight: 900;
  color: ${props => (props.fontColor ? '#ffffff' : '#212121')};
  @media screen and (min-width: 576px) {
    font-size: 30px;
  }
`
export const SavedVideosListContainer = styled.ul`
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
