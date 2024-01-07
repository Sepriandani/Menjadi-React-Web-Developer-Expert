import parse from "html-react-parser";
import ShareVoteButton from "./ShareVoteButton";
import { postedAt } from "../utils";
import PropTypes from "prop-types";
import { userShape } from "./ThreadItem";
import VoteButton from "./VoteButton";
import { BiDislike, BiLike, BiSolidDislike, BiSolidLike } from "react-icons/bi";

function ThreadDetail({
  id,
  title,
  body,
  category,
  createdAt,
  upVotesBy,
  downVotesBy,
  upVoteThreadDetail,
  downVoteThreadDetail,
  neutralizeVoteThreadDetail,
  owner,
  authUser,
}) {
  const isThreadUpVote = upVotesBy.includes(authUser);
  const isThreadDownVote = downVotesBy.includes(authUser);

  const onUpVoteClick = (event) => {
    event.stopPropagation();
    upVoteThreadDetail(id);
  };

  const onDownVoteClick = (event) => {
    event.stopPropagation();
    downVoteThreadDetail(id);
  };

  return (
    <>
      <div className="mb-2 px-3 py-1 ring-1 ring-gray-500 rounded-sm inline-block">
        #{category}
      </div>
      <div className="mb-2 text-2xl font-semibold text-indigo-500">{title}</div>
      <div className="mb-2">{parse(body)}</div>
      <div className="flex gap-4">
        <VoteButton
          voteBy={upVoteThreadDetail}
          votesBy={upVotesBy}
          onVoteClick={onUpVoteClick}
          icon={isThreadUpVote ? <BiSolidLike /> : <BiLike />}
        />
        <VoteButton
          voteBy={downVoteThreadDetail}
          votesBy={downVotesBy}
          onVoteClick={onDownVoteClick}
          icon={isThreadDownVote ? <BiSolidDislike /> : <BiDislike />}
        />
        <ShareVoteButton />
        <div>{postedAt(createdAt)}</div>
        <p>
          Dibuat oleh <strong>{owner.name}</strong>
        </p>
      </div>
    </>
  );
}

ThreadDetail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  upVoteThreadDetail: PropTypes.func.isRequired,
  downVoteThreadDetail: PropTypes.func.isRequired,
  neutralizeVoteThreadDetail: PropTypes.func.isRequired,
  owner: PropTypes.shape(userShape),
  authUser: PropTypes.string.isRequired,
};

export default ThreadDetail;
