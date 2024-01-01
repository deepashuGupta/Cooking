import { CDN_URL } from "../utils/constant";

const ResCard = (props) => {
  const { resData } = props;
  const { name, avgRating, cuisines, costForTwo, cloudinaryImageId } =
    resData.info;

  return (
    <div
      data-testid="resCard"
      className="flex flex-col justify-between w-72 h-[350px] mb-12 bg-gray-200 p-4 rounded-md"
    >
      <img className="h-52 rounded-md" src={CDN_URL + cloudinaryImageId} />
      <div className="flex my-2 justify-between font-bold">
        <h5>{name}</h5>
        <p>
          {avgRating}
          <span>star</span>
        </p>
      </div>
      <div className="flex justify-between">
        <p>{cuisines.join(", ")}</p>
        <p>{costForTwo}</p>
      </div>
      <hr />
    </div>
  );
};

export const isNewlyAdded = (RestaruntCard) => {
  return (props) => {
    return (
      <>
        <span className="absolute bg-black text-white px-2 rounded-md">
          Newly Added
        </span>
        <RestaruntCard {...props} />
      </>
    );
  };
};

export default ResCard;
