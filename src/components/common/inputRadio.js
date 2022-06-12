import classNames from "classnames";

const style = {
  eventWrapper: "items-center w-1/6",
  inputWrapper: "w-full mt-2",
  inputContainer: "items-center",
  inputRadio: "mr-1 items-center",
};

const InputRadio = ({ className, label, valueObjet, ...props }) => {
  return (
    <div className={classNames(`${style.eventWrapper}`, className)}>
      <span>{label}</span>
      <div className={style.inputWrapper}>
        <div className={style.inputContainer}>
          <input
            className={style.inputRadio}
            type="radio"
            value={true}
            name="inputRadio"
            {...props}
          />
          {valueObjet.true}
        </div>
        <div className={style.inputContainer}>
          <input
            className={style.inputRadio}
            type="radio"
            value={false}
            name="inputRadio"
            {...props}
          />
          {valueObjet.false}
        </div>
        {valueObjet.all && (
          <div className={style.inputContainer}>
            <input
              className={style.inputRadio}
              type="radio"
              value=""
              name="inputRadio"
              {...props}
            />
            {valueObjet.all}
          </div>
        )}
      </div>
    </div>
  );
};

export default InputRadio;
