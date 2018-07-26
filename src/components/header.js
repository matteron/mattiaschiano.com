import React from 'react'
import Link from 'gatsby-link'
import styles from '../styles/header.module.css';
import HeaderButton from './headerButton'

const Header = ({ siteTitle }) => (
  <div className = {styles.header}>
      <div className = {styles.container}>
        <h1 className = {styles.h1}>
          <Link to="/" className = {styles.title}>{siteTitle}</Link>
        </h1>
        <div className = {styles.buttons}>
          <HeaderButton text="about" link="/about/"/>
          <HeaderButton text="projects" link="/projects/"/>
          <HeaderButton text="resume" link="/resume"/>
        </div>
    </div>
  </div>
)

export default Header
