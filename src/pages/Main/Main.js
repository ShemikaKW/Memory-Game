import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Nav from "../../components/Nav";
import { Row, Container } from "../../components/Grid";
import Card from "../../components/Card";
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

    shuffleCards = () => {

    }

    render() {
        return (
            <Container fluid>

                <Nav score = {this.state.score} topScore = {this.state.topScore}  
                brand = {'Clicky Game'} navText = 'Click an image to begin!'/>

                <Jumbotron title = {'Clicky Game'} 
                subLine = {`Click on an image to earn points, but don't click on any more than once!`} />

                <Row>
                {this.state.dogs.map(dog => {
                    return (<Card key = {dog.id} id = {dog.id} url = {dog.url} name ={dog.name}/> )
                })}
                </Row>

            </Container>
        )
    };
}

export default Main;