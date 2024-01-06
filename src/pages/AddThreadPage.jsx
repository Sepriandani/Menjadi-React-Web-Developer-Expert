import { useDispatch } from "react-redux";
import ThreadInput from "../components/ThreadInput";
import { useNavigate } from "react-router-dom";
import { asyncAddThread } from "../states/threads/action";
import useInput from "../hooks/useInput";

function AddThreadPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, onTitleChange] = useInput("");
  const [category, onCategoryChange] = useInput("");
  const [body, onBodyChange] = useInput("");

  function onAddThread() {
    dispatch(asyncAddThread({ title, category, body }));
    navigate("/");
  }

  return (
    <ThreadInput
      title={title}
      onTitleChange={onTitleChange}
      category={category}
      onCategoryChange={onCategoryChange}
      body={body}
      onBodyChange={onBodyChange}
      addThread={onAddThread}
    />
  );
}

export default AddThreadPage;
