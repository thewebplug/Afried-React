import React, { useEffect } from "react";
import background from "../img/bg.jpg";
import Students from "../img/hero_image.png";
import Aust from "../img/australia.png";
import Uk from "../img/uk.png";
import { useLocation, useNavigate } from "react-router-dom";
import Au from "../img/au.png";
import Obj from "../img/objects.png";
import One from "../img/1.png";
import Two from "../img/2.png";
import Three from "../img/3.png";
import Four from "../img/4.png";
import Five from "../img/5.png";
import Event1 from "../img/Rectangle 37.png";
import Event2 from "../img/Rectangle 37 copy.png";
import Event3 from "../img/Rectangle 37 (1).png";
import Crew1 from "../img/Rectangle 32.jpeg";
import Crew2 from "../img/Rectangle 33.jpeg";
import Crew3 from "../img/Rectangle 45.jpeg";
import ReviewImg from "../img/Ellipse 14.png";
import ReviewImg1 from "../img/Ellipse 15.png";
import Ills from "../img/OBJECTS copy.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "../styles/Home.css";
import Header from "../components/Header";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Footer from "../components/Footer";
import Enquiry from "../components/Enquiry";

const Home = () => {
  const navigate = useNavigate();
  const { hash } = useLocation();

  useEffect(() => {
    const cardId = hash.substring(1);
    const cardElement = document.getElementById(cardId);

    if (cardElement) {
      cardElement.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);
  return (
    <div className="home">
      <Header />
      <div className="hero">
        <div className="hero_title-container">
          <div className="hero_title">Find your</div>
          <div className="hero_title-bold">Direction</div>
          <div className="hero_subtitle">
            We help you find the education opportunity <br /> that has the
            greatest potential to impact
            <br /> your future.
          </div>
          <button onClick={() => navigate("/#form")}>Make Enquiry</button>
        </div>
        <div className="hero_img">
          <img src={Students} />
        </div>
      </div>
      <div className="partners">
        <div>
          Partner <br /> Institutions
        </div>
        <img className="img1" src={Aust} alt="" />
        <img className="img2" src={Uk} alt="" />
        <img className="img3" src={Au} alt="" />
      </div>

      <div className="who">
        <div className="who_main">
          <div className="who_main-title">Who We Are</div>
          <div>
            Vinea Global is one of the leading student recruitment <br />
            agencies in Nigeria. Vinea Global was established in 2014 and <br />
            has come a long way, retaining its excellence in study <br />
            abroad business. We offer wide range of services and <br />
            commitments to our student customers seeking <br />
            higher education to UK, Europe, Australia, New <br />
            Zealand, Canada, USA, UAE and China.
          </div>
        </div>
        <div className="flex_column who_flex">
          <div className="who_box mr30">
            <svg
              width="65"
              height="76"
              viewBox="0 0 65 76"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M64.1804 15.6359C63.9368 15.4382 63.6446 15.3111 63.335 15.2684C63.0254 15.2256 62.7102 15.2687 62.423 15.3931L34.4542 27.6321C33.2382 28.1675 31.7153 28.4221 30.1518 28.4221C27.9716 28.4309 25.7162 27.9188 24.144 27.2225C23.6649 27.0185 23.2087 26.7635 22.7832 26.4617C22.899 26.4032 23.0438 26.3388 23.203 26.2745L48.6413 15.1444L52.4341 16.7829V11.9932C52.4399 11.6516 52.3691 11.3132 52.2273 11.0031C52.0854 10.693 51.876 10.4194 51.6148 10.2026C51.3722 10.005 51.0809 9.87806 50.7723 9.83527C50.4637 9.79248 50.1494 9.8355 49.8631 9.95971L21.8944 22.1987C21.0316 22.5498 20.2904 22.9828 19.665 23.6119C18.9408 24.3339 18.5295 25.3167 18.5213 26.3447C18.5213 26.374 18.53 26.4237 18.53 26.4237V69.5221L18.5242 69.5806C18.5242 69.5923 18.5329 69.5982 18.5329 69.6099V69.6567H18.5387C18.5966 71.1635 19.3494 72.1232 20.0674 72.802C22.3258 74.815 26.1186 75.9415 30.1547 76C32.0656 76 34.0055 75.7074 35.8006 74.9291L63.778 62.6872C64.5163 62.3653 64.9998 61.5666 64.9998 60.6625V17.4266C65.0043 17.0852 64.933 16.7472 64.7912 16.4373C64.6494 16.1274 64.4407 15.8536 64.1804 15.6359ZM46.4408 7.44344C46.3916 6.79974 46.1281 6.18531 45.6591 5.81664C45.4155 5.61891 45.1233 5.49185 44.8137 5.44907C44.5041 5.40629 44.1888 5.44941 43.9017 5.5738L15.9329 17.8069C14.7169 18.3395 13.1911 18.5969 11.6305 18.5969C9.4503 18.6028 7.19486 18.0908 5.6227 17.3915C5.14312 17.191 4.68678 16.9378 4.2619 16.6366C4.37772 16.5781 4.52248 16.5137 4.68172 16.4493L30.1228 5.31924L33.9157 6.95774V2.17391C33.9209 1.83214 33.8496 1.49361 33.7072 1.18355C33.5648 0.873503 33.355 0.599938 33.0934 0.383264C32.8503 0.185782 32.5585 0.0588549 32.2495 0.0160763C31.9404 -0.0267023 31.6256 0.0162785 31.3389 0.140416L3.37015 12.3823C2.50734 12.7334 1.76904 13.1636 1.14075 13.7955C0.417624 14.518 0.00740711 15.5007 0 16.5283C0 16.5634 0.00868531 16.6103 0.00868531 16.6103V59.8462H0.0144769C0.0723832 61.353 0.825165 62.3127 1.5432 62.9915C3.80155 65.0045 7.59441 66.128 11.6334 66.1866C12.7302 66.18 13.8236 66.0604 14.8964 65.8296V26.4208C14.8674 24.3726 15.6781 22.4064 17.1026 20.9903C18.0895 20.0229 19.2621 19.2701 20.548 18.7783L46.4408 7.44344Z"
                fill="#468E4B"
              />
            </svg>
            <div className="who_box-title">
              Guaranteed Study <br />
              Abroad Placement
            </div>

            <div className="who_box-subtitle">
              Vinea Global boasts of its excellence in helping students gain admission in
              various study destinations
            </div>
          </div>
          <div className="who_box">
            <svg
              width="76"
              height="76"
              viewBox="0 0 76 76"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M51.2164 73.6364C58.4906 70.9356 64.7642 66.0736 69.1945 59.7032C73.6248 53.3329 75.9996 45.7594 76 38C76 17.0126 58.9874 0 38 0C17.0126 0 0 17.0126 0 38C0 58.9874 17.0126 76 38 76C42.1076 76.0046 46.1886 75.3424 50.084 74.0392C50.4804 73.9657 50.8626 73.8298 51.2164 73.6364ZM38 7.6C31.8904 7.59045 25.9211 9.43054 20.8772 12.8782C20.8924 13.015 20.9 13.1556 20.9 13.3V26.676C20.8993 27.49 21.1599 28.2826 21.6436 28.9373C22.1273 29.592 22.8084 30.0741 23.5866 30.3126L28.4924 31.8098L27.8274 27.8274C27.3495 24.9607 27.9845 22.0196 29.6026 19.6054C31.2208 17.1913 33.6999 15.4863 36.5332 14.839L38.057 14.4932C38.7719 14.3298 39.4243 13.963 39.9354 13.437C40.4465 12.9111 40.7945 12.2485 40.9374 11.5292L41.6822 7.8204C40.4603 7.67322 39.2307 7.59962 38 7.6ZM13.3 26.676V20.273C9.70249 25.2821 7.71353 31.2669 7.59715 37.4329C7.48078 43.5989 9.24249 49.6544 12.6484 54.7957C16.0544 59.937 20.9434 63.9208 26.6666 66.2182C32.3898 68.5157 38.6763 69.0182 44.6918 67.659L42.4878 59.9374C42.3095 59.3167 41.976 58.7518 41.5188 58.2958L36.8144 53.5876C36.2474 53.0209 35.8063 52.341 35.5199 51.5922C35.2335 50.8435 35.1083 50.0428 35.1524 49.2423C35.1965 48.4419 35.409 47.6598 35.7759 46.947C36.1428 46.2343 36.656 45.6069 37.2818 45.106L43.2288 40.3522C44.3626 39.4452 45.7324 38.882 47.1762 38.7291C48.62 38.5762 50.0775 38.8401 51.376 39.4896L56.962 42.2826C58.6404 43.1219 60.0856 44.3626 61.1695 45.8946C62.2533 47.4265 62.9422 49.2023 63.175 51.0644L63.593 54.4122C66.0213 50.6239 67.5787 46.3439 68.1528 41.8809C68.727 37.4179 68.3036 32.8832 66.9132 28.6036C65.5228 24.324 63.2 20.4064 60.1123 17.1331C57.0247 13.8598 53.2492 11.3125 49.058 9.6748L48.3892 13.0226C47.9581 15.1773 46.9135 17.1614 45.3812 18.7363C43.8488 20.3112 41.8939 21.4096 39.7518 21.8994L38.228 22.249C37.2828 22.4645 36.4557 23.0331 35.916 23.8384C35.3763 24.6437 35.1648 25.6248 35.3248 26.581L35.9898 30.5634C36.2017 31.8399 36.0841 33.1494 35.6483 34.3677C35.2124 35.5861 34.4727 36.6729 33.4992 37.5254C32.5257 38.3779 31.3507 38.9677 30.0855 39.2389C28.8203 39.5102 27.5068 39.4539 26.2694 39.0754L21.3674 37.5782C19.0325 36.8644 16.9884 35.4199 15.5361 33.4573C14.0838 31.4946 13.3 29.1176 13.3 26.676ZM56.8632 61.8412C55.3049 63.077 53.6286 64.1564 51.8586 65.0636L49.7952 57.8512C49.2637 55.9873 48.2658 54.2897 46.8958 52.9188L43.6886 49.7154L47.975 46.2878L53.561 49.0808C54.121 49.36 54.6034 49.7731 54.9654 50.2836C55.3273 50.794 55.5576 51.3859 55.6358 52.0068L56.8632 61.8412Z"
                fill="#468E4B"
              />
            </svg>

            <div className="who_box-title">
              In Partnership with <br />
              Various Institutions <br />
              Globally
            </div>

            <div className="who_box-subtitle">
              In Partnership with over 20 Institutions in USA, UK, Australia,
              Germany, Canada, Switzerland, & Spain
            </div>
          </div>
        </div>
      </div>
      <div className="us">
        <div className="us_main">
          <div className="us_main-title">Get to know us</div>
          <div>
            Vinea Global offers a range of services, some of which include –{" "}
            <br />
            College Application, Visa Counseling & Guidance, IETLS & <br />
            TOEFL bookings, and other Student Abroad Placement Services.
          </div>
          <img src={Obj} alt="" />
        </div>
        <div className="us_num">
          <div>
            <img className="img" src={One} alt="" />
            Application Services
          </div>
          <div>
            <img src={Two} alt="" />
            Visa Guidance
          </div>
          <div>
            <img src={Three} alt="" />
            Counselling
          </div>
          <div>
            <img src={Four} alt="" />
            Accommodation
          </div>
          <div>
            <img src={Five} alt="" />
            Scholarship / Discount
          </div>
        </div>
      </div>
      <div className="events">
        <div className="events_title">Upcoming Events</div>
        <div className="events_box">
          <div className="flex_column who_flex">
            <img className="img" src={Event1} alt="" />
            <div className="event_status">
              <div className="event_status-title">ONLINE</div>
              <div>Tea Party</div>
            </div>
          </div>

          <div className="who_flex">
            <div className="event_date">
              <div className="event_date-title">DATE</div>
              <div>04 May 2023</div>
            </div>
            <div className="event_time">
              <div className="event_time-title">DURATION</div>
              <div>300 Mins</div>
            </div>
          </div>
        </div>
        <div className="events_box">
          <div className="flex_column who_flex">
            <img className="img" src={Event2} alt="" />
            <div className="event_status">
              <div className="event_status-title">ONLINE</div>
              <div>Tea Party</div>
            </div>
          </div>

          <div className="who_flex">
            <div className="event_date">
              <div className="event_date-title">DATE</div>
              <div>04 May 2023</div>
            </div>
            <div className="event_time">
              <div className="event_time-title">DURATION</div>
              <div>300 Mins</div>
            </div>
          </div>
        </div>
        <div className="events_box">
          <div className="flex_column who_flex">
            <img className="img" src={Event3} alt="" />
            <div className="event_status">
              <div className="event_status-title">ONLINE</div>
              <div>Tea Party</div>
            </div>
          </div>

          <div className="who_flex">
            <div className="event_date">
              <div className="event_date-title">DATE</div>
              <div>04 May 2023</div>
            </div>
            <div className="event_time">
              <div className="event_time-title">DURATION</div>
              <div>300 Mins</div>
            </div>
          </div>
        </div>
      </div>

      <div className="crew">
        <div className="crew_title">Meet our passionate crew</div>

        <div className="crew_flex">
          <div className="crew_box">
            <img src={Crew1} alt="" />
            <div className="crew_box-inner">
              <div className="crew_box-inner-title">Mrs Oshikoya</div>
              <div className="crew_box-inner-subtitle">
                Executive Consultant{" "}
              </div>
              <div className="crew_box-inner-subtitle">(UK, AUSTRALIA)</div>
            </div>
          </div>
          <div className="crew_box">
            <img src={Crew2} alt="" />
            <div className="crew_box-inner">
              <div className="crew_box-inner-title">Mrs Rasheed</div>
              <div className="crew_box-inner-subtitle">
                Executive Consultant
              </div>
              <div className="crew_box-inner-subtitle">(U.S.A , Canada )</div>
            </div>
          </div>
          <div className="crew_box">
            <img src={Crew3} alt="" />
            <div className="crew_box-inner">
              <div className="crew_box-inner-title">Mrs Funmi</div>
              <div className="crew_box-inner-subtitle">(Alumni Consultant)</div>
            </div>
          </div>
        </div>
      </div>

      <Enquiry />

      <div className="review">
        <div className="review_title">See what people are saying</div>
        <OwlCarousel
          className="review_slide"
          item={3}
          margin={10}
          nav={true}
          dots={true}
          // loop
          dotsEach={true}
          autoWidth={true}
          navText={[<div>hello</div>, <div>hi</div>]}
        >
          <div className="review_card">
            <div className="review_card-flex">
              <img className="img" src={ReviewImg} alt="" />
              <div>
                <div className="card_flex-title">Dami</div>
                <div className="card_flex-subtitle">
                  Griffith University, Australia
                </div>
              </div>
            </div>
            <div>
              My study abroad prospects were put into realisation through
              working with Vinea trying my study abroad application process. The
              whole process went smoothly and I was carried along all the way
              till arrival in Uni. One word I will say is study abroad the Vinea
              way.
            </div>
          </div>
          <div className="review_card">
            <div className="review_card-flex">
              <img className="img" src={ReviewImg1} alt="" />
              <div>
                <div className="card_flex-title">Debbie</div>
                <div className="card_flex-subtitle">
                University of Central Lancashire
                </div>
              </div>
            </div>
            <div>
            I was introduced to Vinea through a family member and I will say I never regretted the referral. My study abroad applications process was done without any delay with great result. I recomend you study abroad the Vinea way.
            </div>
          </div>
          
        </OwlCarousel>
      </div>
      <Footer />
    </div>
  );
};
export default Home;
