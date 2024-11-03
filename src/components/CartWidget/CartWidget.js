import { FaShoppingCart } from 'react-icons/fa';
import './CartWidget.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const { cart } = useContext (CartContext);
    const totalItems = cart.reduce ((total, item) => total + item.quantity, 0);

    return (
        <div className="cart-widget">
            <FaShoppingCart />
            {totalItems > 0 && <span className="cart-count">
                {totalItems}
                </span>}
        </div>
    );
}

export default CartWidget;
