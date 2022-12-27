import { useState } from 'react';
import { useSelector } from 'react-redux';
import Responsive from 'react-responsive';
import TrainingForm from './TrainingForm/TrainingForm';
import TrainingList from './TrainingList/TrainingList';
import MyGoal from '../MyGoal/MyGoal';
import LineChart from '../LineChart/LineChart';
import TrainingOpenModalButton from './TrainingOpenModalButton/TrainingOpenModalButton';
import TrainingModal from './TrainingModal/TrainingModal';
import Result from '../Result/Result';
import StartTrainingBtn from '../StartTrainingBtn/StartTrainingBtn';
import {
  TrainingWrapperStyled,
  TrainingWrapperStyledUpperPart,
  TrainingWrapperTrainingInfo,
  ResultBlock,
} from './TrainingWrapper.styled';
import Timers from '../Timers/Timers';

const TrainingWrapper = () => {
  const Mobile = props => <Responsive {...props} maxWidth={767} />;

  const Tablet = props => (
    <Responsive {...props} minWidth={768} maxWidth={1279} />
  );

  const Desktop = props => <Responsive {...props} minWidth={1280} />;

  const [isTrainingModalShown, setTrainingModalShown] = useState(false);
  const openModal = () => {
    setTrainingModalShown(!isTrainingModalShown);
  };
  const isStarted = useSelector(state => state.training.isStarted);
  return (
    <TrainingWrapperStyled>
      <Mobile>
        {isStarted ? (
          <>
            <Timers />
            <MyGoal />
            <TrainingList />
            <LineChart />
            <Result />
          </>
        ) : (
          <>
            <MyGoal />
            <TrainingList />
            <StartTrainingBtn />
            <LineChart />
            <TrainingOpenModalButton openModal={openModal} />
            <TrainingModal
              isTrainingModalShown={isTrainingModalShown}
              setTrainingModalShown={setTrainingModalShown}
            />
          </>
        )}
      </Mobile>
      <Tablet>
        {isStarted ? (
          <>
            <Timers />
            <MyGoal />
            <TrainingList />
            <StartTrainingBtn />
            <LineChart />
            <Result />
          </>
        ) : (
          <>
            <MyGoal />
            <TrainingForm />
            <TrainingList />
            <StartTrainingBtn />
            <LineChart />
          </>
        )}
      </Tablet>
      <Desktop>
        {isStarted ? (
          <>
            <TrainingWrapperStyledUpperPart>
              <TrainingWrapperTrainingInfo>
                <TrainingForm />
                <TrainingList />
                <StartTrainingBtn />
              </TrainingWrapperTrainingInfo>
              <MyGoal />
            </TrainingWrapperStyledUpperPart>
            <ResultBlock>
              <LineChart />
              <Result />
            </ResultBlock>
          </>
        ) : (
          <>
            <TrainingWrapperStyledUpperPart>
              <TrainingWrapperTrainingInfo>
                <TrainingForm />
                <TrainingList />
                <StartTrainingBtn />
              </TrainingWrapperTrainingInfo>
              <MyGoal />
            </TrainingWrapperStyledUpperPart>

            <ResultBlock>
              <LineChart />
            </ResultBlock>
          </>
        )}
      </Desktop>
    </TrainingWrapperStyled>
  );
};

export default TrainingWrapper;
