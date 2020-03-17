import React, { Component } from 'react';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardLink,
    CardTitle,
    CardSubtitle,
    Container,
    Row
} from 'reactstrap';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';

const cardStyle = {
    width: '100%',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)'
};

const noDisplayStyle = {
    color: '#888888',
    textAlign: 'center',
    marginTop: '2rem'
}

class ItemCard extends Component {

    static propTypes = {
        getItems: PropTypes.func.isRequired,
        item: PropTypes.object.isRequired,
        auth: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool
    };

    componentDidMount() {
        this.props.getItems();
    }

    onDeleteClick = (id) => {
        this.props.deleteItem(id);
    }

    render() {
        const { items } = this.props.item;
        console.log('TRAILERS', items);

        const trailer = items.map(t => {
            return(
                <div key={t._id} style={{margin: '5px'}}>  
                    <Card  style={cardStyle}>
                    <CardImg top width='100%' src='https://via.placeholder.com/150' alt='Trailer Img' />
                        <CardBody>
                            <CardTitle><span><h5 className='text-left'>{t.brand}</h5></span></CardTitle>
                            <CardSubtitle><span><h5 className='text-left'>{t.trailer_type}</h5></span></CardSubtitle>
                            <CardText>Deck Dimensions: {t.deck_dimensions}</CardText>
                            <CardText>Total Weight Capacity: {t.weight}</CardText>
                            <CardText>Price (per Day): ${t.price}.00</CardText>
                            <CardLink href='#'>Card Link</CardLink>
                            <CardLink href='#'>Another Link</CardLink>
                        </CardBody>
                    </Card>  
                </div>
            );
        });

        const noDisplay = (
            <Container>
                <h1 style={noDisplayStyle}>Sorry, we've got no results to display at this time.</h1>
            </Container>
        );

        return (
            <Row>
                { items.length === 0 ? noDisplay : trailer }
            </Row>
        );
        
    }
}

const mapStateToProps = (state) => ({
    item: state.item,
    auth: state.auth,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(
    mapStateToProps,
    { getItems, deleteItem })
    (ItemCard);