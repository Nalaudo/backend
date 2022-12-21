import ContainerMem from '../../containers/ContainerMem.js';

class ProductsMem extends ContainerMem {
    constructor() {
        super([{
            "title": "Calculadora",
            "price": "100",
            "thumbnail": "https://cdn1.iconfinder.com/data/icons/office-171/32/office-01-256.png",
            "description": "Calculadora para calcular cálculos.",
            "code": "Calc101",
            "stock": "5",
            "timestamp": 1669152906050,
            "id": 1
        },
        {
            "title": "Papelera",
            "price": "20",
            "thumbnail": "https://cdn1.iconfinder.com/data/icons/office-171/32/office-04-256.png",
            "description": "Papelera para papeles de papel.",
            "code": "Pap0237",
            "stock": "7",
            "timestamp": 1669152906051,
            "id": 2
        },
        {
            "title": "Calendario",
            "price": "10",
            "thumbnail": "https://cdn1.iconfinder.com/data/icons/office-171/32/office-20-256.png",
            "description": "Calendario para ver fechas.",
            "code": "Cale420",
            "stock": "14",
            "timestamp": 1669152906052,
            "id": 3
        },
        {
            "title": "Reloj",
            "price": "15",
            "thumbnail": "https://cdn1.iconfinder.com/data/icons/office-171/32/office-21-256.png",
            "description": "Reloj para ver la hora y no perder el tiempo.",
            "code": "Rel1212",
            "stock": "3",
            "timestamp": 1669152906053,
            "id": 4
        },
        {
            "title": "Libro",
            "price": "5",
            "thumbnail": "https://cdn1.iconfinder.com/data/icons/office-171/32/office-19-256.png",
            "description": "Libro para leer lecturas legibles.",
            "code": "Lib0338",
            "stock": "69",
            "timestamp": 1669152906054,
            "id": 5
        }])
    }
}

export default ProductsMem