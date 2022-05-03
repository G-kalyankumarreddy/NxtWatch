import ReactPlayer from 'react-player'

import './index.css'

const ReactVideoPlayer = props => {
  const {videoItem} = props
  const {videoUrl} = videoItem
  return (
    <div className="video-player-container">
      <ReactPlayer url={videoUrl} width="100%" controls />
    </div>
  )
}

export default ReactVideoPlayer
