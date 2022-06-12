import { useEffect, useState } from 'react';
import InputRadio from '../../common/inputRadio';
import InputSearch from '../../common/InputSearch';
import SliderBar from '../../common/PriceSliderBar';
import TextArea from '../../common/MultiSelector';
import { getTags } from '../service';

const style = {
  filtertWrapper: "w-full",
  filterText: "my-4",
  filterContainer: "flex my-4",
  filterbyText: "font-semibold",
  filterButton: "items-center rounded border border-[#282b2f] h-8 px-8 font-semibold",
  filterBox: "pr-10"
}

const AdvertsFilter = ({
  changeNameFilter,
  sendAllFilters,
  changeIsSaleFilter,
  changeRangeFilter,
  changeMultiSelector,
}) => {
  const [range, setRange] = useState([0, 10000]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    getTags().then(tags => setTags(tags));
  }, []);

  const handleInputName = e => {
    changeNameFilter(e.target.value);
  };

  const handleMultiSelector = e => {
    let valueMultiSelector = Array.from(
      e.target.selectedOptions,
      option => option.value,
    );
    changeMultiSelector(valueMultiSelector);
  };

  const handleInputBuySell = e => {
    changeIsSaleFilter(e.target.value);
  };
  const sendFilters = e => {
    e.preventDefault();
    sendAllFilters();
  };

  const updateRange = (e, data) => {
    setRange(data);
    changeRangeFilter(data);
  };

  const saleObjet = {
    false: 'buy',
    true: 'sale',
    all: 'all',
  };

  return (
    <div className={style.filtertWrapper}>
      <div className={style.filterText}>
        <h4 className={style.filterbyText}>Filter by:</h4>
      </div>
      <div className={style.filterContainer}>
        <InputSearch
          onChange={handleInputName}
          label={'Name'}
          className={style.filterBox}
        />
        <InputRadio
          onChange={handleInputBuySell}
          label={'Event'}
          valueObjet={saleObjet}
        />
        <SliderBar
          label={'Price range'}
          maxSelected={6000}
          minSelected={3000}
          onChange={updateRange}
          value={range}
          className={style.filterBox}
        />
        <TextArea
          tags={tags}
          handleMultiSelector={handleMultiSelector}
          label={'Tags'}
          className={style.filterBox}
        />
        <button
          className={style.filterButton}
          onClick={sendFilters}
        >
          Filter
        </button>
      </div>
    </div>
  );
};

export default AdvertsFilter;
