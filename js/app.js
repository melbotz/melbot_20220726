
// IMPORTS
import { render, html } from '../js/preacthtm.js'
import '../js/dior.js'
import '../js/nostrefresh.js'

// COMPONENTS
import Navbar from '../components/Navbar.js'
import Bookmarks from '../components/Bookmarks.js'

// INIT
var doc = di.data
var me = doc.mainEntity
var bookmarks = doc.bookmark

// RENDER
render(
  html`
          <${Navbar} title="${me.gitmark['nick']}" />


          <div style="font-family: monospace" class="row">
          <div class="card 1 col">
          <div class="tc">
          <strong>${me.gitmark['nick']}</strong> <br/>
          <img
            src="https://robohash.org/gitmark:4465fd0ce9f7758161f1d52b8b506b3e564c54a5d9a67b09879696fc536911fd:0"
          />
          </div>
          </div>
          <div class="card 11 col">
          

              <p>
              Energy: ${me.energy} Marks <br/>
              Birth: ${me.birth} <br/>
      Address: <a style="color: blue" href="https://chainz.cryptoid.info/marks/address.dws?${di
      .data.address}.htm" target="_blank">${me.address}</a> <br/>
        Nostr: <a  style="color: blue" href="http://bitbots.org:2617/?pubkey=${me.nostr}" target="_blank">${me.nostr}</a>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

        <div style="margin-top: auto">
        <button class="btn b-gray large"><a style="color: blue" href="${doc.previous}">⏪</a></button>
        
        <button class="btn b-gray large"><a style="color: blue" href="${doc.next}">⏩</a></button>
        </div>
        
              </p>
            </div>

          </div>

          <h4 class="tc">Bookmarks</h4>

          <div class="row">
          <div class="card col tc">

          <${Bookmarks} bookmarks="${bookmarks}" />
          </div>
          </div>


          <h4>Activity</h4>
          <pre>
      <a style="color: blue"
                  href="https://gitmark.info/${me.gitmark['@id'].split(
        ':'
      )[1]}"
                  target="_blank"
                  >Genesis</a
                >
                  </pre>

          <footer>
            |
            <a
              style="color: blue"
              href="https://gitmark.info/${me.gitmark['@id'].split(
        ':'
      )[1]}"
              target="_blank"
              >${me.gitmark['@id']}</a
            >
            |
          </footer>
        `,
  document.body
)

console.log(doc)
