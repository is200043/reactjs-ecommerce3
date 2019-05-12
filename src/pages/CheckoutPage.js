import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
    Box,
    Image,
    Heading,
    Text
} from 'grommet'

class CheckoutPage extends Component {
    componentDidMount() {
        this.props.getCartItems();
    }
    render() {
        const {
            cartItems
        } = this.props
        return (
            <Box direction="row" pad="small">
                <Box width="medium">
                    {
                        cartItems.map((product) => (
                            <Box
                                direction="row"
                                basis="medium"
                                pad="small"
                            >
                                <Box>
                                    <Box>
                                        <Box height="small">
                                            <Image fit="cover" src={product.image} />
                                        </Box>
                                    </Box>
                                    <Box align="center">
                                        <Heading textAlign="center" level={4} margin={{ vertical: 'xsmall' }}>
                                            {product.name}
                                        </Heading>
                                        <Text textAlign="center">
                                            {product.quantity} x {product.amount} = {product.totalPrice}
                                        </Text>
                                    </Box>
                                </Box>
                            </Box>
                        ))
                    }
                </Box>
                <Box flex>
                    form
                </Box>
            </Box>
        );
    }
}

const mapStateToProps = state => {
    return {
        cartItems: state.cart.cartItems
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getCartItems: dispatch.cart.getCartItemsAsync
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);