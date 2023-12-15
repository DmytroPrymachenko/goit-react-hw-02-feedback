import { Feedback } from './feedback/feedback.jsx';
import { FeedbackDiv } from './feedback/feedback_Staled.jsx';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <FeedbackDiv>
        {/* <Button></Button> */}
        <Feedback></Feedback>
      </FeedbackDiv>
    </div>
  );
};
