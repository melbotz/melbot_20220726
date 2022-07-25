#!/usr/bin/env node

// IMPORTS
import minimist from 'minimist'
import fs from 'fs'

// MAIN
var argv = minimist(process.argv.slice(2));
// console.log(argv)

var file = './index.html'

var index = fs.readFileSync(file)
index = index.toString()

var di = {}
var id = 'data'
di.data = 1

var bookmark = argv._[0] || 'https://www.reddit.com/r/EarthPorn/comments/vxohh1/hidden_lake_glacier_national_park_montana_usa/'
var image = argv._[1] || 'https://i.redd.it/ioqw3bprz7b91.jpg'


var di = index.replace(
  /.*[\s\S]*?(<script[^>]*type="application[^>]*>)([\s\S]*?)(<\/script>.*[\s\S]*.*^)/gim,
  '$2'
)
di = JSON.parse(di)

di.bookmark.push({ '@id': bookmark, '@type': 'ImageObject', 'image': image })

// console.log(di.bookmark)

var newhtml = index.replace(
  /(<script[^>]*type="application[^>]*>)([\s\S]*?)(<\/script>)/gim,
  '$1' + JSON.stringify(di, null, 2) + '$3'
)

console.log(newhtml)