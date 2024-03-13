import { createContext, useContext, useState } from "react";
import CartModel from "../Component/CartModel/CartModel";

// create item context using createContext
const itemContext = createContext();

// create custom hooks
export function useItemContextValue() {
    return useContext(itemContext);
};


// create custom Provider
function CustomItemContext({ children }) {

    // define required state here
    const [total, setTotal] = useState(0);
    const [item, setItem] = useState(0);
    const [showCart, setShowCart] = useState(false);
    const [cart, setCart] = useState([]);

    // handler for adding item to card
    const addHandler = (product) => {
        const productIndex = cart.findIndex((item) => (item.id) === product.id);
        if (productIndex === -1) {
            // add product to card
            setCart([...cart, {...product, qty: 1}]);

            // add total price
            setTotal(total + product.price)
        } else {
            // update the qty
            cart[productIndex].qty++ ;

            // add to cart
            setCart(cart);

            // update total
            setTotal(total + cart[productIndex].price);
        }
        // increase item
        setItem(item + 1);
    };

    // handler for removing item from cart
    const removeHandler = (itemId) => {
        const index = cart.findIndex((item) => (item.id === itemId));
        if (index !== -1) {
            // deacrease qty
            cart[index].qty--;

            // update item
            setItem(item - 1)

            // update total
            setTotal(total - cart[index].price);

            if (cart[index].qty === 0) {
                cart.splice(index, 1)
            }

            //update cart
            setCart(cart);
        };
    };

    // handler for clear all cart
    const clearCart = () => {
        setTotal(0);
        setItem(0)
        setCart([])
    };

    // toggle cart item
    const toggleCart = () => {
        setShowCart(!showCart);
    };

    // return custom provider component
    return <itemContext.Provider 
        value={
            {
                total, 
                item, 
                addHandler, 
                removeHandler, 
                clearCart, 
                toggleCart,
                cart,
            }
        }
    >
        {showCart && <CartModel/>}

        {children}
    </itemContext.Provider>

};


export default CustomItemContext;