import React from "react";
import css from '../Count/Count.module.css';

function Count({ count }) {
  return (
    <div className={css.count}>
      <h4>{count}</h4>
    </div>
  );
}

export default Count;
