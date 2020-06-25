import React from "react";

function SortBtn(props) {

    return (
        <span className="sort-btn" {...props}
            role="img" tabIndex="0" aria-label='sort-up icon'>
            &nbsp;&#8645;
        </span>
    );
}

export default SortBtn;
