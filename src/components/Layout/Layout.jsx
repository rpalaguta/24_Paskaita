import React from "react";
import './Layout.css'
import { Outlet } from "react-router-dom";
import NavBar from "../navBar/NavBar";
import Content from "./Content";

export default function Layout() {
    return (
        <div className="layout">
            <NavBar />
            <Content />
        </div>
    )
}