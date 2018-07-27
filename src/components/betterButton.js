import React from 'react'
import Link from 'gatsby-link'
import styles from '../styles/betterButton.module.css';

const BetterButton = ({text, link}) => (
    <Link to={link} className={styles.buttonFace}>
        <a href={link} className={styles.text}>{text}</a>
    </Link>
)

export default BetterButton