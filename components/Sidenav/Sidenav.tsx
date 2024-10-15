import React from "react";
import styles from "./sidenav.module.scss";
import Link from "next/link";

const Sidenav = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <Link href="/" className={styles.link}>
          <div className={styles.container}>
            <p className={styles.home}>home</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
            >
              <g filter="url(#filter0_d_4374_861)">
                <path
                  d="M15 28.5001V21.0001H21V28.5001C21 29.3251 21.675 30.0001 22.5 30.0001H27C27.825 30.0001 28.5 29.3251 28.5 28.5001V18.0001H31.05C31.74 18.0001 32.07 17.1451 31.545 16.6951L19.005 5.40008C18.435 4.89008 17.565 4.89008 16.995 5.40008L4.45503 16.6951C3.94503 17.1451 4.26002 18.0001 4.95002 18.0001H7.50002V28.5001C7.50002 29.3251 8.17502 30.0001 9.00002 30.0001H13.5C14.325 30.0001 15 29.3251 15 28.5001Z"
                  fill="url(#paint0_linear_4374_861)"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_4374_861"
                  x="0.203247"
                  y="1.01758"
                  width="35.6002"
                  height="32.9824"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.890196 0 0 0 0 0.752941 0 0 0 0 0.254902 0 0 0 0.4 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_4374_861"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_4374_861"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_4374_861"
                  x1="18.0034"
                  y1="0.369671"
                  x2="18.0033"
                  y2="33.3831"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#876D24" />
                  <stop offset="0.28" stop-color="#F3D57B" />
                  <stop offset="0.66" stop-color="#B69637" />
                  <stop offset="1" stop-color="#DCBF69" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </Link>
        <Link href="/about" className={styles.link}>
          <div className={styles.container}>
            <p className={styles.about}>about</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
            >
              <path
                d="M18 4.5C10.548 4.5 4.5 10.548 4.5 18C4.5 25.452 10.548 31.5 18 31.5C25.452 31.5 31.5 25.452 31.5 18C31.5 10.548 25.452 4.5 18 4.5ZM18 24.75C17.2575 24.75 16.65 24.1425 16.65 23.4V18C16.65 17.2575 17.2575 16.65 18 16.65C18.7425 16.65 19.35 17.2575 19.35 18V23.4C19.35 24.1425 18.7425 24.75 18 24.75ZM19.35 13.95H16.65V11.25H19.35V13.95Z"
                fill="url(#paint0_linear_4374_863)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_4374_863"
                  x1="18"
                  y1="-0.523256"
                  x2="17.9999"
                  y2="35.1562"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#876D24" />
                  <stop offset="0.28" stop-color="#F3D57B" />
                  <stop offset="0.66" stop-color="#B69637" />
                  <stop offset="1" stop-color="#DCBF69" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </Link>
        <Link href="/shows" className={styles.link}>
          <div className={styles.container}>
            <p className={styles.shows}>shows</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
            >
              <path
                d="M32.8191 13.2791L30.0265 10.4865C29.8012 10.2642 29.5008 10.1344 29.1845 10.1227C28.8682 10.111 28.559 10.2182 28.3179 10.4232C27.9456 10.7401 27.4679 10.9055 26.9794 10.8868C26.4909 10.868 26.0272 10.6664 25.6803 10.322C25.336 9.9751 25.1345 9.51159 25.1158 9.02323C25.097 8.53486 25.2624 8.05726 25.5791 7.68503C25.7841 7.4439 25.8913 7.13471 25.8796 6.81843C25.8678 6.50216 25.7381 6.20175 25.5158 5.97644L22.7207 3.18067C22.4844 2.94491 22.1643 2.8125 21.8306 2.8125C21.4969 2.8125 21.1768 2.94491 20.9406 3.18067L16.4887 7.63187C16.2139 7.90775 16.0066 8.24346 15.8831 8.61273C15.8591 8.68374 15.819 8.74824 15.766 8.80125C15.713 8.85426 15.6485 8.89434 15.5775 8.91838C15.208 9.04189 14.8723 9.24941 14.5966 9.52462L3.18067 20.9406C2.94491 21.1768 2.8125 21.4969 2.8125 21.8306C2.8125 22.1643 2.94491 22.4844 3.18067 22.7207L5.97644 25.5133C6.20175 25.7355 6.50216 25.8653 6.81843 25.877C7.13471 25.8887 7.4439 25.7815 7.68503 25.5765C8.05642 25.2571 8.5348 25.0898 9.02433 25.1082C9.51385 25.1266 9.97834 25.3293 10.3247 25.6757C10.6711 26.022 10.8738 26.4865 10.8922 26.9761C10.9106 27.4656 10.7433 27.944 10.4238 28.3153C10.2188 28.5565 10.1116 28.8657 10.1234 29.1819C10.1351 29.4982 10.2649 29.7986 10.4871 30.0239L13.2797 32.8165C13.5159 33.0523 13.836 33.1847 14.1698 33.1847C14.5035 33.1847 14.8236 33.0523 15.0598 32.8165L26.4758 21.4006C26.7509 21.1251 26.9584 20.7896 27.082 20.4204C27.1059 20.3491 27.146 20.2844 27.1992 20.2313C27.2523 20.1781 27.317 20.138 27.3883 20.1141C27.7574 19.9906 28.0929 19.7833 28.3685 19.5085L32.8197 15.0567C33.0546 14.8205 33.1864 14.5009 33.1863 14.1677C33.1862 13.8346 33.0542 13.5151 32.8191 13.2791ZM18.3675 11.4028C18.2735 11.4968 18.1619 11.5714 18.039 11.6223C17.9162 11.6732 17.7845 11.6994 17.6515 11.6994C17.5185 11.6994 17.3868 11.6732 17.264 11.6223C17.1411 11.5714 17.0295 11.4968 16.9355 11.4028L16.2071 10.6744C16.0219 10.4836 15.9191 10.2275 15.9211 9.96157C15.9231 9.69561 16.0297 9.44111 16.2178 9.25309C16.4059 9.06506 16.6605 8.9586 16.9264 8.95672C17.1924 8.95483 17.4484 9.05767 17.6392 9.24301L18.3675 9.97075C18.4616 10.0648 18.5362 10.1764 18.5871 10.2993C18.638 10.4221 18.6642 10.5538 18.6642 10.6868C18.6642 10.8198 18.638 10.9514 18.5871 11.0743C18.5362 11.1972 18.4616 11.3088 18.3675 11.4028ZM21.1519 14.1872C20.9621 14.3769 20.7046 14.4835 20.4362 14.4835C20.1678 14.4835 19.9104 14.3769 19.7205 14.1872L19.0244 13.4911C18.8345 13.3012 18.7278 13.0436 18.7278 12.7751C18.7278 12.5065 18.8345 12.2489 19.0244 12.059C19.2143 11.8691 19.4719 11.7624 19.7404 11.7624C20.009 11.7624 20.2666 11.8691 20.4565 12.059L21.1525 12.7551C21.2469 12.8491 21.3218 12.9609 21.3729 13.0839C21.424 13.2069 21.4504 13.3388 21.4505 13.472C21.4505 13.6052 21.4243 13.7371 21.3733 13.8601C21.3223 13.9832 21.2475 14.095 21.1532 14.1891L21.1519 14.1872ZM23.9363 16.9716C23.8423 17.0656 23.7306 17.1402 23.6078 17.1911C23.4849 17.242 23.3532 17.2682 23.2203 17.2682C23.0873 17.2682 22.9556 17.242 22.8327 17.1911C22.7099 17.1402 22.5983 17.0656 22.5042 16.9716L21.8081 16.2755C21.6229 16.0846 21.5202 15.8286 21.5222 15.5626C21.5242 15.2966 21.6307 15.0421 21.8188 14.8541C22.007 14.6661 22.2615 14.5596 22.5275 14.5577C22.7934 14.5559 23.0494 14.6587 23.2402 14.844L23.9363 15.5401C24.0309 15.634 24.1061 15.7456 24.1575 15.8686C24.2089 15.9916 24.2355 16.1235 24.2358 16.2568C24.2361 16.39 24.21 16.5221 24.1592 16.6453C24.1083 16.7685 24.0337 16.8804 23.9395 16.9747L23.9363 16.9716ZM26.7479 19.7901C26.6539 19.8841 26.5422 19.9587 26.4194 20.0096C26.2965 20.0605 26.1648 20.0867 26.0318 20.0867C25.8989 20.0867 25.7672 20.0605 25.6443 20.0096C25.5215 19.9587 25.4098 19.8841 25.3158 19.7901L24.5919 19.0624C24.4959 18.9686 24.4194 18.8567 24.3671 18.7332C24.3147 18.6096 24.2874 18.4769 24.2867 18.3427C24.2861 18.2085 24.3121 18.0756 24.3633 17.9515C24.4145 17.8275 24.4899 17.7149 24.585 17.6202C24.6801 17.5256 24.7931 17.4507 24.9174 17.4001C25.0417 17.3495 25.1748 17.3241 25.309 17.3254C25.4431 17.3267 25.5757 17.3547 25.699 17.4077C25.8223 17.4607 25.9338 17.5376 26.0271 17.6341L26.7517 18.3612C26.8457 18.4553 26.9202 18.5669 26.9711 18.6898C27.0219 18.8127 27.048 18.9444 27.048 19.0774C27.0479 19.2103 27.0217 19.342 26.9707 19.4649C26.9198 19.5877 26.8451 19.6993 26.751 19.7933L26.7479 19.7901Z"
                fill="url(#paint0_linear_4374_865)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_4374_865"
                  x1="17.9994"
                  y1="-2.83814"
                  x2="17.9993"
                  y2="37.2976"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#876D24" />
                  <stop offset="0.28" stop-color="#F3D57B" />
                  <stop offset="0.66" stop-color="#B69637" />
                  <stop offset="1" stop-color="#DCBF69" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </Link>
        <Link href="/events" className={styles.link}>
          <div className={styles.container}>
            <p className={styles.events}>events</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
            >
              <path
                d="M24.75 17.85H18V24.6H24.75V17.85ZM23.4 3V5.7H12.6V3H9.89998V5.7H8.54998C7.05148 5.7 5.86348 6.915 5.86348 8.4L5.84998 27.3C5.84998 28.0161 6.13444 28.7028 6.64079 29.2092C7.14714 29.7155 7.83389 30 8.54998 30H27.45C28.935 30 30.15 28.785 30.15 27.3V8.4C30.15 6.915 28.935 5.7 27.45 5.7H26.1V3H23.4ZM27.45 27.3H8.54998V12.45H27.45V27.3Z"
                fill="url(#paint0_linear_4374_867)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_4374_867"
                  x1="18"
                  y1="-2.02326"
                  x2="17.9999"
                  y2="33.6563"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#876D24" />
                  <stop offset="0.28" stop-color="#F3D57B" />
                  <stop offset="0.66" stop-color="#B69637" />
                  <stop offset="1" stop-color="#DCBF69" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </Link>
        <Link href="/contact" className={styles.link}>
          <div className={styles.container}>
            <p className={styles.contact}>contact</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
            >
              <path
                d="M9 25.5C9 22.5 15 20.85 18 20.85C21 20.85 27 22.5 27 25.5V27H9M22.5 13.5C22.5 14.6935 22.0259 15.8381 21.182 16.682C20.3381 17.5259 19.1935 18 18 18C16.8065 18 15.6619 17.5259 14.818 16.682C13.9741 15.8381 13.5 14.6935 13.5 13.5C13.5 12.3065 13.9741 11.1619 14.818 10.318C15.6619 9.47411 16.8065 9 18 9C19.1935 9 20.3381 9.47411 21.182 10.318C22.0259 11.1619 22.5 12.3065 22.5 13.5ZM4.5 7.5V28.5C4.5 29.2956 4.81607 30.0587 5.37868 30.6213C5.94129 31.1839 6.70435 31.5 7.5 31.5H28.5C29.2956 31.5 30.0587 31.1839 30.6213 30.6213C31.1839 30.0587 31.5 29.2956 31.5 28.5V7.5C31.5 6.70435 31.1839 5.94129 30.6213 5.37868C30.0587 4.81607 29.2956 4.5 28.5 4.5H7.5C6.70435 4.5 5.94129 4.81607 5.37868 5.37868C4.81607 5.94129 4.5 6.70435 4.5 7.5Z"
                fill="url(#paint0_linear_4374_869)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_4374_869"
                  x1="18"
                  y1="-0.523256"
                  x2="17.9999"
                  y2="35.1563"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#876D24" />
                  <stop offset="0.28" stop-color="#F3D57B" />
                  <stop offset="0.66" stop-color="#B69637" />
                  <stop offset="1" stop-color="#DCBF69" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Sidenav;
