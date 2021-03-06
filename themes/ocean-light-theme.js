const { COLOR } = require("./color")

module.exports = {
  name: "ocean-light-theme",
  displayName: "ocean-light-theme",
  theme: {
    foreground: {
      default: COLOR.BLACK,
    },
    background: {
      default: COLOR.WHITE,
      success: COLOR.BLUE,
      notice: COLOR.ORANGE,
      warning: COLOR.ORANGE,
      danger: COLOR.RED,
      surprise: COLOR.BLUE,
      info: COLOR.BLUE,
    },
    styles: {
      dialogHeader: {
        background: {
          default: COLOR.BLUE,
        },
        foreground: {
          default: COLOR.WHITE,
        },
        highlight: {
          md: COLOR.LIGHT_GRAY,
        },
      },
      transparentOverlay: {
        background: {
          default: `${COLOR.WHITE}80`,
        },
        foreground: {
          default: COLOR.BLACK,
        },
      },
      paneHeader: {
        background: {
          default: COLOR.WHITE,
          success: COLOR.BLUE
        },
      },
    },
  },
};
