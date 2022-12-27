import ListAlreadyRead from './ListOther/ListAlreadyRead';
import ListOther from './ListOther/ListOther';
import { fetchBooks } from '../../redux/books/books-operations';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Div, DivButton, Button, DivAllButt } from './LibraryList.styled';
import { getBooks } from '../../redux/books/books-selector';
import { Link } from 'react-router-dom';

function LibraryList() {
  const dispatch = useDispatch();
  const onBooks = useSelector(getBooks);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const { reading = [], going = [], already = [] } = onBooks;

  return (
    <Div>
      <ListAlreadyRead text="Прочитано" array={already} />
      <ListOther text="Читаю" array={reading} />
      <ListOther text="Маю намір прочитати" array={going} />
      <DivAllButt>
        {going.length !== 0 && (
          <DivButton margin="28px">
            <Link to="/training" className="button">
              <Button type="button" color="#FFFFFF" backgroundColor="#FF6B08">
                Моє тренування
              </Button>
            </Link>
          </DivButton>
        )}
        {already.length !== 0 && (
          <DivButton margin="0px">
            <Link to="/resume" className="button">
              <Button type="button" color="#FFFFFF" backgroundColor="#FF6B08">
                Мої Резюме
              </Button>
            </Link>
          </DivButton>
        )}
      </DivAllButt>
    </Div>
  );
}

export default LibraryList;
