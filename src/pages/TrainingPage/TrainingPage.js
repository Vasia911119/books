import Container from '../../components/Container/Container';
import TrainingWrapper from '../../components/Training/TraningWrapper';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useLayoutEffect } from 'react';
import trainingActions from '../../redux/training/trainingActions';
import actions from '../../redux/auth/auth-actions';

import { PageAnimation } from '../../components/PageAnimation/PageAnimation';

const TrainingPage = () => {
  const dispatch = useDispatch();

  const { isLoggedIn, token } = useSelector(state => state.auth);

  useLayoutEffect(() => {
    if (!isLoggedIn && token) {
      dispatch(actions.fetchCurrentUser());
    }
  }, [dispatch, isLoggedIn, token]);

  useEffect(() => {
    dispatch(trainingActions.getCurrTraining());
  }, [dispatch]);

  return (
    isLoggedIn && (
      <PageAnimation>
        <Container>
          <TrainingWrapper />
        </Container>
      </PageAnimation>
    )
  );
};

export default TrainingPage;
