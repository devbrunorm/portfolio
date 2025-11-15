type ButtonProps = {
    text: string;
    href: string;
};

export default function Button({text, href}: ButtonProps) {
    return (
        <a href={href} className="rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-sky-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{text}</a>
    )
};

