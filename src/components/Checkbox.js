import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = (props) => (  
    <div className="checkbox-group">
      {props.options.map((option) => {
        return (
          <div key={option.label} className="form-label">
            <label className="form-check-label">
            <input
              className="form-checkbox question"
              name={props.setName}
              onChange={props.controlFunc}
              value={option.key}
              type="checkbox" /> {option.label}
              </label>
          </div>
        );
      })}
    </div>
);

Checkbox.propTypes = {  
  setName: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  controlFunc: PropTypes.func.isRequired
};

export default Checkbox;  