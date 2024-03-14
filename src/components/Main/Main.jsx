import React, { useContext } from 'react';
import './Main.css'
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Main = () => {

    const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context)


    return (
        <div className='main'>
            <div className='nav'>
            <p><img className='logo' src={assets.cyber} alt="" /></p>
            <img src={assets.bot} alt="" />
            </div>
            <div className='main-container'>
                  
                  {!showResult?
                  <>
                  <div className='greet'>
                <p><span>Hello, Dev.</span></p>
                 <p>How can I help you today?</p>
            </div>
            <div className='cards'>
            <div className='card'>
              <p>Suggest beautiful places to see on an upcming road trip</p>
              <img src={assets.navigation} alt="" />
            </div>
            <div className='card'>
              <p>Briefly summarize this concept urban planning</p>
              <img src={assets.bulb} alt="" />
            </div>
            <div className='card'>
              <p>Brainstrom team bonding activities for our work retreat</p>
              <img src={assets.message} alt="" />
            </div>
            <div className='card'>
              <p>Improve the readability of the following code.</p>
              <img src={assets.code} alt="" />
            </div>
            </div>
                  </>
                  :<div className='result'>
                    <div className='result-title'>
                    <img src={assets.user} alt="" />
                    <p>{recentPrompt}</p>
                    </div>
                    <div className='result-data'>
                    <img src={assets.logo} alt="" /> 
                    {loading
                    ?<div className='loader'> 
                    <hr />
                    <hr />
                    <hr />  
                    </div>
                    :<p dangerouslySetInnerHTML={{__html:resultData}} className='result-chat'></p>
                    }
                    </div>
                  </div>
                }

            
            <div className='main-bottom'>
            <div className='search-box'>
               <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here'/>
               <div>
               <img src={assets.add} alt="" />
            <img src={assets.mic} alt="" />
            <img onClick={() => onSent()} src={assets.paper} alt="" />
               </div>
            </div>
            <p className='bottom-info'>
                Gemini may display inaccurate info, including about people, so double-check its responses.Your privacy and Gemini Apps
            </p>
            </div>
            </div>
        </div>
    );
};

export default Main;