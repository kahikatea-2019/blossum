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
        <h3>8ball has spoken!</h3>
        <p>{'Response from 8 ball: ' + this.state.answer}</p>
      </div>
    )
  }
}
