import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


import meter1 from '../assets/images/meter1.svg'
import meter2 from '../assets/images/meter2.svg'
import meter3 from '../assets/images/meter3.svg'

import colorSharp from '../assets/images/color-sharp.png'

export const Skills = () => {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skills" is="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>When I learn a skill, I try so hard to become<br /> one of the best at it. See some of my skills below.</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">

                                <div className="item">
                                    <img src={meter1} alt="Image" />
                                    <h5>Web development</h5>
                                </div>

                                <div className="item">
                                    <img src={meter3} alt="Image" />
                                    <h5>Software Enginner</h5>
                                </div>

                                <div className="item">
                                    <img src={meter2} alt="Image" />
                                    <h5>UI/UX Designer</h5>
                                </div>

                                <div className="item">
                                    <img src={meter1} alt="Image" />
                                    <h5> Logo Designer </h5>
                                </div>

                                <div className="item">
                                    <img src={meter2} alt="Image" />
                                    <h5> IT Manager </h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} />
        </section>
    )
}