import React, { Component } from 'react';
import {
    Button,
    Container,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';

const lookUpStyle = {
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    padding: '10px',
    backgroundColor: '#efefef',
    borderRadius: '5px',
    height: '100%',
    width: '100%',
    color: 'black'
};

class QuickSearch extends Component {

    render() {
        return(
            <Container style={lookUpStyle}>
                <h4 style={{marginTop: '1rem'}}>Search trailers based on location</h4>
                <Form style={{marginTop: '2rem', marginBottom: '1rem'}}>
                    <FormGroup>
                        <Label for="rentCity">Location:</Label>
                            <Input 
                                type="text"
                                name="city"
                                id="rentCity"
                                />
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
                    <Button block style={{background: '#ff3b3f'}}><i className="fas fa-search"></i> Search</Button>
                </Form>
            </Container>       
        );
    }
}


export default QuickSearch;