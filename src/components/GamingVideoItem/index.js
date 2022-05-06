import NxtWatchContext from '../../context/NxtWatchContext'
import {
  GamingListItem,
  GameImage,
  GameTitle,
  GameViews,
} from './styledComponents'

const GamingVideoItem = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDark} = value
      const {gamingVideo} = props
      const {thumbnailUrl, title, viewCount} = gamingVideo
      return (
        <GamingListItem>
          <GameImage src={thumbnailUrl} alt={title} />
          <GameTitle fontColor={isDark}>{title}</GameTitle>
          <GameViews>{viewCount} Watching Worldwide</GameViews>
        </GamingListItem>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default GamingVideoItem
