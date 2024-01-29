export const Producto = (nombre, img, precio, desc ) => {
    return (
    <div>
        <h1>{nombre}</h1>
        <img src={img} />
        <p>{precio}</p>
        <p>$ {desc}</p>
    </div>
    );
}

export default Producto
