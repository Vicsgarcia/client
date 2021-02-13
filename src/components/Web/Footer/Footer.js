import React from 'react';
import {Layout, Row, Col } from 'antd';
import MyInfo from './MyInfo';
import NavigationFooter from './NavigationFooter';
import Newsletter from '../Newsletter';


import './Footer.scss';


export default function footer() {

    const {Footer} = Layout;


    return (
        <Footer className="footer">
            <Row>
                <Col md={2}/>
                <Col md={20}>
                    <Row>
                        <Col md={8}><MyInfo/></Col>
                        <Col md={8}><NavigationFooter/></Col>
                        <Col md={8}><Newsletter/></Col>
                    </Row>
                    <Row className="footer__copyright">
                        <Col md={12}>© ALL RIGHTS RESERVED 2020</Col>
                        <Col md={12}>VK WEBSITES</Col>
                        
                    </Row>
                </Col>
                <Col md={2}/>
            </Row>
        </Footer>
    )
}
