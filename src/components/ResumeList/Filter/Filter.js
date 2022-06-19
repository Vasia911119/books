import { Div, DivInput, Input, Label, InputCheckbox } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { booksSelectors } from '../../../redux/books/';
import { useState } from 'react';
import {
  changeFilterTitle,
  changeFilterRating,
  chackboxRaview,
} from '../../../redux/books/books-actions';

function Filter() {
  const { getFilterRating, getFilterTitle, getchackboxRaview } = booksSelectors;
  const valueFilterRating = useSelector(getFilterRating);
  const valueFilterTitle = useSelector(getFilterTitle);
  const valueCheckbox = useSelector(getchackboxRaview);

  const dispatch = useDispatch();
  const [x, setX] = useState(true);
  const soldCheckbox = ({ target: { checked } }) => {
    console.log(checked);
    setX(checked);
    dispatch(chackboxRaview(checked));
  };
  return (
    <Div>
      <DivInput>
        <Label>Введіть назву книги</Label>
        <Input
          type="text"
          value={valueFilterTitle}
          onChange={e => dispatch(changeFilterTitle(e.target.value))}
          placeholder="Ім'я книги"
        ></Input>
      </DivInput>
      <DivInput>
        <Label>Резюме</Label>
        <InputCheckbox
          id="check"
          value={valueCheckbox}
          type="checkbox"
          checked={x}
          onChange={soldCheckbox}
        ></InputCheckbox>
      </DivInput>
      <DivInput>
        <Label>Рейтинг</Label>
        <Input
          type="text"
          value={valueFilterRating}
          onChange={e => dispatch(changeFilterRating(e.target.value))}
          placeholder="рейтинг"
          pattern="/^[^-\s=]([0-9])/"
        ></Input>
      </DivInput>
    </Div>
  );
}

export default Filter;