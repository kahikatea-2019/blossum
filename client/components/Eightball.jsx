import React from 'react'
import request from 'superagent'

let params = encodeURIComponent('Is today going to be a good day?')
let url = 'https://8ball.delegator.com/magic/JSON/' + params

class EightBall extends React.Component {
  constructor () {
    super()
    this.state = {
      magic: ''
    }
  }

  componentDidMount () {
    request
      .get(url)
      // .then(console.log)
      .then(res => {
        console.log(res.body)
        const { magic } = res.body
        this.setState({
          magic
        })
      })
  }

  render () {
    return (
      <div>
        <p>{this.state.magic.answer}</p>
      </div>

    )
  }
}

export default EightBall
