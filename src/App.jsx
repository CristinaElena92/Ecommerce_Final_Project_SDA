import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import { SearchProvider } from './components/Navbar/Search/UseContext'
import Footer from './components/Footer/Footer'
import { createContext, useState } from 'react'


// import { useSelector } from 'react-redux'
//Obiect "products"
const products = {
  categories: {
    woman: {
      types: [
        'skinny',
        'flared',
        'loose-and-wide',
      ],
      images: {
        skinny: [
          {
            id: 1,
            images: [
              '/img/imgcarousel/woman/skinny1.jpg',
              '/img/imgcarousel/woman/skinny11.jpg',
              '/img/imgcarousel/woman/skinny111.jpg',
            ],
            name: 'Skinny Jeans 1',
            size: ["S","M","L","XL"],
            price: '130 €',
           
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quisquam dolores exercitationem. Vero exercitationem atque repellat enim nulla itaque, necessitatibus tenetur ipsa veniam nesciunt temporibus deserunt id nobis ab tempore!',
          },
          {
            id: 2,
            images: [
              '/img/imgcarousel/woman/skinny2.jpg',
              '/img/imgcarousel/woman/skinny22.jpg',
              '/img/imgcarousel/woman/skinny222.jpg',
            ],
            
            name: 'Skinny Jeans 2',
            size: ["S","M","L","XL"],
            price: '240 €',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quisquam dolores exercitationem. Vero exercitationem atque repellat enim nulla itaque, necessitatibus tenetur ipsa veniam nesciunt temporibus deserunt id nobis ab tempore!',
          },
          {
            id: 3,
            images: [
              '/img/imgcarousel/woman/skinny3.jpg',
              '/img/imgcarousel/woman/skinny33.jpg',
              '/img/imgcarousel/woman/skinny333.jpg',
            ],
            name: 'Skinny Jeans 3',
            size: ["S","M","L","XL"],
            price: '340 €',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quisquam dolores exercitationem. Vero exercitationem atque repellat enim nulla itaque, necessitatibus tenetur ipsa veniam nesciunt temporibus deserunt id nobis ab tempore!',
          },
        ],
        flared: [
          {
            id: 1,
            images: [
              '/img/imgcarousel/woman/flared1.jpg',
              '/img/imgcarousel/woman/flared11.jpg',
              '/img/imgcarousel/woman/flared111.jpg',
            ],
            name: 'Flared Jeans 1',
            size: ["S","M","L","XL"],
            price: '130 €',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quisquam dolores exercitationem. Vero exercitationem atque repellat enim nulla itaque, necessitatibus tenetur ipsa veniam nesciunt temporibus deserunt id nobis ab tempore!',
          },
          {
            id: 2,
            images: [
              '/img/imgcarousel/woman/flared2.jpg',
              '/img/imgcarousel/woman/flared22.jpg',
              '/img/imgcarousel/woman/flared222.jpg',
            ],
            name: 'Flared Jeans 2',
            size: ["S","M","L","XL"],
            price: '130 €',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quisquam dolores exercitationem. Vero exercitationem atque repellat enim nulla itaque, necessitatibus tenetur ipsa veniam nesciunt temporibus deserunt id nobis ab tempore!',
          },
        ],
        'loose-and-wide': [
          {
            id: 1,
            images: [
              '/img/imgcarousel/woman/loose1.jpg',
              '/img/imgcarousel/woman/loose11.jpg',
              '/img/imgcarousel/woman/loose111.jpg',
            ],
            name: 'Loose-and-wide 1',
            size: ["S","M","L","XL"],
            price: '200 €',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quisquam dolores exercitationem. Vero exercitationem atque repellat enim nulla itaque, necessitatibus tenetur ipsa veniam nesciunt temporibus deserunt id nobis ab tempore!',
          },
        ],
      },
    },
    man: {
      types: [
        'skinny',
        'flared',
        'loose-and-wide',
      ],
      images: {
        skinny: [
          {
            id: 1,
            images: [
              '/img/imgcarousel/man/skinny1.jpg',
              '/img/imgcarousel/man/skinny11.jpg',
              '/img/imgcarousel/man/skinny111.jpg',
            ],
            name: 'Skinny Jeans 1',
            size: ["S","M","L","XL"],
            price: '200 €',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quisquam dolores exercitationem. Vero exercitationem atque repellat enim nulla itaque, necessitatibus tenetur ipsa veniam nesciunt temporibus deserunt id nobis ab tempore!',
          },
        ],
        flared: [
          {
            id: 1,
            images: [
              '/img/imgcarousel/man/flared1.jpg',
              '/img/imgcarousel/man/flared11.jpg',
              '/img/imgcarousel/man/flared111.jpg',
            ],
            name: 'Flared Jeans 1',
            price: '260 €',
            size: ["S","M","L","XL"],
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quisquam dolores exercitationem. Vero exercitationem atque repellat enim nulla itaque, necessitatibus tenetur ipsa veniam nesciunt temporibus deserunt id nobis ab tempore!',
          },
        ],
        'loose-and-wide': [
          {
            id: 1,
            images: [
              '/img/imgcarousel/man/loose1.jpg',
              '/img/imgcarousel/man/loose11.jpg',
              '/img/imgcarousel/man/loose111.jpg',
            ],
            name: 'Loose-and-wide 1',
            size: ["S","M","L","XL"],
            price: '460 €',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quisquam dolores exercitationem. Vero exercitationem atque repellat enim nulla itaque, necessitatibus tenetur ipsa veniam nesciunt temporibus deserunt id nobis ab tempore!',
          },
          {
            id: 2,
            images: [
              '/img/imgcarousel/man/loose2.jpg',
              '/img/imgcarousel/man/loose22.jpg',
              '/img/imgcarousel/man/loose222.jpg',
            ],
            name: 'Loose-and-wide 2',
            size: ["S","M","L","XL"],
            price: '560 €',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quisquam dolores exercitationem. Vero exercitationem atque repellat enim nulla itaque, necessitatibus tenetur ipsa veniam nesciunt temporibus deserunt id nobis ab tempore!',
          },
        ],
      },
    },
  

  sale: {
    types: [
      'skinny',
      'flared',
      'loose',
      
    ],
    images: {
      skinny: [
        {
          id: 1,
          images: [
            '/img/imgcarousel/sale/sale01.jpg ',
           
          ],
          name: 'Skinny Jeans 1',
          size: ["S","M","L","XL"],
          price: '200 €',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quisquam dolores exercitationem. Vero exercitationem atque repellat enim nulla itaque, necessitatibus tenetur ipsa veniam nesciunt temporibus deserunt id nobis ab tempore!',
        },
        {
          id: 1,
          images: [
            '/img/imgcarousel/sale/sale06.jpg ',
           
          ],
          name: 'Skinny Jeans 1',
          size: ["S","M","L","XL"],
          price: '200 €',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quisquam dolores exercitationem. Vero exercitationem atque repellat enim nulla itaque, necessitatibus tenetur ipsa veniam nesciunt temporibus deserunt id nobis ab tempore!',
        },
      ],
      flared: [
        {
          id: 1,
          images: [
            '/img/imgcarousel/sale/sale02.jpg',
         
          ],
          name: 'Flared Jeans 1',
          size: ["S","M","L","XL"],
          price: '260 €',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quisquam dolores exercitationem. Vero exercitationem atque repellat enim nulla itaque, necessitatibus tenetur ipsa veniam nesciunt temporibus deserunt id nobis ab tempore!',
        },
        {
          id: 2,
          images: [
            '/img/imgcarousel/sale/sale05.jpg',
         
          ],
          name: 'Flared Jeans 1',
          size: ["S","M","L","XL"],
          price: '260 €',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quisquam dolores exercitationem. Vero exercitationem atque repellat enim nulla itaque, necessitatibus tenetur ipsa veniam nesciunt temporibus deserunt id nobis ab tempore!',
        },
      ],
      
      loose : [
        {
          id: 1,
          images: [
            '/img/imgcarousel/sale/sale03.jpg',
            
           
          ],
          name: 'Loose-and-wide 1',
          size: ["S","M","L","XL"],
          price: '460 €',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quisquam dolores exercitationem. Vero exercitationem atque repellat enim nulla itaque, necessitatibus tenetur ipsa veniam nesciunt temporibus deserunt id nobis ab tempore!',
        },
        {
          id: 2,
          images: [
            '/img/imgcarousel/sale/sale04.jpg',
            
            
          ],
          name: 'Loose-and-wide 2',
          size: ["S","M","L","XL"],
          price: '560 €',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quisquam dolores exercitationem. Vero exercitationem atque repellat enim nulla itaque, necessitatibus tenetur ipsa veniam nesciunt temporibus deserunt id nobis ab tempore!',
        },
      ],
    },
  },
},
}
export const ProductContext = createContext()

function App() {
   
  const [categories] = useState(
    products.categories
  )

  return (
    <div>
      <SearchProvider>
        <ProductContext.Provider
          value={categories}
        >
          <Navbar />
          <Outlet />
          <Footer />
        </ProductContext.Provider>
      </SearchProvider>
    </div>
  )
}

export default App
