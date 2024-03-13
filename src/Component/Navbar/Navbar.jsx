import { useItemContextValue } from "../../ContextAPI/itemContext"

function Navbar() {

    const {total, item, clearCart, toggleCart} = useItemContextValue()

    return (
        <>
            <div 
                className="
                    flex 
                    justify-around 
                    align-center
                    bg-yellow-400 
                    p-4
                    m-10
                "
            >
                <h2
                    className=' mt-5 text-3xl font-bold'
                >TOTAL: {total}</h2>
                <h2
                    className=' mt-5 text-3xl font-bold'
                >ITEM: {item}</h2>
                <div
                    className='
                        flex
                        justify-end
                        m-4
                        items-end
                    '
                >
                    <button
                        className='
                        border-solid
                        border-4
                        border-black
                        p-2
                        ml-4
                        cursor-pointer
                        transition-all
                        duration-100
                        ease-in-out
                        bg-gray-300
                        hover:bg-slate-700
                        hover:text-white
                        '
                        onClick={toggleCart}
                    >CART</button>
                    <button
                        className='
                        border-solid
                        border-4
                        border-black
                        p-2
                        ml-4
                        cursor-pointer
                        transition-all
                        duration-100
                        ease-in-out
                        bg-gray-300
                        hover:bg-slate-700
                        hover:text-white
                        '
                        onClick={clearCart}
                    >RESET</button>
                </div>
            </div>
        </>
    )
}

export default Navbar