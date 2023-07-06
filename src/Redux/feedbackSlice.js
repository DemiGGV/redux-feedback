export const handleFeedback = val => {
  return {
    type: `feedback/${val}`,
  };
};

export const feedbackReduser = (
  state = {
    good: 0,
    bad: 0,
    neutral: 0,
  },
  action
) => {
  switch (action.type) {
    case 'feedback/good':
      return {
        ...state,
        good: state.good + 1,
      };
    case 'feedback/neutral':
      return {
        ...state,
        neutral: state.neutral + 1,
      };
    case 'feedback/bad':
      return {
        ...state,
        bad: state.bad + 1,
      };
    default:
      return state;
  }
};
