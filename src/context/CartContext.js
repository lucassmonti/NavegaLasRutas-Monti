import { createContext, useState } from 'react';

// Creamos el contexto
export const CartContext = createContext();

// Creamos el proveedor del contexto
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(i => i.id === item.id);
            if (existingItem) {
                return prevCart.map(i => 
                    i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
                );
            } else {
                return [...prevCart, { ...item, quantity }];
            }
        });
    };

    const removeItem = (itemId) => {
        setCart(prevCart => prevCart.filter(item => item.id !== itemId));
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};
