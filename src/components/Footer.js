import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className='footer'>
            <div>
                <h2><u>Contact Us</u></h2>
            </div>
            <div className='footerdiv'>
                <div>
                    <h3>Address</h3>
                    <p>C-DAC Noida</p>
                </div>
                <div>
                    <h3>Phone Number</h3>
                    <p>8521789853</p>
                    <p>9549917178</p>
                </div>
                <div>
                    <h3>Email</h3>
                    <p>SupporProjectTeam@gmail.com</p>
                    <div>
                        <h3>Team Members</h3>
                        <ul className="team-list">
                            <li>DIVYA MOHAN VERMA</li>
                            <li>DANISH RAZA</li>
                            <li>HARI OM</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
