import React, {useEffect, useState} from "react"

const CrudForm = ({addProducto, editProducto, editData}) => {

    useEffect(()=>{
        if (editData !== null){
            setFormData(editData)
        }else{
            setFormData({
                nombre:'',
                precio:0,
                cantidad:0,
                id:null
            })
        }
    }, [editData])

    /* VARIABLE DE ESTADO QUE VA CAMBIANDO SEGUN LOS INPUTS*/
    const [formData, setFormData] = useState({
        nombre:'',
        precio:0,
        cantidad:0,
        id:null
    })

    /* CONTROLAR EL CAMBIO DE LA VARIABLE DE ESTADO */ 
    const handleChange = (e) =>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
        console.log(formData)
    }

    const handleSubmit = (e) => {
        e.preventDefault(); /* EVITA QUE LA PAGINA SE RECARGUE CUANDO OCURRA EL EVENTO DE CLICKEAR SUBMIT*/
        if (formData.nombre !== '' && formData.precio >=0 && formData.cantidad >= 0) {
            if (editData !== null){
                editProducto(formData)
            }else{
                formData.id = Date.now()
                addProducto(formData)
                setFormData({
                    nombre:'',
                    precio:0,
                    cantidad:0,
                    id:null
                })
            }
        } else {
          alert("Ingresar datos validos")
        }
    }


    return <>
        <div class="p-0 container bg-light.bg-gradient">
            <form className="m-0 mt-4 mb-4 p-3 bg-secondary-subtle border border-black rounded-pill" onSubmit={handleSubmit}> {/* CREAMOS ESTA FUNCION handleSubmit para manejar que hacemos cuando clickeamos el boton Submit*/}
                <label htmlFor="nombre">Nombre: </label>
                <input type="text" name="nombre" onChange={handleChange} value={formData.nombre}/>
                <label htmlFor="precio">Precio: </label>
                <input type="number" name="precio" onChange={handleChange} value={formData.precio}/>
                <label htmlFor="cantidad">Cantidad: </label>
                <input type="number" name="cantidad" onChange={handleChange} value={formData.cantidad}/>
                <input className="btn btn-success ms-4" type="submit" value="Enviar" />
                <input className="btn btn-danger mx-1" type="reset" value="Cancelar" />
            </form>
        </div>
    </>
}

export default CrudForm