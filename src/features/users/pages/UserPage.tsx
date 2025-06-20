import { useCallback, useEffect, useMemo, useState } from "react";
export default function UserPage() {
  type Post = { id: number; title: string; body: string };
  const [posts, setPosts] = useState<Post[]>([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("error ao buscar os posts: ", error));
  }, []);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  }, []);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) =>
      post.title.toLowerCase().includes(filter.toLowerCase())
    );
  }, [posts, filter]);

  return (
    <div>
      <input value={filter} onChange={handleChange} type="text" />
      {filteredPosts.length === 0 ? (
        <p>Nenhum post encontrado.</p>
      ) : (
        <ul>
          {filteredPosts.map((post) => (
            <li key={post.id}>
              <strong>{post.title}</strong>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}{" "}
    </div>
  );
}
