import React from "react";

function AlertModal(props) {
  return (
    <div
      className={`modal ${props.show ? "show" : ""}`}
      tabIndex="-1"
      role="dialog"
      style={{ display: props.show ? "block" : "none" }}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{props.title}</h5>
            <button
              type="button"
              className="btn-close"
              onClick={props.onClose}
            />
          </div>
          <div className="modal-body">
            <p>{props.message}</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={props.onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlertModal;
