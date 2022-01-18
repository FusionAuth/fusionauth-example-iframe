import React from 'react';
import './LogInOut.css'
const LogInOut = () => {

  return (
    <div className='iframe'>
      <iframe id="inlineFrameExample"
       title="Hosted Login Page"
       src="http://localhost:9011/oauth2/authorize?client_id=9a6b0326-feef-492b-bf08-12fb71afedf3&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Foauth-redirect">
       //src="http://www.akirabrand.com">
      </iframe>
    </div>
  )
}
export default LogInOut;
