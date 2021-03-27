import Iconface from '../../img/social/facebook.jsx';
import IconInst from '../../img/social/instagram';
import Icontel from '../../img/social/telegram';
import IconYou from '../../img/social/youtube';
import IconViber from '../../img/social/viber';
import IconVk from '../../img/social/vk';

const Footer = () => {
    return ( 
        <footer className="footer">
            <div className="container">
            <h3>
                Contact us
            </h3>

        <div className="row">
            <div className="col-sm-6">
            <ul className="list social-list contact-list">
                 <li className="contact-list__item">
                        <a className="contact-list-item" href="instagram.com"> 
                     <IconInst/>   
                        </a>
                </li>   
                      
                <li className="contact-list__item">
                <a className="contact-list-item" href="instagram.com"> 
                <Icontel/>             
                </a>
                </li>

                <li className="contact-list__item">
                <a className="contact-list-item" href="instagram.com"> 
                <IconYou/>             
                </a>
                </li>

                <li className="contact-list__item">
                <a className="contact-list-item" href="instagram.com"> 
                <IconVk/>             
                </a>
                </li>

                <li className="contact-list__item">
                <a className="contact-list-item" href="instagram.com"> 
                <IconViber/>             
                </a>
                </li>

                <li className="contact-list__item">
                <a className="contact-list-item" href="instagram.com"> 
                <Iconface/>             
                </a>
                </li>
                
            </ul>
            </div>
      
<div className="col-sm-6">
    <ul className="list contact-list">
        <li className="contact-list__item"><a href="tel: 142332211">11233-22-11</a></li>
        <li className="contact-list__item"><a href="tel: 142332211">11233-22-11</a></li>
        <li className="contact-list__item"><a href="tel: 142332211">11233-22-11</a></li>

    </ul>
</div>
        </div>
      
            </div>

        </footer>
     );
}
 
export default Footer;