import { useState, useEffect } from "react";

const useResponsiveHeight = (
    defaultHeight = 250,
    smallHeight = 210,
    breakpoint = 1025
) => {
    const [height, setHeight] = useState(defaultHeight);

    useEffect(() => {
        const updateHeight = () => {
            setHeight(
                window.innerWidth < breakpoint ? smallHeight : defaultHeight
            );
        };
        updateHeight();
        window.addEventListener("resize", updateHeight);

        return () => window.removeEventListener("resize", updateHeight);
    }, [defaultHeight, smallHeight, breakpoint]);

    return height;
};

export default useResponsiveHeight;
