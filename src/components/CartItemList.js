import React, { Component } from 'react';
import { Box } from 'grommet';
import { connect } from 'react-redux';
import CartItem from './CartItem';

class CartItemList extends Component {
  render() {
    const {
      cartItems,
    } = this.props
    return (
      <Box pad="small">
        {
          cartItems.map((product) => (
            <CartItem {...product} />
          ))
        }
      </Box>
    )
  }
}
const mapStateToProps = state => {
  return {
    cartItems: state.cart.cartItems,
  }
}
export default connect(mapStateToProps)(CartItemList)