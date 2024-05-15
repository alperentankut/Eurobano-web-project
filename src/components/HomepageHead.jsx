import Rectangle from "../assets/Rectangle 28.png";
import { useState } from "react";
const HomepageHead = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="main-container d-flex flex-column align-items-center">
      <div
        className="ali-choubin-ebaotrc-cnq-4-unsplash-1 d-flex flex-column align-items-center "
        
      >
        <div className="rectangle-28"
        >
          <img src={Rectangle}></img>
          <div className="vector">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="346"
              height="39"
              viewBox="0 0 346 39"
              fill="none"
            >
              <path
                d="M0.850098 37.741H33.7701V31.041H9.9201V26.581H32.0001V20.811H9.9201V16.341H33.2401V9.87102H0.850098V37.741ZM39.3901 27.811C39.3901 34.741 43.2001 38.051 51.5401 38.051H64.5401C72.8901 38.051 76.6901 34.741 76.6901 27.811V9.87102H67.6101V25.971C67.6101 29.511 66.2601 30.901 62.5401 30.901H53.5501C49.8301 30.901 48.4801 29.511 48.4801 25.971V9.87102H39.4001V27.811H39.3901ZM92.0401 16.791H106.23C109.09 16.791 110.4 17.261 110.4 19.721V20.641C110.4 22.641 109.5 23.571 107.04 23.571H92.0301V16.791H92.0401ZM82.9601 37.741H92.0401V30.511H106.31C109.13 30.511 110.03 31.471 110.03 34.401V37.751H119.11V33.021C119.11 28.441 116.86 27.331 114.16 26.861V26.791C118.33 25.861 119.23 23.671 119.23 19.941V18.171C119.23 13.171 117.35 9.89101 110.36 9.89101H82.9601V37.761V37.741ZM124.86 27.961C124.86 36.121 129.73 38.041 137.91 38.041H152.47C160.65 38.041 165.51 36.111 165.51 27.961V19.641C165.51 11.481 160.65 9.55102 152.47 9.55102H137.91C129.73 9.55102 124.86 11.481 124.86 19.641V27.961ZM134.19 22.301C134.19 18.831 135.09 16.721 139.87 16.721H150.5C155.29 16.721 156.18 18.831 156.18 22.301V25.301C156.18 29.351 155.28 30.881 150.98 30.881H139.37C135.07 30.881 134.17 29.341 134.17 25.301V22.301H134.19ZM171.14 37.741H200.05C205.24 37.741 209.09 36.471 209.09 30.361C209.09 26.161 207.61 24.151 203.65 23.691V23.581C206.18 22.891 208.02 21.961 208.02 17.191C208.02 11.721 204.51 9.87102 197.27 9.87102H171.14V37.741ZM180.22 26.691H196.5C198.46 26.691 199.77 27.121 199.77 29.001C199.77 30.621 198.47 31.041 196.5 31.041H180.22V26.691ZM180.22 16.561H196.29C197.96 16.561 198.95 17.141 198.95 18.761C198.95 20.381 197.97 20.911 196.29 20.911H180.22V16.561ZM211.81 37.741H221.95L224.61 32.821H243.02L245.84 37.741H255.94L239.66 9.87102H227.84L211.81 37.741ZM233.72 16.341L239.61 26.811H228L233.72 16.341ZM259.31 37.741H268.4V17.491H268.47L285.53 37.741H299.6V9.87102H290.51V30.131H290.44L273.38 9.87102H259.31V37.741ZM273 7.56101C273.17 6.29101 274.19 5.29102 275.54 5.29102C277.34 5.29102 280.16 7.13101 283.31 7.13101C287.52 7.13101 289.32 4.13101 289.81 0.631012H285.93C285.75 1.71101 284.78 2.74101 283.55 2.74101C282.74 2.74101 281.43 2.21101 280 1.67101C278.57 1.17101 277.02 0.631012 275.71 0.631012C271.91 0.631012 269.53 4.40101 269.13 7.56101H273.01H273ZM305.21 27.961C305.21 36.121 310.08 38.041 318.26 38.041H332.82C341 38.041 345.87 36.111 345.87 27.961V19.641C345.87 11.481 341 9.55102 332.82 9.55102H318.26C310.08 9.55102 305.21 11.481 305.21 19.641V27.961ZM314.54 22.301C314.54 18.831 315.44 16.721 320.23 16.721H330.86C335.64 16.721 336.54 18.831 336.54 22.301V25.301C336.54 29.351 335.64 30.881 331.35 30.881H319.73C315.44 30.881 314.54 29.341 314.54 25.301V22.301Z"
                fill="white"
              />
            </svg>
            <div className="vector-small">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="11"
                viewBox="0 0 12 11"
                fill="none"
              >
                <path
                  d="M4.97989 5.16101H5.5499C6.2199 5.16101 6.7699 4.95101 6.7699 4.44101C6.7699 3.99101 6.41987 3.69101 5.64987 3.69101C5.32987 3.69101 5.09989 3.72101 4.97989 3.75101V5.16101ZM4.94989 7.96101H3.7399V3.03101C4.2199 2.94101 4.88988 2.881 5.74988 2.881C6.73988 2.881 7.18989 3.031 7.56989 3.241C7.84989 3.451 8.0799 3.84101 8.0799 4.32101C8.0799 4.86101 7.6299 5.28101 6.9899 5.46101V5.521C7.5099 5.701 7.79989 6.06101 7.94989 6.72101C8.10989 7.48101 8.19989 7.771 8.3299 7.951H7.00989C6.84989 7.771 6.75987 7.32101 6.58987 6.75101C6.49987 6.21101 6.17989 5.97101 5.50989 5.97101H4.92987V7.951L4.94989 7.96101ZM1.71988 5.381C1.71988 7.571 3.44988 9.32101 5.80988 9.32101C8.16988 9.32101 9.80988 7.57101 9.80988 5.41101C9.80988 3.25101 8.10988 1.44101 5.77988 1.44101C3.44988 1.44101 1.71988 3.221 1.71988 5.381ZM11.1499 5.381C11.1499 8.181 8.81988 10.371 5.77988 10.371C2.73988 10.371 0.379883 8.171 0.379883 5.381C0.379883 2.591 2.76988 0.44101 5.77988 0.44101C8.78988 0.44101 11.1499 2.641 11.1499 5.381Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="frame-1" onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
          <div
           className="anasayfa"
          >
            Anasayfa
          </div>

          <div
           className="hakkmzda"
          >
            Hakkımızda
          </div>
          <div
            className="rnlerimiz"
          >
            Ürünlerimiz
          </div>
          <div
            className="fuarlar"
          >
            Fuarlar
          </div>
          <div
            className="letiim"
          >
            İletişim
          </div>

          <div className="frame-3">
            <div className="tr-tr">TR-tr</div>
            <div>
              <svg
                className="arrow-down"
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
        </div>
        {isHovered && (
          <div className="frame-4">
            <svg
              className="line-2-stroke"
              xmlns="http://www.w3.org/2000/svg"
              width="46"
              height="2"
              viewBox="0 0 46 2"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M45.5476 1.09399H0V0.0939941H45.5476V1.09399Z"
                fill="#FFCD00"
              />
            </svg>
            <svg
              className="vector-select"
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="7"
              viewBox="0 0 19 7"
              fill="none"
            >
              <path
                d="M6.09764 4.62863C4.92881 4.62863 4.04568 5.49443 3.8985 6.59399H0.547852C0.894172 3.85806 2.95477 0.593994 6.24481 0.593994C7.37901 0.593994 8.72101 1.06153 9.9591 1.49443C11.1972 1.96196 12.3314 2.42083 13.0327 2.42083C14.0976 2.42083 14.9375 1.52906 15.0933 0.593994H18.4526C18.0284 3.6243 16.4699 6.2217 12.8249 6.2217C10.0976 6.2217 7.65608 4.62863 6.09764 4.62863Z"
                fill="#FFCC07"
              />
            </svg>
            <svg
              className="line-3-stroke"
              xmlns="http://www.w3.org/2000/svg"
              width="46"
              height="2"
              viewBox="0 0 46 2"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M45.9998 1.09399H0.452148V0.0939941H45.9998V1.09399Z"
                fill="#FFCD00"
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomepageHead;
