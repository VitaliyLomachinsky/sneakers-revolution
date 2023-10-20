import { AiOutlinePlus } from "react-icons/ai";

const Side_item = () => {
  return (
    <div className="side_item">
      <div className="side_item_header">
        <h2 className="side_item_title">Title</h2>
        <AiOutlinePlus className="side_item_icon" />
      </div>
      <ul className="side_main">
        <li className="side_main_params">
          <input type="checkbox"></input>
          <span className="params_text">41</span>
        </li>
        <li className="side_main_params">
          <input type="checkbox"></input>
          <span className="params_text">41</span>
        </li>
        <li className="side_main_params">
          <input type="checkbox"></input>
          <span className="params_text">42</span>
        </li>
        <li className="side_main_params">
          <input type="checkbox"></input>
          <span className="params_text">43</span>
        </li>
        <li className="side_main_params">
          <input type="checkbox"></input>
          <span className="params_text">44</span>
        </li>
      </ul>
    </div>
  );
};

export default Side_item;
