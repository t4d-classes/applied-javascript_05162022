import { useState } from 'react';
import styled from 'styled-components';

const Label = styled.label`
  display: block;
`;

export const ColorForm = ({ buttonText, onSubmitColor }) => {

  const [ colorForm, setColorForm ] = useState({
    name: '', hexcode: '',
  });

  const change = (evt) => {
    setColorForm({
      ...colorForm,
      [evt.target.name]: evt.target.value,
    });
  };

  const submitColor = () => {
    onSubmitColor({...colorForm });
  };

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
      <button type="button" onClick={submitColor}>{buttonText}</button>
    </form>
  );

};

ColorForm.defaultProps = {
  buttonText: "Submit Color",
};