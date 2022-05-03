import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'
import NxtWatchContext from '../../context/NxtWatchContext'
import './index.css'
import {
  ListItem,
  VideoThumbnail,
  VideoDetailsContainer,
  ChannelProfileImage,
  VideoDetailsDescription,
  VideoDetailsDescriptionMedScreens,
  VideoTitleAndDetailsContainer,
  VideoName,
  CountAndTime,
} from './styledComponents'

const VideoItem = props => {
  const {videoItem} = props
  const {channel, id, publishedAt, thumbnailUrl, title, viewCount} = videoItem

  const VideoItemRender = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <Link to={`/videos/${id}`} className="link-item">
            <ListItem>
              <VideoThumbnail src={thumbnailUrl} alt="video thumbnail" />
              <VideoDetailsContainer bgColor={isDark}>
                <ChannelProfileImage
                  src={channel.profileImageUrl}
                  alt="nxt watch logo"
                />
                <VideoTitleAndDetailsContainer>
                  <VideoName fontColor={isDark}>{title}</VideoName>
                  <VideoDetailsDescription>
                    {channel.name} . {viewCount} .
                    {formatDistanceToNow(new Date(`${publishedAt}`))}
                  </VideoDetailsDescription>
                  <VideoDetailsDescriptionMedScreens>
                    {channel.name}
                  </VideoDetailsDescriptionMedScreens>
                  <br />
                  <CountAndTime>
                    {viewCount} .{' '}
                    {formatDistanceToNow(new Date(`${publishedAt}`))}
                  </CountAndTime>
                </VideoTitleAndDetailsContainer>
              </VideoDetailsContainer>
            </ListItem>
          </Link>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  return VideoItemRender()
}

export default VideoItem
