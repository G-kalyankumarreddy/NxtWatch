import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'

import Login from './components/LoginRoute'
import Home from './components/HomeRoute'
import VideoItemDetails from './components/VideoItemDetailsRoute'
import SavedVideos from './components/SavedVideosRoute'
import TrendingVideos from './components/TrendingRoute'
import GamingVideos from './components/GamingRoute'
import NxtWatchContext from './context/NxtWatchContext'
import './App.css'

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
          <Route exact path="/" component={Home} />
          <Route exact path="/videos/:id" component={VideoItemDetails} />
          <Route exact path="/saved-videos" component={SavedVideos} />
          <Route exact path="/trending" component={TrendingVideos} />
          <Route exact path="/gaming" component={GamingVideos} />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
