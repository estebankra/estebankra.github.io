import React from 'react';
import PropTypes from 'prop-types'

function AchievementItem(props) {
  const { title, href, src, alt, targetBlank } = props;
  return (
    <a href={href} class="project-tile" rel="noreferrer" target={ targetBlank ? '_blank' : ''}>
      { title && <h3>{title}</h3> }
      <img class="project-img" src={src} alt={alt} />
    </a>
  )
}

AchievementItem.propTypes = {
  title: PropTypes.string,
  href: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}

AchievementItem.defaultProps = {
  title: '',
  href: '#',
  targetBlank: false,
}

export default AchievementItem;
