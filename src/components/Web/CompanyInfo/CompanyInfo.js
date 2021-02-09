import React from 'react';
import './CompanyInfo.scss';
import {Row, Col, Card} from 'antd';
import fondo3 from '../../../assets/img/jpg/fondo3.jpg';


export default function CompanyInfo() {
    return (

        <Row className="company-info">

            <div className="company-info-banner">
                <Row> 
                    <Col lg={24}>
                        <h2>New Spring Season '21 </h2>
                        <h3>Novedades y nuevas colecciones</h3>
                    </Col>   
                </Row>
            </div>
            <Col lg={24}>
                <Row className="row-cards">
                    <Col md={8}>
                        <CardInfo
                            title="Salon y Comedor"
                            description=
                            "Combina los diferentes colores de nuestra cristalería para crear juegos de mesa más divertidos. Descubre las novedades de la colección"
                            
                        />
                    </Col>
                    <Col md={8}>
                        <CardInfo
                            title="Cocina"
                            description=
                            "Un lugar para cocinar, reunirse y compartir, la cocina siempre será el corazón del hogar. Descubre las novedades de la colección de Primavera"
                            
                        />
                    </Col>
                    <Col md={8}>
                        <CardInfo
                            title="Dormitorio"
                            description=
                            "Interiores atemporales. Sencillo y sofisticado. Descubre más información sobre los elementos esenciales del dormitorio"
                            
                        />
                            
                    </Col>
                </Row>
            </Col>
            
          
        </Row>
    )
}

function CardInfo(props){
    const { title, description, image } = props;
    const { Meta } = Card;

    return(
        <Card className="company-info__card">
           
            <Meta 
                title={title}
                description ={description}
                
            />

        </Card>
    )
}


