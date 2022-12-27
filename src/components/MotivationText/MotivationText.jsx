import {
  Container,
  LinkStyled,
  Title,
  ButtonStyled,
  ContainerButton,
} from './MotivationText.styled';
import trainingActions from '../../redux/training/trainingActions';
import sprite from '../../images/sprite/sprites.svg';
import { useDispatch } from 'react-redux';

function MotivationText({ onClose }) {
  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(
      trainingActions.addResult({
        statisticDate: new Date(),
        statisticResult: 1,
      }),
    );
  };
  return (
    <Container>
      <LinkStyled>
        <svg width="54" height="54">
          <use href={`${sprite}#icon-like`} />
        </svg>
      </LinkStyled>
      <Title>
        Ти молодчина,
        <br /> але потрібно швидше!
        <br />
        Наступного разу тобі все вдасться)
      </Title>
      <ContainerButton>
        <li>
          <ButtonStyled type="button" autoFocus={true} onClick={onSubmit}>
            Нове тренування
          </ButtonStyled>
        </li>
        <li>
          <ButtonStyled type="button" onClick={onClose}>
            Назад
          </ButtonStyled>
        </li>
      </ContainerButton>
    </Container>
  );
}

export default MotivationText;
