import React from 'react';
import PropTypes from 'prop-types';

const Radio = (props) => (  
     <div className="checkbox-group">
      {props.options.map((option) => {
        return (
          <div key={option.label} className="form-check">
               <label className="form-check-label">
            <input
              className="form-check-input question"
              name={props.setName}
             onChange={props.controlFunc}
              value={option.key}
              type="radio" /> {option.label}
              </label>
          </div>
        );
      })}
    </div>
);

Radio.propTypes = {  
  setName: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  controlFunc: PropTypes.func.isRequired
};

export default Radio;  