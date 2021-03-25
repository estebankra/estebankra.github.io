import React from 'react';

import PropTypes from 'prop-types'

function AchievementSection(props) {
  const { sectionTitle, subSectionTitle, achievements } = props;

  return (
    <React.Fragment>
      { sectionTitle && <h2 id="achievement-title">{sectionTitle}</h2>}
      <div id="responsive-web">
        { subSectionTitle && <h3 class="center">{subSectionTitle}</h3>}
        {achievements}
      </div>
    </React.Fragment>
  )
}

AchievementSection.propTypes = {
  sectionTitle: PropTypes.string,
  subSectionTitle: PropTypes.string,
  achievements: PropTypes.object.isRequired,
}

AchievementSection.defaultProps = {
  sectionTitle: '',
  subSectionTitle: '',
}

export default AchievementSection;
