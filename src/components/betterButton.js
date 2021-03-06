import React from 'react'
import Link from 'gatsby-link'
import styles from '../styles/betterButton.module.css';

const BetterButton = ({text, link}) => (
    <Link to={link} className={styles.buttonFace}>
        <p className={styles.text}>{text}</p>
    </Link>
)

export default BetterButton