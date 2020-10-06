 import React from 'react'
import { useStateValue } from './StateProvider';
import './Checkout.css';
import ChekoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
 
 function Checkout() {

     const [{basket},dispatch] = useStateValue();

     return (
         <div className="checkout">
             <div className="checkout_left" >
                <img className="checkout_ad"
                    src="https://www.truespecgolf.com/wp-content/uploads/2018/05/scottsdale-feature-banner.jpg" />

                {basket?.length === 0 ? (
                    <div>
                        <h2>Your Shopping Basket is Empty</h2>
                        <p>
                            You have no items in your basket. To buy one or more item, Click 'Add to Basket' next to the item.
                        </p>
                    </div>
                ):(
                    <div>
                        <h2 className="checkout_title">Your Shopping Basket </h2>
                        
                        {basket.map(item => (
                            <ChekoutProduct id={item.id}
                                            title={item.title}
                                            image={item.image}
                                            price={item.price}
                                            rating={item.rating} />
                        ))}

                    </div>
                )}
             </div>
            
             {basket.length > 0 && (
                 <div className="checkout_right">
                     <Subtotal />
                 </div>
             )}
             
         </div>
     )
 }
 
 export default Checkout;
 