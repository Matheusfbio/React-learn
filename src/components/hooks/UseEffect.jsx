import { useState, useEffect } from "react";

const UseEffect = () => {
  const [items, setItems] = useState([]);
  const [resourceType, setResourceType] = useState("Posts");

  useEffect(() => {
    const FetchResourceTypes = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/${resourceType}`
      );
      const responseJson = await response.json();
      setItems(responseJson);
      console.log(responseJson);
    };
    FetchResourceTypes();
  }, [resourceType]);

  const changeResourceType = (resourceType) => {
    setResourceType(resourceType);
  };
  return (
    <div>
      <h1>{resourceType}</h1>
      <div>
        <button
          className="flex-1  px-3 flex-row border-3 border-black rounded-full justify-between"
          onClick={() => changeResourceType("posts")}
        >
          Posts
        </button>
        <button
          className="flex-1  px-3 flex-row border-3 border-black rounded-full justify-between"
          onClick={() => changeResourceType("comments")}
        >
          Comments
        </button>
        <button
          className="flex-1  px-3 flex-row border-3 border-black rounded-full justify-between"
          onClick={() => changeResourceType("todos")}
        >
          Todos
        </button>
      </div>
      {items.map((item) => (
        <>
          <div className="bg-red-500">
            <p>{item.id}</p>
            <p>{item.title}</p>
            <p>{item.name}</p>
          </div>
        </>
      ))}
    </div>
  );
};

export default UseEffect;
