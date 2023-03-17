
import { CopyIcon, DragIcon, TrashIcon } from '../../assets';
import { Wrapper, useStyles } from './style';
import { Switch } from '@material-ui/core';
import { QUESTION_TYPES } from '../../const';
import { useDispatch,useSelector } from 'react-redux';
import { questionActions } from '../../slices';
import shortid from 'shortid';
import Dropdown from '../../components/Dropdown/Dropdown';
import NarrativeQuestion from '../../components/Question/NarrativeQuestion/NarrativeQuestion';
import OptionalQuestion from '../../components/Question/OptionalQuestion/OptionalQuestion';
import { DraggableProvided } from 'react-beautiful-dnd';

import React from 'react'

const menus = [
  {
    id: QUESTION_TYPES.LONG_ANSWER,
    option: '주관식',
  },
  {
    id: QUESTION_TYPES.ONE_CHOICE,
    option: '객관식',
  },
  {
    id: QUESTION_TYPES.MULTIPLE_CHOICE,
    option: '객관식 복수선택',
  },
  {
    id: QUESTION_TYPES.TRUE_FALSE,
    option: '찬부식',
  },
];

export default function QuestionContainer({ questionId, provided }) {

  const classes = useStyles();
  const dispatch = useDispatch();
  const { questions } = useSelector((state) => state.form);

  const selectedQuestion = questions.find((item) => item.id === questionId);
  if (!selectedQuestion) return null;
  const { type: questionType, options, questionContent, isNecessary } = selectedQuestion;
  const lastOptionIndex = options.length + 1;

  const newQuestion = (newId) => {
    return {
      ...selectedQuestion,
      id: newId,
    };
  };

  const handleSwitch = () => {
    dispatch(questionActions.setNecessary(questionId));
  };

  const handleQuestionChange = (e) => {
    dispatch(questionActions.setQuestionContent({ id: questionId, questionContent: e.target.value }));
  };

  const handleDeleteQuestion = () => {
    dispatch(questionActions.deleteQuestion(questionId));
  };

  const handleCopyQuestion = () => {
    const newId = shortid();
    dispatch(questionActions.addQuestion(newQuestion(newId)));
  };

  const getOptionList = (type) => {
    const optionList = options
      ?.map((option) => (
        <OptionalQuestion
          key={option.id}
          questionId={questionId}
          optionId={option.id}
          optionContent={option.option}
          type={type}
          isLast={false}
        />
      ))
      .concat(
        <OptionalQuestion
          key={lastOptionIndex}
          questionId={questionId}
          optionId={lastOptionIndex}
          optionContent="옵션 추가"
          type={type}
          isLast
        />,
      );
    return optionList;
  };

  const getOptionListWithoutConcat = (type) => {
    const optionList = options
      ?.map((option) => (
        <OptionalQuestion
          key={option.id}
          questionId={questionId}
          optionId={option.id}
          optionContent={option.option}
          type={type}
          isLast={false}
        />
      ))    
    return optionList;
  };

  const getInput = () => {
    switch (questionType) {
      case QUESTION_TYPES.TRUE_FALSE:
        return getOptionListWithoutConcat(questionType);
      case QUESTION_TYPES.MULTIPLE_CHOICE:
      case QUESTION_TYPES.ONE_CHOICE:
        return getOptionList(questionType);      
      case QUESTION_TYPES.LONG_ANSWER:
        return <NarrativeQuestion type="long" questionId={questionId} />;
      default:
        return;
    }
  };

  return (
    <Wrapper>    
      <div className="handler" {...provided.dragHandleProps}>
        <img className="drag-icon" src={DragIcon} alt="" />
      </div>  
      <div className="question">
        <input
          className="question-input"
          type="text"
          placeholder="질문"
          value={questionContent}
          onChange={handleQuestionChange}
        />
        <Dropdown questionId={questionId} menus={menus} />
      </div>      
      {getInput()}
      <hr />      
      <div className="settings">
        {/* <img onClick={handleCopyQuestion} src={CopyIcon} alt="copy" /> */}
        <img onClick={handleDeleteQuestion} src={TrashIcon} alt="trash" />
        {/* <div className="switch-label">필수</div> */}
        {/* <Switch className={classes.colorSecondary} checked={isNecessary} onChange={handleSwitch} /> */}
      </div>    
    </Wrapper>
  );
};

