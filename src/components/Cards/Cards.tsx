import React from 'react'
import { Card } from './style'

export default function Cards(props:any){
    return(
        <>
            Daniel
            <Card>
                {props.children}
            </Card>
        </>
    )
}