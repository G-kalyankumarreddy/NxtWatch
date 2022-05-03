import Popup from 'reactjs-popup'
import NxtWatchContext from '../../context/NxtWatchContext'

const ReactPopUp = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDark} = value
    }}
  </NxtWatchContext.Consumer>
)
