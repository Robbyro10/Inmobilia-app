import { IProperty } from "@/interfaces";


export const properties: IProperty[] = [
    {
        _id: '1',
        address: 'La Castellana',
        description: 'Diseño ultra moderno con acabados de gran lujo, recién terminados en el año 2022',
        sale: 85_000,
        bath: 4,
        rooms: 4,
        parking: 6,
        size: 670,
        addOns: 'Piscina, terraza, estares intimos, algo feo, cualquier cosa bla bla',
        type: 'Apartamento',
        img: ['colonial.jpg']
    },
    {
        _id: '5',
        address: 'Country Club',
        description: 'Imponente propiedad de Arquitectura moderna, techos de doble y triple altura y muy iluminada con gran jardin plano y terrazas espaciosas.',
        sale: 5_000_000,
        bath: 7,
        rooms: 5,
        parking: 6,
        size: 670,
        addOns: 'Piscina, terraza, estares intimos, algo feo, cualquier cosa bla bla',
        type: 'Apartamento',
        img: ['front.jpg', 'entrance.jpeg', 'garden.jpg', 'kitchen.jpeg' ]

    },
    {
        _id: '2',
        address: 'Los Palos Grandes',
        description: 'Apartamento de pisos de granito, amplia cocina, habitaciones y baño de servicio',
        rent: 85_000,
        sale: 180_000,
        bath: 2,
        rooms: 3,
        parking: 2,
        size: 174,
        addOns: 'Piscina, terraza, estares intimos, algo feo, cualquier cosa bla bla',
        type: 'Apartamento',
        img: ['house-dark.jpg']
    },
    {
        _id: '3',
        address: 'La Castellana',
        description: 'Apartamento en la parte alta de la Castellana, condominio esclusivo, apartamento de techos altos e iluminacion natural',
        rent: 4_000,
        bath: 5,
        rooms: 4,
        parking: 3,
        size: 416,
        addOns: 'Piscina, terraza, estares intimos, algo feo, cualquier cosa bla bla',
        type: 'Apartamento',
        img: ['cabin.jpg']
    },
    {
        _id: '4',
        address: 'Valencia',
        description: 'Hermosa casa para ser actualizada con una de las vistas mas bellas al campo de golf en Guataparo Country Clug',
        sale: 98_0000,
        bath: 6,
        rooms: 5,
        parking: 6,
        size: 700,
        terrain: 2069,
        addOns: 'Piscina, terraza, estares intimos, algo feo, cualquier cosa bla bla',
        type: 'Casa',
        img: ['modern-house.jpg']
    },
]