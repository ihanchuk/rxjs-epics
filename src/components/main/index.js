import React from 'react';

const Main = () => {
    return (<div className="container">
        <h3>Features i would implement in case of "production code":</h3>
        <div className="col-lg-6">
            <ul>
                <li>Node.js single error handler</li>
                <li>Complete "Events" form components</li>
                <li>BackEnd data validation</li>
                <li>CSRF token</li>
                <li>XSS protection</li>
            </ul>
        </div>
        <div className="col-lg-6">
            <ul>
                <li>Production and DEV environment</li>
                <li>Unit testng</li>
            </ul>
        </div>
    </div>);
}

export default Main;