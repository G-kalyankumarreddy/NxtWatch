import React from 'react'

const NxtWatchContext = React.createContext({
  isDark: false,
  changeThemeButton: () => {},
  saveVideosButton: () => {},
  savedVideosList: [],
})

export default NxtWatchContext
