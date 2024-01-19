"use client";
import Image from "next/image";
import useSWR from "swr";

export default function Home() {
  const fetcher = async (url: any) => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json", 
      },
    };
    return await fetch(url, options).then((res) => res.json());
  };

  // console.log("GetData", dataData);
  // const showData = dataData
  // console.log("showData", showData);
   const { data } = useSWR("https://jsonplaceholder.typicode.com/users", fetcher );
console.log("Data" , data);

  // const products = [
  //   {
  //     id: 1,
  //     name: 'Basic Tee',
  //     href: '#',
  //     // imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
  //     imageAlt: "Front of men's Basic Tee in black.",
  //     price: '$35',
  //     color: 'Black',
  //   },
  //   {
  //     id: 2,
  //     name: 'Basic Tee',
  //     href: '#',
  //     // imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
  //     imageAlt: "Front of men's Basic Tee in black.",
  //     price: '$35',
  //     color: 'Black',
  //   },
  //   {
  //     id: 3,
  //     name: 'Basic Tee',
  //     href: '#',
  //     // imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
  //     imageAlt: "Front of men's Basic Tee in black.",
  //     price: '$35',
  //     color: 'Black',
  //   },
  //   {
  //     id: 4,
  //     name: 'Basic Tee',
  //     href: '#',
  //     // imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
  //     imageAlt: "Front of men's Basic Tee in black.",
  //     price: '$35',
  //     color: 'Black',
  //   },
  // ]
  // console.log("dataVale" , data);
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data?.map((product:any) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <Image
                  src={product.url}
                  alt="image"
                  width={300} height={300}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.title}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div> */}
{
  data?.map((list:any , index:Number)=>{
    const {name ,address} = list
    return(
      <ul>
        <li>{name}</li>
        <li>Addres:{address.zipcode}</li>
       
      </ul>
    )
  })
}
      
    </main>
  );
}
