import React from "react"

const CrudTable = ( {productos, setEditData, deleteProducto} ) => {
    return <>
        <div className="p-0 container bg-secondary border border-black"  bg-secondary>
            <h3 class="text-black">TABLA PRODUCTOS</h3>
            <table className="table table-dark table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    {   /** IF ELSE EN JSX */
                        productos.length===0? <h4>No hay datos</h4>
                        : productos.map((producto, index) => {
                            return <tr key={index}>
                                    <td>{producto.id}</td>
                                    <td>{producto.nombre}</td>
                                    <td>{producto.precio}</td>
                                    <td>{producto.cantidad}</td>
                                    <td>
                                        <button class="btn btn-primary ms-1" onClick={() => setEditData(producto)}>Editar</button>
                                        <button class="btn btn-danger mx-1" onClick={() => deleteProducto(producto.id)}>Eliminar</button>
                                    </td>
                                </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    </>
}

export default CrudTable