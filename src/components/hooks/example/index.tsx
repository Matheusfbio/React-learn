import { useState, useMemo, useCallback } from "react";

const ProductList = () => {
  const [category, setCategory] = useState("Todos");
  const [likes, setLikes] = useState<{ [key: number]: number }>({});

  const products = [
    { id: 1, name: "Notebook", category: "Eletrônicos" },
    { id: 2, name: "Tênis", category: "Vestuário" },
    { id: 3, name: "Fone de ouvido", category: "Eletrônicos" },
    { id: 4, name: "Camiseta", category: "Vestuário" },
  ];

  // useMemo para evitar recalcular os produtos filtrados
  const filteredProducts = useMemo(() => {
    if (category === "Todos") return products;
    return products.filter((p) => p.category === category);
  }, [category]);

  // useCallback para evitar recriar a função em cada render
  const handleLike = useCallback((id: number) => {
    setLikes((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  }, []);

  return (
    <div>
      <h1>Produtos</h1>

      <select onChange={(e) => setCategory(e.target.value)} value={category}>
        <option value="Todos">Todos</option>
        <option value="Eletrônicos">Eletrônicos</option>
        <option value="Vestuário">Vestuário</option>
      </select>

      <ul>
        {filteredProducts.map((p) => (
          <li key={p.id}>
            {p.name} - {p.category}
            <button onClick={() => handleLike(p.id)}>
              Curtir ({likes[p.id] || 0})
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
