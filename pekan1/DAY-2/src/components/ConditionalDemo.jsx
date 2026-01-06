export default function ConditionalDemo() {
  const isLogin = true
  const pesan = 3

  return (
    <div style={card}>
      <h3>Conditional Demo</h3>

      {isLogin ? (
        <p>✅ Selamat datang kembali</p>
      ) : (
        <p>❌ Silakan login</p>
      )}

      {pesan > 0 && <p>📩 Kamu punya {pesan} pesan baru</p>}
    </div>
  )
}

const card = {
  padding: 15,
  borderRadius: 10,
  background: '#fefce8',
  border: '1px solid #fde047',
  marginBottom: 20
}
