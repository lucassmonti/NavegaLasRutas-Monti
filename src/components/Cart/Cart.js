import './Cart.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import Item from '../Item/Item'
import { Link } from 'react-router-dom'


const Cart = () => {
    const { cart, removeItem, clearCart } = useContext(CartContext);

    if (cart.length === 0) {
        return <p>Your cart is empty.</p>;
    }

    return (
        <div className="cart-container">
            <h2>Your Shopping Cart</h2>
            <ul>
                {cart.map(item => (
                    <li key={item.id}>
                        {item.name} - {item.quantity} - ${item.price * item.quantity}
                        <button onClick={() => removeItem(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
            <button onClick={clearCart}>Clear Cart</button>
        </div>
    );
}

export default Cart;
