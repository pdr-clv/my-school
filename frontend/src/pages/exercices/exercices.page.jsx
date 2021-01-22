import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getArrayLength } from '../../utils/indexUtils';
import { getQuestions } from '../../redux/quiz/quiz.actions';
import { getUnits } from '../../redux/unit/unit.actions';
import {
  Container,
  ExercicesLink,
  UnitBlock,
  LinksBlock,
} from './exercices.styles';

const ExercicesPage = () => {
  const dispatch = useDispatch();
  const [showLinks, setShowLinks] = useState([]);
  const [accordionNumItems, setNumItems] = useState([]);

  const openAccordionItem = (index, elementsNum) => {
    let arrayOpen = [];
    accordionNumItems.forEach((i) => {
      if (i === index) {
        arrayOpen.push({ show: !showLinks[index].show, elementsNum });
      } else {
        arrayOpen.push({ show: false, elementsNum: 0 });
      }
    });
    return arrayOpen;
  };

  useEffect(() => {
    dispatch(getUnits());
    dispatch(getQuestions());
  }, [dispatch]);
  const units = useSelector((state) => state.unitReducer);
  useEffect(() => {
    const accordionItems = getArrayLength(units.length);
    setNumItems(accordionItems); //get accordionNumItems according to the units.length

    let InnerState = []; //get InnterState
    accordionItems.forEach(() => {
      InnerState.push({ show: false, elementsNum: 0 });
      setShowLinks(InnerState);
    });
  }, [units]);

  return (
    <Container>
      <ExercicesLink to='/saberconocer'>Saber o Conocer</ExercicesLink>
      <ExercicesLink to='/serestar'>Quiz Type your answers</ExercicesLink>
      {units.map((unit, index) => (
        <UnitBlock
          key={unit.unitId}
          onClick={() => {
            let elements = 0;
            if (unit.grammar) elements = 1;
            elements = elements + unit.questionsBlock.length;
            setShowLinks(openAccordionItem(index, elements));
          }}
        >
          <h4 key={unit.unitId + 1}>
            Unidad {unit.unitId}. {unit.title}
          </h4>
          <LinksBlock showLinks={showLinks[index]}>
            <ExercicesLink key={unit.unitId} to='/unit1'>
              {unit.grammar}
            </ExercicesLink>
            {unit.questionsBlock.map((question, i) => (
              <ExercicesLink key={i} to={`/link${i + 1}`}>
                {question}
              </ExercicesLink>
            ))}
          </LinksBlock>
        </UnitBlock>
      ))}
    </Container>
  );
};

export default ExercicesPage;
