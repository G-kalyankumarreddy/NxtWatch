import {Component} from 'react'
import Cookies from 'js-cookie'
import {HiFire} from 'react-icons/hi'

import Header from '../Header'
import {Sidebar} from '../Sidebar'
import LoadingView from '../Loader'
import SavedVideoListItem from '../SavedVideoItem'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  TrendingVideosPageContainer,
  FailureViewContainer,
  FailureViewImage,
  FailureViewTitle,
  FailureViewDescription,
  FailureViewButton,
  BannerAndTrendingVideosContainer,
  TrendingVideosListContainer,
  BannerContainer,
  TrendingVideosIconContainer,
  TrendingVideosHeading,
} from './styledComponents'

const trendingApiConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
  success: 'SUCCESS',
}

class TrendingVideos extends Component {
  state = {
    trendingVideosList: [],
    trendingApiStatus: trendingApiConstants.initial,
  }

  componentDidMount() {
    this.fetchTrendingVideos()
  }

  updateTrendingVideosDataFormat = trendingVideo => ({
    channel: {
      name: trendingVideo.channel.name,
      profileImageUrl: trendingVideo.channel.profile_image_url,
    },
    publishedAt: trendingVideo.published_at,
    thumbnailUrl: trendingVideo.thumbnail_url,
    title: trendingVideo.title,
    viewCount: trendingVideo.view_count,
  })

  fetchTrendingVideos = async () => {
    this.setState({trendingApiStatus: trendingApiConstants.inProgress})
    const token = Cookies.get('jwt_token')
    const trendingVideoApiUrl = 'https://apis.ccbp.in/videos/trending'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }

    const response = await fetch(trendingVideoApiUrl, options)

    if (response.ok) {
      const data = await response.json()
      console.log(data)
      const updatedTrendingVideosDataFormat = data.videos.map(eachVideo =>
        this.updateTrendingVideosDataFormat(eachVideo),
      )
      this.setState({
        trendingVideosList: updatedTrendingVideosDataFormat,
        trendingApiStatus: trendingApiConstants.success,
      })
    } else {
      this.setState({trendingApiStatus: trendingApiConstants.failure})
    }
  }

  onClickRetryButton = () => {
    this.fetchTrendingVideos()
  }

  trendingVideosLoadingView = () => <LoadingView />

  trendingVideosFailureView = () => (
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

  trendingVideosSuccessView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value
        const {trendingVideosList} = this.state
        return (
          <BannerAndTrendingVideosContainer>
            <BannerContainer bgColor={isDark}>
              <TrendingVideosIconContainer bgColor={isDark}>
                <HiFire />
              </TrendingVideosIconContainer>
              <TrendingVideosHeading fontColor={isDark}>
                Trending Videos
              </TrendingVideosHeading>
            </BannerContainer>
            <TrendingVideosListContainer>
              {trendingVideosList.map(each => (
                <SavedVideoListItem key={each.id} savedVideo={each} />
              ))}
            </TrendingVideosListContainer>
          </BannerAndTrendingVideosContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  trendingVideosPageViews = () => {
    const {trendingApiStatus} = this.state
    switch (trendingApiStatus) {
      case trendingApiConstants.inProgress:
        return this.trendingVideosLoadingView()
      case trendingApiConstants.failure:
        return this.trendingVideosFailureView()
      case trendingApiConstants.success:
        return this.trendingVideosSuccessView()
      default:
        return null
    }
  }

  renderTrendingVideosPage = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value

        return (
          <>
            <Header />
            <TrendingVideosPageContainer
              data-testid="trending"
              bgColor={isDark}
            >
              <Sidebar />
              {this.trendingVideosPageViews()}
            </TrendingVideosPageContainer>
          </>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  render() {
    return this.renderTrendingVideosPage()
  }
}

export default TrendingVideos
