#!/bin/sh

apt-get install git nodejs
git clone https://github.com/capinemo/LibraryDeploy.git .
npm install && npm test