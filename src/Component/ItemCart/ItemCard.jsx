import { useItemContextValue } from "../../ContextAPI/itemContext";

function ItemCard(props) {

  // Extract state and event handler from props
  const {name, price, id} = props;

  const {addHandler, removeHandler} = useItemContextValue();

  return (
    <>
        {/* item card container  */}
        <div 
          className="
            flex
            m-4
            p-4
            flex-col
            font-serif
            border
            border-black
            border-solid
            w-52
            bg-gray-300

          "
        >
          {/* item name container  */}
          <div 
            className="
            text-3xl
            font-extrabold
            text-pink-700
            mb-4
            "
          >
            {name}
          </div>

          {/* item price container */}
          <div 
            className="
            text-3xl
            font-semibold
            text-pink-700
            mb-4
            "
          >
            &#x20B9; {price} 
          </div>

          {/* button wrapper  */}
          <div 
            className="
              flex
              justify-between
              items-center
            "
          >
            {/* add button  */}
            <button 
              className='
                border-solid
                border-4
                border-black
                p-2
                cursor-pointer
                transition-all
                duration-100
                ease-in-out
                bg-gray-300
                hover:bg-slate-700
                hover:text-white
              '
              onClick={() => addHandler({name, price, id})}
            >ADD</button>

            {/* delete button  */}
            <button
              className='
                border-solid
                border-4
                border-black
                p-2
                cursor-pointer
                transition-all
                duration-100
                ease-in-out
                bg-gray-300
                hover:bg-slate-700
                hover:text-white
              '
              onClick={() => removeHandler(id)}
            >Delete</button>
          </div>
        </div>
    </>
  )
}

export default ItemCard;