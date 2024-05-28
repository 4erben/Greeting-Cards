import React from 'react'
import { Col, Row } from 'react-bootstrap'
import {Link} from "react-router-dom";
import pics from "../data/data.jsx";



export default function HomePage() {
  return (
    <Row className='w-50 mx-auto'>
    {
        pics.map((p)=>{
            return(
                <Col lg={3} className='p-4' key={p.no}>
                <Link to={`/card/${p.no}`}>
                    <img src={p.pic} className='img-fluid w-100' />
                </Link>
                </Col>
            )
        })
    }
    
    </Row>
  )
}