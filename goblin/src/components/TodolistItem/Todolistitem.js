import React from "react";
import "./Todolistitem.css";

const Todolistitem = ({
  label,
  status,
  onToggleStatus,
  onToggleDone,
  done,
  onDeleted,
}) => {
  let classNames = "todolistitem";

  if (done) {
    classNames += " done";
  }

  if (status) {
    classNames += " status";
  }

  return (
    <span className={classNames}>
      <span className="todolistitem-label" onClick={onToggleDone}>
        {label}
      </span>
      <div>
        <button
          type="button"
          className="btn btn-outline-success btn-sm"
          onClick={onToggleStatus}
        >
          <i className="fa fa-exclamation"></i>{" "}
        </button>

        <button
          type="button"
          className="btn btn-outline-danger btn-sm"
          onClick={onDeleted}
        >
          <i className="fa fa-trash-o"></i>
        </button>
      </div>
    </span>
  );
};
export default Todolistitem;
