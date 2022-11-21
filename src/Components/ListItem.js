import React, { useEffect } from "react";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";

function ListItem() {
  const { data, dataHandler, pageNum, getCoinData, lightMode } =
    useGlobalContext();

  useEffect(() => {
    dataHandler();
  }, [pageNum]);
  return (
    <div>
      <div className="list-heading">
        <div className="heading-icon">Icon</div>
        <div className="heading-symbol">Symbol</div>
        <div className="heading-name">Name</div>
        <div className="heading-current-price">Current price</div>
        <div className="heading-high">All-time high</div>
        <div className="heading-low">All-time low</div>
      </div>
      {data.map(({ id, image, symbol, name, current_price, ath, atl }) => {
        return (
          <Link
            to="coinInfo"
            className={
              lightMode ? "dark-text list-item" : "light-text list-item"
            }
            key={id}
            onClick={() => getCoinData(id)}
          >
            <div className="icon">
              <img src={`${image}`}></img>
            </div>
            <div className="symbol">{symbol}</div>
            <div className="name">{name}</div>
            <div className="current-price">{`₹${current_price}`}</div>
            <div className="high-price">{`₹${ath}`}</div>
            <div className="low-price">{`₹${atl}`}</div>
            <hr />
          </Link>
        );
      })}
    </div>
  );
}

export default ListItem;
