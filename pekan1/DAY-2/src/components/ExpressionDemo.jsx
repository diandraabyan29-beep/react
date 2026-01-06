export default function ExpressionDemo() {
  const harga = 120000
  const diskon = 25

  const hargaAkhir = harga - (harga * diskon / 100)

  return (
    <div style={card}>
      <h3>Expression Demo</h3>
      <p>Harga Awal: Rp {harga}</p>
      <p>Diskon: {diskon}%</p>
      <p>Harga Akhir: Rp {hargaAkhir}</p>
      <p>Status: {hargaAkhir > 50000 ? 'Mahal' : 'Murah'}</p>
    </div>
  )
}

const card = {
  padding: 15,
  borderRadius: 10,
  background: '#f9fafb',
  border: '1px solid #e5e7eb',
  marginBottom: 20
}
