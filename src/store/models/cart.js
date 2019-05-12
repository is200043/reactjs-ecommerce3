import request from '../../utils/request'

export const cart = {
  state: {
    cartItems: [
      // {
      //   productId: 1,
      //   amount: 2
      // }
    ],
    totalPrice: 0
  },
  reducers: {
    // handle state changes with pure functions
    deleteItem(state, payload) {
      return state
    },
    setCartItems(state, payload) {
      return {
        ...state,
        cartItems: payload
      }
    },
    setTotalPrice(state, payload) {
      return {
        ...state,
        totalPrice: payload
      }
    }
  },
  effects: (dispatch) => ({
    async addItemAsync(id) {
      let headers = {
        'Content-Type': 'application/json',
      }
      let data = {
        "data": {
          "type": "cart_item",
          "id": id,
          "quantity": 1
        }
      }
      const res = await request.post('/carts/123456/items', data, { headers: headers });
      console.log(res.data);
      dispatch.cart.getCartItemsAsync()
    },
    async deleteItemAsync(id) {
      console.log(id);
      const res = await request.delete('carts/123456/items/' + id);
      console.log(res.data);
      dispatch.cart.getCartItemsAsync()
    },
    async getCartItemsAsync() {
      const res = await request.get('/carts/123456/items');
      console.log(res.data);
      const cleanData = res.data.data.map((item) => {
        return {
          id: item.id,
          productId: item.product_id,
          amount: item.quantity,
          name: item.name,
          image: 'https://via.placeholder.com/300x400.png',
          totalPrice: item.meta.display_price.with_tax.value.formatted,
          pricePerUnit: item.meta.display_price.with_tax.unit.formatted
        }
      })
      dispatch.cart.setCartItems(cleanData)
    }
  })
}