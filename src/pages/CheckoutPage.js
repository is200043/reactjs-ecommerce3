import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Box } from 'grommet'

class CheckoutPage extends Component {
    componentDidMount() {
        this.props.getCartItems();
    }
    render() {
        const {
            cartItems,
        } = this.props
        return (
            <Box direction="row" pad="small">
                <Box width="medium">
                    {
                        cartItems.map((product) => (
                            <Box width="medium">
                                {product.name} x {product.amount} = {product.totalPrice}
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