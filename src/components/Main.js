//bonus challenge: do it in TypeScript - npm install. Google 'create react app typescript' --save typescript @types/node @types/react @types/react-dom @types/jest

import React, { Component } from 'react';
import logo from '../logo.svg';
// import './App.css';
import quizQuestions from '../redux/questionsArray';
import Quiz from './Quiz';
import Results from './Results';

class Main extends Component {
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
      tempValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = tempValue;      
    }
    //return the newly ordered/mutated array
    return array;
  }

  setUserAnswer( answer ) {
    //setting state with a function rather than an object to capture the previous state.
    this.setState( state => ({
      answersCount: {
        ...state.answersCount,
        //updating the answerCount
        [answer]: (state.answersCount[answer] || 0) + 1
      },
      answer: answer
    }))
  }

  setNextQuestion() {
    //increment counter and questionId
    let counter = this.state.counter + 1;
    let questionId = this.state.questionId + 1;
    
    //updating state with increased values, and updating quizQuestions with the incremented counter value
    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answer: ''
    });
  }

  handleAnswerSelected( event ) {
    //the user's answer will be the value of the button that they click. React captures this information with the event object. the relevant information for this instance is stored uncer currentTarget as the value. I'm passing this information on to the setUserAnswer function.
    let answer = event.currentTarget.value
    this.setUserAnswer( answer );
    if( this.state.questionId < quizQuestions.length ) {
      setTimeout( () => this.setNextQuestion(), 333 )
    } else {
      //whatever is returned from getResults() will be what's passed to setResults()
      setTimeout( () => this.setResults( this.getResults() ), 333)
    }
  }

  getResults() {
    let answersCount = this.state.answersCount;
    let answersCountKeys = Object.keys(answersCount);
    let answersCountValues = answersCountKeys.map( key => answersCount[key] );
    let maxAnswerCount = Math.max.apply( null, answersCountValues );

    //filtering the key with the highest answerCount value. each answer the user clicks counts as one
    
    let result = answersCountKeys.filter( key => answersCount[key] === maxAnswerCount);

    return result
  }

  setResults( result ) {
    //the simple logic for now only sees which Beatle the user matched with the most and passes that 
    if ( result.length === 1 ) {
      this.setState( {result: result[0]} );
    } else {
      //if there is a tie, then the result (for now) will be 'undetermined'
      this.setState( {result: 'Undetermined'} );
    }
  }

  renderQuiz(){
    return (
      <Quiz 
      answer={this.state.answer}
      answerOptions={this.state.answerOptions}
      questionId={this.state.questionId}
      questionTotal={quizQuestions.length}
      onAnswerSelected={this.handleAnswerSelected}
      question={this.state.question}
      counter={this.state.counter}
    />
    );
  }

  renderResults() {
    return (
      <Results quizResults={this.state.result} />
    )
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Beatleology Quiz</h1>
        </div>
        {this.state.result ? this.renderResults() : this.renderQuiz()}
      </div>
    )
  }
}

export default Main;