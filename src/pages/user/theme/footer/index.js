import { memo, useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";
const Footer = ()=>{
    return <footer className="footer">
        <div className="container">
        <div className="row"> 
            <div className="col-lg-3 col-md-6 col-sm-6 col-sx-12">
                <div className="footer_about">
                <h1 className="footer_about_logo">MailyShop </h1>
               <ul>
                <li>Dia Chi: 56 Huynh Van Nghe</li>
                <li>Phone: 09573758358</li>
                <li>Email: tranthuyhai.tchl@gmail.com</li>
               </ul>
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-sx-12">
                <div className="footer_widget">
                <h6>Cua Hang</h6>
                <ul>
                    <li>
                        <Link to= "">Lien He</Link>
                    </li>
                    <li>
                        <Link to= ""> Thong tin ve chung toi</Link>
                    </li>
                    <li>
                        <Link to= "">Sap pham kinh doanh</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to= "">Thong tin tai khoan</Link>
                    </li>
                    <li>
                        <Link to= "">Gio hang</Link>
                    </li>
                    <li>
                        <Link to= "">Danh sach yeu thich</Link>
                    </li>
                </ul>
                </div>
            </div>
     
            <div className="col-lg-3 col-md-12 col-sm-12 col-sx-12">
                <div className="footer_widget">
                    <h6>
                        Khuyen Mai & Uu dai
                    </h6>
                    <p>Dang ki nhan thong tin tai day</p>
                    <form action="#">
                        <div className="input_group">
                            <input  type="text" placeholder="enter email"/>
                            <button type="submit" className="button_submit">Dang Ky</button>
                        </div>
                        <div className="footer_widget_social">
                            <div>
                                <AiOutlineFacebook/>

                            </div>
                            <div>
                                <AiOutlineInstagram/>
                                
                            </div>
                            <div>
                                <AiOutlineLinkedin/>
                                
                            </div>
                           
                        </div>
                    </form>
                </div>
            </div>
       
            </div> </div>
    </footer>
    
}
export default memo(Footer);  