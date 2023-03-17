import { useState } from 'react';
import styled from 'styled-components';
import { TitleBox, SideMenu } from '../components';
import  QuestionContainer from '../containers/QuestionContainer/QuestionContainer';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import { useDispatch ,useSelector} from 'react-redux';
import { questionActions } from '../slices';

function Main() {

  const { form, questions } = useSelector((state) => state.form);
  const dispatch = useDispatch();
  const [info, setInfo] = useState({
    title: form.title,
    detail: '',
  });

  const handleInfo = (name, value) => {
    setInfo({
      ...info,
      [name]: value,
    });
  };

  const getQuestionList = () => {
    return questions.map((question, idx) => (
      <Draggable key={question.id} draggableId={question.id} index={idx}>
        {(provided, snapshot) => (
          <div ref={provided.innerRef} {...provided.draggableProps}>
            <QuestionContainer key={question.id} questionId={question.id} provided={provided} />
          </div>
        )}
      </Draggable>
    ));
  };

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    dispatch(questionActions.reorderQuestion({ firstIdx: result.source.index, secondIdx: result.destination.index }));
  };

  return (
    <Wrapper>    
      <QuestionWrapper>                    
        <TitleBox info={info} handleChange={handleInfo} />
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided) => (
              <div ref={provided.innerRef}>
                {getQuestionList()}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        <SideMenu info={info} />
      </QuestionWrapper>
    </Wrapper>
  );
};

// ${({ theme }) => theme.flexCenter};
export const Wrapper = styled.div`
${({ theme }) => theme.flexCenter};
  margin: 0 auto;
  max-width: 1440px;
  align-items: center;
  margin-top: 140px;
  margin-bottom: 100px;
`;

export const QuestionWrapper = styled.div`
  display:flex;
  flex-direction:column;
  align-items: center;

  justify-content: center;
 
`;

export default Main;
