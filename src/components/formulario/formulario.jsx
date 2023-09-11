import './formulario.css';
import { useState } from 'react';
import ListaOpciones from '../ListaOpciones/ListaOpciones';
import Boton from '../Boton/Boton'; 
import Campo from '../Campo/Campo';
const Formulario = (props) =>{
    const [nombre, actualizarNombre]=useState("");
    const [puesto, actualizarPuesto]=useState("");
    const [foto, actualizarFoto]=useState("");
    const [equipo, actualizarEquipo]=useState("");
    const [titulo, actualizarTitulo]=useState("");
    const [color, actualizarColor]=useState("");
    const {registrarColaborador, crearEquipo} =props;
    const manejarEnvio =(e)=>{
        e.preventDefault();
        let datosAEnviar={
            nombre,
            puesto,
            foto,
            equipo,
        }
        registrarColaborador(datosAEnviar);
    }
    const manejarNuevoEquipo =(e)=>{
        e.preventDefault();
        crearEquipo({titulo, colorPrimario: color});
    }
    return <section className='formulario'>
        <form onSubmit={manejarEnvio}>
            <h2>Rellena formulario para crear el colaborador</h2>
            <Campo 
                titulo="Nombre" 
                tipo="text"
                placeholder="Ingrese el nombre" 
                required={true} 
                valor={nombre} 
                actualizarValor={actualizarNombre} />
            <Campo 
                titulo="Puesto" 
                tipo="text"
                placeholder="Ingrese el puesto" 
                required={true} valor={puesto} 
                actualizarValor={actualizarPuesto} />
            <Campo 
                titulo="Foto" 
                tipo="text"
                placeholder="Ingrese su foto" 
                valor={foto} 
                actualizarValor={actualizarFoto} />
            <ListaOpciones 
                valor={equipo} 
                actualizarEquipo={actualizarEquipo}
                equipos={props.equipos}
                />
            <Boton>Crear</Boton>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena formulario para crear el Equipo</h2>
            <Campo 
                titulo="Titulo" 
                placeholder="Ingrese el titulo" 
                tipo="text"
                required={true} 
                valor={titulo} 
                actualizarValor={actualizarTitulo} />
            <Campo 
                titulo="Color" 
                tipo="color"
                placeholder="Ingrese el color" 
                required={true} 
                valor={color} 
                actualizarValor={actualizarColor} />
             <Boton>Registrar Equipo</Boton>

        </form>
    </section>
}
export default Formulario;