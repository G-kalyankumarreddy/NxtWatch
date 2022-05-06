import {HiFire} from 'react-icons/hi'

import Header from '../Header'
import {Sidebar} from '../Sidebar'
import SavedVideoListItem from '../SavedVideoItem'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  SavedVideosPageContainer,
  NoSavedVideosContainer,
  NoSavedVideosImage,
  NoSavedVideosFound,
  NoSavedVideosDescription,
  BannerAndSavedVideosContainer,
  SavedVideosListContainer,
  BannerContainer,
  SavedVideosIconContainer,
  SavedVideosHeading,
} from './styledComponents'

const SavedVideos = () => {
  const noSavedVideosView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <NoSavedVideosContainer>
            <NoSavedVideosImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
            />
            <NoSavedVideosFound fontColor={isDark}>
              No saved videos found
            </NoSavedVideosFound>
            <NoSavedVideosDescription fontColor={isDark}>
              You can save your videos while watching them
            </NoSavedVideosDescription>
          </NoSavedVideosContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  const savedVideosView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {savedVideosList, isDark} = value
        return (
          <BannerAndSavedVideosContainer>
            <BannerContainer bgColor={isDark}>
              <SavedVideosIconContainer bgColor={isDark}>
                <HiFire />
              </SavedVideosIconContainer>
              <SavedVideosHeading fontColor={isDark}>
                Saved Videos
              </SavedVideosHeading>
            </BannerContainer>
            <SavedVideosListContainer>
              {savedVideosList.map(each => (
                <SavedVideoListItem key={each.id} savedVideo={each} />
              ))}
            </SavedVideosListContainer>
          </BannerAndSavedVideosContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  const savedVideosPage = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark, savedVideosList} = value

        return (
          <>
            <Header />
            <SavedVideosPageContainer
              bgColor={isDark}
              data-testid="savedVideos"
            >
              <Sidebar />
              {savedVideosList.length > 0
                ? savedVideosView()
                : noSavedVideosView()}
            </SavedVideosPageContainer>
          </>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  return savedVideosPage()
}

export default SavedVideos
