import { useEffect, useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function ExampleOne() {
    const [number, setNumber] = useState(0);

    /** Usually this would cause an infinit loop so it is 
     * best to not do this incase your code breaks
     * code on pages
     *  */ 
    useEffect(() => {
        console.log(number);
    })

    return(
        <>
            <Header/>
            <main>
                <h1>Example 1</h1>
                <div>Infinit loop</div>
                {number}
            </main>
            <Footer/>
        </>
    )
}