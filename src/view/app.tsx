import { h, Fragment } from "preact";
import { useEffect, useState } from "preact/hooks";
import "../scss/game.scss";

const App = () => {
  const [rand, setRand] = useState<string>("Hello  World!");

  useEffect(() => {
    console.log("Web-apps loaded!");
  }, []);

  return (
    <>
      <div>{rand}!</div>
      <div>
        <input value={rand} onChange={(e: Event) => setRand((e.target as HTMLInputElement).value)} />
      </div>
    </>
  );
};

export default App;
