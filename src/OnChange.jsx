import { useState } from "react";

function OnChange(){

    const [name, setName] = useState("Default");
    const [quantity, setQuantity] = useState(0);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");

    function handleShippingChange(event){
        setShipping(event.target.value);
    }

    function hadnlePaymentChange(event){
        setPayment(event.target.value);
    }

    function handleCommentChange(event){
        setComment(event.target.value);
    }

    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }

    function handleNameChange(event){

        setName(event.target.value);
    }

    return(
        <div>
            <input type="text" value={name} onChange={handleNameChange}/>
            <p>Name: {name}</p>

            <input type="number" value={quantity} onChange={handleQuantityChange} />
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handleCommentChange} placeholder="Enter your comment"></textarea>
            <p>Comment: {comment}</p>

            <select value={payment} onChange={hadnlePaymentChange} name="" id="">
                <option value="">Select an option</option>
                <option value="visa">Visa</option>
                <option value="mastercard">Mastercard</option>
                <option value="paypal">Paypal</option>
            </select>
            <p>Payment: {payment}</p>

            <label>
                <input type="radio" value="Pick up" checked={shipping === "Pick up"} onChange={handleShippingChange} name="" id="" />
                Pick up
            </label>
            <label>
            <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingChange} name="" id="" />
                Delivery
            </label>
            <p>Shipping: {shipping}</p>
        </div>
    )


}

export default OnChange;