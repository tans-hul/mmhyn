import { useState } from 'react'
import { DEV_BACKEND_URL } from '../../redux/constants/backend_url.js'

const ImageGallery = ({ images }) => {
  const [active, setActive] = useState(null)

  return images && images.length ? (
    <div className="flex flex-col gap-4">
      <div className="flex h-48 items-center justify-center bg-golden md:h-[27rem] md:w-96">
        <img
          className="h-full w-full object-contain"
          src={active || `${DEV_BACKEND_URL}${images[0].image}`}
          alt=""
        />
      </div>
      <div className="flex flex-wrap gap-4">
        {images.map((image_obj, index) => (
          <div
            key={index}
            className="h-20 w-1/5 rounded-lg bg-golden"
            onClick={() => setActive(`${DEV_BACKEND_URL}${image_obj?.image}`)}
          >
            <img
              src={`${DEV_BACKEND_URL}${image_obj?.image}`}
              className="h-full w-full max-w-full cursor-pointer rounded-lg bg-golden bg-cover object-cover"
              alt="gallery-image"
            />
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div className="flex h-48 items-center justify-center bg-golden md:h-[27rem] md:w-96">
      <h1>No Images Provided</h1>
    </div>
  )
}

export default ImageGallery
