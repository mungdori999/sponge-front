import { useNavigate, useParams } from "react-router-dom";
import Header from "../component/Header/Header";
import routerUrl from "../data/router-url";
import BackButton from "../component/common/BackButton";
import LoginButton from "../component/Header/LoginButton";
import Post from "../component/PostList/Post";
import Answer from "../component/PostList/Answer";
import AnswerHeader from "../component/PostList/AnswerHeader";

const PostPage = () => {
  const nav = useNavigate();
  const { postId } = useParams();
  const post = {
    title: "제가 없을 때 아이가 계속 짖어요",
    content:
      "안녕하세요, 제가 외출할 때마다 제 강아지가 계속 짖는 문제가 있습니다. 이 문제를 해결할 수 있는 방법이 있을까요? 제가 집에 없을 때 아이가 불안해하는 것 같아서 걱정입니다. 훈련사님들의 조언을 부탁드립니다.",
    postCategoryList: ["훈련", "짖음", "분리불안"],
    tagList: ["훈련", "짖음", "분리불안"],
  };
  const pet = {
    name: "바둑이",
    gender: "수컷",
    breed: "믹스견",
    weight: "5",
    age: "3살",
  };
  const trainer = {
    name: "강훈련",
    adoptCount: 54,
    chatCount: 12,
  };
  const answer = {
    content:
      "안녕하세요! 강아지가 외출 시 짖는 문제는 흔한 현상입니다. 이 문제를 해결하기 위해서는 몇 가지 방법이 있습니다. 우선, 강아지가 불안해하지 않도록 집에서 편안한 환경을 만들어주는 것이 중요합니다. 또한, 외출 전에 충분한 운동을 시켜주면 도움이 될 수 있습니다. 훈련사와 상담하여 구체적인 훈련 방법을 배우는 것도 좋은 방법입니다.",
    likeCount: 12,
  };
  return (
    <div className="PostPage">
      <Header
        leftchild={<BackButton />}
        rightchild={
          <LoginButton
            text={"로그인/가입"}
            onClick={() => nav(routerUrl.login)}
          />
        }
      />
      <Post post={post} pet={pet} />
      <AnswerHeader />
      <Answer trainer={trainer} answer={answer} />
    </div>
  );
};

export default PostPage;
