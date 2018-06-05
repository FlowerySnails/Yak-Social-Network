import React, {Component} from "react"

class Feed extends Component {

    render() {
        return (
            <div className="postFeed">
                <p> {this.props.user}</p>
                <p> {this.props.postContent}{this.props.postImage}</p>
                <p> {this.props.postDate}</p>
            </div>
        )
    }
}
export default Feed;