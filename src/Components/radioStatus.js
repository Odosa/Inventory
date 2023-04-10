const RadioComponent = ({ value, setGender }) => ( 
  <div onChange={setGender.bind(this)}>
    <input type="radio" value="MALE" name="gender" defaultChecked={value ==="MALE"} /> Male
    <input type="radio" value="FEMALE" name="gender" defaultChecked={value ==="FEMALE"}/> Female
  </div>
);

export default RadioComponent;