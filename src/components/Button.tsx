type ButtonProps = {
    text: string;
    href: string;
    bgColor?: string;
    iconClass?: string;
    iconPosition?: 'left' | 'right';
};

export default function Button({text, href, bgColor = 'sky', iconClass, iconPosition = 'left'}: ButtonProps) {
    const colorMap: Record<string, string> = {
        sky: 'bg-sky-600 hover:bg-sky-500 focus-visible:outline-indigo-600',
        blue: 'bg-blue-600 hover:bg-blue-500 focus-visible:outline-blue-600',
        indigo: 'bg-indigo-600 hover:bg-indigo-500 focus-visible:outline-indigo-600',
        black: 'bg-gray-900 hover:bg-gray-800 focus-visible:outline-gray-900',
    }

    const colorClasses = colorMap[bgColor] ?? colorMap['sky']

    const icon = iconClass ? <i className={`${iconClass} ${iconPosition === 'left' ? 'mr-2' : 'ml-2'}`} aria-hidden="true"></i> : null

    return (
        <a
            href={href}
            className={`inline-flex items-center justify-center rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 ${colorClasses}`}
        >
            {iconPosition === 'left' && icon}
            {text}
            {iconPosition === 'right' && icon}
        </a>
    )
};

