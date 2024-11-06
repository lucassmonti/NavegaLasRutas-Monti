import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
    const { cart, removeItem, clearCart } = useContext(CartContext);

    if (cart.length === 0) {
        return <p className="cart-empty">Tu carrito está vacío</p>;
    }

    const total = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="cart-container">
            <h2 className="cart-header">Tu Carrito</h2>
            <ul>
                {cart.map(item => (
                    <li key={item.id} className="cart-item">
                        <span className="cart-item-name">{item.name}</span>
                        <span className="cart-item-quantity">{item.quantity}</span>
                        <span className="cart-item-price">${item.price * item.quantity}</span>
                        <button className="cart-remove-button" onClick={() => removeItem(item.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
            <div className="cart-total">Total: ${total.toFixed(2)}</div>
            <div className="cart-buttons">
                <button className="cart-checkout-button" onClick={clearCart}>Vaciar Carrito</button>
                <Link to="/" className="cart-continue-shopping-button">Seguir Comprando</Link>
            </div>
        </div>
    );
}

export default Cart;
