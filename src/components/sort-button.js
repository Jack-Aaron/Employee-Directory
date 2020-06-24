import React from "react";

function SortBtn(props) {
    return (
        <span className="sort-btn" {...props} role="button" tabIndex="0">
            <span role='img' aria-label='sort-up icon'>&#9195;</span>
        </span>
    );
}

export default SortBtn;