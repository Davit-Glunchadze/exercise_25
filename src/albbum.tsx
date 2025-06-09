import { useEffect, useState } from "react";
import { albums } from "./albumsData";
import type { IAlbum } from "./interface";

const Albums: React.FC = () => {
  const [data, setData] = useState<IAlbum[]>(albums);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((res) => res.json())
      .then((data) => data);
  }, []);

  return (
    <div>
      {data.map((result) => (
        <div key={result.id}>
          <h1>{result.userId}</h1>
          <h3>{result.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Albums;
