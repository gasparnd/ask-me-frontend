import { QuestionCard } from "../QuestionCard";
import QuestionsMock from "../../../mocks/questions.json";

export const QuestionList = () => {
  return (
    <ul>
      {QuestionsMock.questions.map((question, index) => (
        <li key={index}>
          <QuestionCard question={question} />
        </li>
      ))}
    </ul>
  );
};
