import tshirts from '../../../tshirts.json'
import jeans from '../../../jeans.json'
import shoes from '../../../shoes.json'

export const categoryProducts = (category) => {
    switch (category) {
        case 'T-Shirts': return { newProducts: tshirts, shortDescription: 'Soft 100% cotton T-shirts for everyday comfort.' };
        case 'Jeans': return { newProducts: jeans, shortDescription: 'Classic denim jeans with a modern fit.' };
        case 'Sport-Shoes': return { newProducts: shoes, shortDescription: 'Comfortable and stylish sport shoes.' };
        default: return null;
    }
}