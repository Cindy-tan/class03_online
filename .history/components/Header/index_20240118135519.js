import Link from "next/"
export default function Header() {
    return(
        <header>
            <h1>Header here</h1>
            <Link href='/'>Home</Link>
        </header>
    )
}