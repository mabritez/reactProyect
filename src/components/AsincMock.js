

const products= [
    { 
        id: '1', 
        name: 'Clasic Burger', 
        price: 1200, 
        category: 'hamburguesas', 
        img:'https://i.imgur.com/wtgk7VQ.png', 
        stock: 10, 
        description:'pan de papa,doble medallon de carne, doble cheddar, lechuga, tomate, cebolla y salsa joeys.'
    },
    {
        id: '2',
        name: 'Papas fritas',
        price: 500,
        category: 'acompañamientos',
        img: 'https://images.unsplash.com/photo-1545215234-6d9f2c71c635?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        stock: 16,
        description: 'Porción de papas fritas crujientes y deliciosas'
    },
    
    { 
        id: '3',
        name: 'coca cola',
        price: 300,
        category: 'bebidas',
        img:'https://www.cocacola.com/content/dam/brands/global/coca-cola/images/2020/COCA-COLA-200ML.png',
        stock: 10, 
        description:'Gaseosa linea coca cola, sabor original'
    }
]

export const getProducts = () =>{
    return new Promise((resolve)=>{    // simulacion de proxima API
        setTimeout(() =>{
            resolve(products)
        }, 500)
    })
}


export const getProductById = (productId) =>{
    return new Promise((resolve)=>{    
        setTimeout(() =>{
            resolve(products.find(prod => prod.id === productId))
        }, 1500)
    })
}


export const getProductsByCategory = (categoryId) =>{
    return new Promise((resolve)=>{    // simulacion de proxima API
        setTimeout(() =>{
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}