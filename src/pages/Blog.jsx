import React from "react";
import background from "../img/bg.jpg";
import Aust from "../img/australia.png";
import Student1 from "../img/Rectangle 31.png";
import Student2 from "../img/Rectangle 38.png";
import BlogImage from "../img/Rectangle 35.png";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "../styles/Blog.css";
import Header from "../components/HeaderComponent";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Footer from "../components/FooterComponent";
import {
  Select,
  MenuItem,
  Button,
  ListItemText,
  Grid,
  Checkbox,
  FormControl,
  Modal,
  Box,
  OutlinedInput,
  InputLabel,
  Badge,
} from "@mui/material";

const Blog = () => {
  return (
    <div className="blog">
      <Header />
      <div className="hero">
        <div className="hero_title-container">
          <div className="hero_title-bold">Blogs</div>
        </div>
        <svg
          className="hero_img"
          width="445"
          height="396"
          viewBox="0 0 445 396"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M414.185 370.427C414.185 374.26 411.044 377.397 407.208 377.397H29.9346C26.0967 377.397 22.958 374.26 22.958 370.427L19.8193 153.618C19.8193 149.785 24.3358 142.301 32.6135 142.863L401.327 133.322C406.142 133.198 410.797 135.051 414.206 138.449C417.616 141.848 419.48 146.493 419.367 151.303L414.185 370.427Z"
            fill="url(#paint0_linear_432_2828)"
          />
          <path
            d="M407.296 363.739C407.296 367.369 404.326 370.339 400.696 370.339H39.0326C35.4022 370.339 32.4328 367.369 32.4328 363.739L29.4697 166.919C29.8194 155.074 40.2029 150.818 46.4978 151.069L399.886 141.587C403.269 141.496 406.541 142.799 408.935 145.189C411.33 147.579 412.637 150.848 412.553 154.231L407.296 363.739Z"
            fill="url(#paint1_linear_432_2828)"
          />
          <path
            d="M36.3398 269.891C35.9997 269.891 35.722 269.618 35.7172 269.278L35.4825 253.317C35.4777 252.974 35.7523 252.689 36.0955 252.685C36.4276 252.665 36.7229 252.954 36.7277 253.298L36.9624 269.259C36.9672 269.603 36.6926 269.887 36.3494 269.891C36.3462 269.891 36.343 269.891 36.3398 269.891Z"
            fill="white"
          />
          <path
            d="M35.7669 230.776C35.4269 230.776 35.1491 230.503 35.1443 230.163L34.2471 169.029C34.2662 164.92 35.5322 161.636 38.0132 159.259C42.52 154.94 49.5669 155.157 49.8638 155.169L162.708 152.14C163.048 152.11 163.338 152.402 163.348 152.745C163.358 153.088 163.086 153.376 162.741 153.384L49.8606 156.412C49.5397 156.399 43.0038 156.2 38.8737 160.156C36.6466 162.29 35.5083 165.273 35.4907 169.02L36.3879 230.141C36.3927 230.484 36.1181 230.768 35.7749 230.773C35.7733 230.776 35.7701 230.776 35.7669 230.776Z"
            fill="white"
          />
          <path
            opacity="0.23"
            d="M48.3651 352.821C48.7435 336.552 48.603 192.501 47.669 180.059C46.7351 167.618 66.1116 165.285 95.8604 163.885C125.609 162.485 376.606 156.942 383.068 156.419C397.595 155.24 400.603 176.954 399.148 224.09C398.056 259.503 396.247 317.84 395.414 344.669C395.167 352.658 388.637 358.996 380.645 359.017C320.245 359.183 88.7496 359.847 73.3372 360.305C55.6036 360.833 48.2151 359.272 48.3651 352.821Z"
            fill="white"
          />
          <path
            d="M435.266 395.394H9.52459C4.28654 395.394 0 391.107 0 385.869C0 380.631 4.28654 376.345 9.52459 376.345H435.266C440.504 376.345 444.79 380.631 444.79 385.869C444.79 391.107 440.504 395.394 435.266 395.394Z"
            fill="url(#paint2_linear_432_2828)"
          />
          <path
            d="M350.974 1.55045L97.8952 0.00027995C89.5775 -0.0508074 82.9266 6.89707 83.3385 15.2035L100.75 374.767H382.378L398.016 53.5158L350.974 1.55045Z"
            fill="url(#paint3_linear_432_2828)"
          />
          <path
            d="M361.498 51.9768C353.254 51.6863 346.916 44.5819 347.565 36.3585L350.278 2.0246L398.065 53.3067L361.498 51.9768Z"
            fill="url(#paint4_linear_432_2828)"
          />
          <path
            opacity="0.78"
            d="M228.434 70.5822C249.235 70.4816 329.086 69.95 349.251 69.8143C351.794 69.7967 353.806 72.4421 353.696 75.651C353.59 78.7067 351.592 81.1477 349.17 81.178L228.406 82.6851C226.08 82.7138 224.148 80.5011 223.948 77.5795L223.899 76.8404C223.671 73.5005 225.775 70.595 228.434 70.5822Z"
            fill="white"
          />
          <path
            opacity="0.78"
            d="M227.412 95.8034C248.212 95.7028 328.064 95.1712 348.229 95.0355C350.772 95.0179 352.783 97.6633 352.673 100.872C352.568 103.928 350.569 106.369 348.147 106.399L227.383 107.906C225.057 107.935 223.125 105.722 222.926 102.801L222.876 102.062C222.648 98.7233 224.752 95.8161 227.412 95.8034Z"
            fill="white"
          />
          <path
            opacity="0.78"
            d="M137.044 131.347C172.132 131.371 306.825 131.323 340.837 131.312C345.126 131.311 348.61 133.969 348.532 137.179C348.458 140.235 345.168 142.666 341.084 142.682L137.405 143.458C133.483 143.473 130.148 141.247 129.713 138.324L129.603 137.585C129.107 134.24 132.558 131.344 137.044 131.347Z"
            fill="white"
          />
          <path
            opacity="0.78"
            d="M135.423 157.817C162.734 157.699 267.58 157.102 294.056 156.95C297.396 156.931 300.087 159.575 300.006 162.785C299.928 165.841 297.349 168.285 294.171 168.317L135.621 169.923C132.567 169.953 129.987 167.742 129.67 164.821L129.59 164.082C129.224 160.742 131.93 157.833 135.423 157.817Z"
            fill="white"
          />
          <path
            opacity="0.78"
            d="M136.7 192.475C171.787 192.499 306.48 192.453 340.492 192.44C344.782 192.438 348.265 195.096 348.187 198.307C348.113 201.363 344.823 203.794 340.739 203.81L137.061 204.586C133.138 204.6 129.803 202.375 129.369 199.452L129.259 198.712C128.762 195.366 132.214 192.472 136.7 192.475Z"
            fill="white"
          />
          <path
            opacity="0.78"
            d="M133.646 219.385C161.086 219.435 266.428 219.484 293.029 219.497C296.385 219.498 299.073 222.158 298.973 225.369C298.877 228.424 296.271 230.853 293.078 230.865L133.775 231.494C130.707 231.507 128.127 229.279 127.825 226.355L127.749 225.616C127.401 222.27 130.137 219.379 133.646 219.385Z"
            fill="white"
          />
          <path
            opacity="0.78"
            d="M134.968 254.849C170.055 254.873 304.749 254.825 338.76 254.814C343.05 254.813 346.533 257.471 346.455 260.681C346.382 263.737 343.091 266.168 339.008 266.184L135.329 266.96C131.406 266.975 128.071 264.749 127.637 261.826L127.527 261.087C127.032 257.741 130.482 254.846 134.968 254.849Z"
            fill="white"
          />
          <g opacity="0.74">
            <path
              opacity="0.78"
              d="M132.85 281.44C160.29 281.49 265.632 281.539 292.233 281.552C295.589 281.554 298.277 284.213 298.176 287.424C298.081 290.48 295.475 292.908 292.282 292.921L132.979 293.55C129.911 293.562 127.331 291.334 127.029 288.411L126.952 287.671C126.606 284.327 129.341 281.434 132.85 281.44Z"
              fill="white"
            />
          </g>
          <path
            opacity="0.48"
            d="M137.043 316.499C172.131 316.523 306.824 316.475 340.836 316.464C345.125 316.462 348.609 319.12 348.531 322.331C348.457 325.387 345.167 327.818 341.083 327.834L137.404 328.61C133.482 328.624 130.147 326.399 129.712 323.476L129.602 322.736C129.106 319.39 132.557 316.496 137.043 316.499Z"
            fill="white"
          />
          <path
            opacity="0.36"
            d="M135.059 345.97C162.153 345.972 266.164 345.834 292.429 345.799C295.742 345.794 298.4 348.449 298.303 351.66C298.21 354.715 295.641 357.149 292.488 357.166L135.198 358.076C132.168 358.094 129.62 355.871 129.319 352.948L129.242 352.209C128.895 348.868 131.594 345.97 135.059 345.97Z"
            fill="white"
          />
          <g opacity="0.78">
            <path
              d="M160.721 80.7246L152.213 106.492H141.274L169.107 24.5717H181.87L209.824 106.492H198.521L189.771 80.7246H160.721ZM187.582 72.4597L179.56 48.8797C177.736 43.5315 176.521 38.6702 175.305 33.9302H175.062C173.847 38.7915 172.51 43.7757 170.931 48.7583L162.908 72.4597H187.582Z"
              fill="white"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_432_2828"
              x1="184.111"
              y1="360.729"
              x2="273.215"
              y2="93.4169"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#2B3582" />
              <stop offset="1" stop-color="#150E42" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_432_2828"
              x1="463.025"
              y1="127.984"
              x2="-654.573"
              y2="743.39"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FDF53F" />
              <stop offset="1" stop-color="#D93C65" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_432_2828"
              x1="205.763"
              y1="476.807"
              x2="239.341"
              y2="293.213"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#2B3582" />
              <stop offset="1" stop-color="#150E42" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_432_2828"
              x1="257.278"
              y1="34.7117"
              x2="190.351"
              y2="471.286"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#53D8FF" />
              <stop offset="0.2057" stop-color="#4DB9FD" />
              <stop offset="1" stop-color="#3840F7" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_432_2828"
              x1="379.387"
              y1="21.7838"
              x2="317.021"
              y2="92.1222"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#53D8FF" />
              <stop offset="0.2057" stop-color="#4DB9FD" />
              <stop offset="1" stop-color="#3840F7" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="blog_cat">
        <div className="cat1">
          <div>Educational Enlightenment</div>
        </div>
        <div className="cat23_container">
          <div className="cat2">
            <div>Graduation</div>
          </div>
          <div className="cat3">
            <div>Sport Competition</div>
          </div>
        </div>
      </div>

      <div className="blog_menu">
        <div>Sports</div>
        <div>Sports</div>
        <div>Sports</div>
        <div>Sports</div>
        <div>Sports</div>
      </div>

      <div className="blog_menu-title">
        <div className="menu_title">Sports</div>
        <div>See all</div>
      </div>
        <Grid container spacing={2} className="blog_card-container">
          <Grid className="blog_card-item" item lg={4} md={6} sm={6} xs={12}>
            <div className="blog_card">
              <img src={BlogImage} alt="" />
              <div className="blog_card-inner">
                <div className="blog_card-inner-subtitle">SPORTS</div>
                <div className="blog_card-inner-title">
                  New Intake for Basketball players
                </div>
                <div>
                  Sports have been a part of human culture for thousands of
                  years. Whether it's a game of football with friends or
                  competing on the world stage, sports have the power to bring
                  people together and inspire us to be our best selves.
                </div>
                <div className="blog_card-inner_flex">
                  <div>April 08</div>
                  <div>02:40 PM</div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid className="blog_card-item" item lg={4} md={6} sm={6} xs={12}>
            <div className="blog_card">
              <img src={BlogImage} alt="" />
              <div className="blog_card-inner">
                <div className="blog_card-inner-subtitle">SPORTS</div>
                <div className="blog_card-inner-title">
                  New Intake for Basketball players
                </div>
                <div>
                  Sports have been a part of human culture for thousands of
                  years. Whether it's a game of football with friends or
                  competing on the world stage, sports have the power to bring
                  people together and inspire us to be our best selves.
                </div>
                <div className="blog_card-inner_flex">
                  <div>April 08</div>
                  <div>02:40 PM</div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid className="blog_card-item" item lg={4} md={6} sm={6} xs={12}>
            <div className="blog_card">
              <img src={BlogImage} alt="" />
              <div className="blog_card-inner">
                <div className="blog_card-inner-subtitle">SPORTS</div>
                <div className="blog_card-inner-title">
                  New Intake for Basketball players
                </div>
                <div>
                  Sports have been a part of human culture for thousands of
                  years. Whether it's a game of football with friends or
                  competing on the world stage, sports have the power to bring
                  people together and inspire us to be our best selves.
                </div>
                <div className="blog_card-inner_flex">
                  <div>April 08</div>
                  <div>02:40 PM</div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid className="blog_card-item" item lg={4} md={6} sm={6} xs={12}>
            <div className="blog_card">
              <img src={BlogImage} alt="" />
              <div className="blog_card-inner">
                <div className="blog_card-inner-subtitle">SPORTS</div>
                <div className="blog_card-inner-title">
                  New Intake for Basketball players
                </div>
                <div>
                  Sports have been a part of human culture for thousands of
                  years. Whether it's a game of football with friends or
                  competing on the world stage, sports have the power to bring
                  people together and inspire us to be our best selves.
                </div>
                <div className="blog_card-inner_flex">
                  <div>April 08</div>
                  <div>02:40 PM</div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid className="blog_card-item" item lg={4} md={6} sm={6} xs={12}>
            <div className="blog_card">
              <img src={BlogImage} alt="" />
              <div className="blog_card-inner">
                <div className="blog_card-inner-subtitle">SPORTS</div>
                <div className="blog_card-inner-title">
                  New Intake for Basketball players
                </div>
                <div>
                  Sports have been a part of human culture for thousands of
                  years. Whether it's a game of football with friends or
                  competing on the world stage, sports have the power to bring
                  people together and inspire us to be our best selves.
                </div>
                <div className="blog_card-inner_flex">
                  <div>April 08</div>
                  <div>02:40 PM</div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid className="blog_card-item" item lg={4} md={6} sm={6} xs={12}>
            <div className="blog_card">
              <img src={BlogImage} alt="" />
              <div className="blog_card-inner">
                <div className="blog_card-inner-subtitle">SPORTS</div>
                <div className="blog_card-inner-title">
                  New Intake for Basketball players
                </div>
                <div>
                  Sports have been a part of human culture for thousands of
                  years. Whether it's a game of football with friends or
                  competing on the world stage, sports have the power to bring
                  people together and inspire us to be our best selves.
                </div>
                <div className="blog_card-inner_flex">
                  <div>April 08</div>
                  <div>02:40 PM</div>
                </div>
              </div>
            </div>
          </Grid>
          
        </Grid>

      <Footer />
    </div>
  );
};
export default Blog;
