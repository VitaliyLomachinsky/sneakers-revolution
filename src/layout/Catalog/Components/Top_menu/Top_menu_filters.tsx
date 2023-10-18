import { AiOutlineClose } from "react-icons/ai";

const Top_menu_filters = () => {
  const filters: string[] = ["41", "black", "grey", "black"];
  return (
    <div className="top-menu_filters">
      {filters.length > 1 ? (
        <div className="filters_item_inner">
          <div className="filters_item bold">
            Delete all
            <AiOutlineClose className="filters_item_delete"></AiOutlineClose>
          </div>
        </div>
      ) : (
        <></>
      )}
      {filters.map((filter) => (
        <div className="filters_item_inner">
          <div className="filters_item">
            {filter}
            <AiOutlineClose className="filters_item_delete"></AiOutlineClose>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Top_menu_filters;
