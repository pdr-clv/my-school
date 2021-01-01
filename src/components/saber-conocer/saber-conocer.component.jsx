import React,{ useState, useEffect } from 'react';
//import SelectComponent from '../select/select.component';
import SelectSubmitted from '../select/select.submitWrapper';
//import { SelectQuestion } from './saber-conocer.styles';

const SaberConocer = () => {
  const options = [
    [
      {
      text: "----",
      val: ''},
      {text: "Sabes",
      val: true},
      {text: "Conoces",
      val: false}
    ],
    [
      {text: "",
      val: ''},
      {text: "Sabes",
      val: false},
      {text: "Conoces",
      val: true}
    ]
  ];
  const pText = [ 'quien es el profesor de matematicas?', 'al profesor de matematicas?'];

  
  const [selectedOption, setSelectedOption] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  
  useEffect(()=>{
    const valarray = options.map(() => '');
    setSelectedOption(valarray);
  // eslint-disable-next-line
  },[]);

  const handleSubmit = e => {
    e.preventDefault();
    const isAllSelected = selectedOption.findIndex(item => item ==='');
    console.log(isAllSelected);
    if (isAllSelected < 0) {
      setSubmitted(true);
    } else {
      alert('Please, select all possible answers');
    }
    
  }

  const handleChange = (e) => {
    const index = e.target.id * 1;
    const newItem = e.target.value;


    setSelectedOption(selectedOption.map((item,i) => {
      if(i===index) {
        return newItem
      } else
      {
        return item
      }
    }));

  }

  return (
    <form onSubmit={handleSubmit}>
    {options.map((item, i) => 
      <div key={`div${i}`}>
        ¿
        <SelectSubmitted
          key={i}
          value={selectedOption[i]}
          handleChange={handleChange}
          id={i}
          options={item}
          submitted={submitted}
        />
        <span key={`span${i}`}>{selectedOption[i]}</span>
        {pText[i]}
      </div>
      )}
      <input type="submit" value='submit'/>
    </form>
  );

}

export default SaberConocer;
