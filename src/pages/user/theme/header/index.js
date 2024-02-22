import { memo, useState } from "react";
import "./style.scss";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsPersonFill,
  BsCartCheckFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import { AiFillMail, AiOutlineMenu, AiOutlinePhone } from "react-icons/ai";
import { formater } from "utils/fomater";
import { ROUTER } from "utils/router";
const Header = () => {
  const [isShowCategiries, setShowCategories] = useState(true);
  const [menus, setMenus] = useState([
    {
      name: "Trang chu",
      path: ROUTER.USER.HOME,
    },
    {
      name: "Cua hang",
      path: ROUTER.USER.PRODUCT,
    },
    {
      name: "San Pham",
      path: ROUTER.USER.PRODUCT,
      isShowSubMenu: false,
      child: [
        {
          name: "Thit/Ca",
          path: "",
        },
        {
          name: "Rau Cu",
          path: "",
        },
        {
          name: "Thuc an nhanh",
          path: "",
        },
      ],
    },
    {
      name: "Bai viet",
      path: "",
    },
    {
      name: "Lien he",
      path: "",
    },
  ]);
  return (
    <>
      <div className="header-top">
        <div className="container">
          <div className="row">
            <div className="col-6 header-top-left">
              <ul>
                <li>
                  <AiFillMail />
                  hello@gmail.com
                </li>
                <li>mien phi van chuyen don tu {formater(30000)}</li>
              </ul>
            </div>
            <div className="col-6 header-top-right">
              <ul>
                <li>
                  <Link to={""}>
                    <BsFacebook />
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link to={""}>
                    <BsInstagram />
                  </Link>{" "}
                </li>
                <li>
                  <Link to={""}>
                    {" "}
                    <BsLinkedin />
                  </Link>{" "}
                </li>
                <li>
                  <Link to={""}>
                    <BsTwitter />
                  </Link>{" "}
                </li>
                <li>
                  <Link to={""}>
                    <BsPersonFill />
                  </Link>{" "}
                  <span>Dang Nhap</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-3">
            <div className="header-logo">
              <h1>MaiLi SHOP</h1>
            </div>
          </div>
          <div className="col-xl-6 col-lg-3">
            <nav className="header-menu">
              <ul>
                {menus?.map((menu, menuKey) => (
                  <li key={menuKey} className={menuKey === 0 ? "active" : ""}>
                    <Link to={menu?.path}>{menu?.name}</Link>
                    {menu.child && (
                      <ul className="header_menu_dropdown">
                        {menu.child.map((childItem, childKey) => (
                          <li key={`${menuKey} -${childKey}`}>
                            <Link to={childItem.path}>{childItem.name}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="col-xl-3 col-lg-3">
            {" "}
            <div className="header-cart">
              <div className="header-cart-price">
                <span>{formater(100000)}</span>
              </div>
              <ul>
                <li>
                  <Link to={"#"}>
                    <BsCartCheckFill />
                    <span>5</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row hero_categories_container">
          <div className="col-lg-3 hero_categories ">
            <div
              className="hero_categories_all"
              onClick={() => setShowCategories(!isShowCategiries)}
            >
              <AiOutlineMenu />
              Danh Sach san Pham
            </div>
            {isShowCategiries && (
              <ul className={isShowCategiries ? "" : "hidden"}>
                <li>
                  <Link to={"#"}>Thit tuoi</Link>
                </li>
                <li>
                  <Link to={"#"}>Rau cu</Link>
                </li>
                <li>
                  <Link to={"#"}>Trai cay</Link>
                </li>
                <li>
                  <Link to={"#"}>Hai san</Link>
                </li>
                <li>
                  <Link to={"#"}>Hat</Link>
                </li>
              </ul>
            )}
          </div>
          <div className="col-lg-9 hero_search_container">
            <div className="hero_search">
              <div className="hero_search_form">
                <form>
                  <input
                    type="text"
                    name=""
                    value=""
                    placeholder="Nhap noi dung tim kiem"
                  />
                  <button type="submit" className="site-btn">
                    Tim kiem
                  </button>
                </form>
              </div>
              <div className="hero_search_phone">
                <div className="hero_search_phone_icon">
                  <AiOutlinePhone />
                </div>
                <div className="hero_search_phone_text">
                  <p>098473859</p>
                  <span>Ho tro 24/7</span>
                </div>
              </div>
            </div>
            <div className="hero_item">
            <div className="hero_text">
              <span>Trai cay tuoi</span>
              <h2> Rau qua <br /> sach 100%</h2>
              <p>Mien phi giao hang tan noi</p>
              <Link className="primary_btn">
                Mua ngay
              </Link>
            </div>
          

            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default memo(Header);
