export const CarForm = ({ buttonText }) => {

  return (
    <form>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <label>
        Hexcode:
        <input type="text" name="hexcode" />
      </label>
      <button type="button">{buttonText}</button>
    </form>
  );

};

CarForm.defaultProps = {
  buttonText: "Submit Color",
};