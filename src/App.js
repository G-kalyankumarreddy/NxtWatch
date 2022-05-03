import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'

import Login from './components/LoginRoute'
import Home from './components/HomeRoute'
import VideoItemDetails from './components/VideoItemDetailsRoute'
import NxtWatchContext from './context/NxtWatchContext'
import './App.css'

// Replace your code here
class App extends Component {
  state = {isDark: false, savedVideosList: []}

  changeThemeButton = () => {
    this.setState(prevState => ({
      isDark: !prevState.isDark,
    }))
  }

  saveVideosButton = videoItemDetails => {
    this.setState(prevState => ({
      savedVideosList: [...prevState.savedVideosList, videoItemDetails],
    }))
  }

  render() {
    const {isDark, savedVideosList} = this.state
    return (
      <NxtWatchContext.Provider
        value={{
          isDark,
          changeThemeButton: this.changeThemeButton,
          saveVideosButton: this.saveVideosButton,
          savedVideosList,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
