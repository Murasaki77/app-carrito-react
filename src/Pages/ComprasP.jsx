import { useContext, useState } from "react"
import { Card } from '../Components/Card'
import { ProductosContext } from "../Context/ProductosContext"
import { CarritoContext } from "../Context/CarritoContext"

export const ComprasP = () => {

    const {productos} = useContext(ProductosContext)
    const {agregarCompra, eliminarCompra} = useContext(CarritoContext)
    const [selectedCategory, setSelectedCategory] = useState(null)
    const handleAgregar = (compra) => {
        agregarCompra(compra)
    }
    const handleQuitar = (id) => {
        eliminarCompra(id)
    }
    const handleCategorySelect = (category) => {
      setSelectedCategory(category);
  };

  // Obtener todas las categorías únicas de los productos
  const categories = Array.from(new Set(productos.map(producto => producto.category)));
//Filtra productos por su cateogoria
  const filteredProductos = selectedCategory
      ? productos.filter(producto => producto.category === selectedCategory)
      : productos;



  return (
    <>
    <h1>Compras: </h1>
    <div>
                <select className="selector" onChange={(e) => handleCategorySelect(e.target.value)}>{/*muestra un selector de categorias*/}
                    <option value="">Todas las categorías</option>
                    {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>
            </div>
    <hr />
   {filteredProductos.map(producto => (
        <Card key={producto.id}
        imagen={producto.image}
        titulo={producto.title}
        descripcion={producto.description}
        precio={producto.price}
        puntaje={producto.rating && (
            <div>
                Rating: {Array.from({ length: producto.rating.rate }, (_, index) => (//verifica la cantidad de puntaje que tiene y lo transforma en estrellas
                    <span key={index} style={{ color: 'gold' }}>⭐</span>
                ))}
                <br />
                Número de reseñas: {producto.rating.count}{/*pasa el numero de reseñas que tiene cada producto*/}
            </div>
        )}
        handleAgregar={() => handleAgregar(producto)}
        handleQuitar={() => handleQuitar(producto.id)}>

        </Card>
))}

    </>
    
  )
}
