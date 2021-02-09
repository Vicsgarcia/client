import React from 'react';
import {Row, Col, Card, Button} from 'antd';
import {Link} from 'react-router-dom';
import product1 from '../../../assets/img/jpeg/product1.jpg';
import product2 from '../../../assets/img/jpeg/product2.jpg';
import product3 from '../../../assets/img/jpeg/product3.jpg';
import product4 from '../../../assets/img/jpeg/product4.jpg';
import product5 from '../../../assets/img/jpeg/product5.jpg';
import product6 from '../../../assets/img/jpeg/product6.jpg';
import product7 from '../../../assets/img/jpeg/product7.jpg';
import product8 from '../../../assets/img/jpeg/product8.jpg';


import "./HomeProducts.scss";



export default function HomeProducts() {
    return (
        <Row className="home-products" >
            <Col lg={24} className="home-products__title">
                <h2>Descubre la nueva Primavera</h2>
            </Col>
            <Col lg={1}/>
            <Col lg={22}> 
                <Row className="row-products">
                    <Col md={6}>
                        <CardProduct
                            image={product1}
                            title ="Cocina"
                            description="Lo mejor para la casa"
                            link="/products/1"
                        />
                    </Col>
                    <Col md={6}>
                        <CardProduct
                            image={product2}
                            title ="Cocina"
                            description="Lo mejor para la casa"
                            link="/products/2"
                        />
                    </Col>
                    <Col md={6}>
                        <CardProduct
                            image={product3}
                            title ="Cocina"
                            description="Lo mejor para la casa"
                            link="/products/3"
                        />
                    </Col>
                    <Col md={6}>
                        <CardProduct
                            image={product4}
                            title ="Cocina"
                            description="Lo mejor para la casa"
                            link="/products/4"
                        />
                    </Col>    
                </Row>
                <Row className="row-products">
                    <Col md={6}>
                        <CardProduct
                            image={product5}
                            title ="Cocina"
                            description="Lo mejor para la casa"
                            link="/products/5"
                        />
                    </Col>
                    <Col md={6}>
                        <CardProduct
                            image={product6}
                            title ="Cocina"
                            description="Lo mejor para la casa"
                            link="/products/6"
                        />
                    </Col>
                    <Col md={6}>
                        <CardProduct
                            image={product7}
                            title ="Cocina"
                            description="Lo mejor para la casa"
                            link="/products/7"
                        />
                    </Col>
                    <Col md={6}>
                        <CardProduct
                            image={product8}
                            title ="Cocina"
                            description="Lo mejor para la casa"
                            link="/products/8"
                        />
                    </Col>    
                </Row>
            </Col>
            
            <Col lg={1}/>

            <Col lg={24} className="home-products__more">
                <Link to="/products">
                    <Button>Ver más</Button>
                </Link>
            </Col>
           

        </Row>
    )
}


function CardProduct(props){

    const {image, title, description, link} = props;
    const { Meta } = Card;

    return(
        <a href={link} target="_self">
            <Card
                className="home-products__card"
                cover={<img src={image} alt={title} />}
                actions={[<Button>Ver</Button>]}
                
            >
                <Meta title={title} description={description}/>
            </Card>

        </a>    
        )

}