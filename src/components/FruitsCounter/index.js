// Write your code here

import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {count1: 0, count2: 0}

  mangoIncrement = () => {
    this.setState(prevState => ({count1: prevState.mango + 1}))
  }

  bananaIncrement = () => {
    this.setState(prevState => ({count2: prevState.banana + 1}))
  }

  render() {
    const {count1, count2} = this.state

    return (
      <div className="big-container">
        <div className="small-container">
          <h1>
            Bob ate <span>{count1}</span> mangoes <span>{count2}</span> bananas
          </h1>
          <div className="medium-container">
            <div className="mango-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png "
                alt="mango"
                className="mango"
              />
              <button
                type="button"
                className="btst"
                onClick={this.mangoIncrement}
              >
                Eat Mango
              </button>
            </div>

            <div className="mango-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="banana"
              />
              <button
                type="button"
                className="btst"
                onClick={this.bananaIncrement}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
