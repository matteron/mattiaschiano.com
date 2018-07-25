import React from 'react'
import Link from 'gatsby-link'
import styles from '../styles/header.module.css';
import HeaderButton from './headerButton'

const Header = ({ siteTitle }) => (
  <div className = {styles.header}>
    <h1 className = {styles.h1}>
      <Link to="/" className = {styles.title}>{siteTitle}</Link>
    </h1>
    <HeaderButton text="about" link="/page-2/"/>
    <HeaderButton text="projects" link="/page-2/"/>
    <HeaderButton text="resume" link="/page-2/"/>
  </div>
)

export default Header
