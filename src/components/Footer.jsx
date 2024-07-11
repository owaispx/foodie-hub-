import React from 'react'
import "../Styles/Footer.css"

const Footer = () => {
  return (
    <div footer_container>
      
      <footer>
    <div class="footer-content">
        <div class="footer-logo">
           <h3>Foodiehub</h3>
              
        </div>
        <div class="footer-info">
            <h3>About FoodieHub</h3>
            <p>FoodieHub is your ultimate destination for discovering delicious food from around the world.</p>
        </div>
        <div class="footer-contact">
            <h3>Contact Us</h3>
            <p>Email: info@foodiehub.com<br />Phone: 123-456-7890</p>
            <br />
        </div>
    </div>
    <div class="footer-bottom">
        <p>&copy; 2024 FoodieHub. All rights reserved.</p>
    </div>
</footer>


    </div>
  )
}

export default Footer