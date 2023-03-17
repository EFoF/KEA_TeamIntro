import { ShowIcon, AddIcon } from '../../assets';

import { Wrapper } from './style';
import { useDispatch } from 'react-redux';
import { formActions, questionActions } from '../../slices';
import { Link } from 'react-router-dom';
import shortid from 'shortid';
import { QUESTION_TYPES } from '../../const';
import Button from '../../ui/button';


const newQuestion = (newId) => ({
  id: newId,
  type: QUESTION_TYPES.ONE_CHOICE,
  questionContent: '',
  isNecessary: false,
  options: [
    {
      id: 1,
      option: '옵션 1',
    },
  ],
  answers: [],
  narrativeAnswer: '',
});

const SideMenu = ({ info }) => {
  const dispatch = useDispatch();

  const handlePreview = () => {
    dispatch(formActions.addForm(info));
  };

  const handleAddQuestion = () => {
    const newId = shortid();
    dispatch(questionActions.addQuestion(newQuestion(newId)));
  };

  return (        
    <Wrapper>
      <Button size="sm" event={handleAddQuestion}>
          추가
        </Button>
        <Button variant="success" size="sm" event={handlePreview}>
          제출
        </Button>      
    </Wrapper>
  );
};

export default SideMenu;
