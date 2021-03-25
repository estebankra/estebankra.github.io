import React from 'react'

import { FiMail, FiCodepen, FiGithub, FiLinkedin } from "react-icons/fi";
import SocialMediaItem from '../components/SocialMediaItem';

export default function AboutMeSection() {
  return (
    <section id="welcome-section" class="welcome">
      <div id="about-me">
      <h1>¡Hi! I'm Esteban Krauwezuk | estebankra</h1>

        <div id="social">
          <ul>
          <SocialMediaItem 
            href='mailto:estebankrauwezuk@gmail.com'
            icon={<FiMail />} 
          />
          <SocialMediaItem 
            href='https://www.linkedin.com/in/estebankra/'
            icon={<FiLinkedin />}
            targetBlank
          />
          <SocialMediaItem
            href='https://github.com/estebankra'
            icon={<FiGithub />}
            targetBlank
          />
          <SocialMediaItem 
            href='https://codepen.io/estebankra/'
            icon={<FiCodepen />}
            targetBlank
          />
          </ul>
        </div>
      </div>

      <div class="wave"></div>
      
    </section>
  )
}
