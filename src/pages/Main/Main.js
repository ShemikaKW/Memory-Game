import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Nav from "../../components/Nav";
import { Container } from "../../components/Grid";
import './Main.css'

class Main extends Component {

    state = {
        score: '0',
        topScore: '0'
    };

    componentDiMount() {
        this.loadDefaultScore();
    };

    loadDefaultScore = () => {
        this.setState({
            score: '0',
            topScore: '0'
        });
    };

    render() {
        return (
            <Container fluid>
                <Nav />
                <Jumbotron />
            </Container>
        )
    };
}

export default Main;