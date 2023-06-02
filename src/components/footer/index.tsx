import './style.scss'

import React from 'react'

const Footer: React.FC = () => {
   return (
      <footer id="footer" className="bg-secondary py-4">
         <div className="footer-div container">
            <div>
               <h3 className="title-footer">My Log Travels</h3>
            </div>
            <div className="footer-links">
               <p className="title-small mb-6">Quick Links</p>
               <div className="links">
                  <a href="#">Home</a>
                  <a href="#">Travels</a>
                  <a href="#">Recommendations</a>
                  <a href="#">Mission Statement</a>
                  <a href="#">About Us</a>
                  <a href="#">Promo Flights</a>
                  <a href="#">Guides</a>
                  <a href="#">The Team</a>
                  <a href="#">My Travel Logs</a>
                  <a href="#">Travel Routes</a>
                  <a href="#">Blogs</a>
                  <a href="#">Contact Us</a>
               </div>
            </div>
            <div className="footer-copyright">
               <p>2021 - 2022 My Log Travels. All Rights Reserved.</p>
            </div>
         </div>
      </footer>
   )
}

export default Footer
