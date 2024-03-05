import '../../assets/css/Store Screen/ProductCard.css'
import { DEV_BACKEND_URL } from '../../redux/constants/backend_url.js'
import { Link } from 'react-router-dom'

const ProductCard = ({ data }) => {
  // noinspection JSValidateTypes
  return (
    <div className={'w-[28%] rounded-t-xl bg-secondary'}>
      <img
        src={`${DEV_BACKEND_URL}${data.images && data.images[0]?.image}`}
        className={'h-80 w-full rounded-t-xl bg-golden bg-contain px-1'}
      />

      <div className={'mx-4 flex justify-between pb-1 pt-4'}>
        <p className={'text-button font-bold'}>{data.name}</p>
        <p className={'text-button font-bold text-golden'}>${data.price}</p>
      </div>

      <div
        id={'desc-button'}
        className={'flex items-center justify-center py-2 pb-3'}
      >
        <Link
          state={{ id: data.id }}
          to={'product/'}
          className={
            'bg-sm-primary py-2 text-body text-secondary transition-all duration-700 hover:bg-gradient md:px-7 xl:px-16'
          }
        >
          <span className={'align-middle font-inter font-[400]'}>
            See more about this item
          </span>{' '}
          <span className={'align-middle font-inter font-bold text-white'}>
            &rarr;
          </span>
        </Link>
      </div>
    </div>
  )
}

export default ProductCard
