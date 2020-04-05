import React from 'react';

import List from './List';
import Button from './Button';

class ListIndex extends React.Component {
  render() {

    const post = this.props.post

    const isTrue = post.check === false
    const bgColor = isTrue ? "box-true" : "box-false";
    console.log({ post })

    return (
      <div className="flex" key={this.props.index}>
        <div className={bgColor}>
          <List post={post} />
          <Button post={post} onUpdate={this.props.updatePost} />
        </div>
      </div>
    )
  }
}

export default ListIndex;