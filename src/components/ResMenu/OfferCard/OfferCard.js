import "./OfferCard.css";
import { OFFER_IMG_URL } from "../../../utils/constant";

const OfferCard = (props) => {
  if (!props.offer) {
    return <h5>Loading...</h5>;
  }
  const { header, couponCode, description } = props.offer.info;
  return (
    <div className="offer-container">
      <div className="offer-heading">
        <img src={OFFER_IMG_URL} alt="percentage" />
        <h4>{header}</h4>
      </div>
      <p>
        {couponCode} | {description}
      </p>
    </div>
  );
};

export default OfferCard;
