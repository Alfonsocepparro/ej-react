import './App.css';
import Producto from './Components/ItemListContainer/Producto';
import NavBar from './Components/NavBar/navbar';


function App() {
  return (
      <div className='App'>
        
        <NavBar />

        <Producto 
          nombre= "Malla"
          img= "https://www.elpalaciodehierro.com/on/demandware.static/-/Sites-palacio-master-catalog/default/dwd959a66c/images/40114990/negro/large/40114991_NEGRO_x1.jpg"
          precio= {45000}
          desc= "Traje de baño marca Boss."/>
        <Producto 
        nombre= "Anteojos"
        img= "https://cdnx.jumpseller.com/urbenmood/image/5770577/resize/1200/1200?1578417842"
        precio= {4000}
        desc= "Gafas de sol sin marca truchas."
        />
        <Producto 
        nombre= "Perfume"
        img= "https://sallauretta.com/wp-content/uploads/24526028_ml.jpg"
        precio= {35000}
        desc= "Perfume importado con una fragancia exquisita."
        />

      </div>
  );
}

export default App
