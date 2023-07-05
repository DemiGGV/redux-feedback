export const handleFeedback = val => {
  return {
    type: `feedback/${val}`,
    payload: val,
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
        [action.payload]: ++state.good,
      };
    case 'feedback/neutral':
      return {
        ...state,
        [action.payload]: ++state.neutral,
      };
    case 'feedback/bad':
      return {
        ...state,
        [action.payload]: ++state.bad,
      };
    default:
      return state;
  }
};
