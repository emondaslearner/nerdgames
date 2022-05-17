import React from 'react';
import Rectangle1 from '../../image/Rectangle 676.png'
import Rectangle2 from '../../image/Rectangle 676 (1).png'
import Rectangle3 from '../../image/Rectangle 677.png'
import './Content.css'
import Slider from '../Slider/Slider';

const Content = () => {
    return (
        <div className='Content'>
            <div className="information">
                <div className="left">
                    <h3>NERD Marketplace is where NERD players will buy, Sell and rent play-to-earn NFTs.</h3>
                    <p>NERD Marketplace is where NERD players will buy and rent play-to-earn NFTs</p>
                    <p>NFTs used in all Nerdgames will be available on NERD Marketplace.</p>
                    <button className="button">Explore</button>
                </div>
                <div className="right">
                    <div className="top">
                        <img src={Rectangle1} alt="" />
                        <img src={Rectangle2} alt="" />
                    </div>
                    <img src={Rectangle3} alt="" />
                </div>
            </div>
            <h3 style={{color:'white',marginTop:'80px',marginLeft:'30px'}}>Top NFT’s</h3>
            <div className="slide">
                <Slider/>
            </div>
            <h3 style={{color:'white',marginTop:'50px',marginLeft:'30px'}}>NFT’s for Sale</h3>
            <div className="slide">
                <Slider/>
            </div>
            <h3 style={{color:'white',marginTop:'50px',marginLeft:'30px'}}>NFT’s for Rent</h3>
            <div className="slide">
                <Slider/>
            </div>
        </div>
    );
};

export default Content;