import React from 'react';
import logo from '../../image/NERDGAMES - FINAL_COLOR GLASSES_COLOR TEXT 1.png'
import profileImage from '../../image/Ellipse.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import './Header.css'

const Header = () => {
    return (
        <div className="HeaderMain">
            <div className='Header'>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="SearchBar">
                    <input placeholder='Search' type="text" />
                </div>
                <div className="account">
                    <button className='button'>Connect Wallet</button>
                    <div className="profile">
                        <img src={profileImage} alt="" />
                        <div className="profileDetails">
                            <p>Victor Glain</p>
                            <FontAwesomeIcon className='arrow' icon={faCaretRight} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='HeaderMobile'>
                <div>
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="account">
                        <div className="profile">
                            <img src={profileImage} alt="" />
                            <div className="profileDetails">
                                <p>Victor Glain</p>
                                <FontAwesomeIcon className='arrow' icon={faCaretRight} />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="SearchBar">
                        <input placeholder='Search' type="text" />
                    </div>
                    <div className="btn">
                        <button className='button'>Connect Wallet</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;