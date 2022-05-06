import {Component} from 'react'
import Cookies from 'js-cookie'

import {AiOutlineClose} from 'react-icons/ai'
import {MdSearch} from 'react-icons/md'

import Header from '../Header'
import {Sidebar} from '../Sidebar'
import LoadingView from '../Loader'
import VideoItem from '../VideoItem'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  HomePageContainer,
  FailureViewContainer,
  FailureViewImage,
  FailureViewTitle,
  FailureViewDescription,
  FailureViewButton,
  VideosList,
  NoSearchResultsContainer,
  NoSearchResultsImage,
  NoSearchResultsFoundTitle,
  NoSearchResultsDescription,
  HomePageBannerAndVideosContainer,
  HomeBannerContainer,
  BannerDetails,
  BannerLogo,
  BannerDescription,
  BannerButton,
  BannerCloseButton,
  SearchInputContainer,
  SearchInput,
  SearchButton,
} from './styledComponents'

const homeApiConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
  success: 'SUCCESS',
}

class Home extends Component {
  state = {
    searchInput: '',
    searchResultsList: [],
    homeApiStatus: homeApiConstants.initial,
    displayBanner: true,
  }

  componentDidMount() {
    this.fetchHomeVideos()
  }

  updateSearchResultsDataFormat = video => ({
    channel: {
      name: video.channel.name,
      profileImageUrl: video.channel.profile_image_url,
    },
    id: video.id,
    publishedAt: video.published_at,
    thumbnailUrl: video.thumbnail_url,
    title: video.title,
    viewCount: video.view_count,
  })

  fetchHomeVideos = async () => {
    const {searchInput} = this.state
    this.setState({homeApiStatus: homeApiConstants.inProgress})
    const token = Cookies.get('jwt_token')
    const homeVideosApiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const response = await fetch(homeVideosApiUrl, options)
    if (response.ok) {
      const data = await response.json()
      const updatedSearchResultsDataFormat = data.videos.map(each =>
        this.updateSearchResultsDataFormat(each),
      )

      this.setState({
        homeApiStatus: homeApiConstants.success,
        searchResultsList: updatedSearchResultsDataFormat,
      })
    } else {
      this.setState({homeApiStatus: homeApiConstants.failure})
    }
  }

  onClickRetryButton = () => {
    this.fetchHomeVideos()
  }

  HomeFailureView = () => (
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

  HomeLoadingView = () => <LoadingView />

  NoSearchResultsView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <NoSearchResultsContainer bgColor={isDark}>
            <NoSearchResultsImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <NoSearchResultsFoundTitle fontColor={isDark}>
              No Search results found
            </NoSearchResultsFoundTitle>
            <NoSearchResultsDescription fontColor={isDark}>
              Try different key words or remove search filter
            </NoSearchResultsDescription>
            <FailureViewButton onClick={this.onClickRetryButton}>
              Retry
            </FailureViewButton>
          </NoSearchResultsContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  HomeSuccessView = () => {
    const {searchResultsList} = this.state
    return searchResultsList.length > 0 ? (
      <VideosList>
        {searchResultsList.map(each => (
          <VideoItem key={each.id} videoItem={each} />
        ))}
      </VideosList>
    ) : (
      this.NoSearchResultsView()
    )
  }

  HomePage = () => {
    const {homeApiStatus} = this.state
    switch (homeApiStatus) {
      case homeApiConstants.inProgress:
        return this.HomeLoadingView()
      case homeApiConstants.failure:
        return this.HomeFailureView()
      case homeApiConstants.success:
        return this.HomeSuccessView()
      default:
        return null
    }
  }

  onClickingCloseBannerButton = () => {
    this.setState({displayBanner: false})
  }

  HomePageBanner = () => {
    const {displayBanner} = this.state
    return (
      displayBanner && (
        <HomeBannerContainer>
          <BannerDetails>
            <BannerLogo
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="nxt watch logo"
            />
            <BannerDescription>
              Buy Nxt Watch Premium prepaid plans with UPI
            </BannerDescription>
            <BannerButton type="button">GET IT NOW</BannerButton>
          </BannerDetails>
          <BannerCloseButton
            data-testid="close"
            type="button"
            onClick={this.onClickingCloseBannerButton}
          >
            <AiOutlineClose />
          </BannerCloseButton>
        </HomeBannerContainer>
      )
    )
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  HomePageSearchInput = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value
        const {searchInput} = this.state
        return (
          <SearchInputContainer>
            <SearchInput
              value={searchInput}
              onChange={this.onChangeSearchInput}
              placeholder="Search"
              fontColor={isDark}
            />
            <SearchButton
              type="button"
              onClick={this.onClickingSearchButton}
              fontColor={isDark}
              bgColor={isDark}
            >
              <MdSearch />
            </SearchButton>
          </SearchInputContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  onClickingSearchButton = () => {
    this.fetchHomeVideos()
  }

  RenderHomePage = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <HomePageContainer bgColor={isDark} data-testid="home">
            <Sidebar />
            <HomePageBannerAndVideosContainer>
              {this.HomePageBanner()}
              {this.HomePageSearchInput()}
              {this.HomePage()}
            </HomePageBannerAndVideosContainer>
          </HomePageContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  render() {
    return (
      <>
        <Header />
        {this.RenderHomePage()}
      </>
    )
  }
}

export default Home
