import { HiOutlineHeart, HiMiniHeart } from "react-icons/hi2";

const Follow = (props: { status: boolean }) => {
  return (
    <div className="item_follow">
      {props.status ? (
        <HiMiniHeart className="follow_icon" />
      ) : (
        <HiOutlineHeart className="follow_icon" />
      )}
    </div>
  );
};

export default Follow;
