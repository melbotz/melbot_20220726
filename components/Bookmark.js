
// IMPORTS
import { render, html } from '../js/preacthtm.js'

// FUNCTIONS
function getTextFromUri(uri) {
  var source = 'reddit'
  var sub = uri.split('/')[4]
  return `${sub} - ${source}`
}

// COMPONENTS
export default function Bookmark(props) {
  let uri = props.uri || '#'
  let title = props.title || 'bookmark'
  let image = props.image || '#'

  let text = getTextFromUri(uri)
  return html`
          <td style="text-align: center;">
            <img height="200" src="${image}" /> ${'\n'}
            <br />
            <a style="color: blue" href="${uri}" target="_blank">${text} 🔗</a>
          </td>
        `
}

