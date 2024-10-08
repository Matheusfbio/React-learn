import { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
export default function List({ getItems }) {
  const [item, setItem] = useState([]);
  useEffect(() => {
    getItems().then((result) => setItem(result));
  }, [getItems]);
  return (
    <div>
      {item &&
        item.map((item) => <p key={item.id}>{item?.title || item?.name}</p>)}
    </div>
  );
}
