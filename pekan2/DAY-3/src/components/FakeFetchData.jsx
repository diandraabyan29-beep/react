import { useEffect, useState } from "react";

function FakeFetchData() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setData("Data berhasil diambil!");
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? <p>Loading...</p> : <p>{data}</p>}
    </>
  );
}

export default FakeFetchData;
