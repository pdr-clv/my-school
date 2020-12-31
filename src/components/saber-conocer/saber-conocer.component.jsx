import React,{ useState, useEffect } from 'react';

import { SelectQuestion } from './saber-conocer.styles';

const SaberConocer = () => {
  const options = [
    [
      {
      text: "Select",
      val: ''},
      {text: "Sabes",
      val: true},
      {text: "Conoces",
      val: false}
    ],
    [
      {text: "Select",
      val: ''},
      {text: "Sabes",
      val: false},
      {text: "Conoces",
      val: true}
    ]
  ];
  const pText = [ 'quien es el profesor de matematicas?', 'al profesor de matematicas?'];

  
  const [selectedOption, setSelectedOption] = useState([]);
  useEffect(()=>{
    const valarray = options.map(() => '');
    setSelectedOption(valarray);
  // eslint-disable-next-line
  },[]);
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
    <div>
    {options.map((item, i) => 
      <div key={`div${i}`}>
        ¿
        <SelectQuestion
          key={i}
          value={selectedOption[i]}
          onChange={handleChange}
          id={i}
        >
        {item.map((option,j) => (
          <option key={j} value={option.val}>
            {option.text}
          </option>
        ))}
        </SelectQuestion>
        <span key={`span${i}`}>{selectedOption[i]}</span>
        {pText[i]}
      </div>
      )}
    </div>
  );

}

export default SaberConocer;
