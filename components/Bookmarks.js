
// IMPORTS
import { render, html } from '../js/preacthtm.js'
import Bookmark from '../components/Bookmark.js'

// FUNCTIONS
function chunk(arr, size) {

  for (var chunks = [], i = 0; i < arr.length; i += size) {

    console.log(arr.slice(i, size), i, size, arr)
    chunks.push(arr.slice(i, i + size))
  }
  return chunks
}


// COMPONENTS
function Row(props) {
  var bookmarks = props.bookmarks
  return html`
  <tr>
  ${bookmarks?.map(i => {
    return html`
      <${Bookmark} uri="${i['@id']}" image="${i.image}" />
    `
  })}
</tr>

  `
}

export default function Bookmarks(props) {
  var bookmarks = props.bookmarks

  const cols = 3

  var b2 = chunk(bookmarks, cols)
  console.log('b2', b2)


  return html`

  <div class="tc">
  <table class="tc" style="  margin-left: auto; margin-right: auto;">
    ${b2.map(i => {
    return html`<${Row} bookmarks="${i}" />`
  })}

  </table>
  </div>

        `
}

