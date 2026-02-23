import tshirts from '../../../tshirts.json'
import jeans from '../../../jeans.json'

export const categoryProducts = (category) => {
    switch(category) {
        case 'tshirts': return tshirts;
        case 'jeans': return jeans;
        default: return null;
    }
}