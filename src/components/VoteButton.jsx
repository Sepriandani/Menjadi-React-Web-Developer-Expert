import PropTypes from "prop-types";

function VoteButton({ voteBy, votesBy, onVoteClick, icon }) {
  return (
    <div className="flex items-center gap-1">
      {voteBy && (
        <>
          <button className="text-lg" type="button" onClick={onVoteClick}>
            {icon}
          </button>
          <div>{votesBy.length}</div>
        </>
      )}
    </div>
  );
}

VoteButton.propTypes = {
  voteBy: PropTypes.bool,
  votesBy: PropTypes.array,
  onVoteClick: PropTypes.func.isRequired,
  icon: PropTypes.any.isRequired,
};

export default VoteButton;
