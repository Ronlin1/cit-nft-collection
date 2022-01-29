import React from 'react'
import './Header.css'
import myLogo from '../assets/header/myLogo.png'
import searchIcon from '../assets/header/search.png'
import themeSwitch from '../assets/header/theme-switch.png'

function Header(CustomConnect) {
  return (
    <div className="header">
        <div className="logoContainer">
            <img src={myLogo} className='myLogo' alt='myLogo'/> 
        </div>

        <div className='searchBar'>
            <div className='searchIcon'>
                <img src={searchIcon} alt='Search Icon'></img>
            </div>
            <input className='searchInput'
                    placeholder='Collection Item or User...'
            > 
            </input>
        </div>

        <div className='headerItems'>
            <p> <a href='https://testnets.opensea.io/collection/cit-nft-minter' target={'blank_'}>Market Place</a></p>
            <p> <a href='https://github.com/Ronlin1/cit-nft-collection' target={'blank_'}>Visit GitHub</a></p>
            <p> <a href='https://linktr.ee/Atuhaire' target={'blank_'}>Visit Creator</a></p>
        </div>

        <div className='headerActions'>
            <div className='themeSwitchContainer'>
                <img src={themeSwitch}></img>
            </div>
        </div>

        <div className='connect' onClick={()=>CustomConnect()}>
            Connect Wallet
        </div>


    </div>

  )
}

export default Header
