import React ,{useEffect,useRef, useState} from 'react'
import { useParams } from 'react-router-dom';
import { Button, Col, Container, FormControl, FormGroup, FormLabel, Row } from 'react-bootstrap';
import pics from "../data/data.jsx";
import photo from "../assets/card/2-a.jpg";
import html2canvas from "html2canvas";

export default function ImageEditor() {
    const params = useParams();
    const cardId = params.id.split("-")[1];
    const cardLetter = params.id.split("-")[0]
    const cardData = pics.find((element)=>element.no == cardId);


    const canvasRef = useRef(null);
    const title_1_x =1050;
    const title_1_y =500;
    const title_2_x =1050;
    const title_2_y =1650;
    const [from , setFrom] = useState("");
    const [to , setTo] = useState("");
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const img = new Image();
            img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0,canvas.width,canvas.height);
            ctx.font = "50px Comic Sans MS";
            ctx.fillStyle = "black";
            ctx.fillText(to,title_1_x,title_1_y)
            ctx.fillText(from,title_2_x,title_2_y)
        };
        img.src = cardData[cardLetter]; 
    }, [to,from]);

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
    <Container>
        <Row>
        <Col className='col-12 rtl'>
            <FormGroup >
                <FormLabel>اهداء من</FormLabel>
                <FormControl type='text' onChange={(e)=>{setFrom(e.target.value)}} />
            </FormGroup>
        </Col>
        {cardData.double?
        <Col className='col-12 rtl'>
        <FormGroup >
            <FormLabel>اهداء الي</FormLabel>
            <FormControl type='text' onChange={(e)=>{setTo(e.target.value)}} />
        </FormGroup>
        </Col>
    :null}
        
        </Row>
        <canvas  id="capture" ref={canvasRef}  dir="rtl" style={{ maxWidth: '100%' }} ></canvas>
         {/* Save Button  */}
         <Row>
            <Button variant='success' className='mt-3 py-2 rtl fw-bold' onClick={captureAsJPG}>
                حفظ
            </Button>
        </Row>
        
    </Container>
  )
}