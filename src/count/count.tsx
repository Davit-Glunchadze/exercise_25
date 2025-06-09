import { useEffect, useState } from "react";

const count: React.FC = () => {
  const [value, setValue] = useState(0);
  const [color, setColor] = useState("gray");
  const [name, setName] = useState("");

  const onIncrease = () => {
    setValue((prev) => prev + 1);
    setColor("red");
    setName("იმატებს");
  };
  const onDecrease = () => {
    setValue((prev) => prev - 1);
    setColor("blue");
    setName("იკლებს");
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setValue((prev) => prev + 1);
  //     setColor("yellow");
  //     setName("იცვლება");
  //   }, 2000);

  //   return () => clearInterval(interval);
  // }, []);

  console.log("exercise 1 - render");

  return (
    <>
      <div style={{ color: color }}>
        <div>
          {name} {value}
        </div>
        <br />
        <button onClick={onDecrease}>Decrease </button>
        <button onClick={onIncrease}>Increase </button>
      </div>
    </>
  );
};

export default count;
