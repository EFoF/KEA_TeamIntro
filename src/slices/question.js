import { createSlice } from '@reduxjs/toolkit';
import { QUESTION_TYPES } from '../const';
import shortid from 'shortid';



const initialState = [
  {
    id: shortid(),
    type: QUESTION_TYPES.ONE_CHOICE,
    questionContent: '제목없는 질문',
    isNecessary: false,
    options: [
      {
        id: 1,
        option: '옵션 1',
      },
    ],
    answers: [],
    narrativeAnswer: '',    
  },
];

const getNewOption = (newId) => ({
  id: newId,
  option: `옵션 ${newId}`,
});

const { actions: questionActions, reducer: questionReducer } = createSlice({
  name: 'question',
  initialState,
  reducers: {
    changeType: (state, action) => {
      const { id, type } = action.payload;
      const question = state.find((item) => item.id === id);
      question && (question.type = type);
      type===QUESTION_TYPES.TRUE_FALSE ? (question.options = [{id:1,option : 'O'},{id:2, option : 'X'}]) : 
      (question.options = initialState[0].options)
      question && (question.answers = []);
    },

    setNecessary: (state, action) => {
      const id = action.payload;
      const question = state.find((item) => item.id === id);
      question && (question.isNecessary = !question.isNecessary);
    },

    setQuestionContent: (state, action) => {
      const { id, questionContent } = action.payload;
      const question = state.find((item) => item.id === id);
      question && (question.questionContent = questionContent);
    },

    addQuestion: (state, action) => {
      const newQuestion = action.payload;
      state.push(newQuestion);
    },

    deleteQuestion: (state, action) => {
      const id = action.payload;
      return state.filter((item) => item.id !== id);
    },

    addOption: (state, action) => {
      const { id, optionId } = action.payload;
      const questionId = state.findIndex((item) => item.id === String(id));
      state[questionId].options.push(getNewOption(optionId));
    },

    setOptionContent: (state, action) => {
      const { id, optionId, optionContent } = action.payload;
      const questionId = state.findIndex((item) => item.id === String(id));
      const optionIdx = state[questionId].options.findIndex((item) => item.id === Number(optionId));
      state[questionId].options[optionIdx].option = optionContent;
    },

    setNarrativeAnswer: (state, action) => {
      const { id, narrativeContent } = action.payload;
      const questionId = state.findIndex((item) => item.id === String(id));
      state[questionId].narrativeAnswer = narrativeContent;
    },

    markOneAnswer: (state, action) => {
      const { id, optionId, isAnswer } = action.payload;
      const question = state.find((item) => item.id === id);
      if (!question) return;
      question.answers.length > 0 && question.answers.splice(-1, 1); // 한개만 저장하기 위함
      if (!isAnswer) {
        console.log(action.payload);
        question.answers.push(optionId);
      }
    },

    markMultipleAnswer: (state, action) => {
      const { id, optionId, isAnswer } = action.payload;
      const question = state.find((item) => item.id === id);
      if (!question) return;
      const answerIdx = question.answers.findIndex((item) => item === optionId);

      if (!isAnswer) {
        question.answers.push(optionId);
      } else {
        if (answerIdx === 0) question.answers.shift();
        else question.answers.splice(answerIdx, 1);
      }
    },

    resetAnswer: (state) => {
      state.map((item) => {
        item.answers = [];
        item.narrativeAnswer = '';
      });
    },

    reorderQuestion: (state, action) => {
      const { firstIdx, secondIdx } = action.payload;
      const [removed] = state.splice(firstIdx, 1);
      state.splice(secondIdx, 0, removed);
    },
  },
});

export { questionActions };
export default questionReducer;
