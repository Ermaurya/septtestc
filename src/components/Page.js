import React from 'react'

function Page() {
  return (
    <div>
         <div className="mainContainer">
     <div className="subContainer">
        <div className='main'>
       <div className="mainContantBox">
           <div className="leftContentBox">
            <div className="leftContentHeadText">Geekster</div>
            <div className="mainHeading">Sign in to Account
            </div>
              <hr/>
            <div className="socialMediaLink">
                <div className='link'>
                <img src='facebook-f.svg' alt=''/>
                <img src='linkedin-in.svg' alt=''/>
                <img src='google-plus-g.svg' alt=''/>
                </div>
            </div>
            <div className="text">Or use your email account</div>
            <div className="mainUserActionBox">
                <div className='input' >
        
                <input className='email' type="text" placeholder='Email..'/>
                </div>
                <div className='input1'>
                <input className='password' type="text" placeholder='password'/>
                </div>
                <div className="recover">
                    <div className='btn'>
                       <div className='check'>
                    <input type='checkbox'/>
                    <span>Remember me</span>
                    </div>
                    <button>Forgate password?</button>
                    </div>
                </div>
                <div className="SignInbtn">
                    <button>Sign In</button>
                </div>
                  <div className='footer'>
                   <span>Privacy Policy</span>
                   <span>Terms&Conditions</span>
                  </div>
            </div>
           </div>
           <div className="RightContentBox">
            <div className="SignUpBox">
                <div className="MassegeBox">Hello, Friend!</div>
                  <hr/>
                <div className="infoShow">Fill up personal information and
                start journey with us
                </div>
            </div>
                <div className="signUpbtn"><button>Sign Up</button></div>

           </div>
       </div>
     </div>
    </div>
    </div>
    </div>
  )
}

export default Page