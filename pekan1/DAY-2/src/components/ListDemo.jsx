export default function ListDemo() {
  const buah = ['Apel', 'Jeruk', 'Mangga', 'Pisang']

  return (
    <div style={card}>
      <h3>List Demo</h3>
      <ul>
        {buah.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

const card = {
  padding: 15,
  borderRadius: 10,
  background: '#ecfeff',
  border: '1px solid #67e8f9'
}
