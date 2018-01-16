import React, { Component } from 'react'
import styled from "styled-components"
import uuid from "uuid"

const AppContainer = styled.div`
  text-align:center;

`
const QuestionsContainer = styled.div`
  text-align:center;

`

const NextQuestionButton = styled.button`
  margin:5px;
  
`

const ResetButton = styled.button`
  margin:5px;

`

const Questions = [
  'Think of the person YOU work with (or have worked with) who you would describe as one of the more "difficult" people.',
  'Why are they difficult?  ',
  'What is the "difficult" behavior?',
  'Why do you think they engage in this behavior?  (avoid personality or "because they are difficult")',
  'Have you identified an underlying motive, concern, value, or fear?  If not, go deeper... Why?  ',
  'Now that you have identified their underlying issue/interest, how can you deal with it?  Go around it?  Confront it?  Appease it?',
  'Why do you think this particular behavior is so frustrating for you?  What does it say about YOU that you find this behavior to be "difficult"?',
]

class App extends Component {
  constructor(props){
    super(props);

    this.state = {

      "current_leg":0

    }

    this.nextQuestion = this.nextQuestion.bind(this)
    this.resetQuestion = this.resetQuestion.bind(this)
  }

  nextQuestion(event){
    if(this.state.current_leg < Questions.length){

      this.setState({
        "current_leg":this.state.current_leg+1
      })

    }
  }

  resetQuestion(event){
    this.setState({
      "current_leg":0
    })
  }

  render() {
    let disabled = false
    if(this.state.current_leg === Questions.length-1){

      disabled = true;

    }

    return (
      <AppContainer>

        <QuestionsContainer>

          {Questions.map((question, index)=>{
            return  index <= this.state.current_leg ? <Question key={uuid.v4()} question={question} /> : ''
          })}

        </QuestionsContainer>


        <NextQuestionButton className="btn btn-md btn-primary" onClick={this.nextQuestion} disabled={disabled?"true":""}>
          {disabled ? "Well Done! No More Questions":"Next Question"}
        </NextQuestionButton>
        <ResetButton className="btn btn-md btn-danger" onClick={this.resetQuestion}>
        Reset
        </ResetButton>
      </AppContainer>
    );
  }
}


const QuestionContainer = styled.div`
  border:1px solid grey;
  padding:10px;
  margin:5px;  

  font-size:14px;
  font-weight:bold;

  background: -webkit-linear-gradient(-113deg, rgb(0, 93, 106), rgb(18, 143, 38));
  background: linear-gradient(-113deg, rgb(0, 93, 106), rgb(18, 143, 38));

  color:white;

  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
`

class Question extends Component{
  

  render(){

    return(<QuestionContainer>

      {this.props.question}
      
    </QuestionContainer>)

  }
}

export default App;
