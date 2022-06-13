// import Icons from '../../../images/sprite/sprites.svg';
import { ReactComponent as DeleteIcon } from '../../../images/icons/training/deleteIcon.svg';
import {
  TrainingListItemStyled,
  BookIconStyled,
  TrainingListItemTitle,
  TrainingListItemAuthor,
  TrainingListItemYear,
  TrainingListItemPages,
  DeleteButton,
} from './TrainingListItem.styled';

const TrainingListItem = () => {
  return (
    <TrainingListItemStyled>
      <BookIconStyled />
      <TrainingListItemTitle>Заповіт</TrainingListItemTitle>
      <TrainingListItemAuthor>Тарас Шевченко</TrainingListItemAuthor>
      <TrainingListItemYear>1859</TrainingListItemYear>
      <TrainingListItemPages>320</TrainingListItemPages>

      <DeleteButton type="button">
        <DeleteIcon />
      </DeleteButton>
    </TrainingListItemStyled>
  );
};

export default TrainingListItem;