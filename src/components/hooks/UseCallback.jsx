/* eslint-disable react/prop-types */
import { useState, useCallback } from "react";
import List from "./List";

// eslint-disable-next-line no-unused-vars
export default function UseCallback({ getItem }) {
  const [text, setText] = useState("");
  const [resourceType, setResourceType] = useState("posts");

  const getItems = useCallback(async () => {
    console.log("getItems is being called");
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/${resourceType}`
    );
    const responseJSON = await response.json();
    return responseJSON;
  }, [resourceType]);

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
      />
      <button onClick={() => setResourceType("posts")}>Posts</button>
      <button onClick={() => setResourceType("comments")}>Comment</button>
      <button onClick={() => setResourceType("todos")}>TODOS</button>
      <List getItems={getItems} />
    </div>
  );
}
