import React from 'react';

import './styles.scss';

export const ButtonPrimary = ({
  text = '',
  onClick,
}) => {
  return (
    <button type="submit" className="btn btn-primary btn-block primary-button" onClick={onClick}>
      <span>{text}</span>
    </button>
  );
};