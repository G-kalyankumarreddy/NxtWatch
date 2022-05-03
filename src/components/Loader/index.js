import Loader from 'react-loader-spinner'

import NxtWatchContext from '../../context/NxtWatchContext'

import './index.css'

const LoadingView = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDark} = value
      return (
        <div data-testid="loader" className="loader-container">
          <Loader
            type="ThreeDots"
            color={isDark ? '#f1f1f1' : '#181818'}
            height="50"
            width="50"
          />
        </div>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default LoadingView
