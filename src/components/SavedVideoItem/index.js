import {formatDistanceToNow} from 'date-fns'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  SavedVideoItem,
  SavedVideoThumbnail,
  SavedVideoDetailsContainer,
  SavedVideoTitle,
  ChannelNameAndDetails,
  Dot,
  ChannelNameMediumScreen,
  SubscriberCountAndPublished,
} from './styledComponents'

const SavedVideoListItem = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDark} = value
      const {savedVideo} = props
      const {channel, viewCount, publishedAt, thumbnailUrl, title} = savedVideo
      return (
        <SavedVideoItem>
          <SavedVideoThumbnail src={thumbnailUrl} alt="thumbnail" />
          <SavedVideoDetailsContainer>
            <SavedVideoTitle fontColor={isDark}>{title}</SavedVideoTitle>
            <ChannelNameAndDetails>
              {channel.name}
              <Dot> . </Dot>
              {channel.subscriberCount}
              <Dot> . </Dot>
              {formatDistanceToNow(new Date(`${publishedAt}`))}
            </ChannelNameAndDetails>
            <ChannelNameMediumScreen value={isDark}>
              {channel.name}
            </ChannelNameMediumScreen>
            <SubscriberCountAndPublished>
              {viewCount}Views
              <Dot>.</Dot> {formatDistanceToNow(new Date(`${publishedAt}`))}
            </SubscriberCountAndPublished>
          </SavedVideoDetailsContainer>
        </SavedVideoItem>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default SavedVideoListItem
