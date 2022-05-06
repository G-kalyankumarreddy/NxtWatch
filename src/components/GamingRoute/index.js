import {Component} from 'react'
import Cookies from 'js-cookie'

import {SiYoutubegaming} from 'react-icons/si'

import Header from '../Header'
import {Sidebar} from '../Sidebar'
import LoadingView from '../Loader'
import GamingVideoItem from '../GamingVideoItem'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  GamingVideosPageContainer,
  FailureViewContainer,
  FailureViewImage,
  FailureViewTitle,
  FailureViewDescription,
  FailureViewButton,
  BannerAndGamingVideosContainer,
  BannerContainer,
  GamingVideosListContainer,
  GamingVideosIconContainer,
  GamingVideosHeading,
} from './styledComponents'

const gamingApiConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
  success: 'SUCCESS',
}

class GamingVideos extends Component {
  state = {gamingVideosList: [], gamingApiStatus: gamingApiConstants.initial}

  componentDidMount() {
    this.fetchGamingVideos()
  }

  onClickRetryButton = () => {
    this.onClickRetryButton()
  }

  updateGamingVideosDataFormat = gamingVideo => ({
    id: gamingVideo.id,
    thumbnailUrl: gamingVideo.thumbnail_url,
    title: gamingVideo.title,
    viewCount: gamingVideo.view_count,
  })

  fetchGamingVideos = async () => {
    this.setState({gamingApiStatus: gamingApiConstants.inProgress})
    const token = Cookies.get('jwt_token')
    const gamingVideosApiUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const response = await fetch(gamingVideosApiUrl, options)
    if (response.ok) {
      const data = await response.json()

      const updatedGamingVideoDataFormat = data.videos.map(each =>
        this.updateGamingVideosDataFormat(each),
      )

      this.setState({
        gamingApiStatus: gamingApiConstants.success,
        gamingVideosList: updatedGamingVideoDataFormat,
      })
    } else {
      this.setState({gamingApiStatus: gamingApiConstants.failure})
    }
  }

  gamingVideosLoadingView = () => <LoadingView />

  gamingFailureView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value
        const failureImage = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        return (
          <FailureViewContainer bgColor={isDark}>
            <FailureViewImage src={failureImage} alt="failure view" />
            <FailureViewTitle fontColor={isDark}>
              Oops! Something Went Wrong
            </FailureViewTitle>
            <FailureViewDescription>
              We are having some trouble to complete your request. Please try
              again.
            </FailureViewDescription>
            <FailureViewButton onClick={this.onClickRetryButton}>
              Retry
            </FailureViewButton>
          </FailureViewContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  gamingVideosSuccessView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value
        const {gamingVideosList} = this.state
        return (
          <BannerAndGamingVideosContainer>
            <BannerContainer bgColor={isDark}>
              <GamingVideosIconContainer bgColor={isDark}>
                <SiYoutubegaming />
              </GamingVideosIconContainer>
              <GamingVideosHeading fontColor={isDark}>
                Gaming Videos
              </GamingVideosHeading>
            </BannerContainer>
            <GamingVideosListContainer>
              {gamingVideosList.map(each => (
                <GamingVideoItem key={each.id} gamingVideo={each} />
              ))}
            </GamingVideosListContainer>
          </BannerAndGamingVideosContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  gamingVideosPageViews = () => {
    const {gamingApiStatus} = this.state
    switch (gamingApiStatus) {
      case gamingApiConstants.inProgress:
        return this.gamingVideosLoadingView()
      case gamingApiConstants.failure:
        return this.gamingVideosLoadingView()
      case gamingApiConstants.success:
        return this.gamingVideosSuccessView()
      default:
        return null
    }
  }

  renderGamingVideosPage = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <>
            <Header />
            <GamingVideosPageContainer bgColor={isDark} data-testid="gaming">
              <Sidebar />
              {this.gamingVideosPageViews()}
            </GamingVideosPageContainer>
          </>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  render() {
    return this.renderGamingVideosPage()
  }
}

export default GamingVideos
