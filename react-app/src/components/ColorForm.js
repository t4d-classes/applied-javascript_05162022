export const ColorForm = ({ buttonText }) => {

  return (
    <form>
      <label>
        Name:
        <input type="text" />
      </label>
      <label>
        Hexcode:
        <input type="text" />
      </label>
      <button type="button">{buttonText}</button>
    </form>
  );

};

ColorForm.defaultProps = {
  buttonText: "Submit Color",
};