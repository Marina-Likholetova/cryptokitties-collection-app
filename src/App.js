import React from "react";
import { Routes, Route } from "react-router-dom";
import FullCard from "./components/FullCard";
import CardList from "./components/CardList";
import Layout from "./Layout";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<CardList />} />
                <Route path=":id" element={<FullCard />} />
            </Route>
        </Routes>
    );
}
