var menubar = require('menubar')

var mb = menubar({width: 270, height: 400})

mb.on('ready', function ready () {
  console.log('app is ready')
})
