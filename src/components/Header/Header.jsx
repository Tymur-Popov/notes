import React from "react";
import css from '../Header/Header.module.css';
// import '../../../public/favicon-32x32.png';
import {FaCat} from 'react-icons/fa';



const Header = () => {
  return (
    <div className={css.header}>
      <FaCat size={35}/>
        <h3>Cat`s notes</h3>
    </div>
  )
};

export default Header;

