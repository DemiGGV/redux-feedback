import { useDispatch, useSelector } from 'react-redux';
import { ContainerCSS, Button } from '../MainContainer';
import { handleFeedback } from 'components/Redux/feedbackSlice';

export function FeedbackOptions() {
  const dispatch = useDispatch();
  const feedback = useSelector(state => state.feedback);
  return (
    <ContainerCSS>
      {Object.keys(feedback).map((option, index) => (
        <Button
          key={index}
          type="button"
          onClick={() => {
            dispatch(handleFeedback(option));
          }}
        >
          {option}
        </Button>
      ))}
    </ContainerCSS>
  );
}
