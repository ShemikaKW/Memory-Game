import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Nav from "../../components/Nav";
import { Row, Container } from "../../components/Grid";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import Dog from "../../Dog.json";
 
import './Main.css'

class Main extends Component {

    state = {
        dogs: [],
        score: 0,
        topScore: 0,
        selectedDog: [], 
    };

    componentDidMount() {
        this.loadDefaultScore();
    };

    loadDefaultScore = () => {
        this.setState({
            dogs: Dog,
            score: 0,
            topScore: 0,
            selectedDog: []
        });
    };


    imgClickFunc = (id) => {
        if(this.state.selectedDog.indexOf(id) === -1) {
            
            let newScore = this.state.score + 1;
            this.state.selectedDog.push(id);
  
            if(this.state.score >= this.state.topScore) {
                this.setState({score: newScore, topScore:newScore});
            } else {
                this.setState({score: newScore})
            };
            this.doShuffleCard();
        } else {
            this.setState({score: 0, selectedDog: []})
        }
    };

    shuffleCards = (arr) => {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    };

    doShuffleCard = () => {
        let shuffledDog = this.shuffleCards(Dog);
        this.setState({
            dogs: shuffledDog
        })
    };

    render() {
        return (
            <Container fluid>

                <Nav score = {this.state.score} topScore = {this.state.topScore}  
                brand = {'Clicky Game'} navText = 'Click an image to begin!'/>

                <Jumbotron title = {'Clicky Game'} 
                subLine = {`Click on an image to earn points, but don't click on any more than once!`} />

                <Container>
                <Row>
                {this.state.dogs.map(dog => {
                    return (<Card 
                        key = {dog.id} 
                        id = {dog.id} 
                        url = {dog.url}
                        imgClickFunc = {this.imgClickFunc}
                    name ={dog.name} /> )
                })}
                </Row>
                </Container>

                <Footer />

            </Container>
        )
    };
}

export default Main;