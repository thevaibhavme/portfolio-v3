"use client";
import { useTheme } from "next-themes";

export function ToggleTheme(){

    const { resolvedTheme, setTheme } = useTheme()

    return (
        <button
            onClick={() => {
                setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
            }}>
            Change Theme
        </button>
    );
}