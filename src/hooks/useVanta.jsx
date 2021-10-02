import {useRef, useEffect, useState} from 'react'
import Clouds from 'vanta/dist/vanta.clouds.min'
import * as THREE from 'three'
 
const useVanta = () => {

    const myRefDiv = useRef(null)
    const [vanta, setVanta] = useState(0)
    console.log("myRefDiv.current: ", myRefDiv.current)
    
    useEffect(() => {
        console.log("myRefDiv.current: (en useEffect)", myRefDiv.current)  
        
        if(!vanta){
            setVanta(Clouds({
                THREE,
                el : myRefDiv.current
            }))           

            console.log("Establezco vanta a un valor diferente de 0")
        }

        return () => {
           
            if(vanta) {
                vanta.destroy()
                console.log("libero los recursos")
            }

        }

    }, [vanta])

    return myRefDiv
}

export default useVanta