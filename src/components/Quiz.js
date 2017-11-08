import React, {Component} from 'react'
import Question from './Question'
var axios = require('axios')

class Quiz extends Component {

  constructor() {
    super()
    this.state = {
      quiz: {},
      step: 0,
      answers: []
    }
  }

  componentDidMount() {
    axios
      .get('./questions.json')
      .then((result) => {
        this.setState({quiz: result.data})
      })
  }

  onAnswerSelected(event) {
    let inputElements = document.getElementsByClassName("question")
    let checkedValue = []
    for (let i = 0; i < inputElements.length; i++) {
      if (inputElements[i].checked) {
        checkedValue.push(inputElements[i].value)
      }
    }
    let questionName = this.state.quiz.questions[this.state.step].name
    let obj = {
      [questionName]: checkedValue
    };

    let list = [
      ...this
        .state
        .answers
        .slice(0, this.state.step),
      obj
     
    ]
    this.setState({'answers': list})
  }

  onAnswerSubmit(event) {
    let moveToNextStep = true;
    if (this.state.quiz.questions.length === this.state.step + 1) {
      let confirm = window.confirm('Are you sure to submit your answers?')
      if(confirm === true) {
        moveToNextStep = true
      } else {
        moveToNextStep = false
      }
    }

    if(moveToNextStep === true) {
      if (this.state.step < this.state.quiz.questions.length) {
        this.setState({
          'step': this.state.step + 1
        })
      }
    } 
  }

  render() {
    const {quiz, step} = this.state
    let completed = (quiz.questions && (step === quiz.questions.length))
      ? true
      : false
    let numberOfQuestions = quiz.questions
      ? quiz.questions.length
      : 0

    return (
      <div className="content-block">

        {completed
          ? <div className="alert alert-success">
              <h3 className="text-center">Thank you for submiting your answers!</h3>
              <h4 className="text-center">Here is collected answers keys in JSON Format: {JSON.stringify(this.state.answers)}</h4>
            </div>
          : <div className="form-container">
            <h2>Question {step + 1}
              of {numberOfQuestions}</h2>
            {quiz.questions && step < numberOfQuestions
              ? <Question
                  question={quiz.questions[step]}
                  numberOfQuestions={numberOfQuestions}
                  step={step + 1}
                  onAnswerSelect={(event) => this.onAnswerSelected(event)}
                  onAnswerSubmit={(event) => this.onAnswerSubmit()}/>
              : ''}
          </div>
}
      </div>
    )
  }
}

export default Quiz;