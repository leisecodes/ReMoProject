import React from "react";
import PgHeader from "./pgHeader";
import BookInfo from "./bookInfo";

import BaseShade from "./baseShade";


function UnreadBook() {
    return (
        <div>
            <PgHeader/>            
            <BookInfo/>
            <BaseShade/>
        </div>
    )
}

export default UnreadBook;