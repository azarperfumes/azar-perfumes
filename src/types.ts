import blancImg from './assets/blanc main.jpg';
import leylaImg from './assets/leyla main.jpg';
import umeImg from './assets/unme main.jpg';

import blancSecondaryImg from './assets/blanc.PNG';
import leylaSecondaryImg from './assets/leyla.PNG';
import umeSecondaryImg from './assets/ume.PNG';

export interface Product {
    id: string;
    name: string;
    subName: string;
    description: string;
    volume: string;
    category: string;
    price: string;
    image: string;
    secondaryImage: string;
    notes: {
        top: string;
        heart: string;
        base: string;
    };
    theme: 'light' | 'dark' | 'navy'; // for custom styling per product
}

export const products: Product[] = [
    {
        id: 'blanc',
        name: 'BLANC',
        subName: 'MEN',
        description: 'An exceptionally fresh and vibrant fragrance. BLANC opens with bright citrus, unfolding into an elegant and sophisticated woody trail. The signature of a modern gentleman.',
        volume: '20ml / 0.67 fl.oz',
        category: 'Eau de Parfum',
        price: '₹599',
        image: blancImg,
        secondaryImage: blancSecondaryImg,
        notes: {
            top: 'Bergamot, Grapefruit, Lemon',
            heart: 'Pink Pepper, Nutmeg, Jasmine',
            base: 'Cedarwood, Vetiver, White Musk'
        },
        theme: 'light'
    },
    {
        id: 'leyla',
        name: 'LEYLA',
        subName: 'WOMEN',
        description: 'A mesmerizing and intense essence that captures the essence of femininity. LEYLA intertwines delicate floral bouquets with a dark, sensual oriental base.',
        volume: '20ml / 0.67 fl.oz',
        category: 'Eau de Parfum',
        price: '₹599',
        image: leylaImg,
        secondaryImage: leylaSecondaryImg,
        notes: {
            top: 'Blackcurrant, Pear, Mandarin',
            heart: 'Rose, Orange Blossom, Iris',
            base: 'Vanilla, Praline, Patchouli'
        },
        theme: 'light'
    },
    {
        id: 'ume',
        name: 'U&ME',
        subName: 'UNISEX',
        description: 'A shared intimacy, expressed through scent. U&ME is a universally alluring blend of clean aquatics and warm ambers, designed to be worn and loved by anyone.',
        volume: '20ml / 0.67 fl.oz',
        category: 'Extrait de Parfum',
        price: '₹599',
        image: umeImg,
        secondaryImage: umeSecondaryImg,
        notes: {
            top: 'Sea Salt, Sicilian Lemon, Cardamom',
            heart: 'Sage, Violet Leaf, Geranium',
            base: 'Ambergris, Sandalwood, Tonka Bean'
        },
        theme: 'light'
    }
];
