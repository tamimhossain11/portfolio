import { useEffect, useState } from "react";

export function useMediaQuery(query) {
    const [matches, setMatches] = useState(() => window.matchMedia(query).matches);

    useEffect(() => {
        const mql = window.matchMedia(query);
        const onChange = () => setMatches(mql.matches);
        onChange();
        mql.addEventListener("change", onChange);
        return () => mql.removeEventListener("change", onChange);
    }, [query]);

    return matches;
}

export const useFinePointer = () => useMediaQuery("(hover: hover) and (pointer: fine)");

export function useLocalTime(timeZone) {
    const format = () =>
        new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone }).format(new Date());
    const [time, setTime] = useState(format);

    useEffect(() => {
        const id = setInterval(() => setTime(format()), 15000);
        return () => clearInterval(id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [timeZone]);

    return time;
}
