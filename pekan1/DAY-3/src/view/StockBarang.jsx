import card from "./Card";

function StockBarang({ judul = "Beras", stock = 5 ,judul2 = "Minyak", stock2 = 0}) {
    return (
        <>
            <h1>Stock Nama Barang</h1>
            <card>
            <p>Nama Barang :{judul}</p>
            <p>Stock Barang :{stock}</p>
            {stock > 0 ? <p className="bg-green-500 p-4 text-white">Tersedia</p> : <p className="bg-red-500 p-4 text-white">Tidak Tersedia</p>}
            </card>
            <card>
                <p>Nama Barang :{judul2}</p>
            <p>Stock Barang :{stock2}</p>
            {stock2 > 0 ? <p className="bg-green-500 p-4 text-white">Tersedia</p> : <p className="bg-red-500 p-4 text-white">Tidak Tersedia</p>}
            </card>
        </>
    )
}

export default StockBarang;