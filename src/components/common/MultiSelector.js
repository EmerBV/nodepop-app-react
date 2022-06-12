import classNames from "classnames";

const style = {
  tagsWrapper: "w-1/3",
  optionsContainer: "w-full border border-[#282b2f] rounded mt-2",
  options: "border-0 outline-0 ring-0",
};

const MultiSelector = ({
  className,
  label,
  tags,
  handleMultiSelector,
  ...props
}) => {
  return (
    <div className={classNames(`${style.tagsWrapper}`, className)}>
      <div>{label}</div>
      <select
        multiple={true}
        onChange={handleMultiSelector}
        className={style.optionsContainer}
        {...props}
      >
        {tags.map((tag) => (
          <option key={tag} value={tag} className={style.options}>
            {tag}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MultiSelector;
