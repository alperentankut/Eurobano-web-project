/* eslint-disable react/prop-types */
import "../scss/styles.scss";
import { useState } from "react";
import Selecter from "./Selector";


const HomePage = ({ prev, next, current, length }) => {
  const [homeVisibility, setHomeVisibility] = useState(false);
  const [aboutVisibility, setAboutisibility] = useState(false);
  const [productsVisibility, setProductsisibility] = useState(false);
  const [showroomsVisibility, setShowroomsVisibility] = useState(false);
  const [contactVisibility, setContactVisibility] = useState(false);

  const handleHomeVisibility = () => {
    setHomeVisibility(true);
    setAboutisibility(false);
    setProductsisibility(false);
    setShowroomsVisibility(false);
    setContactVisibility(false);
  };
  const handleAboutVisibility = () => {
    setHomeVisibility(false);
    setAboutisibility(true);
    setProductsisibility(false);
    setShowroomsVisibility(false);
    setContactVisibility(false);
  };
  const handleProductsVisibility = () => {
    setHomeVisibility(false);
    setAboutisibility(false);
    setProductsisibility(true);
    setShowroomsVisibility(false);
    setContactVisibility(false);
  };
  const handleShowroomsVisibility = () => {
    setHomeVisibility(false);
    setAboutisibility(false);
    setProductsisibility(false);
    setShowroomsVisibility(true);
    setContactVisibility(false);
  };
  const handleContactVisibility = () => {
    setHomeVisibility(false);
    setAboutisibility(false);
    setProductsisibility(false);
    setShowroomsVisibility(false);
    setContactVisibility(true);
  };
  return (
    <div>
      <div
        className="d-flex align-items-center flex-column px-0"
        style={{ height: "970px" }}
      >
        <div className="rectangle-28 d-flex align-items-center justify-content-center">
          <div className="frame-2">
            <div>
              <svg
                className="vector-head"
                xmlns="http://www.w3.org/2000/svg"
                width="346"
                height="39"
                viewBox="0 0 346 39"
                fill="none"
              >
                <path
                  d="M0.60498 37.7512H33.525V31.0512H9.67498V26.5912H31.755V20.8212H9.67498V16.3512H32.995V9.88124H0.60498V37.7512ZM39.145 27.8212C39.145 34.7512 42.955 38.0612 51.295 38.0612H64.295C72.645 38.0612 76.445 34.7512 76.445 27.8212V9.88124H67.365V25.9812C67.365 29.5212 66.015 30.9112 62.295 30.9112H53.305C49.585 30.9112 48.235 29.5212 48.235 25.9812V9.88124H39.155V27.8212H39.145ZM91.795 16.8012H105.985C108.845 16.8012 110.155 17.2712 110.155 19.7312V20.6512C110.155 22.6512 109.255 23.5812 106.795 23.5812H91.785V16.8012H91.795ZM82.715 37.7512H91.795V30.5212H106.065C108.885 30.5212 109.785 31.4812 109.785 34.4112V37.7612H118.865V33.0312C118.865 28.4512 116.615 27.3412 113.915 26.8712V26.8012C118.085 25.8712 118.985 23.6812 118.985 19.9512V18.1812C118.985 13.1812 117.105 9.90124 110.115 9.90124H82.715V37.7712V37.7512ZM124.615 27.9712C124.615 36.1312 129.485 38.0512 137.665 38.0512H152.225C160.405 38.0512 165.265 36.1212 165.265 27.9712V19.6512C165.265 11.4912 160.405 9.56124 152.225 9.56124H137.665C129.485 9.56124 124.615 11.4912 124.615 19.6512V27.9712ZM133.945 22.3112C133.945 18.8412 134.845 16.7312 139.625 16.7312H150.255C155.045 16.7312 155.935 18.8412 155.935 22.3112V25.3112C155.935 29.3612 155.035 30.8912 150.735 30.8912H139.125C134.825 30.8912 133.925 29.3512 133.925 25.3112V22.3112H133.945ZM170.895 37.7512H199.805C204.995 37.7512 208.845 36.4812 208.845 30.3712C208.845 26.1712 207.365 24.1612 203.405 23.7012V23.5912C205.935 22.9012 207.775 21.9712 207.775 17.2012C207.775 11.7312 204.265 9.88124 197.025 9.88124H170.895V37.7512ZM179.975 26.7012H196.255C198.215 26.7012 199.525 27.1312 199.525 29.0112C199.525 30.6312 198.225 31.0512 196.255 31.0512H179.975V26.7012ZM179.975 16.5712H196.045C197.715 16.5712 198.705 17.1512 198.705 18.7712C198.705 20.3912 197.725 20.9212 196.045 20.9212H179.975V16.5712ZM211.565 37.7512H221.705L224.365 32.8312H242.775L245.595 37.7512H255.695L239.415 9.88124H227.595L211.565 37.7512ZM233.475 16.3512L239.365 26.8212H227.755L233.475 16.3512ZM259.065 37.7512H268.155V17.5012H268.225L285.285 37.7512H299.355V9.88124H290.265V30.1412H290.195L273.135 9.88124H259.065V37.7512ZM272.755 7.57124C272.925 6.30124 273.945 5.30124 275.295 5.30124C277.095 5.30124 279.915 7.14124 283.065 7.14124C287.275 7.14124 289.075 4.14124 289.565 0.641235H285.685C285.505 1.72124 284.535 2.75124 283.305 2.75124C282.495 2.75124 281.185 2.22124 279.755 1.68124C278.325 1.18124 276.775 0.641235 275.465 0.641235C271.665 0.641235 269.285 4.41124 268.885 7.57124H272.765H272.755ZM304.965 27.9712C304.965 36.1312 309.835 38.0512 318.015 38.0512H332.575C340.755 38.0512 345.625 36.1212 345.625 27.9712V19.6512C345.625 11.4912 340.755 9.56124 332.575 9.56124H318.015C309.835 9.56124 304.965 11.4912 304.965 19.6512V27.9712ZM314.295 22.3112C314.295 18.8412 315.195 16.7312 319.985 16.7312H330.615C335.395 16.7312 336.295 18.8412 336.295 22.3112V25.3112C336.295 29.3612 335.395 30.8912 331.105 30.8912H319.485C315.195 30.8912 314.295 29.3512 314.295 25.3112V22.3112Z"
                  fill="#FFCD00"
                />
              </svg>
            </div>

            <div>
              <svg
                className="vector-small"
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="11"
                viewBox="0 0 12 11"
                fill="none"
              >
                <path
                  d="M5.22501 5.36124H5.79501C6.46501 5.36124 7.01501 5.15124 7.01501 4.64124C7.01501 4.19124 6.66499 3.89124 5.89499 3.89124C5.57499 3.89124 5.34501 3.92123 5.22501 3.95123V5.36124ZM5.19501 8.16123H3.98502V3.23123C4.46502 3.14123 5.13499 3.08123 5.995 3.08123C6.98499 3.08123 7.435 3.23123 7.815 3.44123C8.095 3.65123 8.32501 4.04123 8.32501 4.52123C8.32501 5.06123 7.87502 5.48123 7.23502 5.66123V5.72123C7.75502 5.90123 8.04501 6.26123 8.19501 6.92123C8.35501 7.68123 8.44501 7.97123 8.57501 8.15123H7.255C7.09501 7.97123 7.00499 7.52123 6.83499 6.95123C6.74499 6.41123 6.425 6.17123 5.755 6.17123H5.17499V8.15123L5.19501 8.16123ZM1.965 5.58123C1.965 7.77123 3.69499 9.52124 6.05499 9.52124C8.41499 9.52124 10.055 7.77124 10.055 5.61124C10.055 3.45124 8.35499 1.64124 6.02499 1.64124C3.69499 1.64124 1.965 3.42123 1.965 5.58123ZM11.395 5.58123C11.395 8.38123 9.06499 10.5712 6.02499 10.5712C2.98499 10.5712 0.625 8.37123 0.625 5.58123C0.625 2.79123 3.01499 0.641235 6.02499 0.641235C9.03499 0.641235 11.395 2.84123 11.395 5.58123Z"
                  fill="#FFCD00"
                />
              </svg>
            </div>
          </div>
        </div>
        <div
          className="main-container flex-column align-items-center d-flex justify-content-between"
          style={{ height: "100%" }}
        >
          <div className="frame-1 mt-3">
            <div className="home d-flex align-items-center flex-column ">
              <a style={{cursor : "pointer"}} onClick={handleHomeVisibility}>
                {" "}
                <div className="anasayfa-button">Anasayfa</div>
              </a>

              <Selecter visibility={homeVisibility} />
            </div>
            <div className="about  d-flex align-items-center flex-column">
              <a style={{cursor : "pointer"}} onClick={handleAboutVisibility}>
                <div className="hakkmzda">Hakkımızda</div>
              </a>

              <Selecter visibility={aboutVisibility} />
            </div>
            <div className="products  d-flex align-items-center flex-column">
              <a style={{cursor : "pointer"}} onClick={handleProductsVisibility}>
                <div className="rnlerimiz">Ürünlerimiz</div>
              </a>

              <Selecter visibility={productsVisibility} />
            </div>

            <div className="showrooms  d-flex align-items-center flex-column">
              <a style={{cursor : "pointer"}} onClick={handleShowroomsVisibility}>
                <div className="fuarlar">Fuarlar</div>
              </a>

              <Selecter visibility={showroomsVisibility} />
            </div>
            <div className="contact  d-flex align-items-center flex-column">
              <a style={{cursor : "pointer"}} onClick={handleContactVisibility}>
                <div className="letiim">İletişim</div>
              </a>

              <Selecter visibility={contactVisibility} />
            </div>

            <div className=" d-flex  align-items-center flex-column">
              <div className="frame-3">
                <div className="tr-tr">TR-tr</div>
                <div className="arrow-down">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M5 8.5L12 15.5L19 8.5"
                      stroke="#FFCD00"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>

              <Selecter />
            </div>
          </div>

          <div
            className="d-flex justify-content-between align-items-center"
            style={{ height: "60%" }}
          >
            <div className="frame-14" style={{ width: "5vw" }}>
              <div className="rn-kataloumuz">2024 ürün kataloğumuz</div>
              <div className="vector-49">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="45"
                  viewBox="0 0 24 45"
                  fill="none"
                >
                  <path
                    d="M12.2147 44.2041V0.795929M12.2147 0.795929L1.07715 11.9335M12.2147 0.795929L23.3523 11.9335"
                    stroke="white"
                  />
                </svg>
              </div>
            </div>

            <div
              className="d-flex align-items-center flex-column justify-content-center"
              style={{ width: "80vw" }}
            >
              <div className="dlednzevn">DÜŞLEDİĞİNİZ EVİN</div>
              <div className="vazgeemeyecenzdetayi">
                VAZGEÇEMEYECEĞİNİZ DETAYI
              </div>
            </div>
            <div className="frame-13" style={{ width: "5vw" }}>
              <div className="bizimle-iletiime-gein">
                bizimle iletişime geçin
              </div>
              <div className="vector-49">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="45"
                  viewBox="0 0 24 45"
                  fill="none"
                >
                  <path
                    d="M11.785 44.7041V1.29593M11.785 1.29593L0.647461 12.4335M11.785 1.29593L22.9226 12.4335"
                    stroke="white"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div
            className="footer d-flex align-items-center flex-column"
            style={{ gap: "10px" }}
          >
            <div className="frame-22">
              <div className="arrow-left">
                <svg
                  onClick={prev}
                  className="arrow-left"
                  xmlns="http://www.w3.org/2000/svg"
                  width="43"
                  height="42"
                  viewBox="0 0 43 42"
                  fill="none"
                >
                  <path
                    d="M27.625 8.75L15.375 21L27.625 33.25"
                    stroke="#FFCD00"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="frame-23">
                <div className="slider-tax">{current}/</div>
                <div className="slider-length">{length}</div>
              </div>
              <div className="arrow-right">
                <svg
                  onClick={next}
                  xmlns="http://www.w3.org/2000/svg"
                  width="43"
                  height="42"
                  viewBox="0 0 43 42"
                  fill="none"
                >
                  <path
                    d="M15.375 33.25L27.625 21L15.375 8.75"
                    stroke="#FFCD00"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
            <div className="frame-15">
              <div className="facebook">facebook</div>
              <div className="instagram">instagram</div>
              <div className="linkedin">linkedin</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
