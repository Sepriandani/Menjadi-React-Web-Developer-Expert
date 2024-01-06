import { BiLike, BiSolidLike } from "react-icons/bi";
import PropTypes from "prop-types";

function UpVoteButton({ upVoteBy, upVotesBy, isThreadUpVote, onUpVoteClick }) {
  return (
    <div className="flex items-center gap-1">
      {upVoteBy && (
        <>
          <button className="text-lg" type="button" onClick={onUpVoteClick}>
            {isThreadUpVote ? <BiSolidLike /> : <BiLike />}
          </button>
          <div>{upVotesBy.length}</div>
        </>
      )}
    </div>
  );
}

UpVoteButton.propTypes = {
  upVoteBy: PropTypes.bool,
  upVotesBy: PropTypes.array,
  isThreadUpVote: PropTypes.bool,
  onUpVoteClick: PropTypes.func.isRequired,
};

export default UpVoteButton;
