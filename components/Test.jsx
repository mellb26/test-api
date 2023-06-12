import { useEffect, useState } from 'react'
import fetchTest from '../utils/api' 
const Test = () => {
 
    useEffect(() => {
        fetchTest().then((data) => {
           console.log(data, 'hi') 
        })
        
    }, [])
    
}
export default Test