import axios from "axios";
import { useEffect, useState } from "react";
import "./home.css";

export const Home = () => {
  const [dishesData, setDishesData] = useState([]);
  const [toggleTabs, setToggleTabs] = useState({ tab1: true, tab2: false });

  const tab1Handler = () => {
    setToggleTabs((prev) => ({ ...prev, tab1: true, tab2: false }));
  };

  const tab2Handler = () => {
    setToggleTabs((prev) => ({ ...prev, tab1: false, tab2: true }));
  };

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json"
      );
      console.log(response);
      setDishesData(response.data);
    })();
  }, []);

  return (
    <main>
      <header className="tab-header">
        <button
          onClick={() => tab1Handler()}
          className={`btn ${toggleTabs.tab1 ? "primary" : "secondary"}`}
        >
          Tab1
        </button>
        <button
          onClick={() => tab2Handler()}
          className={`btn ${toggleTabs.tab2 ? "primary" : "secondary"}`}
        >
          Tab2
        </button>
      </header>
      {toggleTabs.tab1 && (
        <section className="tab-container">
          {dishesData.map(({ id, dishName, description, image }) => (
            <section className="vertical-card" key={id}>
              <h3 className="name">{dishName}</h3>
              <img src={image} alt="product-img" className="image" />
              <p className="description">{description}</p>
              <button className="btn primary">Vote</button>
              <button className="btn secondary">Unvote</button>
            </section>
          ))}
        </section>
      )}
      {toggleTabs.tab2 && (
        <section className="tab-container">
          {dishesData.map(({ id, dishName, description, image }) => (
            <section className="vertical-card" key={id}>
              <h3 className="name">{dishName}</h3>
              <img src={image} alt="product-img" className="image" />
              <p className="description">{description}</p>
              {/* <button className="btn primary">Vote</button>
              <button className="btn secondary">Unvote</button> */}
            </section>
          ))}
        </section>
      )}
    </main>
  );
};
