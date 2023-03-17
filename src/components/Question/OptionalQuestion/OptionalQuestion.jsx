import { Radio, Checkbox } from '@material-ui/core';
import { Wrapper, useStyles } from './style';
import { QUESTION_TYPES } from '../../../const';
import { useDispatch } from 'react-redux';
import { questionActions } from '../../../slices';
import { useLocation } from 'react-router-dom';
import React from 'react'

export default function OptionalQuestion({ type, optionId, questionId, optionContent, isLast, isAnswer }) {

  const classes = useStyles();
  const dispatch = useDispatch();
  const location = useLocation();
  const isPreview = location.pathname === '/preview';
  const isResult = location.pathname === '/result';

  const handleAddOption = () => {
    isLast && dispatch(questionActions.addOption({ id: questionId, optionId }));
  };

  const handleContentChange = (e) => {
    dispatch(questionActions.setOptionContent({ id: questionId, optionId, optionContent: e.target.value }));
  };

  const isChecked = () => {
    console.log(location.pathname)
    if (isPreview || isResult) return isAnswer;
    else return false;
  };

  const isDisabled = () => {
    if (isResult) return true;
    else return false;
  };

  const showOptionButton = () => {
    switch (type) {
      case QUESTION_TYPES.ONE_CHOICE:
        return (
          <Radio
            classes={{ root: classes.root, checked: classes.checked }}
            disabled={isDisabled()}
            onClick={() => dispatch(questionActions.markOneAnswer({ id: questionId, optionId, isAnswer }))}
            value={String(optionId)}
            checked={isChecked()}
          />
        );
        case QUESTION_TYPES.MULTIPLE_CHOICE:
        return (
          <Checkbox
            classes={{ root: classes.root, checked: classes.checked }}
            disabled={isDisabled()}
            onChange={() => dispatch(questionActions.markMultipleAnswer({ id: questionId, optionId, isAnswer }))}
            value={String(optionId)}
            checked={isChecked()}
          />
        );
        case QUESTION_TYPES.TRUE_FALSE:
        return (
          <Radio
            classes={{ root: classes.root, checked: classes.checked }}
            disabled={isDisabled()}
            onClick={() => dispatch(questionActions.markOneAnswer({ id: questionId, optionId, isAnswer }))}
            value={String(optionId)}
            checked={isChecked()}
          />
        )
      default:
        return;
    }
  };

  return (
    <Wrapper isLast={isLast}>
      {showOptionButton()}
      {type === QUESTION_TYPES.TRUE_FALSE || isPreview || isResult ? (
        <div className="preview-option">{optionContent}</div>
      ) : (
        <input type="text" value={optionContent} onChange={handleContentChange} onClick={handleAddOption} />
      )}
    </Wrapper>
  );

}


