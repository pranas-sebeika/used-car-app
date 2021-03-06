import React from "react";
import {Image, Row, Col, Container, Button} from "react-bootstrap";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import {useHistory} from "react-router-dom";
import notfound from "../../assets/noContent.gif";


const NotFound = () => {
    const history = useHistory();

    return (
        <Container>
            <Button onClick={() => history.push("/coins")}>
                <ArrowBackIosIcon/>
            </Button>
            <Row className="justify-content-md-center">
                <h1><strong>Resource not found</strong></h1>
            </Row>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <Image src={notfound}/>
                </Col>
            </Row>
        </Container>
    )
}

export default NotFound;
