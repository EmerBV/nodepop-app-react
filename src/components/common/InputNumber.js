import classNames from "classnames";

const style = {
  inputWrapper: "w-full mb-2",
  input: "rounded border border-[#282b2f] px-2 outline-0 ring-0",
};

const InputNumber = ({ className, label, ...props }) => {
  return (
    <div className={classNames(`${style.inputWrapper}`, className)}>
      <label>
        <span>{label}</span>
        <div>
          <input type={"number"} className={style.input} {...props} />
        </div>
      </label>
    </div>
  );
};

export default InputNumber;
