import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';
import './Cart.css';

const Cart = () => {
    const { cart, removeItem, clearCart } = useContext(CartContext);
    const [orderId, setOrderId] = useState(null);

    const handleCheckout = async () => {
        const order = {
            items: cart,
            date: new Date(),
            total: cart.reduce((total, item) => total + item.price * item.quantity, 0)
        };
        try {
            const docRef = await addDoc(collection(db, 'orders'), order);
            setOrderId(docRef.id);
            clearCart();
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    };

    if (cart.length === 0) {
        return (
            <div className="cart-container">
                <p className="cart-empty">Tu carrito está vacío</p>
                {orderId && <p className="order-id">ID de la orden: {orderId}</p>}
                <Link to="/" className="cart-continue-shopping-button">Seguir Comprando</Link>
            </div>
        );
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
                <button className="cart-checkout-button" onClick={handleCheckout}>Terminar Compra</button>
                <button className="cart-clear-button" onClick={clearCart}>Vaciar Carrito</button>
                <Link to="/" className="cart-continue-shopping-button">Seguir Comprando</Link>
            </div>
            {orderId && <p className="order-id">ID de la orden: {orderId}</p>}
        </div>
    );
};

export default Cart;
