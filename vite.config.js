import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), ,],


})


export const food = [
    {
        "id": 1,
        "name": "Jai Ganesh Bhojnalaya",
        "brand": "Zomato",
        "image": "https://b.zmtcdn.com/data/dish_photos/761/c8296b818dfdfde5ab079b98bc9dc761.jpg?output-format=webp",
        "price": 150,
        "discountedPrice": 135,
        "discount": 10,
        "desc": "North Indian",
        "category": "Meggi",
        "quantity": 2,
        "rating": "4.5",
        "review": "1,999"
    },
    {
        "id": 2,
        "name": "Shree Balaji Chinese Centre",
        "brand": "Swiggy",
        "image": "https://b.zmtcdn.com/data/pictures/3/19849373/6ea3ff51fcea619598a7a86096886edb_o2_featured_v2.jpg?output-format=webp",
        "price": 150,
        "discountedPrice": 135,
        "discount": 10,
        "desc": "North Indian",
        "category": "Pizza",
        "quantity": 2,
        "rating": "4.5",
        "review": "1,999"
    },
]
