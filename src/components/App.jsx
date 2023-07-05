import { MainContainer } from './MainContainer';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { useSelector } from 'react-redux';

export const App = () => {
  const { good, bad, neutral } = useSelector(state => state.feedback);
  return (
    <MainContainer>
      <Section title="Please leave feedback">
        <FeedbackOptions />
      </Section>
      <Section title="Statistics">
        {good || bad || neutral ? (
          <Statistics />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </MainContainer>
  );
};
