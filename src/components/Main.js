import React ,{ useState, useEffect } from 'react' 
import twitterLogo from '../assets/owner/twitter.png'
import linkedInLogo from '../assets/owner/linkedIn.png'
import moreIcon from '../assets/owner/more.png'
import './Main.css'
import Punklist from './Punklist'


const Main = ({selectedPunk, punkListData}) => {
    const [activePunk, setActivePunk] = useState(punkListData[0])
    console.log(punkListData[selectedPunk], '😂😂')
    console.log(punkListData , '🚀🚀')

    useEffect(() => {
        setActivePunk(punkListData[selectedPunk]) 
    },[punkListData, selectedPunk])

  return (
    <div className='main'>
        <div className='mainContent'>
            <div className='punkHighlight'>
                <div className='punkContainer'>
                    <img src={activePunk.image_url} alt='active NFT' className='selectedPunk'>
                    </img>
                </div>
            </div>

            <div className='nftDetails' style={{color: '#fff'}}>
                <div className='title'>
                {activePunk.name}
                </div>
                <span className='itemNumber'>.#{activePunk.token_id}</span>
            

                <div className='owner'>
                    <div className='ownerImageContainer'>
                        <img src={activePunk.owner.profile_img_url} />
                    </div>

                    <div className='ownerDetails'>
                        <div className='ownerNameAndHandle'>
                            <div className='ownerAddress'>{activePunk.owner.address}</div>
                            <div className='ownerHandle'>@{activePunk.owner.user.username}</div>
                        </div>
                            <div className='ownerLink'><a href='https://www.linkedin.com/in/ronnie-linslay-atuhaire-116108bb/' target={'blank_'}><img src={linkedInLogo} alt='linkedIn'></img></a></div>
                            <div className='ownerLink'><a href='https://twitter.com/AfroBoyUg' target={'blank_'}><img src={twitterLogo} alt='twitter'></img></a></div>
                            <div className='ownerLink'><a href='https://linktr.ee/Atuhaire' target={'blank_'}><img src={moreIcon} alt='more'></img></a></div>
                            
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Main