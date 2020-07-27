import React, { useContext } from 'react'
import { CartContext } from '../RouterFiles/ContextApi';
import TotalAmount from './TotalAmount';
import Counter from './Counter'
import {Link} from 'react-router-dom'
const Cart = () => {
  const { state: { cart }, deleteItem } = useContext(CartContext)
  return (
    <>
            <div className="row">
                <div class="col-7 mt-4">
                <div className=" container" style={{ border: '1px solid white' }}>
                  {(cart.length<=0)?(<div className="text-center">
  <img src="https://media2.giphy.com/media/3gILD66hEFl11Ff8zZ/giphy.gif?cid=ecf05e47ab8c65b11d31841d6ffdf9c7724587fa8a002cae&rid=giphy.gif" width="289px" />
<h4 class="alert alert-primary mt-2">
  No Items Added,Please add some Items:)
</h4>
</div>):(
  <>
  {cart.map(({name,img, price,weight,quantity}, index) => (
    <div class="card mb-2 mt-2 ml-2" style={{
      height: '200px',
             width: '700px'
            }} >
            <div class="row no-gutters">
                 <div class="col-md-4">
                     <img class="card-img-top" width="210" height="250" src={img} alt="Card image cap" /></div>
                     <div class="col-md-8">
               <div class="card-body">
                                    <h5 class="card-title">{name}</h5>
                                    <p class="card-text"><small class="text-muted"><b>Weight:{weight}     ||    MRP : ${price}</b></small></p>
                                                    <div className="d-flex justify-content-between mt-5 ">
                                                        <Counter
                                                            quantity={quantity}
                                                            index={index}>
                                                        </Counter>
                                                        <span class="badge badge-success pt-2 mt-3" style={{ height: '30px' }} >Qty : {quantity}</span>
                                    <button className="btn btn-danger mt-2 " style={{ height: 'fit-content' }} onClick={() => deleteItem(index)} >Remove</button>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
      )
      )
    }
        </>
      
      )
    }
    </div>
                        </div>
                        <div className="col-4 border mt-4  ml-3 bg-light jumbotron" style={{ height: 'fit-content' }}>
                            <TotalAmount></TotalAmount>
                        </div>
                    </div>
                    </>
                )
}

export default Cart
