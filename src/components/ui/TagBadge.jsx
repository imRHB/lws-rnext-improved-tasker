/* eslint-disable react/prop-types */

const COLORS = [
    "#00D991A1",
    "#1C92FFB0",
    "#FE1A1AB5",
    "#BD560BB2",
    "#00B2D9CC",
    "#8407E6A8",
    "#07AC67D6",
    "#2F43F8BF",
    "#AE6D0BDB",
    "#10FBEDB2",
];

export default function TagBadge({ tag }) {
    const idx = Math.floor(Math.random() * COLORS.length);
    const bgColor = COLORS[idx];

    return (
        <li>
            <span
                style={{
                    backgroundColor: `${bgColor}` || "",
                }}
                className="inline-block h-5 whitespace-nowrap rounded-[45px] px-2.5 text-sm capitalize text-[#F4F5F6]"
            >
                {tag}
            </span>
        </li>
    );
}
