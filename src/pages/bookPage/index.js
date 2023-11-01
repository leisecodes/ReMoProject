import React from "react";
import UnreadBook from "./unreadBook";
import ReadBook from "./readBook";

function BookPage() {
    return (
        <div>
        <ReadBook/>
        <UnreadBook/>
        </div>
    );
};

export default BookPage;