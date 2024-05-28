import React, { useEffect } from 'react'
import {Button, Col, Container, FormControl, FormGroup, FormLabel, Row} from "react-bootstrap";
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import html2canvas from "html2canvas";

import pics from "../data/data.jsx";
export default function CaptureComponent() {
    const params = useParams();
    const cardId = params.id.split("-")[1];
    const cardLetter = params.id.split("-")[0];
    const cardData = pics.find((element)=> {return element.no == cardId});
    const data = cardData[cardLetter];
    const [from , setFrom] = useState("");
    const [to , setTo] = useState("");
    const captureAsJPG = ()=>{
        const element = document.getElementById("capture");
        html2canvas(element).then((canvas)=>{
            const imgData = canvas.toDataURL("image/jpeg");
            const link = document.createElement("a");
            link.href = imgData;
            link.download = "capture.jpg";
            link.click();
        })
    }
  return (
    <Container fluid className='w-50 py-5'>
        {/* Input Row */}
        <Row>
        <Col className='col-12 rtl'>
            <FormGroup >
                <FormLabel>اهداء من</FormLabel>
                <FormControl type='text' onChange={(e)=>{setFrom(e.target.value)}} />
            </FormGroup>
        </Col>
        {true?
        <Col className='col-12 rtl'>
        <FormGroup >
            <FormLabel>اهداء الي</FormLabel>
            <FormControl type='text' onChange={(e)=>{setTo(e.target.value)}} />
        </FormGroup>
        </Col>
        :null}
        </Row>
        {/* Canvas Row */}
        <Row >
        <Col id='capture' className='col-12 mt-4 bg-warning rounded px-5 py-5'
        style={{
            backgroundImage: `url(${aid})`
        }}
        >
            <Row  className='justify-content-center align-items-center'>
                <Row className='text-center fw-bold fs-3'>
                <p>{data.title}</p>
                </Row>
            
                <Row className='bg-white rounded my-2 text-end fw-bold'>
                    <p className='rtl'> من: {from}</p>
                </Row>
                <Row className='col-12 justify-content-center text-center w-75'>
                <p className=' fs-3'>{data.body}</p>
                </Row>
                {true?
                <Row className='bg-white rounded my-2 text-end fw-bold'>
                    <p className='rtl'> الي: {to}</p>
                </Row>:null}
            </Row>

        </Col>
        </Row>
        {/* Save Button  */}
        <Row>
            <Button variant='success' className='mt-3 py-2' onClick={captureAsJPG}>
                حفظ
            </Button>
        </Row>
    </Container>
  )
}
