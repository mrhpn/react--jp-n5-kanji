import React from 'react';
import _ from 'lodash';

const CustomRadioButton = ({
  label,
  value,
  range = [],
  styles = '',
  selected = false,
  description,
  onClick,
}) => {
  let isSelected = false;
  isSelected = range.length > 0 ? _.includes(range, value) : value == selected;

  return (
    <div
      onClick={() => onClick(value)}
      className={`inline-block bg-white cursor-pointer rounded-lg border-4 border-white-300 ${
        isSelected && 'border-emerald-400 text-emerald-700'
      } ${styles}`}>
      <span>{label}</span>
      <small className="text-emerald-500 text-xs">{description}</small>
    </div>
  );
};

export default CustomRadioButton;
