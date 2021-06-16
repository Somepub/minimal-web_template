import { h, Fragment } from "preact";
import { useEffect, useState } from "preact/hooks";
import "../scss/game.scss";

const App = () => {
  const [rand, setRand] = useState<string>("");

  useEffect(() => {
    console.log("Web-app loaded!");
  }, []);

  return (
    <>
      <div>{rand}</div>
      <div>
        <input value={rand} onChange={(e) => setRand(e.target.value)} />
      </div>
    </>
  );
};

export default App;
