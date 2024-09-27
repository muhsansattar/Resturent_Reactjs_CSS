import React, { useState } from "react";
import './resturent.css';
import './zoom.css';

const MenuCard = ({ menuData, addToCart }) => {
  // State to manage which card's extra description is visible
  const [showDescription, setShowDescription] = useState({});
  // State to manage which card is zoomed
  const [zoomedCard, setZoomedCard] = useState(null);

  // Function to toggle the visibility of the description
  const toggleDescription = (id) => {
    setShowDescription((prevState) => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };

  // Function to toggle the zoom state
  const toggleZoom = (id) => {
    setZoomedCard((prevState) => (prevState === id ? null : id));
  };

  // Function to close the zoomed card when clicking outside
  const closeZoom = () => {
    setZoomedCard(null);
  };

  return (
    <>
      <div className="grid-container">
        {menuData.map((curElem) => (
          <div
            className={`card-container ${zoomedCard === curElem.id ? "zoomed" : ""}`}
            key={curElem.id}
            onClick={() => toggleZoom(curElem.id)}
          >
            <div className="card">
              <div className="card-body">
                <span className="card-number card-circle subtle">{curElem.id}</span>
                <span className="card-author subtle">{curElem.name}</span>
                <h2 className="card-title">{curElem.category}</h2>
                <span className="card-description subtle">
                  {curElem.description}
                  {showDescription[curElem.id] && (
                    <span className="extra-description">
                      {/* Extra description text */}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.
                    </span>
                  )}
                </span>
                <button
                  className="card-read"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleDescription(curElem.id);
                  }}
                >
                  {showDescription[curElem.id] ? "Read Less" : "Read More"}
                </button>
              </div>
              <img src={curElem.image} alt="image" className="card-media" />
              <div className="orderNow">
                <button
                  className="card-tag subtle"
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(curElem);
                  }}
                >
                  Order Now
                </button>
                <span className="price">Price: {curElem.price}$</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {zoomedCard && (
        <div className="overlay" onClick={closeZoom}>
          <div className="zoomed-card">
            {menuData.filter(card => card.id === zoomedCard).map((curElem) => (
              <div key={curElem.id} className="card">
                <div className="card-body">
                  <span className="card-number card-circle subtle">{curElem.id}</span>
                  <span className="card-author subtle">{curElem.name}</span>
                  <h2 className="card-title">{curElem.category}</h2>
                  <span className="card-description subtle">
                    {curElem.description}
                    {showDescription[curElem.id] && (
                      <span className="extra-description">
                        {/* Extra description text */}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.
                      </span>
                    )}
                  </span>
                  <button
                    className="card-read"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleDescription(curElem.id);
                    }}
                  >
                    {showDescription[curElem.id] ? "Read Less" : "Read More"}
                  </button>
                </div>
                <img src={curElem.image} alt="image" className="card-media" />
                <div className="orderNow">
                  <button
                    className="card-tag subtle"
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(curElem);
                    }}
                  >
                    Order Now
                  </button>
                  <span className="price">Price: {curElem.price}$</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default MenuCard;
