import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

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
      ;
      <img src="/logo.png" width="99" height="80" className="logo" />
      <Image src="/bg.png" width="375" height="402" className="bg" />
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
          max-width: 375px;
          margin: 30px auto;
          height: 812px;
          background: #ffffff;
          border-radius: 36px;
          text-align: center;
        }
        .logo {
          position: relative;
          top: 50px;
        }
        .bg {
          position: absolute;
          top: 105px;
        }
        .indicators {
          display: flex;
          justify-content: center;
        }
        .dot {
          margin-top: 20px;
          width: 9px;
          height: 9px;
          margin-right: 17px;
          border-radius: 50%;
          border: 1.5px solid #e3657c;
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
          font-size: 30px;
          line-height: 110%;
          margin: 30px 60px 20px 60px;
          text-align: center;
          letter-spacing: -0.01em;
          color: #1b3152;
        }
        h3 {
          font-weight: normal;
          font-size: 16px;
          line-height: 130%;
          text-align: center;
          letter-spacing: -0.01em;
          color: #1b3152;
          margin-bottom: 40px;
        }
        button {
          background: linear-gradient(
            186.48deg,
            #e3657c 4.83%,
            #b93d56 112.18%
          );
          border-radius: 12px;
          width: 315px;
          height: 59px;
          color: white;
          font-size: 18px;
          border: none;
          outline: none;
        }
      `}</style>
    </div>
  );
}

