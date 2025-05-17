import { CDN_URL } from "../src/utils/constants";

const RestaurantCard = ({resData}) => {
  const {name,picture,rating,delivery_time,cuisine} = resData;
  return (
    <div className="res-card">
      <img
        alt="res-logo"
        className="res-logo"
        src={picture}
      />
      <h3>{name}</h3>
      <h4>{cuisine}</h4>
      <h4>{rating}</h4>
      <h4>{delivery_time}</h4>
    </div>
  );
};

export default RestaurantCard