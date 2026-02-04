type Props = {
  title: string
  price: number
  image: string
}

const ProductCard = ({ title, price, image }: Props) => {
  return (
    <div className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition">
      <img src={image} className="h-40 mx-auto object-contain" />
      <h2 className="mt-3 font-semibold line-clamp-2">{title}</h2>
      <p className="text-gray-600 mt-1">$ {price}</p>
    </div>
  )
}

export default ProductCard
