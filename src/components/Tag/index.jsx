import { Container } from './style';
import PropTypes from 'prop-types';

export function Tag({ title }) {
  return(
    <Container>
      {title}
    </Container>
  )
}

Tag.propTypes = {
    title: PropTypes.string.isRequired,
};
