import React,{ useState } from 'react';
//import SelectComponent from '../select/select.component';
import SelectSubmitted from '../select/select.submitWrapper';
import { Sentence } from './saber-conocer.styles';

const SaberConocer = () => {
  /*const options = [
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
  ];*/

  //const pText = [ 'quien es el profesor de matematicas?', 'al profesor de matematicas?'];

  const sentences = [
    [
      {
        type: 'p',
        text: '¿'
      },
      {
        type: 'select',
        options:[
          {
            text: "----",
            val: ''
          },
          {
            text: "Sabes",
            val: true
          },
          {
            text: "Conoces",
            val: false
          }
        ]
      },
      {
        type:'p',
        text: 'quien es el profesor de matematicas?'
      }
    ],
    [
      {
        type: 'p',
        text: '¿'
      },
      {
        type: 'select',
        options:[
          {
            text: "----",
            val: ''
          },
          {
            text: "Sabes",
            val: true
          },
          {
            text: "Conoces",
            val: false
          }
        ]
      },
      {
        type:'p',
        text: 'quien es el profesor de matematicas?'
      }
    ]
  ];

  const [selectedOption, setSelectedOption] = useState([]);
  const [submitted, setSubmitted] = useState(false);
/*  const [selectsId, setSelectsId] = useState([]);
  const [definitiveId, setDefinitiveId] = useState([]);

/*  useEffect(()=>{
    sentences.map((sentence) => 
      {sentence.map((element) => 
      {
        const prevState = [...selectsId];
        console.log(prevState);
        if (element.type === 'p') {
          setSelectsId (selectsId.push('p'));
        } else {
          const id = selectsId.filter( (Iditem) => Iditem !== 'p').length;
          setSelectsId (selectsId.push(id));
        }
      }  
    )});
    const onlySelectsIds = selectsId.filter(item => item !=='p');
    const innerSelectedOption = onlySelectsIds.map(() => '');
    setSelectedOption(innerSelectedOption);
    console.log(selectsId);

  },[]);

  useEffect(()=>{
    setDefinitiveId(selectsId);
  },[selectsId]);*/


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
//    console.log(selectsId);
    console.log(selectedOption);
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
/*
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
*/
  return (
    <form onSubmit={handleSubmit}>
      <Sentence>
        { 
          sentences.map((sentence, i) => {
            return sentence.map((item,j) => {
              if (item.type === 'p') {
                return <p key={i + j}>{item.text}</p>
              } else { 
                //console.log(definitiveId);
                let index = i*3 + j;
                //console.log(definitiveId[index]);
                console.log(index);
                return <SelectSubmitted
                  key={i + j }
                  //value={selectedOption[definitiveId[index]]}
                  handleChange={handleChange}
                  //id={definitiveId[index]}
                  options={item.options}
                  submitted={submitted}
                />
              }
            })
          })
        }      
      </Sentence>
      <input type="submit" value='submit'/>
    </form>
  )
}

export default SaberConocer;
