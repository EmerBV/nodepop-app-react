import Photo from "../../common/Photo";

const style = {
  advertWrapper:
    "flex items-center justify-center rounded border hover:border-[#282b2f] p-2 mb-2",
  detailWrapper: "flex-col",
  detailTextContainer: "w-full text-lg font-semibold",
  tagsContainer: "w-full text-md text-gray-600",
  tagText: "text-md text-black font-bold",
};

const Advert = ({ name, sale, price, tags, photo, isPhoto }) => {
  return (
    <div className={style.advertWrapper}>
      {isPhoto && (
        <div>
          <Photo photo={photo} />
        </div>
      )}

      <div className={style.detailWrapper}>
        <div className={style.detailTextContainer}>
          <span>{name}</span>
          <span> is </span>
          <span> {sale ? "sale" : "buy"}</span>
          <span> at price of </span>
          <span>{price}$</span>
        </div>
        <div className={style.tagsContainer}>
          <span>Tags: </span>
          <span className={style.tagText}>
            {JSON.stringify(tags)?.replace(/["'[\]]/g, "")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Advert;
