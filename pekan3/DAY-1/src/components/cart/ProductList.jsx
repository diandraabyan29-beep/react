import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

const products = [
  {
    id: 1,
    name: 'Buku React Dasar',
    price: 75000,
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794'
  },
  {
    id: 2,
    name: 'Kaos Programmer',
    price: 120000,
    image: 'https://id-live-01.slatic.net/p/d45e191560547eb5b2297b1b0e529844.png'
  },
  {
    id: 3,
    name: 'Sticker Coding Pack',
    price: 30000,
    image: 'https://m.media-amazon.com/images/I/712eBuqxKlL.jpg'
  },
  {
    id: 4,
    name: 'Keyboard Mechanical',
    price: 450000,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3'
  },
  {
    id: 5,
    name: 'Mouse Gaming',
    price: 250000,
    image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7'
  },
  {
    id: 6,
    name: 'KTM sxf 2024',
    price: 150000000,
    image: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/119/MTA-178289579/ktm_ktm_125_sx_2024_-_-off_the_road_jatim-_full02_rznwsdmg.jpg'
  },
  {
    id: 7,
    name: 'CRF450R 2025',
    price: 200000000,
    image: 'https://www.naikmotor.com/wp-content/uploads/2025/01/main-01.jpg'
  },
  {
    id: 8,
    name: 'BMW M3 Touring',
    price: 3000000000,
    image: 'https://image.made-in-china.com/365f3j00mbYqgVKhCszt/Mini-Gt-1-64-BMW-M3-Kompetisi-Touring-Wagon-Model-Mobil-Paduan.webp'
  }
]

export default function ProductList() {
  const { addItem } = useContext(CartContext)

  return (
    <div>
      <h3 style={{ marginBottom: '12px' }}>🛒 Product List</h3>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '16px'
        }}
      >
        {products.map(product => (
          <div
            className="card"
            key={product.id}
            style={{ textAlign: 'center' }}
          >
            {/* GAMBAR KOTAK & KECIL */}
            <div
              style={{
                width: '120px',
                aspectRatio: '1 / 1',
                overflow: 'hidden',
                borderRadius: '8px',
                margin: '0 auto 10px'
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>

            <h4>{product.name}</h4>
            <p>Rp{product.price.toLocaleString()}</p>

            <button
              className="button"
              style={{ width: '100%' }}
              onClick={() => addItem(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
