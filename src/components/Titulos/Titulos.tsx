import React from 'react'

export default function Titulo(props:any) {
    return <h1>{ props.layout } - { props.children }</h1>
}