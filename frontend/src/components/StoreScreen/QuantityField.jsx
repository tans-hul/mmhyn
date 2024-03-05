import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/actions/ecommerce_store/productActions.js'

const QuantityField = ({
  qty,
  setQuantity,
  quantity,
  className,
  product,
  setCartWhenUsingButtons,
}) => {
  const dispatch = useDispatch()

  function makePayload(product, price, quantity, sizeIdx, colorIdx) {
    return {
      id: product.id,
      name: product.name,
      total: price * quantity,
      price: price,
      quantity: quantity,
      color: {
        idx: colorIdx,
        name: product.color.name,
      },
      size: { idx: sizeIdx, size: product.size.size },
      image: product.image,
    }
  }

  function handleBlur(e) {
    let productQty = parseInt(e.target.value)
    if (!isNaN(productQty)) {
      if (productQty > parseInt(qty)) {
        productQty = qty
      } else if (productQty <= 0 && qty > 1) {
        productQty = 1
      }

      setQuantity(productQty)

      if (setCartWhenUsingButtons) {
        const newProduct = makePayload(
          product,
          product?.price,
          productQty,
          product?.size.idx,
          product?.color.idx,
        )
        dispatch(addToCart(newProduct))
      }
    } else {
      setQuantity(1)
    }
  }

  function handleChange(e) {
    let productQty = parseInt(e.target.value)
    if (!isNaN(productQty)) {
      if (productQty > parseInt(qty)) {
        productQty = qty
      } else if (productQty <= 0 && qty > 1) {
        productQty = 1
      }

      setQuantity(productQty)

      if (setCartWhenUsingButtons) {
        const newProduct = makePayload(
          product,
          product?.price,
          productQty,
          product?.size.idx,
          product?.color.idx,
        )
        dispatch(addToCart(newProduct))
      }
    } else {
      setQuantity('')
    }
  }

  function handleIncrement() {
    const newQuantity = Math.min(quantity + 1, qty)
    setQuantity(newQuantity)

    if (setCartWhenUsingButtons) {
      const newProduct = makePayload(
        product,
        product?.price,
        newQuantity,
        product?.size.idx,
        product?.color.idx,
      )
      dispatch(addToCart(newProduct))
    }
  }

  function handleDecrement() {
    const newQuantity = Math.max(quantity - 1, 1)
    setQuantity(newQuantity)

    if (setCartWhenUsingButtons) {
      const newProduct = makePayload(
        product,
        product?.price,
        newQuantity,
        product?.size.idx,
        product?.color.idx,
      )
      dispatch(addToCart(newProduct))
    }
  }

  return (
    <div
      className={`flex w-1/5 items-center justify-between border border-white ${className}`}
    >
      <button
        type="button"
        className="rounded-l-md px-2 py-1 text-xs font-medium focus:outline-none"
        onClick={handleDecrement}
        disabled={quantity === 1}
      >
        -
      </button>
      <input
        type="number"
        className="w-full bg-transparent text-center focus:outline-none"
        value={quantity.toString()}
        onBlur={handleBlur}
        onChange={handleChange}
      />
      <button
        type="button"
        className="rounded-r-md px-2 py-1 text-xs font-medium focus:outline-none"
        onClick={handleIncrement}
        disabled={quantity === qty}
      >
        +
      </button>
    </div>
  )
}
export default QuantityField
