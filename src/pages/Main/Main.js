import React, { Component } from "react";
import Nav from "../../components/Nav";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";

// import DeleteBtn from "../../components/DeleteBtn";
// import { List, ListItem } from "../../components/List";
// import { Input, TextArea, FormBtn } from "../../components/Form";


class Main extends React.Component {

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
            <Nav> 
            <Jumbotron />
            </Nav>
        )};
}

export default Main;