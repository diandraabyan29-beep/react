import Greeting from "./assets/components/Greeting";
import ProductCard from "./assets/components/ProductCard";
import Card from "./assets/components/Card";
import Comment from "./page/Comment";

function App() {
  return (
    <div className="p-5">

      <Greeting name="Budi" />
      <Greeting name="Andi" />

      <ProductCard
        productName="Laptop"
        price={10000000}
        stock={10}
        isAvailable={true}
      />

      <Card>
        <h2 className="font-bold text-xl mb-2">Halo 👋</h2>
        <p className="text-gray-600">
          Ini contoh children berupa teks
        </p>
      </Card>

      <Card>
        <img
          className="rounded mb-2"
          src="https://via.placeholder.com/150"
          alt="contoh"
        />
        <p className="text-sm text-gray-700">
          Ini card dengan gambar
        </p>
      </Card>

      <Card>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Klik Saya
        </button>
      </Card>

      <Comment />
      <Comment />

    </div>
  );
}

export default App;
