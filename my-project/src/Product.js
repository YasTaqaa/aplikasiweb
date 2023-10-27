/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/




import Navbar from './Navbar';

const products = [
    {
      id: 1,
      name: 'Basic Tee',
      href: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },

    {
      id: 1,
      name: 'Celana Training',
      href: 'https://halalpedia.oss-ap-southeast-5.aliyuncs.com/2021/03/20210322145005-60584c2d09ef1-whatsappimage2021-03-22at00.46.49.jpeg',
      imageSrc: 'https://halalpedia.oss-ap-southeast-5.aliyuncs.com/2021/03/20210322145005-60584c2d09ef1-whatsappimage2021-03-22at00.46.49.jpeg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$50',
      color: 'Grey',
    },

    {
      id: 1,
      name: 'Topi Polos',
      href: 'https://s2.bukalapak.com/img/2130450542/w-1000/Topi_hitam_polos.jpg',
      imageSrc: 'https://s2.bukalapak.com/img/2130450542/w-1000/Topi_hitam_polos.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$30',
      color: 'Black',
    },

    {
      id: 1,
      name: 'Jaket Polos',
      href: 'https://s4.bukalapak.com/img/4204024082/w-1000/Jaket_Polos_Hoodie_Zipper_HITAM_baru.jpg',
      imageSrc: 'https://s4.bukalapak.com/img/4204024082/w-1000/Jaket_Polos_Hoodie_Zipper_HITAM_baru.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$100',
      color: 'Black',
    },

    {
      id: 1,
      name: 'Kemeja Polos',
      href: 'https://i2.wp.com/s2.bukalapak.com/img/2653034663/w-1000/Kemeja_Lengan_Panjang_Pria_Slim_Fit_Formal_Polos_Casual_Cowo.jpeg',
      imageSrc: 'https://i2.wp.com/s2.bukalapak.com/img/2653034663/w-1000/Kemeja_Lengan_Panjang_Pria_Slim_Fit_Formal_Polos_Casual_Cowo.jpeg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$20',
      color: 'Black',
    },

    {
      id: 1,
      name: 'Celana Pendek Boxer',
      href: 'https://s1.bukalapak.com/img/12971872421/w-1000/Celana_Kolor_Boxer_jumbo.jpg',
      imageSrc: 'https://s1.bukalapak.com/img/12971872421/w-1000/Celana_Kolor_Boxer_jumbo.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$10',
      color: 'Orange',
    },

    {
      id: 1,
      name: 'Celana Jeans Hitam',
      href: 'https://cardinal.co.id/wp-content/uploads/2019/10/CBCBP00036K-01A_1NEW.jpg',
      imageSrc: 'https://cardinal.co.id/wp-content/uploads/2019/10/CBCBP00036K-01A_1NEW.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$50',
      color: 'Black',
    },

    {
      id: 1,
      name: 'Crewneck Hitam',
      href: 'https://www.justsweatshirts.com/assets/images/CrewNeck_Black-02.jpg',
      imageSrc: 'https://www.justsweatshirts.com/assets/images/CrewNeck_Black-02.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$40',
      color: 'Black',
    },
    // More products...
  ]
  
  export default function Example() {
    return (
      <div className="bg-white">

        <Navbar />
        
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">Silahkan dipilih :</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  