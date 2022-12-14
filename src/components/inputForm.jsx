import React from 'react';
import useInputState from '../hooks/useInputState';

const InputForm = ({saveInputData}) => {
    const {value, resetInput, onChange} = useInputState('');

  return (
    <div className="form-container container-fluid text-center">
      <form>
        <div className="input-group mt-3">
          <textarea 
            onChange={onChange}
            value={value}
            className="form-control"
            rows="5"
            required />
        </div>
        <button 
            className="btn btn-primary mt-3"
            onClick={e => {e.preventDefault(); saveInputData(value); resetInput();}}>
            Count
        </button> 
      </form>
    </div>
  );
}

export default InputForm;