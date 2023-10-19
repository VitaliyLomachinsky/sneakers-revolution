import { LiaStarSolid } from "react-icons/lia";

const Stars = (props: { stars: number }) => {
  return (
    <span>
      <LiaStarSolid
        className={props.stars >= 1 ? "score_star star_active" : "score_star"}
      ></LiaStarSolid>
      <LiaStarSolid
        className={props.stars >= 2 ? "score_star star_active" : "score_star"}
      ></LiaStarSolid>
      <LiaStarSolid
        className={props.stars >= 3 ? "score_star star_active" : "score_star"}
      ></LiaStarSolid>
      <LiaStarSolid
        className={props.stars >= 4 ? "score_star star_active" : "score_star"}
      ></LiaStarSolid>
      <LiaStarSolid
        className={props.stars >= 5 ? "score_star star_active" : "score_star"}
      ></LiaStarSolid>
    </span>
  );
};

export default Stars;
