function ProductCard({ProductName = "Produk Tanpa Nama", Harga = 0, stock =0, isAvailable}){
    return(
        <>
            <div className="border rounded-lg p-4 w-72 bg-white shadow">
                <h2 className="font-bold text-xl mb-2">{ProductName}</h2>

                <p className="text-gray-700">Harga: Rp {Harga}</p>
                <p className="text-gray-700">Stock: {stock}</p>

                <p 
                className={`mt-2 font-semibold ${isAvailable ? "text-green-500" : "text-red-500"}`}>{isAvailable ? "Tersedia" : "Tidak tersedia"}

                </p>
            </div>
        </>
    )
}


export default ProductCard;
