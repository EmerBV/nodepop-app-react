import classNames from "classnames";

const style = {
  confirmationWrapper:
    "flex-col w-full text-center items-center my-4 rounded border",
  confirmationLabel: "text-lg font-semibold items-center text-center",
  buttonsWrapper: "justify-center items-center text-center",
  button: "items-center rounded border border-[#282b2f] px-8 py-1 mx-2 my-2",
};

const Confirmation = ({
  className,
  label,
  handleCancellation,
  handleConfirmation,
}) => {
  return (
    <div className={classNames(`${style.confirmationWrapper}`, className)}>
      <label className={style.confirmationLabel}>
        <span>{label}</span>
      </label>
      <div className={style.buttonsWrapper}>
        <button className={style.button} onClick={handleConfirmation}>
          Yes
        </button>
        <button className={style.button} onClick={handleCancellation}>
          No
        </button>
      </div>
    </div>
  );
};

export default Confirmation;
