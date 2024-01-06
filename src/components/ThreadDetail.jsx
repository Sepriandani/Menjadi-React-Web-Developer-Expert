import parse from "html-react-parser";
import UpVoteButton from "./button/UpVoteButton";
import DownVoteButton from "./button/DownVoteButton";
import ShareVoteButton from "./button/ShareVoteButton";
import { postedAt } from "../utils";
import PropTypes from "prop-types";
import { userShape } from "./ThreadItem";

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
    <div className="p-8 my-5 rounded-md shadow-sm border">
      <div className="mb-2 px-3 py-1 ring-1 ring-gray-500 rounded-sm inline-block">
        #{category}
      </div>
      <div className="mb-2 text-2xl font-semibold text-indigo-500">{title}</div>
      <div className="mb-2">{parse(body)}</div>
      <div className="flex gap-4">
        <UpVoteButton
          upVoteBy={upVoteThreadDetail}
          upVotesBy={upVotesBy}
          isThreadUpVote={isThreadUpVote}
          onUpVoteClick={onUpVoteClick}
        />
        <DownVoteButton
          downVoteBy={downVoteThreadDetail}
          downVotesBy={downVotesBy}
          isThreadDownVote={isThreadDownVote}
          onDownVoteClick={onDownVoteClick}
        />
        <ShareVoteButton />
        <div>{postedAt(createdAt)}</div>
        <p>
          Dibuat oleh <strong>{owner.name}</strong>
        </p>
      </div>
      <div className="mt-5">
        <div className="text-lg font-semibold">Beri Komentar</div>
        <div className="my-4">
          <div
            className="border-2 border-gray-700 p-2 mb-4 h-52 rounded-md"
            contentEditable
          ></div>
          <button className="bg-indigo-400 rounded-sm w-full p-2" type="button">
            Kirim
          </button>
        </div>
        <div>
          <div className="text-lg font-semibold">Komentar (0)</div>
        </div>
      </div>
    </div>
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
