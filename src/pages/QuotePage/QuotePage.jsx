import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { PageAnimation } from '../../components/PageAnimation/PageAnimation';
import QuoteSection from '../../components/QuoteSection/QuoteSection';
import queryString from 'query-string';
import actions from '../../redux/auth/auth-actions';

const QuotePage = () => {
  const { isLoggedIn } = useSelector(state => state.auth);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  let {
    token = null,
    email = null,
    name = null,
  } = queryString.parse(location.search);

  useEffect(() => {
    if (token && email && name) {
      dispatch(actions.loginG({ token, email, name }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    isLoggedIn && navigate((location.pathname = '/library'));
  });

  return (
    !isLoggedIn && (
      <PageAnimation>
        <QuoteSection />
      </PageAnimation>
    )
  );
};

export default QuotePage;
