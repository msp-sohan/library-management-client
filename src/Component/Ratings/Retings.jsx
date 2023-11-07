import "./rating.css";
import ReactStars from "react-rating-stars-component";

const Retings = () => {
   const secondExample = {
      size: 20,
      count: 5,
      color: "black",
      activeColor: "#da9100",
      value: 4.5,
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
         <ReactStars {...secondExample} />
      </div>
   );
}

export default Retings;