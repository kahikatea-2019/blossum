import request from 'superagent'

let params = encodeURIComponent('Is today going to be a good day?')
const url = 'https://8ball.delegator.com/magic/JSON/' + params
// Code from Api
// fetch(url)
//   .then((response) => { return response.json() })
//   .then((json) => { console.log(json) })

export function getEightBall () {
  return request
    .get(url)
    .then(response => {
      console.log(response.body)
      return response.body // We want to call body.magic.answer
    })
}
