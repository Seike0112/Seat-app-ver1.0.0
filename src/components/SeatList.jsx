import React, { Component } from 'react';
import axios from 'axios';

import './style.css'

import ListIndex from './ListIndex';


class SeatList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/v1/posts')
      .then((res) => this.setState({ posts: res.data }))
      .catch((data) => console.log(data))
  }

  updatePost = (id, post) => {
    axios.patch(`http://localhost:3001/api/v1/posts/${id}`, { check: post, title: post })
      .then((res) => {
        const postIndex = this.state.posts.findIndex(x => x.id === id);
        const posts = this.state.posts.update(this.state.posts, { [postIndex]: { $set: res.data } });

        this.setState({ posts: posts })
      })
      .catch((data) => {
        console.log(data)
      })
  }

  render() {

    const { posts } = this.state

    return (
      <div className="container">
        <h1 className="title">空席状況管理アプリ</h1>
        <div>
          {
            posts.map((post, index) => {
              return (
                <ListIndex post={post} key={index} updatePost={this.updatePost} />
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default SeatList;