import { useTapGesture } from "framer-motion";
import { useEffect, useState } from "react";

export const getStaticProps = async () => {
  const res1 = await fetch("http://localhost:8080/categories");
  const categories = await res1.json();

  const res2 = await fetch("http://localhost:8080/cards");
  const cards = await res2.json();

  return { props: { categories, cards } };
};

export default function Catalog({ categories, cards }) {
  console.log(categories, cards);
  return (
    <div className="layout">
      <header>
        <img src="/menu.png" alt="menu" className="menu" />
        <span className="title-header">Catalog</span>
        <img src="/avatar.png" alt="avatar" className="avatar" />
      </header>
      <p className="title-moped">Choose your moped</p>
      <div className="tags">
        {categories.map((category) => (
          <div className="tag" key={category.id}>
            {category.type}
          </div>
        ))}
      </div>
      <div className="cards">
        {cards.map((card) => (
          <div className="card" key={card.id}>
            <div className="box" style={{ backgroundColor: `${card.bgColor}` }}>
              <img src={card.imgSrc} alt={card.model} className="bike-image" />
            </div>
            <div className="model">{card.title}</div>
            <div className="price">{card.price}</div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .layout {
          max-width: 375px;
          margin: 30px auto;
          height: 812px;
          background: #ffffff;
          border-radius: 36px;
          padding: 50px 0 0 30px;
          overflow: hidden;
        }
        header {
          display: flex;
          align-items: center;
        }
        .menu,
        .avatar {
          width: 28px;
          height: 28px;
        }
        .menu {
          margin-right: 100px;
        }
        .title-header {
          line-height: 110%;
          font-weight: 500;
          font-size: 16px;
          text-align: center;
          letter-spacing: -0.01em;
          margin-right: 100px;
        }
        .title-moped {
          font-weight: 500;
          font-size: 22px;
          line-height: 110%;
          letter-spacing: -0.01em;
          color: #1b3152;
          margin: 20px auto;
        }
        .tags {
          display: flex;
          overflow-x: scroll;
        }
        .tags::-webkit-scrollbar {
          display: none;
        }
        .tag {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          padding: 3px 6px;
          opacity: 0.7;
          border: 0.5px solid #1b3152;
          box-sizing: border-box;
          border-radius: 5px;
          margin-right: 6px;
        }
        .active {
          color: white;
          background: #1b3152;
          border: 0.5px solid #1b3152;
          box-sizing: border-box;
          border-radius: 5px;
        }
        .cards {
          display: flex;
          margin-top: 20px;
          overflow-x: scroll;
        }
        .cards::-webkit-scrollbar {
          display: none;
        }
        .card {
          width: 145px;
          margin-right: 15px;
        }
        .box {
          width: 145px;
          height: 228px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 10px;
        }
        .bike-image {
          width: 91px;
          height: 154px;
        }
        .model {
          font-weight: 500;
          font-size: 16px;
          line-height: 110%;
          letter-spacing: -0.01em;
          color: #1b3152;
          margin: 10px 0 4px 0;
        }
        .price {
          font-weight: normal;
          font-size: 14px;
          line-height: 110%;
          letter-spacing: -0.01em;
          color: #1b3152;
        }
      `}</style>
    </div>
  );
}
