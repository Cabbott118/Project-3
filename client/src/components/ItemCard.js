import React, { Component } from 'react';
import {
    Button,
    Card,
    CardText,
    CardBody,
    CardLink,
    CardTitle,
    CardSubtitle,
    Row
} from 'reactstrap';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';

const cardStyle = {
    width: '100%',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)'
}

class ItemCard extends Component {

    static propTypes = {
        getItems: PropTypes.func.isRequired,
        item: PropTypes.object.isRequired,
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
                    <Card key={t._id} style={cardStyle}>
                        <CardBody>
                            { this.props.isAuthenticated ? <Button
                                className='remove-btn float-right'
                                outline
                                color='danger'
                                size='sm'
                                onClick={this.onDeleteClick.bind(this, t._id)}
                                // Getting ID to delete item from key={id} above
                                >&times;
                            </Button> : null }
                            <CardTitle><span><h5 className='text-center'>{t.brand}</h5></span></CardTitle>
                            <CardSubtitle><span><h5 className='text-center'>{t.trailer_type}</h5></span></CardSubtitle>
                      
                        </CardBody>
                            <img width='100%' src='https://via.placeholder.com/150' alt='Trailer Img' />
                        <CardBody>
                            <CardTitle className='text-center mb-3'><h5>Additional Information</h5></CardTitle>
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
        return (
            <Row>
                {trailer}
            </Row>
        );
        
    }
}

const mapStateToProps = (state) => ({
    item: state.item,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(
    mapStateToProps,
    { getItems, deleteItem })
    (ItemCard);