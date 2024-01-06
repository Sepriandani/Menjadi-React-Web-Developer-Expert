import { BiDislike, BiSolidDislike } from "react-icons/bi";
import PropTypes from "prop-types";

function DownVoteButton({
  downVoteBy,
  downVotesBy,
  isThreadDownVote,
  onDownVoteClick,
}) {
  return (
    <div className="flex items-center gap-1">
      {downVoteBy && (
        <>
          <button className="text-lg" type="button" onClick={onDownVoteClick}>
            {isThreadDownVote ? <BiSolidDislike /> : <BiDislike />}
          </button>
          <div>{downVotesBy.length}</div>
        </>
      )}
    </div>
  );
}

DownVoteButton.propTypes = {
  downVoteBy: PropTypes.bool,
  downVotesBy: PropTypes.func.isRequired,
  isThreadDownVote: PropTypes.bool,
  onDownVoteClick: PropTypes.func.isRequired,
};

export default DownVoteButton;
