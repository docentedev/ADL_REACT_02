export type Producto = {
    nombre: string;
    precio: number;
    existencia: number;
}

const productos: Producto[] = [{
    nombre: 'Naranja',
    precio: 100,
    existencia: 1,
}, {
    nombre: 'Aji',
    precio: 102,
    existencia: 0,
}, {
    nombre: 'Acelga',
    precio: 200,
    existencia: 10,
}, {
    nombre: 'Piña',
    precio: 1000,
    existencia: 9,
}, {
    nombre: 'Melon',
    precio: 900,
    existencia: 1,
}, {
    nombre: 'Lechuga',
    precio: 250,
    existencia: 20,
}, {
    nombre: 'Ajo',
    precio: 40,
    existencia: 100,
}, {
    nombre: 'Papa',
    precio: 50,
    existencia: 200,
}, {
    nombre: 'Lentejas',
    precio: 1900,
    existencia: 1020,
}, {
    nombre: 'Porotos',
    precio: 1000,
    existencia: 2000,
}];

export default productos
