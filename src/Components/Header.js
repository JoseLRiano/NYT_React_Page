import React from "react";
import NewYorkTimesLogo from '../Images/NewYorkTimes-white.svg';
import '../Styles/Header.css';

function Header(){
    return(<div className="Nav_section">
        <nav className="Nav_container">
            <div className="Nav_logo_container">
              <a className="Nav_logo" href="https://www.newyorktimes.com" target="_blank" rel="noopener noreferrer">
                 <img className="Nav_logo" src={NewYorkTimesLogo} alt="New York Times Navigation Bar Logo" />
              </a>
            </div>
        </nav>
        </div>);
}
export default Header;