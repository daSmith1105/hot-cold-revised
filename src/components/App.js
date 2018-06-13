import React from 'react';
import './App.css';
import Header from './header';
import Title from './title';
import Feedback from './feedback';
import Form from './form';
import GuessCounter from './guessCounter';
import GuessHistory from './guessHistory';
import HowTo from './howTo';
import UniqueNumberAlert from './uniqueNumberAlert';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.initialState = {
            secret: Math.floor(Math.random() * 101),
            guess: '',
            guessArray: [],
            inputVal: '',
            feedback: '',
            displayHelp: false,
            restartGame: false,
            uniqueModal: false
        }

        this.state = this.initialState;

        this.handleHelpClick = this.handleHelpClick.bind(this);
        this.handleRestartClick = this.handleRestartClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

        handleHelpClick() {
            this.setState({
                displayHelp: true
            })
            this.setState({
                displayHelp: !this.state.displayHelp
            })
        }

        handleRestartClick() {
            this.setState(this.initialState);
            this.setState({
                secret: Math.floor(Math.random() * 101)
            })
        }

        handleChange(event) {
            this.setState({
                guess: event.target.value,
                inputVal: event.target.value
            });
        }

        handleSubmit(event) {
            event.preventDefault();
            let guessHistory = this.state.guessArray.slice();
            let currentGuess = this.state.guess;

            if (guessHistory.includes(currentGuess) || this.state.inputVal.length < 1) {
               this.setState({
                    uniqueModal: true
               })
            } else {
                guessHistory.push(currentGuess);
                //handles feedback update in onSubmit as well
                let status = '';
                let secret = this.state.secret;
                let proximity = Math.abs(secret - currentGuess);

                    if (proximity  >= 50) {
                        status = 'Super Cold.';
                    } else if (proximity  >= 40) {
                        status = 'Very Cold.';
                    } else if (proximity  >= 30) {
                        status = 'Cold.';
                    } else if (proximity  >= 20) {
                        status = 'Luke Warm.';
                    } else if (proximity  >= 15) {
                        status = 'Warm.';
                    } else if (proximity  >= 10) {
                        status = 'Nearly Hot.';
                    } else if (proximity  >= 5) {
                        status = 'Hot.';
                    } else if (proximity  >= 1) {
                        status = 'Super Hot!';
                    } else {
                        status = 'You got it! Click NEW GAME to play again';
                    } 

                this.setState({
                    guessArray: guessHistory,
                    inputVal: '',
                    feedback: status
                });
            }
        }

        handleCloseModal() {
            this.setState({
                uniqueModal: false,
                inputVal: ''
            });
        }

    render() {

        return (
                <div>   
                    {this.state.displayHelp && <HowTo helpClick={this.handleHelpClick}/>}

                    {this.state.uniqueModal && <UniqueNumberAlert value={this.state.guess} closeModal={this.handleCloseModal} />}

                    {this.state.restartGame && this.handleRestartClick()}

                    <div className = "App">
                        <Header helpClick={this.handleHelpClick} restartClick={this.handleRestartClick} />
                        <Title />
                        <Feedback feedback={this.state.feedback} />
                        <Form handleChange={this.handleChange} handleSubmit={this.handleSubmit} inputVal={this.state.inputVal} />
                        <GuessCounter currentCount={this.state.guessArray} />
                        <GuessHistory array={this.state.guessArray} />
                    </div>
                </div>
            )
        }
    }
         