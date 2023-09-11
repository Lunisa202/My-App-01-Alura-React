import Colaborador from "../Colaborador/Colaborador";
import "./equipo.css";

const Equipo = (props) => {
  const { colorPrimario, colorSecundario, titulo, id } = props.datos;
  const { colaboradores, eliminarColaboradores, actualizarColor, like} = props;
  const estiloBackground = {
    backgroundColor: colorSecundario
  };
  const estiloTitulo = {
    borderColor: colorPrimario,
    marginBottom: "20px",
  };
  return <>
    {colaboradores.length > 0 && 
      <section className="equipo" style={estiloBackground}>
        <input 
          type="color"
          className="input-color"
          value={colorPrimario}
          onChange={(evento )=>actualizarColor(evento.target.value, id)}
          />
        <h3 style={estiloTitulo}>{titulo}</h3>
        <div className="colaboradores">
          {
            colaboradores.map((colaborador, index) => <Colaborador 
                datos={colaborador} 
                key={index} 
                colorPrimario = {colorPrimario}
                eliminarColaborador={eliminarColaboradores}
                like={like}
            />)
            }
        </div>
      </section>
    }
  </>
};
export default Equipo;
