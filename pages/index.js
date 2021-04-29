import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useEffect } from 'react'

export default function Home() {
  const router = useRouter();  

  const handleClick = () => {
    router.push("/catalog");
  };

  return (
    <div className="layout">
      <Head>
        <title>Mega Scooter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <img src="/logo.png" className="logo" />
      <img src="/bg.png" className="bg" />
      <div className="indicators">
        <div className="dot active"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
      <h1>Start you moped journey now</h1>
      <h3>Together with Mega Scooter</h3>
      <motion.button
        className="button"
        whileHover={{ y: "-10px" }}
        onClick={handleClick}
      >
        Continue
      </motion.button>
      <style>{`
        .layout {
          max-width: 50rem;
          background: #ffffff;
          text-align: center;
          overflow: hidden;
        }
        .logo {
          position: relative;
          top: 20px;
          width: 5.625rem;
          height: 5rem;
        }
        .bg {
          width: 23.4375rem;
          height: 25.125rem;
        }
        .indicators {
          display: flex;
          justify-content: center;
        }
        .dot {
          margin-top: 1.25rem;
          width: 0.5625rem;
          height: 0.5625rem;
          margin-right: 1.0625rem;
          border-radius: 50%;
          border: 0.0938rem solid #e3657c;
        }
        .dot.active {
          background: linear-gradient(
            186.48deg,
            #e3657c 4.83%,
            #b93d56 112.18%
          );
        }
        h1 {
          font-weight: 500;
          font-size: 1.875rem;
          line-height: 110%;
          margin: 1.875rem 3.75rem 1.25rem 3.75rem;
          text-align: center;
          letter-spacing: -0.01em;
          color: #1b3152;
        }
        h3 {
          font-weight: normal;
          font-size: 1rem;
          line-height: 130%;
          text-align: center;
          letter-spacing: -0.01em;
          color: #1b3152;
          margin-bottom: 2.5rem;
        }
        button {
          background: linear-gradient(
            186.48deg,
            #e3657c 4.83%,
            #b93d56 112.18%
          );
          border-radius: 0.75rem;
          width: 19.6875rem;
          height: 3.6875rem;
          color: white;
          font-size: 1.125rem;
          border: none;
          outline: none;
          margin-bottom: 2.5rem;
        }
      `}</style>
    </div>
  );
}

