import React from 'react';
import './navbar.css';

function Hello() {
    const handleLoginClick = () => {
        window.location.href = '/navbaar';
        

    };


    return (
        <div>
            <div className="navbar">
                <h1>MONEY MANAGEMENT</h1>
               <div className='navi'><button onClick={handleLoginClick}>Sign Up</button></div> 
               <div className='navi'><button onClick={handleLoginClick}>Login</button></div>

            </div>
            <div className="second-line">
                <h2>Sooraj Sajit</h2>
                <h2>From CSE</h2>
                <h2>JEC21CS117</h2>
                <h2>Jyothi Engineering College</h2>
                <img src="jyothi.jpeg" width="400" height="200" alt="Jyothi Engineering College"/>
            </div>  
            <div className="table">
                <table border="3">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Description</th>
                            <th>Expense</th>
                            <th>Spend</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Travel</td>
                            <td>10000</td>
                            <td>11000</td>
                            <td>21000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Hello;
