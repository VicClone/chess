import React, { useState } from "react";

type TPostion = {
    x: number;
    y: number;
}

export const Pawn = ({x, y}) => {
    const [position, setPosition] = useState<TPostion | null>(null);

    if (!null) {
        setPosition({x, y});
    }

    if () {

    }

    return <div>P</div>;
}