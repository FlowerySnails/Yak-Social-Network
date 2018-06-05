import React, {Component} from "react"
import Feed from './feed'
import 'bulma/css/bulma.css'

function getDate (currentDate){
    let today = new Date(currentDate);
    const dd = today.getDate();
    const mm = today.getMonth()+1;
    const yyyy = today.getFullYear();
    const hour = today.getHours();
    const minute = today.getMinutes();
    const seconds = today.getSeconds();
    return  (hour + ":" + minute + ":" + seconds + " " + mm + "/" + dd + "/" + yyyy)
}

class Post extends Component {

    constructor (props){
        super(props)
        this.uniqueKey = 0
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        this.setState({value: event.target.value});
      }

    handleSubmit(event) {

        const newPostData = {
            id: "",
            public: true,
            postContent: this.state.value,
            postImage: this.state.value,
            postDate: getDate(Date.now()),
            userId: this.state.userId
        }

        fetch("http://localhost:8088/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPostData)
        })
        .then(r => r.json())
        .then(newPost => console.log(newPost))

      }

    state = {
        feed: []
    }

    componentDidMount(){
        fetch("http://localhost:8088/posts?_embed=user&_sort=postDate&_order=desc")
        .then(r => r.json())
        .then(Posts => {
            this.setState({
                feed: Posts
            })
        })
    }


    render() {
        return (
            <div className="post">
            <form onSubmit={this.handleSubmit}>
                <label>
                    <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="What's on your mind?"/>
                    <input type="checkbox" name="privatepost" value=""/> Private Post
                </label>
                <input type="submit" value="Post" />

            </form>
                {this.state.feed.map(post =>(
                    <Feed id = {post.id}
                          user= {post.userId}
                          postContent={post.postContent}
                          postDate={post.postDate}
                          key={this.uniqueKey++}/>

                ))}
            </div>
        )
    }
}
export default Post;