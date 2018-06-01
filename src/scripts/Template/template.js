import React, { Component } from "react";
import 'bulma/css/bulma.css'

export default class Template extends Component {
    render() {
        return(
            <div class="tile is-ancestor box">
            <div class="tile is-vertical is-10">
              <div class="tile">
                <div class="tile is-parent is-vertical box">
                  <section id="tasks--tile" class="tile is-child notification is-danger">
                    <p class="title">Calendar</p>
                    <p class="subtitle">Current Event</p>
                  </section>
                  <section id="friends--tile" class="tile is-child notification is-danger box">
                    <p class="title">Friends</p>
                    <p class="subtitle"></p>
                  </section>
                </div>
                <div class="tile is-parent box">
                  <section id="events--tile" class="tile is-child notification is-danger">
                    <p class="title">Events</p>
                    <p class="subtitle">Current Event</p>
                  </section>
                </div>
              </div>
              <div class="tile is-parent box">
                <section class="tile is-child notification is-danger">
                 <p class="title">Post Feed</p>
                  <div  id="articles--tile" class="content">
                  </div>
                </section>
              </div>
            </div>
            <div class="tile is-parent box">
              <section id="chat--tile" class="tile is-child notification is-danger">
                <div class="content">
                  <p class="title">ADS</p>
                  <p class="subtitle">With even more content</p>
                  <div class="content">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,
                    content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum
                    as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions
                    have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,
                    content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum
                    as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions
                    have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                  </div>
                </div>
              </section>
            </div>
          </div>
        )
    }
}
