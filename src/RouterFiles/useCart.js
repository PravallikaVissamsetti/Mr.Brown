import { useEffect, useReducer } from 'react';
import Reducer from '../RouterFiles/Reducer';

const useCart = () => {
    const INITIAL_STATE = {
        cakes: [],
        breads: [],
        creamlessCakes: [],
        cart: [],
        totalAmount:0
    }
    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE)
    const {cakes,breads,cart,creamlessCakes,totalAmount}=state;
    useEffect(() => {
        fetch('https://jsonblob.com/api/485d8d47-c51f-11ea-b1d4-63e112402fa4').then(response => response.json()).then(json => {
            const { cakes } = json
            const { breads } = json
            const { creamlessCakes } = json
            dispatch({ type: 'API_SUCCESS', payload: { cakes: [...cakes], breads: [...breads],creamlessCakes:[...creamlessCakes]} })
        })
    }, []);
    useEffect((prevState) => {
        dispatch({ type: 'TOTAL_AMOUNT' })
    }, [cart]);
    const incrementCounter = (index) => {
        dispatch({
            type: 'INCREMENT_COUNTER',
            payload: { index }
        }
        )
    }
    const decrementCounter = (index) => {
        dispatch({
            type: 'DECREMENT_COUNTER',
            payload: { index }
        }
        )
    }
    const addCake = (index) => {
        dispatch({ type: 'ADD_CAKE', payload: { index } })
    }
    const addBread = (index) => {
        dispatch({ type: 'ADD_BREAD', payload: { index } })
    }
    const addCreamless = (index) => {
        dispatch({ type: 'ADD_CREAMLESS', payload: { index } })
    }
    const deleteItem = (index) => {
        dispatch({ type: 'DELETE_ITEMS', payload: { index } })
    }
    const reset = () => {
        dispatch({
            type: 'RESET'
        })
    }
    return {
        state,
        addCake,
        addCreamless,
        addBread,
        deleteItem,
        reset,
        incrementCounter,
        decrementCounter
    }
}
export default useCart