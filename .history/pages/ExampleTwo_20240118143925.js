import Footer from "@/components/Footer"
import { useEfect } from "react"


export default function ExampleTwo(){

    useEffect(() => {
        console.log("RUN");
    },)

    return(
        <>
            <Header/>
            <main>
                <h1>Example 2</h1>
            </main>
            <Footer/>
        </>
    )
}