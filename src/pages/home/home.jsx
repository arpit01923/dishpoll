import { useState } from "react";
import "./home.css";

export const Home = () => {
  const [toggleTabs, setToggleTabs] = useState({ tab1: true, tab2: false });

  const tab1Handler = () => {
    setToggleTabs((prev) => ({ ...prev, tab1: true, tab2: false }));
  };

  const tab2Handler = () => {
    setToggleTabs((prev) => ({ ...prev, tab1: false, tab2: true }));
  };

  return (
    <main>
      <header>
        <button onClick={() => tab1Handler()}>Tab1</button>
        <button onClick={() => tab2Handler()}>Tab2</button>
      </header>
      {toggleTabs.tab1 && <section>Data1</section>}
      {toggleTabs.tab2 && <section>Data2</section>}
    </main>
  );
};
