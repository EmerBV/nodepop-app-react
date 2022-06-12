import classNames from "classnames";

const style = {
  inputFileWrapper: "w-full",
};

const InputFile = ({ className, label, ...props }) => {
  return (
    <div className={classNames(`${style.inputFileWrapper}`, className)}>
      <label>
        <span>{label}</span>
        <div>
          <input type={"file"} {...props} />
        </div>
      </label>
    </div>
  );
};

export default InputFile;
