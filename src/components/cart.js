import React from "react";

// here i am gonna making cart 
const Cart=({cart})=>{
    return (
        <div className="cart">
            <h2>cart</h2>
            <ul>
                {cart.map((item, index)=>(
                    <li key={index}>
                        {item.name}-${item.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cart