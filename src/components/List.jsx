import React from 'react';

class List extends React.Component {
  render() {

    const id = this.props.post.id

    return (
      <li>
        座席番号{id}
      </li>
    )
  }
}

export default List;