import React from 'react';

function handleSubmit(e:any){
    e.preventDefault();
    console.log("Cheguei aqui");
}

export default function Formulario(){
    return(
        <>
        <h1>Formulário</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" name="email" />
            <button>Enviar</button>
        </form>
        </>
    )
}