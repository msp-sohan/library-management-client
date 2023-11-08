import "./rating.css";
import ReactStars from "react-rating-stars-component";

// eslint-disable-next-line react/prop-types
const Retings = ({ rating }) => {
   const rate = parseInt(rating)

   const ratings = {
      size: 20,
      count: 5,
      color: "black",
      activeColor: "#da9100",
      value: rate,
      isHalf: true,
      emptyIcon: <i className="far fa-star" />,
      halfIcon: <i className="fa fa-star-half-alt" />,
      filledIcon: <i className="fa fa-star" />,
      onChange: (newValue) => {
         console.log(`New Ratings is ${newValue}`);
      }
   };
   return (
      <div className="rating">
         <ReactStars {...ratings} />
      </div>
   );
}

export default Retings;