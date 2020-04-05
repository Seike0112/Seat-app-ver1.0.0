import React from 'react';

class Button extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      check: false
    }
  }


  handleChahge = () => {
    if (this.props.post.check === false) {
      this.props.onUpdate(this.props.post.id, this.props.post.check = true)
    } else if (this.props.post.check === true) {
      this.props.onUpdate(this.props.post.id, this.props.post.check = false)
    }
  }

  render() {

    return (
      <div className="button-pos">
        <button type="submit" className="button-set" onClick={this.handleChahge}>お会計ボタン</button>
      </div>
    )
  }
}

export default Button;