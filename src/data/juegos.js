// data/simuladoServicio.js
import juegosData from './juegos.json';


// Obtener todos los juegos
const obtenerProductos = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(juegosData), 1000); // Simula un retraso de 1 segundo
  });
};

// Agregar un nuevo juego
const agregarProducto = async (nuevoProducto) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      nuevoProducto.id = juegosData.length + 1; // Simula un ID autogenerado
      juegosData.push(nuevoProducto);
      resolve(nuevoProducto);
    }, 1000); // Simula un retraso de 1 segundo
  });
};

// Actualizar un juego
const actualizarProducto = async (actualizadoProducto) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const index = juegosData.findIndex(p => p.id === actualizadoProducto.id);
      if (index !== -1) {
        juegosData[index] = actualizadoProducto;
        resolve(actualizadoProducto);
      } else {
        throw new Error('Producto no encontrado');
      }
    }, 1000); // Simula un retraso de 1 segundo
  });
};

// Obtener un juego por ID
const obtenerProductoPorId = async (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const producto = juegosData.find(p => p.id === id);
      resolve(producto);
    }, 1000); // Simula un retraso de 1 segundo
  });
};

// Eliminar un juego
const eliminarProducto = async (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const index = juegosData.findIndex(p => p.id === id);
      if (index !== -1) {
        juegosData.splice(index, 1);
        resolve(id);
      } else {
        throw new Error('Producto no encontrado');
      }
    }, 1000); // Simula un retraso de 1 segundo
  });
};

// Función simulada para obtener sugerencias
const fetchSuggestions = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve([]), 1000); // Simula un retraso de 1 segundo
  });
};

// Obtener valoraciones por ID del juego
const getValoraciones = async (juegoId) => {
  console.log(`Obteniendo valoraciones para el juego con ID: ${juegoId}`);
  // Aquí puedes simular la respuesta, por ejemplo, filtrando las valoraciones de un conjunto de datos
  return new Promise((resolve) => {
    setTimeout(() => resolve([]), 1000); // Simula un retraso de 1 segundo
  });
};


// Función simulada para enviar valoraciones
const enviarValoracion = async (juegoId, valoracionData) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(valoracionData), 1000); // Simula un retraso de 1 segundo
  });
};

// Verificar disponibilidad de reserva
const verificarDisponibilidad = async (datosReserva) => {
  console.log('Datos de reserva recibidos:', datosReserva);
  // Simula la verificación de disponibilidad
  const juego = juegosData.find(j => j.id === datosReserva.juegoId);
  if (juego && juego.cantidad > 0) {
    return new Promise((resolve) => {
      setTimeout(() => resolve({ disponible: true }), 1000); // Simula un retraso de 1 segundo
    });
  } else {
    return new Promise((resolve) => {
      setTimeout(() => resolve({ disponible: false }), 1000); // Simula un retraso de 1 segundo
    });
  }
};

// Hacer una reserva
const postReservation = async (reservationData) => {
  console.log('Datos de reserva enviados al servidor:', reservationData);
  return new Promise((resolve) => {
    setTimeout(() => resolve(reservationData), 1000); // Simula un retraso de 1 segundo
  });
};


export {
  obtenerProductos,
  agregarProducto,
  obtenerProductoPorId,
  actualizarProducto,
  eliminarProducto,
  fetchSuggestions,
  getValoraciones,
  enviarValoracion,
  verificarDisponibilidad,
  postReservation
};
