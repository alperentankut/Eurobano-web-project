/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */

import "../scss/styles.scss";

const Selecter = ({ visibility }) => {
  return (
    <div className="frame-4" style={{ visibility: !visibility && "hidden" }}>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
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
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="7"
          viewBox="0 0 19 7"
          fill="none"
        >
          <path
            d="M6.09739 4.62863C4.92856 4.62863 4.04544 5.49443 3.89825 6.59399H0.547607C0.893928 3.85806 2.95452 0.593994 6.24457 0.593994C7.37876 0.593994 8.72076 1.06153 9.95886 1.49443C11.197 1.96196 12.3312 2.42083 13.0325 2.42083C14.0974 2.42083 14.9372 1.52906 15.0931 0.593994H18.4524C18.0281 3.6243 16.4697 6.2217 12.8247 6.2217C10.0974 6.2217 7.65584 4.62863 6.09739 4.62863Z"
            fill="#FFCC07"
          />
        </svg>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="2"
          viewBox="0 0 46 2"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M46 1.09399H0.452393V0.0939941H46V1.09399Z"
            fill="#FFCD00"
          />
        </svg>
      </div>
    </div>
  );
};

export default Selecter;
