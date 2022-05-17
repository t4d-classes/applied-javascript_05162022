import { useState } from 'react';
import styled from 'styled-components';

// import './ColorForm.css';

// every time the state changes, the functions runs again to re-render the component

const Label = styled.label`
  display: block;
`;

export const ColorForm = ({ buttonText }) => {

  // const colorFormState = useState({
  //   name: '',
  //   hexcode: '',
  // } /* initializes the state on the first render */);

  // const colorForm = colorFormState[0];

  // const setColorForm = colorFormState[1];

  // using the array as a tuple structure
  const [ colorForm, setColorForm ] = useState({
    name: '', hexcode: '',
  });

  // setColorForm({
  //  name:'purple', hexcode: 'ff00ff'
  // })

  const change = (evt) => {

    // // extract the name and value from the input field
    // const controlValue = evt.target.value;
    // const controlName = evt.target.name; // name or hexcode

    // // making a copy of the color form object
    // const newColorForm = {
    //   name: colorForm.name,
    //   hexcode: colorForm.hexcode,
    // };

    // // updates the one field for the one control we were typing into
    // newColorForm[controlName] = controlValue;

    // // updates the state and triggers a re-render, which mean the component
    // // function will execute again
    // setColorForm(newColorForm);

    setColorForm({
      ...colorForm,
      [evt.target.name]: evt.target.value,
    });
  };

  console.log(colorForm);

  return (
    <form className="colorForm">
      <Label>
        Name:
        <input type="text" name="name" value={colorForm.name} onChange={change} />
      </Label>
      <Label>
        Hexcode:
        <input type="text" name="hexcode" value={colorForm.hexcode} onChange={change} />
      </Label>
      <button type="button">{buttonText}</button>
    </form>
  );

};

ColorForm.defaultProps = {
  buttonText: "Submit Color",
};