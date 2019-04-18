import React from 'react'
import { getEightBall } from '../api/eightBall'

export default class EightBall extends React.Component {
  state = {
    answer: ''
  }

  componentDidMount () {
    getEightBall()
      .then(res => {
        this.setState({
          answer: res.magic.answer
        })
      })
  }


  render () {
    return (
      <div>
        <p><strong>{'8ball has spoken! '}</strong> {this.state.answer}</p>
      </div>
    )
  }
}
