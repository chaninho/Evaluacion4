import React, {useEffect, useState} from 'react'
import CrudForm from './CrudForm'
import CrudTable from './CrudTable'



const CrudAPI = () =>{

    /* Variable de estado de los productos*/
    const [productos, setProductos] = useState([]);

    /** CADA VEZ QUE LA VARIABLE PRODUCTOS SUFRE UN CAMBIO, USAREMOS ESTA FUNCION*/
    useEffect(() => {
        fetch("http://localhost:3004/productos")
        .then((response) => response.json())
        .then((data) => {
            setProductos(data)
        })
    }, [])

    /*Variable de estado auxiliar para editar*/
    const [editData, setEditData] = useState(null);



       /**LOCALSTORAGE */
    /* FUNCION PARA INSERTAR DATOS*/
    const addProducto = (producto) => {
        setProductos([
            ...productos,
            producto
        ])
    }

    /* FUNCION PARA EDITAR PRODUCTO */
    const editProducto = (producto) => {
        const newProductos = productos.map(el => el.id === producto.id ? producto : el)
        setProductos(newProductos)
        setEditData(null)
    }

    /* FUNCION PARA ELIMINAR PRODUCTO */
    const deleteProducto = id => {
        const isDelete = window.confirm(`Deseas eliminar el registro ${id} ?`);

        if(isDelete){
            const newProductos = productos.filter(el => el.id !== id)
            setProductos(newProductos);
        }
    }

    return <>
        <CrudForm addProducto={addProducto} editProducto ={editProducto} editData={editData}/> 
        <CrudTable productos={productos} setEditData={setEditData} deleteProducto={deleteProducto} />     
    </>
}

export default CrudAPI
