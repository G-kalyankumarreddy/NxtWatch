import styled from 'styled-components'

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  background-color: ${props => (props.bgColor ? ' #181818' : '#f9f9f9')};
`
export const HomePageBannerAndVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;

  flex-grow: 3;
`

export const HomeBannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 30px;
`

export const BannerDetails = styled.div`
  display: flex;
  flex-direction: column;
`

export const BannerLogo = styled.img`
  width: 150px;
`
export const BannerDescription = styled.p`
  font-family: 'Roboto';
  font-size: 24px;
  color: #1e293b;
`

export const BannerButton = styled.button`
  background-color: transparent;
  border: 2px solid #1e293b;
  color: #1e293b;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 16px;
  width: 120px;
  height: 36px;
`

export const BannerCloseButton = styled.button`
  color: #1e293b;
  border: none;
  background-color: transparent;
  font-size: 16px;
  align-self: flex-start;
`

export const SearchInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #94a3b8;
  width: 100%;
  height: 30px;
  margin-top: 15px;
  margin-left: 15px;
  border-radius: 5px;
  @media screen and (min-width: 576px) {
    width: 60%;
  }
  @media screen and (min-width: 768px) {
    width: 40%;
  }
`
export const SearchInput = styled.input`
  padding-left: 10px;
  outline: none;
  border: none;
  color: ${props => (props.fontColor ? '#f1f5f9' : '#475569')};
  width: 100%;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  background-color: transparent;
`
export const SearchButton = styled.button`
  border-left: 1px solid #94a3b8;
  border-top: none;
  border-right: none;
  border-bottom: none;
  font-size: 18px;
  padding-top: 5px;
  text-align: center;
  width: 70px;
  height: 28px;
  outline: none;
  margin-left: auto;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  color: ${props => (props.fontColor ? '#f1f5f9' : '#475569')};
  background-color: ${props => (props.bgColor ? '#212121' : '#ebebeb')};
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
export const VideosList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style-type: none;
  padding-left: 0px;
  overflow-y: scroll;
`
export const NoSearchResultsContainer = styled(FailureViewContainer)``

export const NoSearchResultsImage = styled(FailureViewImage)``

export const NoSearchResultsFoundTitle = styled(FailureViewTitle)``
export const NoSearchResultsDescription = styled(FailureViewDescription)``
