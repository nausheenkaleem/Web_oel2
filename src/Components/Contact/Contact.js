import React from 'react'

export default function Contact() {
  return (
    <div class="contact-section d-md-flex" id="contact">
    <div class="col-md-6 col-12 contact-section-left">
        <div class="contact-box">
            <h1>Contact us</h1>
            <i class="fa fa-phone"></i>
            <h3>Phone</h3>
            <p><a href="tel:093773562739">093773562739</a></p>
        </div>
        <div class="contact-box">
            <i class="fa fa-envelope"></i>
            <h3>Email</h3>
            <p><a href="mailto:info@gmail.com">info@gmail.com</a></p>
        </div>
        <div class="contact-box">
            <i class="fa fa-map-marker"></i>
            <h3>Address</h3>
            <p>street-56,block 10</p>
        </div>
    </div>
    {/* <!--
    <div class="col-md-6 col-12 contact-section-right">
        <div class="contact-box">
            <h3>Get in touch</h3>
            <form>
                <div>
                    <input type="" name="Name">
                    <input type="" name="Email">
                    <textarea placeholder="message"></textarea>
                    <input type="Submit" value="Send message">
                </div>
            </form>
        </div>
    </div>
--> */}
</div>
  )
}
