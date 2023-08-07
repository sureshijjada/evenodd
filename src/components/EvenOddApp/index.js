// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    const value = Math.ceil(Math.random() * 100)
    this.setState(prevState => ({count: prevState.count + value}))
  }

  render() {
    const {count} = this.state
    const text = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="container">
        <div className="card">
          <h1 className="heading">Count {count}</h1>
          <p className="paragraph">Count is {text}</p>
          <button type="button" onClick={this.onIncrement} className="button">
            Increment
          </button>
          <p className="sub">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
