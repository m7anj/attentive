const { app, BrowserWindow, desktopCapturer, session } = require('electron');

const sources = await desktopCapturer.getSources({
  types: ['window', 'screen'],
  fetchWindowIcons: true
});

const windowNames = sources.find(source =>
    source.name.includes("Discord")// testing purposes
);