import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isShowHide1: false, isShowHide2: false}

  onFirstName = () => {
    this.setState(prevState => ({isShowHide1: !prevState.isShowHide1}))
  }

  onLastName = () => {
    this.setState(prevState => ({isShowHide2: !prevState.isShowHide2}))
  }

  render() {
    const {isShowHide1, isShowHide2} = this.state
    const cardName1 = isShowHide1 ? 'card-name' : null
    const cardName2 = isShowHide2 ? 'card-name' : null
    const text1 = isShowHide1 ? 'Joe' : null
    const text2 = isShowHide2 ? 'Jonas' : null

    return (
      <div className="bg-container">
        <h1 className="main-heading">Show/Hide</h1>
        <div className="card-container">
          <div className="card">
            <button
              className="btn-style"
              type="button"
              onClick={this.onFirstName}
            >
              Show/Hide FirstName
            </button>
            <div className={`${cardName1}`}>
              <p className="paragraph">{text1}</p>
            </div>
          </div>
          <div className="card">
            <button
              className="btn-style"
              type="button"
              onClick={this.onLastName}
            >
              Show/Hide LastName
            </button>
            <div className={cardName2}>
              <p className="paragraph">{text2}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
