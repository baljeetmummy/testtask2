import React from 'react';
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="NotFound">
            <h3> Sorry, page not found!</h3>
            <Link to='/'> Back to home </Link>
        </div >
    );
}