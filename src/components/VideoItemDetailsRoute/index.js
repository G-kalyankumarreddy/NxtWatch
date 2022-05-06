import {Component} from 'react'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'

import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {MdPlaylistAdd} from 'react-icons/md'

import Header from '../Header'
import {Sidebar} from '../Sidebar'
import LoadingView from '../Loader'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  VideoDetailsPageContainer,
  VideoDetailsViewContainer,
  ReactPlayerContainer,
  VideoTitle,
  ViewsAndLikeButtonsContainer,
  VideoViewsAndPublished,
  Dot,
  LikeDislikeAndSaveButtonsContainer,
  ButtonContainer,
  HorizontalLine,
  ChannelDetailsContainer,
  ProfileImageAndChannelDetailsContainer,
  ProfileImage,
  NameAndSubscribersContainer,
  ChannelName,
  SubscribersCount,
  VideoDescription,
  FailureViewContainer,
  FailureViewImage,
  FailureViewTitle,
  FailureViewDescription,
  FailureViewButton,
} from './styledComponents'

const videoItemDetailsApiConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
  success: 'SUCCESS',
}

class VideoItemDetails extends Component {
  state = {
    videoItemDetails: {},
    videoItemDetailApiStatus: videoItemDetailsApiConstants.initial,
    videoSaved: false,
    likeStatus: '',
  }

  componentDidMount() {
    this.fetchVideoItemDetails()
  }

  fetchVideoItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    this.setState({
      videoItemDetailApiStatus: videoItemDetailsApiConstants.inProgress,
    })
    const token = Cookies.get('jwt_token')
    const videoItemDetailsUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const response = await fetch(videoItemDetailsUrl, options)

    if (response.ok) {
      const data = await response.json()
      const updatedVideoDetailsDataFormat = this.updateVideoDetailsDataFormat(
        data.video_details,
      )
      console.log(updatedVideoDetailsDataFormat)
      this.setState({
        videoItemDetails: updatedVideoDetailsDataFormat,
        videoItemDetailApiStatus: videoItemDetailsApiConstants.success,
      })
    } else {
      this.setState({
        videoItemDetailApiStatus: videoItemDetailsApiConstants.failure,
      })
    }
  }

  updateVideoDetailsDataFormat = videoDetails => ({
    channel: {
      name: videoDetails.channel.name,
      profileImageUrl: videoDetails.channel.profile_image_url,
      subscriberCount: videoDetails.channel.subscriber_count,
    },
    description: videoDetails.description,
    id: videoDetails.id,
    publishedAt: videoDetails.published_at,
    thumbnailUrl: videoDetails.thumbnail_url,
    title: videoDetails.title,
    videoUrl: videoDetails.video_url,
    viewCount: videoDetails.view_count,
  })

  onClickDislikeButton = () => {
    this.setState({likeStatus: 'Dislike'})
  }

  onClickLikeButton = () => {
    this.setState({likeStatus: 'Like'})
  }

  videoDetailsInLoading = () => <LoadingView />

  VideoDetailsOnSuccess = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark, saveVideosButton} = value
        const {videoItemDetails, videoSaved, likeStatus} = this.state

        const {
          videoUrl,
          title,
          description,
          publishedAt,
          viewCount,
          channel,
        } = videoItemDetails
        console.log(videoItemDetails.channel)
        const onClickSaveButton = () => {
          saveVideosButton(videoItemDetails)
          this.setState({videoSaved: true})
        }
        const displaySaveButtonText = videoSaved ? 'saved' : 'save'
        return (
          <>
            <ReactPlayerContainer>
              <ReactPlayer url={videoUrl} width="100%" controls />
            </ReactPlayerContainer>
            <VideoTitle fontColor={isDark}>{title}</VideoTitle>
            <ViewsAndLikeButtonsContainer>
              <VideoViewsAndPublished>
                {viewCount}
                <Dot> . </Dot> {formatDistanceToNow(new Date(`${publishedAt}`))}
              </VideoViewsAndPublished>
              <LikeDislikeAndSaveButtonsContainer>
                <ButtonContainer
                  onClick={this.onClickLikeButton}
                  style={{
                    color: likeStatus === 'Like' ? '#2563eb' : '#64748b',
                  }}
                >
                  <AiOutlineLike />
                  Like
                </ButtonContainer>
                <ButtonContainer
                  onClick={this.onClickDislikeButton}
                  style={{
                    color: likeStatus === 'Dislike' ? '#2563eb' : '#64748b',
                  }}
                >
                  <AiOutlineDislike />
                  Dislike
                </ButtonContainer>

                <ButtonContainer
                  onClick={onClickSaveButton}
                  style={{
                    color: videoSaved ? '#2563eb' : '#64748b',
                  }}
                >
                  <MdPlaylistAdd />
                  {displaySaveButtonText}
                </ButtonContainer>
              </LikeDislikeAndSaveButtonsContainer>
            </ViewsAndLikeButtonsContainer>

            <HorizontalLine />
            <ChannelDetailsContainer>
              <ProfileImageAndChannelDetailsContainer>
                <ProfileImage
                  src={channel.profileImageUrl}
                  alt="nxt watch logo"
                />
                <NameAndSubscribersContainer>
                  <ChannelName fontColor={isDark}>{channel.name}</ChannelName>
                  <SubscribersCount>
                    {channel.subscriberCount} Subscribers
                  </SubscribersCount>
                </NameAndSubscribersContainer>
              </ProfileImageAndChannelDetailsContainer>
              <VideoDescription fontColor={isDark}>
                {description}
              </VideoDescription>
            </ChannelDetailsContainer>
          </>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  onClickRetryButton = () => {
    this.fetchVideoItemDetails()
  }

  VideoDetailsOnFailure = () => (
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

  renderVideoDetails = () => {
    const {videoItemDetailApiStatus} = this.state
    switch (videoItemDetailApiStatus) {
      case videoItemDetailsApiConstants.inProgress:
        return this.videoDetailsInLoading()
      case videoItemDetailsApiConstants.failure:
        return this.VideoDetailsOnFailure()
      case videoItemDetailsApiConstants.success:
        return this.VideoDetailsOnSuccess()
      default:
        return null
    }
  }

  VideoDetailsPage = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <VideoDetailsPageContainer
            bgColor={isDark}
            data-testid="videoItemDetails"
          >
            <Sidebar />
            <VideoDetailsViewContainer>
              {this.renderVideoDetails()}
            </VideoDetailsViewContainer>
          </VideoDetailsPageContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  render() {
    return (
      <>
        <Header />
        {this.VideoDetailsPage()}
      </>
    )
  }
}

export default VideoItemDetails
