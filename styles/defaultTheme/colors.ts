const colors = {
  background: '#000',
  fileEntry: {
    background: `hsl(206deg 77% 70% / 15%)`,
    border: 'hsl(206deg 77% 100% / 15%)',
    text: '#FFF',
    textShadow: `
      0 0 1px rgba(0, 0, 0, 75%),
      0 0 2px rgba(0, 0, 0, 50%),

      0 1px 1px rgba(0, 0, 0, 75%),
      0 1px 2px rgba(0, 0, 0, 50%),

      0 2px 1px rgba(0, 0, 0, 75%),
      0 2px 2px rgba(0, 0, 0, 50%)`
  },
  highlight: 'hsl(206deg 77% 70%)',
  startButton: '#FFF',
  taskbar: {
    background: 'rgba(0, 0, 0, 60%)',
    hover: 'hsla(0, 0%, 25%, 70%)'
  },
  text: 'rgba(255, 255, 255, 80%)',
  titleBar: {
    background: '#000',
    backgroundHover: 'rgb(26, 26, 26)',
    closeHover: 'rgb(232, 17, 35)',
    text: '#fff'
  },
  window: {
    background: '#808080',
    outline: 'rgba(0, 0, 0, 25%)',
    shadow: '0 0 20px 0 rgba(0, 0, 0, 50%)'
  }
};

export default colors;
