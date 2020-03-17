import React, { Component } from 'react';
import {
    Button,
    Container,
    Col,
    Row,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';

const containerStyle = {
    background: 'rgba(0, 0, 0, .8)',
    height: '92vh',
    width: '100%',
    paddingTop: '15px'
};

const lookUpStyle = {
    padding: '10px',
    backgroundColor: '#efefef',
    borderRadius: '5px',
    height: '100%',
    width: '100%',
    color: 'black'
}

class LandingPage extends Component {

    render() {
        
        return(
            <div style={containerStyle}>
                <Container>
                    <div>
                        <h1 className='text-center'> 
                            A MODERN SOLUTION FOR ALL YOUR TRAILER NEEDS
                        </h1>
                    </div>

                <Container>
                    <Row>
                        <Col>
                    <h4 style={{
                            // marginTop: '3rem',
                            color: '#888888',
                            fontWeight: 'bold',
                            paddingTop: '1rem'
                        }}>
                            Check out what we currently have 
                            <a href='/listings'
                                style={{
                                    textDecoration: 'none', 
                                    color: '#ff3b3f'
                                }}><b> listed</b></a>,
                                or search for something
                                specific.
                    </h4>

                    </Col>

                    <Col>
                    <div className='quickSearch' style={lookUpStyle}> 
                    <Container>
                        <h4 style={{marginTop: '1rem'}}>Search trailers based on location</h4>
                    <Form style={{marginTop: '2rem', marginBottom: '1rem'}}>
                        <FormGroup>
                            <Label for="rentCity">Location:</Label>
                                <Input type="text" name="city" id="rentCity"/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="pickupDate">Pick Up On:</Label>
                                <Input
                                    type="date"
                                    name="date"
                                    id="pickupDate"
                                    placeholder="date placeholder"
                                />
                        </FormGroup>
                        <FormGroup>
                            <Label for="returnDate">Return On:</Label>
                                <Input
                                    type="date"
                                    name="date"
                                    id="returnDate"
                                    placeholder="date placeholder"
                                />
                        </FormGroup>
                        <Button>Submit</Button>
                    </Form>
                    </Container>
                    </div> 
                    </Col>
                    </Row>
                </Container>
                </Container>
            </div>
        );
    };
};

export default LandingPage;