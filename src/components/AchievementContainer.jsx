import React from 'react'

import AchievementSection from '../components/AchievementSection';
import AchievementItem from '../components/AchievementItem';

export default function AchievementContainer() {
  return (
    <React.Fragment>
      <AchievementSection
        sectionTitle="Achievements"
        achievements={
        <React.Fragment>
          <AchievementItem
          src="https://i.imgur.com/SVng6tT.jpg"
          alt="vue-course"
          />
          <AchievementItem
          href="https://www.freecodecamp.org/certification/estebankra/responsive-web-design"
          src="https://i.imgur.com/5gRbqjj.png"
          alt="responsive-web-design"
          targetBlank
          />
          <AchievementItem
          src="https://i.imgur.com/PLYt9ej.png"
          alt="rails-codigo-facilito"
          />
          <AchievementItem
          src="https://i.imgur.com/X8It2KZ.png"
          alt="prog-basica-platzi"
          />
          <AchievementItem
          href="https://teachlr.com/certificate/TC-MTM4MDcxfCp8MjY1OA=="
          src="https://i.imgur.com/saDJW0G.png"
          alt="design-web-teachlr"
          targetBlank
          />
          <AchievementItem
          src="https://i.imgur.com/ynOPO8G.png"
          alt="marca-personal-platzi"
          />
          <AchievementItem
          src="https://i.imgur.com/khSH4Pg.png"
          alt="jquery-sololearn"
          />
          <AchievementItem
          src="https://i.imgur.com/uRwcMqy.png"
          alt="sublime-text"
          />
          <AchievementItem
          src="https://i.imgur.com/r0l6yJ7.png"
          alt="html-sololearn"
          />
        </React.Fragment>
        }
      />

      <AchievementSection
        sectionTitle="Projects"
        subSectionTitle="Responsive Web Designs | html - css"
        achievements={
        <React.Fragment>
          <AchievementItem
          title="Tribute Page"
          href="https://codepen.io/estebankra/full/qLJWqm"
          src="https://i.imgur.com/OHro5OR.png"
          alt="project-augusto-roa-bastos"
          targetBlank
          />
          <AchievementItem
          title="Technical Documentation"
          href="https://codepen.io/estebankra/full/exjxxx"
          src="https://i.imgur.com/Aj4gKQv.png"
          alt="project-ruby-documentation"
          targetBlank
          />
          <AchievementItem
          title="Survey Form"
          href="https://codepen.io/estebankra/full/bOQpvO"
          src="https://i.imgur.com/PAHEWvd.png"
          alt="project-survey-form"
          targetBlank
          />
          <AchievementItem
          title="Product Landing Page"
          href="https://codepen.io/estebankra/full/jdWoOr"
          src="https://i.imgur.com/bD60rZO.png"
          alt="project-product-landing-page"
          targetBlank
          />
        </React.Fragment>
        }
      />

      <AchievementSection 
        subSectionTitle="Ruby on Rails | Ruby"
        achievements={
        <React.Fragment>
          <AchievementItem
          title="CellShop"
          href="https://github.com/estebankra/cellshop-ror"
          src="https://i.imgur.com/r82dRHx.png"
          alt="project-cellshop-rails"
          targetBlank
          />
          <AchievementItem
          title="Starweb"
          href="https://github.com/estebankra/star-soft"
          src="https://i.imgur.com/lYFRlqD.png"
          alt="project-cellshop-rails"
          targetBlank
          />
        </React.Fragment>
        }
      />
      
      <AchievementSection 
        subSectionTitle="Java"
        achievements={
        <React.Fragment>
          <AchievementItem
          title="CellShop | Spring Framework"
          href="https://github.com/estebankra/cellshop"
          src="https://i.imgur.com/bPHFEqn.png"
          alt="project-cellshop-sts"
          targetBlank
          />
          <AchievementItem
          title="Trivia Game | Android"
          href="https://github.com/estebankra/android-trivia-game"
          src="https://i.imgur.com/693nI3i.jpg"
          alt="project-trivia-game"
          targetBlank
          />
          <AchievementItem
          title="Phonebook"
          href="https://github.com/estebankra/phonebook"
          src="https://i.imgur.com/C8MdttU.jpg"
          alt="project-phonebook"
          targetBlank
          />
        </React.Fragment>
        }
      />

      <AchievementSection 
        subSectionTitle="Arduino | C++"
        achievements={
        <React.Fragment>
          <AchievementItem
          title="Arduino - IoT"
          href="https://github.com/estebankra/board-code"
          src="https://i.imgur.com/XQLokZm.jpg"
          alt="project-arduino"
          targetBlank
          />
        </React.Fragment>
        }
      />
    </React.Fragment>
  )
}
