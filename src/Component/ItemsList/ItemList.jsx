import itemData from "../../Data/itemData";
import ItemCard from "../ItemCart/ItemCard";

function ItemList() {
  return (
    <>
        {/* all card item container  */}
        <div 
            className="
                m-10
                flex
                flex-wrap
                h-full
                justify-center
                items-start
                p-4
                bg-gradient-to-r
            "
        >
            {
                itemData.map((item) => (
                    <ItemCard
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        price={item.price}
                    />
                ))
            }
        </div>
    </>
  )
}

export default ItemList;