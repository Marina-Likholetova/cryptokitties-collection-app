import React from "react";
import { IoArrowUpCircleOutline } from "react-icons/io5";
import useScrollTop from "../hooks/useScrollTop";



export default function ScrollTop() {
    const { showTopBtn, goToTop } = useScrollTop();

    return (
        <div className="top-to-btn">
            {showTopBtn && <IoArrowUpCircleOutline className="top-to-icon" onClick={goToTop} />}
        </div>
    );
}
