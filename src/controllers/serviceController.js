const services = [
  { id: 1, contacto: 'Karen Vizcarra', destino: 'Los Olivos', costo: '40.00', estado: 'P' },
  { id: 2, contacto: 'Carlos Merino', destino: 'San Borja', costo: '30.00', estado: 'P' },
  { id: 3, contacto: 'Felipe Mendoza', destino: 'SMP', costo: '24.00', estado: 'P' },
  { id: 4, contacto: 'Hilda Linares', destino: 'SJL', costo: '17.00', estado: 'P' },
  { id: 5, contacto: 'Laura Bermudez', destino: 'La Molina', costo: '60.00', estado: 'P' },
  { id: 6, contacto: 'Miguel Santos', destino: 'San Bartolo', costo: '120.00', estado: 'P' },
  { id: 7, contacto: 'Roberto Gómez', destino: 'Lince', costo: '20.00', estado: 'P' },
  { id: 8, contacto: 'Silvio Pérez', destino: 'Comas', costo: '70.00', estado: 'P' },
  { id: 9, contacto: 'Alex Maguiña', destino: 'Rímac', costo: '60.00', estado: 'P' },
]

let nextId = 10;

const listServices = () => {
  return services;
}

const searchId = (id) => {
  const service = services.find(service => service.id === +id)
  if (!service) {
    return { mensaje: `No se encontro el usuario con el id ${id}` }
  }

  return service;
}


const editEstate = (id, datos) => {
  const service = services.find(service => service.id === +id)
  if (!service) {
    return { mensaje: `No se encontro el usuario con el id ${id}` }
  }

  // P: pendiante| E: entredafo | R: rechazado | N: no encontrado
  service.estado = datos;
  return service
}

module.exports = {
  listServices, searchId, editEstate
}
