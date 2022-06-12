import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Page from '../../layout/Page';
import Advert from '../AdvertsPage/Advert';
import { getAdvert, deleteAdvert } from '../service';
import Confirmation from '../../common/Confirmation';

const style = {
  advertDetailsWrapper: "flex-col w-full my-4",
  buttonWrapper: "flex items-center justify-center mt-4",
  deleteButton: "items-center rounded border border-[#282b2f] px-8 py-1"
}

const AdvertPage = () => {
  const [advert, setAdvert] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const [isDelete, setIsDelete] = useState(false);

  useEffect(() => {
    getAdvert(id)
      .then(advert => setAdvert(advert))
      .catch(() => {
        navigate('/404');
      });
  }, [id, navigate]);

  const handleDeleteAdvert = e => {
    e.preventDefault();
    setIsDelete(true);
  };

  const handleCancellationDelete = e => {
    e.preventDefault();
    setIsDelete(false);
  };

  const handleConfirmationDelete = e => {
    e.preventDefault();
    deleteAdvert(id);
    navigate('/adverts')

  };
  return (
    <Page title="Article details">
      <div className={style.advertDetailsWrapper}>
        <Advert {...advert} isPhoto={true}/>
        <div className={style.buttonWrapper}>
          {!isDelete && 
            <button className={style.deleteButton} variant="delete" onClick={handleDeleteAdvert}>
              Delete
            </button>
          }
          {isDelete && 
            <Confirmation label={'Are you sure?'} handleConfirmation={handleConfirmationDelete}  handleCancellation={handleCancellationDelete}/>
          }
        </div>
      </div>
    </Page>
  );
};

export default AdvertPage;
