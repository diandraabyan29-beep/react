import { useEffect, useState } from "react";

function FetchPost() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    fetch("https://jsonplaceholder.typicode.com/posts/2", {
      signal: controller.signal,
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Gagal mengambil data");
        }
        return res.json();
      })
      .then((data) => setPost(data))
      .catch((err) => {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);

  if (loading) {
    return <p>Loading post...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!post) {
    return <p>Data kosong</p>;
  }

  return (
    <div className="card">
      <h2>Fetch API</h2>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
}

export default FetchPost;
