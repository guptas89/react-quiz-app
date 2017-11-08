import React from 'react'
import Radio from './Radio'
import Checkbox from './Checkbox'
const Question = (props) => (

  <div className="form-group">
    <h3>{props.question.question}</h3>
    {(props.question.type === 'multiple')
      ? <Checkbox
          setName="question"
          options={props.question.answers}
          controlFunc={props.onAnswerSelect}/>
      : <Radio
        setName="question"
        options={props.question.answers}
        controlFunc={props.onAnswerSelect}/>
}
<div>
    <button className = "btn answer-submit" onClick={props.onAnswerSubmit}>{(props.numberOfQuestions === props.step)
        ? 'Submit'
        : 'Next'}</button>
        </div>
  </div>
)

export default Question
