import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { useState, useEffect } from "react"

export default function ExampleFour(){
    const [number, setNumber] = useState(0);
    const [color, setColor] = useState("gray");

    const [trigger, setTrigger] = useSate(false);

    const HandleChange = () => {
        if(number > 2) {
            setColor("orange");
        }
        console.log(number);
    }

    useEffect(() => {
        var interval;

        if(trigger) {
            interval = setInterval (() => {
                HandleChange()
                setTrigger(false);
            }, 3000) // After 3 seconds then it will do the console log below
        }
        console.log(number);
        console.log(trigger);

        
    })
    return(
        <>
        
        </>
    )
}