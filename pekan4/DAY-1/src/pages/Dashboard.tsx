import { ProductList } from "../components/ProductList"

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <ProductList
        products={[
          { id: 1, name: "Laptop", price: 15000000 },
          { id: 2, name: "Mouse", price: 250000 }
        ]}
        onSelect={(id) => console.log("Selected:", id)}
      />
    </div>
  )
}

export default Dashboard
