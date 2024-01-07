import CommentItem, { commentShape } from "./commentItem";
import PropTypes from "prop-types";

function CommentsList({ comments, authUser, upVoteComment, downVoteComment }) {
  console.log(comments);
  return (
    <>
      {comments.map((comment) => (
        <CommentItem
          key={comment.id}
          {...comment}
          authUser={authUser}
          upVoteComment={upVoteComment}
          downVoteComment={downVoteComment}
        />
      ))}
    </>
  );
}

CommentsList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape(commentShape)).isRequired,
  authUser: PropTypes.string.isRequired,
  upVoteComment: PropTypes.func.isRequired,
  downVoteComment: PropTypes.func.isRequired,
};

export default CommentsList;
