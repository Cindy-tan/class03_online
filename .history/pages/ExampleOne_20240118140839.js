import { useEffect, useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function ExampleOne() {
    const [number, setNumber] = useState(0);

    useEffect(() => {
        
    })

    return(
        <>
            <Header/>
            <main>
                <h1>Example 1</h1>
                <div>Infinit loop</div>
            </main>
            <Footer/>
        </>
    )
}