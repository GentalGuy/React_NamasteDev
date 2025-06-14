import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItems } from "../utils/cardSlice";
const ItemListDetails = ({ item ,newItem}) => {
  const dispatch = useDispatch();

  const handleItems = (item) => {
    dispatch(addItems({item: item?.card,quantity: 1}))
  }
  console.log(newItem)
  const { imageId, name, defaultPrice, description, price} = item?.card?.info || newItem?.item?.info || {};
  return (
    <div className="flex justify-between p-4 border-b-1 border-gray-200 pb-10 ">
      <div>
        {" "}
        <h3 className="text-xl font-semibold">{name}</h3>
        <h4 className="font-medium">₹ {defaultPrice/100 || price/100}</h4>
        <p className="mt-4 opacity-60">{description}</p>
      </div>
      <div className=" ml-10 relative">
        {" "}
        <img
          className="min-w-[156px] max-w-[157px] h-[174px] rounded-2xl object-cover"
          src={CDN_URL + imageId}
        />
        {newItem && newItem.quantity >= 1 ? <button className="bg-blue-400 p-2 rounded text-white">quantity: {newItem.quantity}</button> : <button onClick={() => handleItems(item)} className="absolute left-[50%] -translate-x-[50%] cursor-pointer -bottom-[10%] px-12 py-2 bg-white  rounded-xl border-1 border-gray-400 text-green-600 font-bold hover:bg-gray-200">
          ADD
        </button>}
      </div>
    </div>
  );
};

export default ItemListDetails;
export const BestSellerItemsList = (ItemsList) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute text-orange-400 font-semibold animate-bounce"><h1>Bestseller</h1></label>
        <ItemsList {...props} />
      </div>
    );
  };
};
