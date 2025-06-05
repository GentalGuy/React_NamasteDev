import { CDN_URL } from "../utils/constants";

const ItemsList = ({ data }) => {
  return (
    <div>
      {data &&
        data.map((item) => {
                    const {id,imageId,name,defaultPrice,description,price} = item.card.info
          return (
            <div key={id} className="flex justify-between p-4 border-b-1 border-gray-200 pb-10 ">
              <div>
                {" "}
                <h3 className="text-xl font-semibold">{name}</h3>
                <h4 className="font-medium">₹ {defaultPrice || price}</h4>
                <p className="mt-4 opacity-60">{description}</p>
              </div>
              <div className=" ml-10 relative">
                {" "}
                <img className="min-w-[156px] max-w-[157px] h-[174px] rounded-2xl object-cover" src={CDN_URL + imageId} />
                <button className="absolute left-[50%] -translate-x-[50%] cursor-pointer -bottom-[10%] px-12 py-2 bg-white  rounded-xl border-1 border-gray-400 text-green-600 font-bold hover:bg-gray-200">ADD</button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ItemsList;
