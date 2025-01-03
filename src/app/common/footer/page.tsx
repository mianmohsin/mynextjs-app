'use-client';

import Image from 'next/image';
import footerLogo from '../../../assets/footer-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faFacebook, faLinkedin, faPinterest, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons'
import playLogo from '../../../assets/google-play badge.png';
import appleLogo from '../../../assets/app-store-badge.png';

export default function Footer() {
    return (
      <div>
          <div style={{
        background: '#1C264E',
        padding: '70px 0'
      }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8" style={{borderBottom: '1px #ffffff80 solid', paddingBottom: '30px'}}>
            <div> 
              <Image src={footerLogo} alt="" width={141} height={51} />
              <p className='text-white text-sm my-7'>Discover your ideal partner with Vaishakhi Matrimony, the top online platform for finding love.</p>
              <ul className='text-white text-lg grid grid-cols-6'>
                <li><a href="#"><FontAwesomeIcon icon={faXTwitter} /></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faPinterest} /></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faYoutube} /></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
              </ul>
            </div>
            <div>
              <h6 className='text-white text-lg font-bold'>About</h6>
              <ul className='text-white text-sm mt-2 leading-8'>
                <li><a href="#">Services</a></li>
                <li><a href="#">Success stories</a></li>
                <li><a href="#">Blogs</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Privacy Policy</a></li> 
              </ul>
            </div>
            <div>
              <h6 className='text-white text-lg font-bold'>Support</h6>
              <ul className='text-white text-sm mt-2 leading-8'>
                <li><a href="#">Help & Support</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">FAQs</a></li> 
              </ul>
            </div>
            <div>
              <h6 className='text-white text-lg font-bold mb-2'>Apps</h6>
              <Image src={playLogo} alt="" width={151} height={41} className='mb-3' />
              <Image src={appleLogo} alt="" width={151} height={41} />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className='text-white text-sm'>
              © Copyright 2024, All Rights Reserved by Vaishakhi Matrimony.
            </div> 
          </div>
        </div>
      </div> 
      </div>
    );
  }
  