'use strict'

const bg = "#0f1c23"
const black = "#343d46"
const darkblack = "#1b2b34"
const red = "#ed6f7d"
const green = "#99c794"
const yellow = "#fac863"
const blue = "#5a9bcf"
const magenta = "#c5a5c5"
const cyan = "#5fb3b3"
const white = "#d8dee9"
const lightBlack = "#65737e"
const lightRed = "#D6838C"
const lightGreen = "#C1DCBE"
const lightYellow = "#FFDE9B"
const lightBlue = "#8ABEE7"
const lightMagenta = "#EDCDED"
const lightCyan = "#9BE2E2"
const lightWhite = "#ffffff"

const colors = {
  black,
  red,
  green,
  yellow,
  blue,
  magenta,
  cyan,
  white,
  lightBlack,
  lightRed,
  lightGreen,
  lightYellow,
  lightBlue,
  lightMagenta,
  lightCyan,
  lightWhite
}

module.exports.decorateConfig = config => {
  const backgroundColor = bg
  const foregroundColor = white
  const cursorColor = cyan
  const borderColor = bg
  const selectionColor = 'rgba(95, 179, 169, .3)'
  const tabNavBg = darkblack
  const tabText = lightBlack
  const tabTextActive = white
  const dividerBg = black
  const scrollTrack = '#000000'
  const scrollThumb = '#5fb3b344'
  const scrollHover = '#5fb3b377'

  return Object.assign({}, config, {
    foregroundColor,
    backgroundColor,
    borderColor,
    cursorColor,
    selectionColor,
    colors,
    termCSS: `
      ${config.termCSS || ''}
      .terminal a {
        color: ${cyan};
      }
    `,
    css: `
      ${config.css || ''}
      #hyper {
        border: 1px solid ${borderColor};
      }
      .tabs_nav {
        background-color: ${tabNavBg};
        border-bottom: 1px solid ${borderColor};
      }
      /* hide the tab border shim, we are providing our own */
      .tabs_borderShim {
        border-bottom-width: 0px;
      }
      /* Hide title when only one tab */
      .tabs_title {
  			background-color: ${backgroundColor};
  		}
      .tab_textInner {
        color: ${tabText};
        font-weight: 500;
      }
      .tab_tab{
        border-left-color: ${tabNavBg} !important
        border-left-width: 3px;
      }
      .tab_tab.tab_active {
        background-color: ${backgroundColor};
        border-left-color: ${cursorColor} !important;
        border-left-width: 3px;
      }
      .tab_tab.tab_active .tab_textInner {
        color: ${tabTextActive};
      }
      .tab_icon {
        border-radius: 3px;
        background: ${backgroundColor};
        transition: all .2s;
      }
      .tab_icon:hover {
        background: ${tabNavBg};
      }
      .splitpane_divider[style] {
        background-color: ${dividerBg} !important;
      }
      .xterm-viewport::-webkit-scrollbar-button {
        width: 0;
        height: 0;
        display: none;
      }
      .xterm-viewport::-webkit-scrollbar-corner {
          background-color: transparent;
      }
      .xterm-viewport::-webkit-scrollbar {
          width: 4px;
          height: 4px;
      }
      .xterm-viewport::-webkit-scrollbar-track,
      .xterm-viewport::-webkit-scrollbar-thumb {
          -webkit-border-radius: 8px;
      }
      .xterm-viewport::-webkit-scrollbar-track {
          background-color: ${scrollTrack};
      }
      .xterm-viewport::-webkit-scrollbar-thumb {
          background-color: ${scrollThumb};
          -webkit-box-shadow: none;
      }
      .xterm-viewport::-webkit-scrollbar-thumb:hover {
          background-color: ${scrollHover};
          -webkit-box-shadow: none;
      }
      .xterm .xterm-viewport {
          overflow-y: auto;
      }
    `
  })
}
