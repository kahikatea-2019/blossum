import React from 'react'
import EightBall from './Eightball'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.handleMouseHover = this.handleMouseHover.bind(this)
    this.state = {
      isHovering: false
    }
  }

  handleMouseHover () {
    this.setState(this.toggleHoverState)
  }

  toggleHoverState (state) {
    return {
      isHovering: !state.isHovering
    }
  }

  render () {
    return (
      <div>
      
        <div className='words'
          onMouseEnter={this.handleMouseHover}
          onMouseLeave={this.handleMouseHover}
        >
               .....words<br>
               </br>
               ......words
        </div>
       
        <p className='answer'>
        {this.state.isHovering && <EightBall />} </p>
      </div>
    )
  }
}

export default App

// render(<HoverExample />, document.getElementById('root'))

// import React from 'react'
// import EightBall from './Eightball'

// const App = () => {

//   someHandler() {
//     console.log("youo")
//   }

//   return (
//     <>
//     <h1>React development has begun!</h1>
//     <EightBall />
//     </>
//   )
// }

// export default App
