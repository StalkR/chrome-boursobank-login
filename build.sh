#!/bin/bash
rm -f extension.zip
zip extension.zip background.js content.js icon{16,48,128}.png images.js manifest.json options.{css,html,js} resemble.js settings.js
chmod a+r extension.zip
