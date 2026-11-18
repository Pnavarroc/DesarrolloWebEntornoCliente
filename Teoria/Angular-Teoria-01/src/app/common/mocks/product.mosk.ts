import { Product } from '../interfaces/interface';

export const PRODUCTS_MOCK: Product[] = [
  {
    id: 1,
    title: 'Camiseta',
    description: 'Camiseta Molona',
    category: 'clothing',
    stock: 10,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtdeIUaLtuoWzGLazta4MOgKr9CKyRgcrySYKIbkmfjH5obUeSmf1SzgJV&s=10',
    rating: {
      rate: 4,
      count: 213,
    },
    price: 18,
  },
  {
    id: 2,
    title: 'Pantalones',
    description: 'Pantalones Molones',
    category: 'clothing',
    stock: 10,
    image:
      'https://static.e-stradivarius.net/assets/public/27aa/2d6a/466a4230be03/04a15ac79930/04536600401-a15/04536600401-a15.jpg?ts=1788442791685&w=1300&f=auto',
    rating: {
      rate: 4.5,
      count: 180,
    },
    price: 50,
  },
  {
    id: 3,
    title: 'Radio',
    description: 'Radio guapa',
    category: 'electronics',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWzlJl7pXh6YNxmUAMVeMFgkwHzEQ_CmxLshqezP1zzowfBmw_9ukWs-E&s=10',
    stock: 10,
    rating: {
      rate: 4,
      count: 20,
    },
    price: 18,
  },
  {
    id: 4,
    title: 'Televisor',
    stock: 10,
    description: 'Televisor Micro QLED 88',
    category: 'electronics',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0gEq6Lq9GlDlkESoLpvuRQ-FR2UgvLoqWnFxJNqZ8Zg&s=10',
    rating: {
      rate: 8.4,
      count: 45,
    },
    price: 799,
  },
  {
    id: 6,
    title: 'Carl el mazmorrero',
    description: 'Un hombre y un gato en una mazmorra contra el mundo',
    category: 'books',
    image:
      'https://m.media-amazon.com/images/I/71c0uGhwikL._UF1000,1000_QL80_AIweblab1381794,T1_.jpg',
    rating: {
      rate: 5,
      count: 244,
    },
    price: 12,
    stock: 10,
  },
  {
    id: 6,
    title: 'Planta',
    description: 'Cactus para los que no saben cuidar plantas',
    category: 'home',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJDftOVkjT44uXGwvTqOaZ6-CESTRn3DkqahKaMiPMv4pvduK80TV3z-l4&s=10',
    rating: {
      rate: 99,
      count: 4,
    },
    price: 8,
    stock: 10,
  },
];
