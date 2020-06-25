import React from "react";

function SortBtn(props) {

    return (
        <span
            {...props}
            className="sort-btn"
            role="img"
            tabIndex="0"
            aria-label='sort-up icon'
            style={{ color: '#394C56' }}
        >
            &nbsp;&#8645;
        </span>
    );
}

export default SortBtn;
