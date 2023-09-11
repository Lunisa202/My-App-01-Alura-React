import './App.css';
import { useState } from 'react';
import {v4 as uuid} from 'uuid';
import Formulario from './components/formulario/formulario';
import Header from './components/header/Header';
import MiOrg from './components/MiOrg/MiOrg';
import Equipo from './components/Equipo/Equipo';
import Footer from './components/Footer/Footer';
import hexToRgba from 'hex-to-rgba';
function App() {
  const [mostrarFormulario, actualizarMostrarFormulario]=useState(true);
  const [colaboradores, actualizarColaboradores]=useState([{
    id: uuid(),
    equipo: "DevOps",
    foto: "https://yt3.googleusercontent.com/ytc/AOPolaSva2kONboCUD4CiotJ7RWBpaCD-ZaB6ZC2JkMFpw=s900-c-k-c0x00ffffff-no-rj",
    nombre: "Brais Moure ",
    puesto: "Instructor online Python",
    fav: false
  },
  {
    id: uuid(),
    equipo: "UX y Diseño",
    foto: "data:image/jpeg;base64,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",
    nombre: "Carmen Ansio ",
    puesto: "Diseñadora Frontend UX UI",
    fav:true
  },
  {
    id: uuid(),
    equipo: "Móvil",
    foto: "https://i.pinimg.com/originals/6b/4f/ea/6b4fea104613a46f6d8960765c4d581d.jpg",
    nombre: "Gabriela Rocha ",
    puesto: "Diseñadora UX UI",
    fav:true
  }]);
  const [equipos, actualizarEquipos]=useState([{
      id: uuid(),
      titulo: "Programación",
      colorPrimario: '#57c278',
      colorSecundario: '#d9f7e9'
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: '#82CFFA',
      colorSecundario: '#E8F8FF'
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: '#A6D157',
      colorSecundario: '#F0F8E2'
    },
    {
      id: uuid(),
      titulo: "DevOps",
      colorPrimario: '#E06B69',
      colorSecundario: '#FDE7E8'
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: '#DB6EBF',
      colorSecundario: '#FAE9F5'
    },
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: '#FFBA05',
      colorSecundario: '#FFF5D9'
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: '#FF8A29',
      colorSecundario: '#FFEEDF'
    }
  ]
);
  //usando una funcion para alterar el State y pasarselo a otro componente
  const actualizarColor =(color, id)=>{
    console.log("actualizar: ", id, color);

    const equiposActualizados =equipos.map((equipo)=>{
      if(equipo.id===id){
        equipo.colorPrimario=color;
        equipo.colorSecundario=hexToRgba(equipo.colorPrimario, 0.3);
      }
      return equipo;
    })
    actualizarEquipos(equiposActualizados);
  }

  const cambiarMostrar=()=>{
    actualizarMostrarFormulario(!mostrarFormulario);
  }
  const registrarColaborador =(colaborador)=>{
    console.log("Nuevo colaborador: ", colaborador);
    actualizarColaboradores([...colaboradores, colaborador]);
    console.log("colaboradores: ", colaboradores);
  }
  const eliminarColaboradores=(id)=>{
    console.log("eliminando colaborador", id);
    const nuevosColaboradores= colaboradores.filter((colaborador)=>colaborador.id !==id);
    actualizarColaboradores(nuevosColaboradores);
  }

  const crearEquipo = (nuevoEquipo)=>{
    actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid(), colorSecundario: hexToRgba(nuevoEquipo.colorPrimario, 0.3)}]);
    console.log(equipos);

  }
  const like =(id)=>{
    const colaboradoresActualizados= colaboradores.map((colaborador)=>{
      if(colaborador.id===id){
        colaborador.fav= !colaborador.fav;
      }
      return colaborador;
    });
    actualizarColaboradores(colaboradoresActualizados);
  }
  return (
    <>
      <Header />
      {mostrarFormulario? 
      <Formulario 
        equipos={equipos.map((equipo)=>equipo.titulo)}
        registrarColaborador={registrarColaborador}
        crearEquipo={crearEquipo}
      />: <></>
      }
      
      <MiOrg cambiarMostrar={cambiarMostrar}/>
      { 
        equipos.map((equipo)=>
        <Equipo
          datos={ equipo } 
          key={equipo.titulo}
          colaboradores={colaboradores.filter((colaborador)=>colaborador.equipo ===equipo.titulo)}
          eliminarColaboradores={eliminarColaboradores}
          actualizarColor={actualizarColor}
          like={like}
        />)
      }
      <Footer />
     </>
  )
}

export default App
