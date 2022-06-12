import classNames from "classnames";

const style = {
  searchWrapper: "w-1/3",
  inputContainer: "w-full border border-[#282b2f] rounded px-2 mt-2",
};

const InputSearch = ({ className, label, ...props }) => {
  return (
    <div className={classNames(`${style.searchWrapper}`, className)}>
      <span>{label}</span>
      <div>
        <input className={style.inputContainer} {...props} />
      </div>
    </div>
  );
};

export default InputSearch;
