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
          <section className="vertical-card">
            <h3 className="name">name</h3>
            <img
              src="https://loremflickr.com/300/300/food"
              alt="product-img"
              className="image"
            />
            <p className="description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
              modi odio ut vero labore nesciunt quos saepe voluptatum tempora
              quasi sapiente enim officiis expedita, veritatis dicta laborum
              ratione, doloribus alias.
            </p>
            <button className="btn primary">Vote</button>
            <button className="btn secondary">Unvote</button>
          </section>

          <section className="vertical-card">
            <h3 className="name">name</h3>
            <img
              src="https://loremflickr.com/300/300/food"
              alt="product-img"
              className="image"
            />
            <p className="description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
              modi odio ut vero labore nesciunt quos saepe voluptatum tempora
              quasi sapiente enim officiis expedita, veritatis dicta laborum
              ratione, doloribus alias.
            </p>
            <button className="btn primary">Vote</button>
            <button className="btn secondary">Unvote</button>
          </section>
        </section>
      )}
      {toggleTabs.tab2 && (
        <section className="tab-container">
          <section className="vertical-card">
            <h3 className="name">name</h3>
            <img
              src="https://loremflickr.com/300/300/food"
              alt="product-img"
              className="image"
            />
            <p className="description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
              modi odio ut vero labore nesciunt quos saepe voluptatum tempora
              quasi sapiente enim officiis expedita, veritatis dicta laborum
              ratione, doloribus alias.
            </p>
            {/* <button className="btn primary">Vote</button>
            <button className="btn secondary">Unvote</button> */}
          </section>
        </section>
      )}
    </main>
  );
};
