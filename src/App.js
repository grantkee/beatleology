//bonus challenge: do it in TypeScript - npm install. Google 'create react app typescript' --save typescript @types/node @types/react @types/react-dom @types/jest

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Question from './components/Question';
import quizQuestions from './redux/state';

class App extends Component {
  constructor ( props ) {
    super( props );

    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      answersCount: {},
      result: ''
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);

  }

  //life cycle event that will launch when the component "mounts" (inserted into tree). Once the state is set, render() will execute only once with the updated state change
  componentDidMount() {
    let shuffledAnswers = quizQuestions.map(question => this.shuffleArray(question.answers));

    this.setState({
        question: quizQuestions[0].question,
        answerOptions: shuffledAnswers[0]
    });
  }

  //creating the function that will shuffle the order of answers for the quiz
  shuffleArray( array ) {
    let currentIndex = array.length, tempValue, randomIndex;
    
    console.log(`current index: ${currentIndex}, length: ${array.length}, tempVal: ${tempValue}, randomIndex: ${randomIndex}`)

    while ( 0 !== currentIndex ) {
      //until the current index reaches 0, random index is assigned a value using Math.random. Rounding down with Math.floor()
      randomIndex = Math.floor( Math.random() * currentIndex );
      currentIndex -= 1;

      //then swap with current element
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;      
    }
    //return the newly ordered/mutated array
    return array;
  }

  handleAnswerSelected( e ) {
    this.setUserAnswer(e.currentTarget.value);
    if( this.state.questionId < quizQuestions.length ) {
      setTimeout( () => this.setNextQuestion(), 333 )
    } else {
      //do nothing
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Beatleology Quiz</h1>
        </div>
        <Quiz 
          answer={this.state.answer}
          answerOptions={this.state.answerOptions}
          questionId={this.state.questionId}
          questionTotal={quizQuestions.length}
          onAnswerSelected={this.handleAnswerSelected}
        />
      </div>
    )
  }
}

export default App;