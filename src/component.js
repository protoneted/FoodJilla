
import  "../header.css"

const Component = ()=>{
    return(
        <>
         <div className="topbar">
               <div className="container">
                  <div className="topbar-wrap">
                      <div className="left-block">
                           <ul>
                            <li>May Edition Black Friday! 35% Off Spare Parts.</li>
                            <li>Free carbon neutral shipping on US orders $50+.</li>
                           </ul>
                      </div>
                      <div className="right-block">
                          <span>End of Time:</span>
                      </div>
                  </div>
               </div>
         </div>
         <div className="mid-bar">
              <div className="container mid-bar-wrap">
                  <div className="left-block">
                      <nav>
                         <ul>
                            <li>About Us</li>
                            <li>My account</li>
                            <li>Order Tracking</li>
                            <li>Wishlist</li>
                         </ul>
                      </nav>   
                  </div>
                  <div className="right-block">
                      <div className="right-block-contact">
                        Need help? <span>Call us:</span> 
                        <a href="tel:8001234567890">(+800) 1234 5678 90</a> <span>or</span>
                        <a href="mailto:info@company.com">info@company.com</a>
                      </div>
                      <div className="right-block-lang-curr">
                        <div className="lang-wrap">
                           <span>English</span>
                            <ul className="lang dropdown">
                               <li>English</li>
                               <li>Spanish</li>
                               <li>German</li>
                            </ul>
                        </div>
                        <div className="curr-wrap">
                           <span>USD</span>
                            <ul className="curr dropdown">
                               <li>USD</li>
                               <li>INR</li>
                               <li>GSD</li>
                            </ul>
                        </div>
                          
                      </div>
                  </div>
              </div>
         </div>
          
        </>
    )
}

export default Component