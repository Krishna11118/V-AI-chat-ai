import React, { useContext } from 'react';
import './Main.css';
import { assets } from "../../assets/assets";
import { FaUserAstronaut } from "react-icons/fa";
import { Context } from "../../context/Context";

const Main = () => {
  const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    onSent(); // Trigger the onSent function
  };

  return (
    <div className="main">
      <div className="nav">
        <a href='/'>

        <p><img className="logo" src={assets.cyber} alt="" /></p>
        </a>
        {/* <img src={assets.bot} alt="" /> */}
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p><span>Hello, Dev.</span></p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <img src={assets.navigation} alt="" />
              </div>
              <div className="card">
                <p>Briefly summarize this concept: urban planning</p>
                <img src={assets.bulb} alt="" />
              </div>
              <div className="card">
                <p>Brainstorm team bonding activities for our work retreat</p>
                <img src={assets.message} alt="" />
              </div>
              <div className="card">
                <p>Improve the readability of the following code.</p>
                <img src={assets.code} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
            <FaUserAstronaut size={30}/>          
                <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.logo} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }} className="result-chat"></p>
              )}
            </div>
          </div>
        )}
        <div className="main-bottom">
          <form onSubmit={handleSubmit} className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
            />
            <button type="submit">
              <img src={assets.paper} alt="Send" />
            </button>
          </form>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
