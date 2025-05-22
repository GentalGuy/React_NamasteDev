import { CDN_URL } from "../src/utils/constants";

const RestaurantCard = ({resData}) => {
  const {name,cloudinaryImageId,avgRating,sla,cuisines} = resData.info;
  return (
    <div className="res-card">
      <img
        alt="res-logo"
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines}</h4>
      <h4>{avgRating}</h4>
      <h4>{sla.deliveryTime}</h4>
    </div>
  );
};

export default RestaurantCard