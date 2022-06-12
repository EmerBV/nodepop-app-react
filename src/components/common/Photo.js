import classNames from "classnames";
import defaultPhoto from "../../assets/images/placeholder.png";

const style = {
  imageWrapper: "items-center rounded-xl border border-[#282b2f] mr-4",
};

const Photo = ({ className, photo, ...props }) => (
  <img
    className={classNames(`${style.imageWrapper}`, className)}
    src={photo ? photo : defaultPhoto}
    alt=""
    {...props}
  />
);

export default Photo;
