import { FaShoppingCart } from 'react-icons/fa';
import './CartWidget.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const { cart } = useContext(CartContext);
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);


    if (totalItems === 0) {
        return null;
    }

    return (
        <Link to="/cart" className="cart-widget">
            <FaShoppingCart />
            <span className="cart-count">{totalItems}</span>
        </Link>
    );
}

export default CartWidget;
