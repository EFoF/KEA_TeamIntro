import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { useStyles, Wrapper } from './style';
import { ThemeProvider, unstable_createMuiStrictModeTheme } from '@material-ui/core';
import { questionActions } from '../../slices';
import { useDispatch,useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';




export default function Dropdown({ questionId, menus, isAnswer }) {
  
  const classes = useStyles();
  const dispatch = useDispatch();
  const theme = unstable_createMuiStrictModeTheme();

  const location = useLocation();
  const isPreview = location.pathname === '/preview';
  const isResult = location.pathname === '/result';

  const { questions } = useSelector((state) => state.form);
  const question = questions.find((item) => item.id === questionId);
  if (!question) return null;
  const { type: questionType, answers } = question;
  const selectedAnswer = answers.length > 0 ? answers[0] : '';

  const handleTypeChange = (e) => {
  
    dispatch(questionActions.changeType({ id: questionId, type: e.target.value }));
  };

  const handleAnswerChange = (e) => {
    dispatch(questionActions.markOneAnswer({ id: questionId, optionId: e.target.value, isAnswer }));
  };

  const showValue = () => {
    if (isPreview || isResult) return selectedAnswer;
    else return questionType;
  };

  return (
    <Wrapper>
      <ThemeProvider theme={theme}>
        <Select
          className={classes.root}
          disableUnderline
          disabled={isResult ? true : false}
          value={showValue()}
          onChange={isPreview ? handleAnswerChange : handleTypeChange}
        >
          {menus.map((menu) => (
            <MenuItem key={menu.id} value={menu.id} className={classes.menu}>
              <div className="menu-content">{menu.option}</div>
            </MenuItem>
          ))}
        </Select>
      </ThemeProvider>
    </Wrapper>
  );
};
