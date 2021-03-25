import React from 'react'

// Components
import NavBar from '../components/NavBar';
import AchievementItem from '../components/AchievementItem';
import Footer from '../components/Footer';
import AchievementSection from '../components/AchievementSection';
import AboutMeSection from '../components/AboutMeSection';

function Home() {
  return (
    <React.Fragment>
      <NavBar />
      
      <main id="main">
        <AboutMeSection />

        <AchievementSection
          sectionTitle="Achievements"
          achievements={
            <React.Fragment>
              <AchievementItem
                src="img/achievements/vue-course.jpg"
                alt="vue-course"
              />
              <AchievementItem
                href="https://www.freecodecamp.org/certification/estebankra/responsive-web-design"
                src="img/achievements/responsive-web-design.png"
                alt="responsive-web-design"
                targetBlank
              />
              <AchievementItem
                src="img/achievements/rails-facilito.png"
                alt="rails-codigo-facilito"
              />
              <AchievementItem
                src="img/achievements/prog-basica.png"
                alt="prog-basica-platzi"
              />
              <AchievementItem
                href="https://teachlr.com/certificate/TC-MTM4MDcxfCp8MjY1OA=="
                src="img/achievements/disenho-web-teachlr.png"
                alt="design-web-teachlr"
                targetBlank
              />
              <AchievementItem
                src="img/achievements/marca-personal.png"
                alt="marca-personal-platzi"
              />
              <AchievementItem
                src="img/achievements/jquery-sololearn.png"
                alt="jquery-sololearn"
              />
              <AchievementItem
                src="img/achievements/sublime-text.png"
                alt="sublime-text"
              />
              <AchievementItem
                src="img/achievements/html-sololearn.png"
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
                src="img/web-designs/design-web-augusto.png"
                alt="project-augusto-roa-bastos"
                targetBlank
              />
              <AchievementItem
                title="Technical Documentation"
                href="https://codepen.io/estebankra/full/exjxxx"
                src="img/web-designs/design-web-ruby.png"
                alt="project-ruby-documentation"
                targetBlank
              />
              <AchievementItem
                title="Survey Form"
                href="https://codepen.io/estebankra/full/bOQpvO"
                src="img/web-designs/design-web-form.png"
                alt="project-survey-form"
                targetBlank
              />
              <AchievementItem
                title="Product Landing Page"
                href="https://codepen.io/estebankra/full/jdWoOr"
                src="img/web-designs/design-web-telescope.png"
                alt="project-product-landing-page"
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
                src="img/spring/cellshop-spring.png"
                alt="project-cellshop-sts"
                targetBlank
              />
              <AchievementItem
                title="Trivia Game | Android"
                href="https://github.com/estebankra/android-trivia-game"
                src="img/android/culture-app.jpg"
                alt="project-trivia-game"
                targetBlank
              />
              <AchievementItem
                title="Phonebook"
                href="https://github.com/estebankra/phonebook"
                src="img/java/phonebook.jpg"
                alt="project-cellshop-sts"
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
                src="img/ror/cellshop-ror.png"
                alt="project-cellshop-rails"
                targetBlank
              />
              <AchievementItem
                title="Starweb"
                href="https://github.com/estebankra/star-soft"
                src="img/ror/starweb.png"
                alt="project-cellshop-rails"
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
                title=">Arduino - IoT"
                href="https://github.com/estebankra/board-code"
                src="img/arduino/placa.jpg"
                alt="project-arduino"
                targetBlank
              />
            </React.Fragment>
          }
        />
      </main>
      <Footer />
    </React.Fragment>
  )
}

export default Home;
