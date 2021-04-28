import { useTapGesture } from "framer-motion";
import { useEffect, useState } from "react";
import { db } from '../../firebase/config'

export const getStaticProps = async () => {  
  const res1 = await db.collection('scooter-categories').get()
  const categories = res1.docs.map(doc => {
    return { ...doc.data(), id: doc.id }
  })
  
  const res2 = await db.collection('scooter-cards').get()
  const cards = res2.docs.map(doc => {
    return { ...doc.data(), id: doc.id }
  })

  const res3 = await db.collection('scooter-accessories').get()
  const helmets = res3.docs.map(doc => {
    return { ...doc.data(), id: doc.id }
  })


  return { props: { categories, cards, helmets }, revalidate: 1 };
};

export default function Catalog({ categories, cards, helmets }) {
  console.log(categories, cards, helmets);
  return (
    <div className="layout">
      <header>
        <img src="/menu.png" alt="menu" className="menu" />
        <span className="title-header">Catalog</span>
        <img src="/batman.png" alt="avatar" className="avatar" />
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

      <div className="accessories">
        <div className="header">
          <h6 className="title">Accessories</h6>
          {/* <h6 className="menu">View All</h6> */}
        </div>
        <div className="helmets">
          {helmets.map((helmet) => (
            <div
              className="helmet"
              key={helmet.id}
              style={{ backgroundColor: `${helmet.bgColor}` }}
            >
              <img
                className="img-helmet"
                src={helmet.imgSrc}
                alt={helmet.desc}
              />
              <div className="desc-helmet">
                <div className="title-helmet">{helmet.title}</div>
                <div className="price-helmet">{helmet.price}</div>
              </div>
              <div className="img-heart">
                <img
                  className="icon-heart"
                  src="/heart-filled.png"
                  alt="heart image"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .layout {
          max-width: 50rem;
          background: #ffffff;
          padding: 3.125rem 0 0 1.875rem;
          overflow: hidden;
        }
        header {
          display: flex;
          align-items: center;
        }
        .menu,
        .avatar {
          width: 1.75rem;
          height: 1.75rem;
        }
        .menu {
          margin-right: 6.25rem;
        }
        .title-header {
          line-height: 110%;
          font-weight: 500;
          font-size: 1rem;
          text-align: center;
          letter-spacing: -0.01em;
          margin-right: 6.25rem;
        }
        .title-moped {
          font-weight: 500;
          font-size: 1.375rem;
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
          padding: 0.1875rem 0.375rem;
          opacity: 0.7;
          border: 0.0313rem solid #1b3152;
          box-sizing: border-box;
          border-radius: 0.3125rem;
          margin-right: 0.375rem;
        }
        .active {
          color: white;
          background: #1b3152;
          border: 0.0313rem solid #1b3152;
          box-sizing: border-box;
          border-radius: 0.3125rem;
        }
        .cards {
          display: flex;
          margin-top: 1.25rem;
          overflow-x: scroll;
        }
        .cards::-webkit-scrollbar {
          display: none;
        }
        .card {
          width: 9.0625rem;
          margin-right: 0.9375rem;
        }
        .box {
          width: 9.0625rem;
          height: 14.25rem;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 0.625rem;
        }
        .bike-image {
          width: 5.6875rem;
          height: 9.625rem;
        }
        .model {
          font-weight: 500;
          font-size: 1rem;
          line-height: 110%;
          letter-spacing: -0.01em;
          color: #1b3152;
          margin: 0.625rem 0 0.25rem 0;
        }
        .price {
          font-weight: normal;
          font-size: 0.875rem;
          line-height: 110%;
          letter-spacing: -0.01em;
          color: #1b3152;
        }
        .accessories {
          margin: 2.5rem 1.875rem 0 0;
        }
        .header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 1.25rem;
          // border: 1px solid red;
        }
        .header .title {
          font-weight: 500;
          font-size: 1.375rem;
          line-height: 110%;
          letter-spacing: -0.01em;
          color: #1b3152;
        }
        .header .menu {
          display: block;
          font-weight: normal;
          font-size: 0.875rem;
          line-height: 110%;
          letter-spacing: -0.01em;
          color: #1b3152;
          opacity: 0.5;
          border: 1px solid blue;
        }
        .helmets {
          overflow-y: scroll;
          max-height: 18.75rem;
        }
        .helmets::-webkit-scrollbar {
          display: none;
        }
        .helmet {
          display: flex;
          margin-bottom: 0.625rem;
          border-radius: 0.625rem;
        }
        .img-helmet {
          width: 3.9375rem;
          height: 3.9375rem;
          border-radius: 0.5rem;
          margin: 0.1875rem;
        }
        .desc-helmet {
          margin: 0 3.25rem 0 0.625rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .title-helmet {
          font-weight: 500;
          font-size: 1rem;
          line-height: 110%;
          letter-spacing: -0.01em;
          color: #1b3152;
          margin: 0.1875rem 0 0.0625rem 0;
        }
        .price-helmet {
          font-weight: normal;
          font-size: 0.875rem;
          line-height: 110%;
          letter-spacing: -0.01em;
          color: #1b3152;
          opacity: 0.5;
        }
        .icon-heart {
          width: 1.75rem;
          height: 1.75rem;
        }
        .img-heart {
          padding: 1.5625rem 0 0 0;
          display: flex;
          justify-content: center;
          margin-right: 0.625rem;
        }
      `}</style>
    </div>
  );
}
