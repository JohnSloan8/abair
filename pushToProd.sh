#!/bin/bash

echo prefixing '/qa/abair/' in dist/index.html
sed -i 's/assets\/index/qa\/abair\/assets\/index/g' ./dist/index.html
echo prefixing '/qa/abair/' in dist/assets/*.js
sed -i 's/assets\//qa\/abair\/assets\//g' ./dist/assets/*.js
echo syncing to abair.ovh
rsync -a ./dist johnsloan@abair.ovh:/home/johnsloan/web-apps/abair