// Write your React code here.
import {Component} from 'react'

import './index.css'

const resources = {
  emojis: [
    {
      id: 0,
      name: 'Sad',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/sad-emoji-img.png',
    },
    {
      id: 1,
      name: 'None',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/none-emoji-img.png',
    },
    {
      id: 2,
      name: 'Happy',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/happy-emoji-img.png',
    },
  ],
  loveEmojiUrl: 'https://assets.ccbp.in/frontend/react-js/love-emoji-img.png',
}

class Feedback extends Component {
  state = {changeText: false, dataResources: resources}

  onChangeText = () => {
    this.setState(prevState => ({changeText: !prevState.changeText}))
  }

  render() {
    const {dataResources, changeText} = this.state
    const {emojis, loveEmojiUrl} = dataResources
    return (
      <div className="bg-container">
        {changeText ? (
          <div className="card2-container">
            <img src={loveEmojiUrl} className="emoji-text1" alt="love emoji" />
            <h1 className="heading1">Thank You</h1>
            <p className="name1-des">
              We will use your feedback to improve our customer support
              performance
            </p>
          </div>
        ) : (
          <div className="card1-container">
            <h1 className="heading">
              How satisfied are you with our Customer support performance?
            </h1>
            <ul className="emoji-container">
              <li className="emoji-container-sec">
                <img
                  src={emojis[0].imageUrl}
                  className="emoji-text"
                  alt={emojis[0].name}
                />
                <p className="name-des">{emojis[0].name}</p>
              </li>
              <li className="emoji-container-sec">
                <img
                  src={emojis[1].imageUrl}
                  className="emoji-text"
                  alt={emojis[1].name}
                />
                <p className="name-des">{emojis[1].name}</p>
              </li>
              <li className="emoji-container-sec">
                <img
                  src={emojis[2].imageUrl}
                  className="emoji-text"
                  alt={emojis[2].name}
                  onClick={this.onChangeText}
                />
                <p className="name-des">{emojis[2].name}</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    )
  }
}
export default Feedback
