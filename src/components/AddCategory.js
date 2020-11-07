import React,{useState} from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

  const [inputValue,setInputValue] =useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(inputValue.trim().length > 2){
      setCategories(ctgs => [inputValue,...ctgs]);
      setInputValue('');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter gif name"
        onChange={handleInputChange}
        value={inputValue}
      />
    </form>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}