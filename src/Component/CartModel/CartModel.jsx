import { useItemContextValue } from "../../ContextAPI/itemContext";

function CartModel() {

    const {cart, clearCart, total, toggleCart} = useItemContextValue();

    return (
        <>
            {/* cart model  */}
            <div 
                className="
                    fixed
                    bg-gray-600
                    flex
                    flex-col
                    items-center
                    text-white
                    overflow-hidden
                    z-100
                "
            >
                <div 
                    className="
                        fixed
                        bg-gray-500
                        cursor-pointer
                        text-xl
                        top-6
                        right-8
                        p-2
                        rounded-xl
                    "
                >
                    <button onClick={toggleCart}>Close</button>
                </div>

                <div 
                    className="
                        fixed
                        bg-red-500
                        cursor-pointer
                        text-xl
                        top-6
                        left-8
                        p-2
                        rounded-xl
                    "
                >
                    <button onClick={clearCart}>Clear</button>
                </div>

                <div 
                    className="
                        w-4/5
                        h-3/5
                        m-4
                        overflow-scroll
                        flex
                        flex-col
                    "
                >
                    {
                        cart.map((item) => {
                            return (
                                <>
                                    <div 
                                        className="
                                            h-28
                                            border-4
                                            border-solid
                                            m-4
                                            text-white
                                            flex
                                            justify-between
                                            item-center
                                            p-12
                                            z-140
                                            pointer-events-auto
                                        "
                                        key={item.id}
                                    >
                                        <h1>{item.name}</h1>
                                        <h3>X {item.qty}</h3>
                                        <h3>X {item.qty * item.price}</h3>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>

                <div 
                    className="
                        w-4/5
                        m-4
                        flex
                        justify-between
                        items-center
                        p-4
                        text-white
                        bg-gray-600
                        border-2
                        border-solid
                    "
                >
                    <h1 className="text-5xl font-bold m-4">Total</h1>
                    <h1 className="text-5xl font-bold m-4">{total}</h1>
                </div>

            </div>
        </>
    )
}

export default CartModel;