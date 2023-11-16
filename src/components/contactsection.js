import Images from "./navigation/image";
import "./secondpage.css";
import { useState,useEffect } from "react";
import sideimg from '../images/int1.jpg'
import Paragraph from "./navigation/para-text";
import bigimg from '../images/int2.jpg'

function ContactSection(){
   

    return(
        <>
        <div className={`boxy-area  ${'about-section'}`}>
        <Images imagename={sideimg} class="lefty contact-set"></Images>
        <Paragraph side="paragraph-contact">
        Contact Information <br></br>
        Address: 123 Serenity Lane, <br></br>
        Tranquilville, Mountain Province, 54321
        <br></br>
        Phone: +1 (555) 123-4567
                <br></br>
        <a href="mailto:info@horecahotel.com">Email:info@horecahotel.com</a>
        
        </Paragraph>
       
        </div>
       
        </>
    )
}
export default ContactSection;