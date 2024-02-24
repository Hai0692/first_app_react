import { memo } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./styles.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import sliderImg1 from "assets/user/images/slider/img1.png";
import sliderImg2 from "assets/user/images/slider/img2.png";
import sliderImg3 from "assets/user/images/slider/img3.png";
import sliderImg4 from "assets/user/images/slider/img4.png";
import sliderImg5 from "assets/user/images/slider/img5.png";
import sliderImg6 from "assets/user/images/slider/img6.png";
import sliderImg7 from "assets/user/images/slider/img7.png";
import sliderImg8 from "assets/user/images/slider/img8.png";
import sliderImg9 from "assets/user/images/slider/img9.png";
import sliderImg10 from "assets/user/images/slider/img10.png";
import {
  AiOutlineEye,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { formater } from "utils/fomater";
import { Link } from "react-router-dom";
const Homepage = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const slide_item = [
    {
      bgImg: sliderImg1,
      name: "cam tuoi",
    },
    {
      bgImg: sliderImg2,
      name: "Rau cu qua",
    },
    {
      bgImg: sliderImg3,
      name: "sua hop",
    },
    {
      bgImg: sliderImg4,
      name: "tao tuoi",
    },
    {
      bgImg: sliderImg5,
      name: "thit heo",
    },
  ];

  const featureProduct = {
    all: {
      title: "toan bo",
      product: [
        {
          img: sliderImg1,
          name: "Chuoi",
          price: 20000,
        },
        {
          img: sliderImg2,
          name: "Oi",
          price: 20000,
        },
        {
          img: sliderImg3,
          name: "Oi",
          price: 20000,
        },
        {
          img: sliderImg4,
          name: "Oi",
          price: 20000,
        },
        {
          img: sliderImg5,
          name: "Oi",
          price: 20000,
        },
        {
          img: sliderImg6,
          name: "Oi",
          price: 20000,
        },
        {
          img: sliderImg7,
          name: "Oi",
          price: 20000,
        },
        {
          img: sliderImg8,
          name: "Oi",
          price: 20000,
        },
        {
          img: sliderImg9,
          name: "Oi",
          price: 20000,
        },
        {
          img: sliderImg10,
          name: "Oi",
          price: 20000,
        },
      ],
    },
    meat: {
      title: "thit tuoi",
      product: [
        {
          img: sliderImg7,
          name: "Thi ga",
          price: 20000,
        },
      ],
    },
    fruit: {
      title: "trai cay",
      product: [
        {
          img: sliderImg6,
          name: "Thi ga",
          price: 20000,
        },
        {
          img: sliderImg8,
          name: "Thi ga",
          price: 20000,
        },
      ],
    },
  };
  const renderFeatureProduct = (data) => {
    const tabList = [];
    const tabPanels = [];

    Object.keys(data).forEach((key, index) => {
      console.log(key, index);
      tabList.push(<Tab key={index}>{data[key].title}</Tab>);

      const tabPanel = [];

      data[key].product.forEach((item, j) => {
        tabPanel.push(
          <div className="col-lg-3" key={j}>
            <div className="feature_item">
              <div
                className="feature_item_pic"
                style={{
                  backgroundImage: `url(${item.img})`,
                }}
              >
                <ul className="feature_item_pic_hover">
                  <li>
                    <AiOutlineEye />
                  </li>
                  <li>
                    <AiOutlineShoppingCart />
                  </li>
                </ul>
              </div>
              <div className="feature_item_text">
                <h6>
                  <Link>{item.name}</Link>
                </h6>
                <h5>{formater(item.price)}</h5>{" "}
              </div>
            </div>
          </div>
        );
      });

      tabPanels.push(tabPanel);
    });

    return (
      <Tabs>
        <TabList>{tabList}</TabList>

        {tabPanels.map((item, key) => (
          <TabPanel key={key}>
            <div className="row">{item}</div>
          </TabPanel>
        ))}
      </Tabs>
    );
  };
  return (
    <>
      {/* categories begin */}

      <div className=" container container_categories_slider">
        <Carousel responsive={responsive} className="categories_slider">
          {slide_item.map((item, key) => (
            <div
              className="slider_items"
              style={{ backgroundImage: `url(${item.bgImg})` }}
              key={key}
            >
              <p> {item.name}</p>
            </div>
          ))}
        </Carousel>
      </div>
      {/* feature begin */}
      <div className="container ">
        <div className="feature">
          <div className="section_title">
            <h2>San pham noi bat</h2>
          </div>
          {renderFeatureProduct(featureProduct)}
        </div>
      </div>
      {/* banner begin */}
      {/* <div className="container">
      <div className="banner">
        <div className="banner_pic">
          <img src={sliderImg3} alt="banner"/>
        </div>
        <div className="banner_pic">
          <img src={sliderImg4} alt="banner"/>
        </div>
      </div>
      </div> */}
    </>
  );
};
export default memo(Homepage);
