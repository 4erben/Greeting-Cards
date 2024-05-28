import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import pics from '../data/data';
import a1 from "../assets/card/1-a.jpg";
import b1 from "../assets/card/1-b.jpg";
import { Link } from 'react-router-dom';
export default function CardsPage() {
    const params = useParams();
    const id = params.id;
    const cardId = params.id.split("-")[1];
    const cardLetter = params.id.split("-")[0];
    const cardData = pics.find((element)=>element.no == id);
    console.log(cardData);
  return (
    <Container>
        <Row className='justify-content-center align-items-center my-2'>
        <Link className='my-2' to={`/card/a-${id}`}>
            <img src={cardData.a} className='img-fluid card mx-auto'/>
        </Link>
        <Link className='my-2' to={`/card/b-${id}`}>
        <img src={cardData.b} className='img-fluid card mx-auto'/>
        </Link>
        </Row>
    </Container>
  )
}
