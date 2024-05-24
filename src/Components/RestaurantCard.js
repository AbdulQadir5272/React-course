// import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  console.log("props.resData:", props.resData); // Debugging statement
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    sla: { deliveryTime},
    locality,
    costForTwo,
  } = props.resData?.info || {};debugger // Provide a default empty object to avoid destructuring errors

  // Ensure sla is defined before destructuring deliveryTime

  return (
    <div className="res_card">
      <img
        className="res_img"
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}
        alt="res-logo"
      />
      <div className="res_info">
        <h2>{name}</h2>
        <div className="rate_time">
          <p className="star_rate">
            <i className="fa-solid fa-arrow-right"></i> {avgRating} .{" "}
            {deliveryTime} minutes
          </p>
          <p className="address">
            {cuisines?.join(", ")}
            <br />
            {locality}
          </p>
          <p>{costForTwo}</p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
