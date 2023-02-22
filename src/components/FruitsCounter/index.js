// Write your code here

import './index.css'

import {Component} from 'react'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  render() {
    const {mango, banana} = this.state

    return (
      <div className="big-container">
        <div className="small-container">
          <h1>
            Bob at <span>{mango}</span>mangoes <span>{banana}</span>bananas
          </h1>
          <div className="medium-container">
            <div className="mango-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png "
                alt="mango"
                className="mango"
              />

              <button onClick={this.mangoIncrement} className="btn">
                Eat Mango
              </button>
            </div>

            <div className="mango-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="banana"
              />

              <button className="btn" onClick={this.bananIncrement}>
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
