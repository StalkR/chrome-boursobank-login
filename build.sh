#!/bin/bash
rm -f boursorama.zip
zip boursorama.zip manifest.json options.{css,html,js} {background,images,resemble,script,settings}.js icon{16,48,128}.png
chmod a+r boursorama.zip
