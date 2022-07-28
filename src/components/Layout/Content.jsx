import React from "react";
import './Layout.css'
import { Outlet } from "react-router-dom";

export default function Content() {
    return (
        <div className="content">
            <Outlet />
        </div>
    )
}