import React from 'react';
import {Row, Col} from 'antd';
import './MainBanner.scss';

export default function MainBanner(){
    return(
        <div className="main-banner">
            <div className="main-banner__dark" />

            <Row>
                <Col lg={4}/>
                <Col lg={16}>
                    <h2>Espacios increíbles <br/> que dan vida a tu hogar </h2>
                    <h3>Descubre VK y recíbelo en casa</h3>
                </Col>
                <Col lg={4}/>
            </Row>

        </div>
    )
}
