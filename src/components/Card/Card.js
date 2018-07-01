import React from 'react';
import { Col } from "../../components/Grid";

import './Card.css'

const Card = props => (
        <Col size="md-4">
            <img className = 'cardImg rounded' src={props.url} alt={props.id} key={props.id} name={props.name}/>
        </Col>
);

export default Card;
