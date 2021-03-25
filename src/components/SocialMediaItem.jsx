import React from 'react'

import PropTypes from 'prop-types'

function SocialMediaItem(props) {
  const { href, icon, targetBlank } = props;

  return (
    <React.Fragment>
      <li>
        <a href={href} rel="noreferrer" target={ targetBlank ? '_blank' : ''}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span>{icon}</span>
        </a>
      </li>
    </React.Fragment>
  )
}

SocialMediaItem.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  targetBlank: PropTypes.bool,
}

SocialMediaItem.defaultProps = {
  targetBlank: false
}

export default SocialMediaItem;
