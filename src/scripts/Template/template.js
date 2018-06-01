import React, { Component } from "react";
import 'bulma/css/bulma.css'

export default class Template extends Component {
    render() {
        return(
            <div className="tile is-ancestor box">
            <div className="tile is-vertical is-10">
              <div className="tile">
                <div className="tile is-parent is-vertical box">
                  <section id="tasks--tile" className="tile is-child notification is-danger">
                    <p className="title">Calendar</p>
                    <p className="subtitle">Current Event</p>
                  </section>
                  <section id="friends--tile" className="tile is-child notification is-danger box">
                    <p className="title">Friends</p>
                    <p className="subtitle"></p>
                  </section>
                </div>
                <div className="tile is-parent box">
                  <section id="events--tile" className="tile is-child notification is-danger">
                    <p className="title">Post</p>
                    <p className="subtitle">Current Post</p>
                  </section>
                </div>
              </div>
              <div className="tile is-parent box">
                <section className="tile is-child notification is-danger">
                 <p className="title">Events</p>
                  <div  id="articles--tile" className="content">
                  </div>
                </section>
              </div>
            </div>
            <div className="tile is-parent box">
              <section id="chat--tile" className="tile is-child notification is-danger">
                <div className="content">
                  <p className="title">ADS</p>
                  <p className="subtitle">With even more content</p>
                  <div className="content">
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
