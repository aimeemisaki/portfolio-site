import { Image, Row, Col, Container } from 'react-bootstrap';
import React from 'react';

const Home = () => {
    return (
        <>
        <Container fluid className="intro">
            <Row>
                <Col>
                    <Container>
                        <h1>AIMEE MISAKI IS A POLYGLOT FULL-STACK SOFTWARE ENGINEER</h1>
                    </Container>
                </Col>
                <Col>
                    <Image 
                    alt='portrait'
                    src='https://i.ibb.co/vjFdVRr/portfolio-image1.png'
                    width={600}
                    />
                </Col>
            </Row>
        </Container>
        <Container fluid style={{backgroundColor: 'white'}}>
            <Row>
                <Col>
                <h1>HI, I'M AIMEE</h1>
                <h1>SALUT, JE M'APELLE AIMEE</h1>
                <h1>こんにちは、アイミと申します</h1>
                <h1>HALLO, ICH HEIßE AIMEE</h1>
                <p>Passionate to help others and understand their needs, I became a full stack software engineer, so I could build code that leads to positive, tangible results for all end-users. Using my communication skills and stragetic analysis capabilities, I strive to optimize web development both in front and back end and work efficiently with my team.</p>
                <p>In my past lives, I worked in social services, assisting refugees to find shelter and employment, in environmental research, analyzing sustainability projects for the European Union, and as a  </p>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Home