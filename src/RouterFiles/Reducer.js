const Reducer = (state, action) => {
    const { type, payload } = action
    const { cakes, breads,creamlessCakes, cart } = state;
    switch (type) {
        case 'API_SUCCESS': {
            return {
                ...state,
                ...payload
            }
        }
        case 'ADD_CAKE': {
            const { index } = payload;
           
            cakes[index].incart = "true";
           
            return {
                ...state,
                cart: [...cart, cakes[index]]
            }
        }
        case 'ADD_BREAD': {
            const { index } = payload;
        breads[index].incart = "true";
            return {
                ...state,
                cart: [...cart, breads[index]]
            }
        }
        case 'ADD_CREAMLESS': {
            const { index } = payload;
        creamlessCakes[index].incart = "true";
            return {
                ...state,
                cart: [...cart, creamlessCakes[index]]
            }
        }
        case 'INCREMENT_COUNTER': {
            const { index } = payload
            cart[index].quantity++
            return {
                ...state,
                cart: [...cart]
            }
        }
        case 'DECREMENT_COUNTER': {
            const { index } = payload
            cart[index].quantity--
            return {
                ...state,
                cart: [...cart]
            }
        }
        case 'TOTAL_AMOUNT': {
            const totalCost = cart.map(Product => parseInt(Product.price)
                * Product.quantity)
            return {
                ...state,
                totalAmount: totalCost.reduce((acc, amount) => acc + amount, 0)
            }
        }
        case 'DELETE_ITEMS': {
            const { index } = payload;
            cart.splice(index, 1)
            const Id=cakes[index].id;
          
            cakes[Id-1].incart="false";
           
            const Id1=breads[index].id;
            breads[Id1-1].incart="false";
            const Id2=creamlessCakes[index].id;
            creamlessCakes[Id2-1].incart="false";
            return {
                ...state,
                cart: [...cart],
                cakes:[...cakes],
                breads:[...breads],
                creamlessCakes:[...creamlessCakes]
            }
        }
        case 'RESET': {
            for (var i = 0; i < cakes.length; i++) {
                cakes[i].incart = "false"
            }
            for (var i = 0; i < breads.length; i++) {
                breads[i].incart = "false"
            }
            for (var i = 0; i < creamlessCakes.length; i++) {
                creamlessCakes[i].incart = "false"
            }

            return {
                ...state,
                cakes: [...cakes],
                breads: [...breads],
                creamlessCakes: [...creamlessCakes],
                cart: []
            }
        }
        default: {
            return state
        }
    }
}
export default Reducer
