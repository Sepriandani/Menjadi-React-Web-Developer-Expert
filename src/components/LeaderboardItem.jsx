import PropTypes from "prop-types";

function LeaderboardItem({ user, score }) {
  return (
    <div className="flex justify-between mb-3">
      <div className="flex items-center gap-4">
        <img
          className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
          src={user.avatar}
          alt="Avatar"
        ></img>
        <p>{user.name}</p>
      </div>
      <p>{score}</p>
    </div>
  );
}

LeaderboardItem.propTypes = {
  user: PropTypes.object.isRequired,
  score: PropTypes.number.isRequired,
};

export default LeaderboardItem;
