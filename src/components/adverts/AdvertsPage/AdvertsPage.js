import { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { getAdverts } from '../service';
import Advert from './Advert';
import AdvertsFilter from './AdvertsFilter';
import Page from '../../layout/Page';
/* import EmptyList from './/EmptyList';
 */
const style = {
  advertsWrapper: "grid 2xl:grid-cols-9 xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 mx-0 justify-center py-12",
  advertButton: "items-center rounded border border-[#282b2f] px-8 py-1"
}

const EmptyList = () => (
  <div className="items-center text-center justify-center">
    <p className="font-bold">Post your first Ad!</p>
    <button className={style.advertButton} as={Link} to="/adverts/new">
      Post
    </button>
  </div>
);

const AdvertsPage = () => {
  const [adverts, setAdverts] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [isSaleFilter, setIsSaleFilter] = useState('');
  const [rangeFilter, setRangeFilter] = useState('');
  const [isFilter, setIsFilter] = useState('all');
  const [multiSelectorFilter, setMultiSelectorFilter] = useState([]);

  const changeNameFilter = name => {
    setNameFilter(name);
  };
  const changeIsSaleFilter = isSale => {
    setIsSaleFilter(isSale);
  };
  const changeRangeFilter = range => {
    setRangeFilter(range);
  };
  const changeMultiSelector = multiSelector => {
    setMultiSelectorFilter(multiSelector);
  };
  const sendAllFilters = () => {
    query();
    setIsFilter(true);
  };

  useEffect(() => {
    query();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const query = () => {
    getAdverts(nameFilter, isSaleFilter, rangeFilter, multiSelectorFilter).then(
      adverts => setAdverts(adverts),
    );
  };

  return (
    <Page title="Articles">
      <div>
        {adverts.length || isFilter ? (
          <Fragment>
            <AdvertsFilter
              changeNameFilter={changeNameFilter}
              sendAllFilters={sendAllFilters}
              changeIsSaleFilter={changeIsSaleFilter}
              changeRangeFilter={changeRangeFilter}
              changeMultiSelector={changeMultiSelector}
            />
            <div className={style.advertsWrapper}>
              {adverts.map(advert => (
                <Link to={`/adverts/${advert.id}`}>
                  <Advert key={advert.id} {...advert} />
                </Link>
              ))}
            </div>
            
          </Fragment>
        ) : (
          <EmptyList />
        )}
      </div>
    </Page>
  );
};

export default AdvertsPage;
