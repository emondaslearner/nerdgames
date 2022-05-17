import React from 'react';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight,faBorderAll, faHouse, faBell, faGear, faBars, faAngleRight, faTimes } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
    const display = React.useRef()
    let subMenuStatus = true
    const showSubMenu = (e) => {
        e.preventDefault()
        if(!subMenuStatus){
            subMenuStatus = true
            display.current.style.display = 'none'
            document.querySelector('.slidBarArrow').classList.remove('rotateArrow')
        }else{
            subMenuStatus = false
            display.current.style.display = 'block'
            document.querySelector('.slidBarArrow').classList.add('rotateArrow')
        }
    }

    const showSideBar = () => {
        document.querySelector('.SidebarMain').classList.add('ShowSlideBar')
        document.querySelector('.Sidebar').classList.add('ShowSlideBar')
    }
    const  closeSideBar = () => {
        document.querySelector('.SidebarMain').classList.remove('ShowSlideBar')
        document.querySelector('.Sidebar').classList.remove('ShowSlideBar')
    } 
    return (
        <>
            <div onClick={showSideBar} className="Bar">
                <FontAwesomeIcon className='BarIcon' icon={faAngleRight} />
            </div>
            <div className="SidebarMain">
                <div className='Sidebar'>
                    <FontAwesomeIcon onClick={closeSideBar} className='closeSideBar' icon={faTimes} />
                    <ul>
                        <li><FontAwesomeIcon className='icon' icon={faBorderAll} /><a onClick={showSubMenu} href=""> MarketPlace <FontAwesomeIcon className='slidBarArrow' icon={faCaretRight} /></a>
                            <ul ref={display}>
                                <li><a href="">Buy/Sell NFT</a></li>
                                <li><a href="">Rent NFT</a></li>
                                <li><a href="">NFT Cartridges</a></li>
                                <li><a href="">Lock-Box</a></li>
                                <li><a href="">Lands</a></li>
                            </ul>
                        </li>
                        <li><FontAwesomeIcon className='icon' icon={faHouse} /><a href="">Home</a></li>
                        <li><FontAwesomeIcon className='icon' icon={faBell} /><a href="">Notifications</a></li>
                        <li><FontAwesomeIcon className='icon' icon={faGear} /><a href="">Setting</a></li>
                    </ul> 
                </div>
            </div>
        </>
    );
};

export default Sidebar;