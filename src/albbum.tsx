import {
  useEffect,
  useMemo,
  useState,
  useTransition,
  type ChangeEvent,
} from "react";
import { albums } from "./albumsData";

const Albums: React.FC = () => {
  const [value, setValue] = useState("");
  const [isPending, startTransition] = useTransition("");
  const [transitionVal, setTransitionVal] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((res) => res.json())
      .then((data) => data);
  }, []);

  const filterAlbum = useMemo(() => {
    return albums.filter((album) =>
      album.title.toLocaleLowerCase().includes(value)
    );
  }, [transitionVal]);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    startTransition(() => {
      setTransitionVal(e.target.value);
    });
  };
  console.log("exercise 2 - render");
  return (
    <div>
      <div>
        <input type="text" onChange={onChangeHandler} />
      </div>

      {isPending && <h1>LOADING . . .</h1>}

      {filterAlbum.map((result) => (
        <div key={result.id}>
          <h1>{result.userId}</h1>
          <h3>{result.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Albums;
