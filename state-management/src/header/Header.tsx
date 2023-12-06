import './Header.css';

type HeaderProps = {
    title: string,
    align?: string,
    fontSize?: string
}

export default function Header({
                                   title,
                                   align = 'text-center',
                                   fontSize = 'fs-2'
                               }: HeaderProps) {
    return (
        <>
            <header className="p-2 border-bottom">
                <h1 className={
                    `${align} ${fontSize} m-0`}>
                    {title}</h1>
            </header>
        </>
    );
}