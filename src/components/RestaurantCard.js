import {RES_URL} from "../utils/constants"

const RestaurantCard = ({resData}) => {
  const {name, cloudinaryImageId, cuisines, costForTwo, avgRating, areaName, sla} = resData?.info;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={RES_URL + cloudinaryImageId}
      />
      <div className="card-content">
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{costForTwo}</h4>
        <h4>{avgRating + " Rating"}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;