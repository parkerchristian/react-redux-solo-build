import { connect } from 'react-redux';
import Comments from '../components/comments/Comments';
import { getComments } from '../selectors/commentSelectors';

const mapStateToProps = (state, { postID }) => ({
  comments: getComments(state, postID)
});

export default connect(
  mapStateToProps,
  null
)(Comments);
