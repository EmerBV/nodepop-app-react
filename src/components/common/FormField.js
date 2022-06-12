import { forwardRef } from "react";

const style = {
  formWrapper: "flex items-center w-full",
  labelContainer: "flex py-2",
  span: "flex pr-2",
  placeholder: "pl-2",
};

const FormField = forwardRef(({ label, ...props }, ref) => {
  return (
    <div className={style.formWrapper}>
      <label className={style.labelContainer}>
        <span className={style.span}>{label}</span>
        <input
          ref={ref}
          className={style.placeholder}
          autoComplete="off"
          {...props}
        />
      </label>
    </div>
  );
});

export default FormField;
