import React from 'react'

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
            icon='fa fa-at' 
          />
          <SocialMediaItem
            href='https://github.com/estebankra'
            icon='fa fa-github'
            targetBlank
          />
          <SocialMediaItem 
            href='https://codepen.io/estebankra/'
            icon='fa fa-codepen'
            targetBlank
          />
          </ul>
        </div>
      </div>

      <div class="wave"></div>
      
    </section>
  )
}
