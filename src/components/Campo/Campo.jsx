import './Campo.css';

const Campo = (props)=>{
    const {tipo="text", actualizarValor, required, valor, placeholder, titulo}=props;
    const manejarCambio=(e)=>{
        actualizarValor(e.target.value);
    }
    return <div className={`campo campo-${tipo}`}>
        <label>{titulo} </label>
        <input 
            type={tipo} 
            placeholder={placeholder} 
            required={required}
            onChange={manejarCambio}
            value={valor}
        />
    </div>
}
export default Campo;