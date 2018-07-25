import React from 'react'
import Link from 'gatsby-link'
import styles from '../styles/headerButton.module.css';
import get from 'lodash/get'


const HeaderButton = ({text, link}) => (
  <div className = {styles.buttonFace}>
    <Link to={link} className={styles.text}>{text}</Link>
  </div>
)


export default HeaderButton