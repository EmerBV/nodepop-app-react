import Slider from "@mui/material/Slider";
import classNames from "classnames";

const style = {
  sliderWrapper: "w-1/3",
  sliderRange: "mt-2 px-2",
};

const PriceSliderBar = ({
  className,
  label,
  maxSelected,
  minSelected,
  ...props
}) => {
  function valuetext(value) {
    return `${value} $`;
  }

  const marks = [
    {
      value: 0,
      label: "0 $",
    },
    {
      value: 10000,
      label: "10.000 $",
    },
  ];
  return (
    <div className={classNames(`${style.sliderWrapper}`, className)}>
      <span>{label}</span>
      <div className={style.sliderRange}>
        <Slider
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          marks={marks}
          min={0}
          max={10000}
          {...props}
        />
      </div>
    </div>
  );
};

export default PriceSliderBar;
