import React, { useContext } from 'react';
import { CartContext } from '../RouterFiles/ContextApi';

const CreamlessCakes = () => {
    const { state, addCreamless } = useContext(CartContext);
    const { creamlessCakes } = state

    return (
        <>
        <hr/>
        <h2 >Creamless Cakes</h2>
        <div className="row border ">
            {creamlessCakes.map((data, index) => (
                <>
                    <div className="container col-xl-3 col-lg-4 col-md-6 col-sm-11 ">
                        <div class=" b card shadow m-4" style={{ width: "18rem" }}>
                        <marquee behavior="slide" direction="down"> <img class="card-img-top" width="210" height="250" src={data.img} alt="Card image cap" /></marquee>
                            <marquee behavior="slide" direction="up"> <div class="card-body">
                                <strong class="card-title" style={{ fontSize: "15px" }}>{data.name}</strong>
                                <div className="d-flex justify-content-between">
                                    <p className="card-text ">Weight:{data.weight}</p>
                                    <p className="card-text "><span class="badge badge-warning">MRP</span> : {data.price} <span>&#8377;</span></p>
                                </div>
                                <button onClick={() => addCreamless(index)} disabled={data.incart=="true"?true:false} className="btn btn-danger my-3 btn-md ">Add to Cart</button>
                            </div></marquee>
                        </div>
                    </div>
                </>
            ))}
        </div>

    </>)
}

export default CreamlessCakes
