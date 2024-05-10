// // import React, { useEffect, useState } from 'react'
// // import axios from 'axios'
// // // entry.client.tsx or entry.server.tsx
// // import '~/styles/styles.css';
// // import Button from 'react-bootstrap/Button';
// // import Card from 'react-bootstrap/Card';

// // const Fetch = () => {
// //   const [data,setData]=useState([])

// //   const api=async()=>{
// //     try{
// //       const api2=await axios.get("https://fakestoreapi.com/products/")
// //       console.log(api2)
// //       setData(api2.data)
      

// //     }
// //     catch(error){
// //       console.log(error,"error in fetching data")

// //     }
// //   }
// //   useEffect(()=>{
// //     api()
// //   },[])
// //   return (
// //     <div style={{display:"flex"}}>
// //      {data.map((item,index)=>{
// //       return(
        
// //         <Card style={{ width: '18rem' }}>
// //         <Card.Img variant="top" src={item.image} style={{height:"30px",width:"30px"}} />
// //         <Card.Body>
// //           <Card.Title>{item.title}</Card.Title>
// //           <Card.Text>
// //           {item.description}
// //           </Card.Text>
// //           <Button variant="primary">Go somewhere</Button>
// //         </Card.Body>
// //       </Card>
// // //         <div className="max-w-sm rounded overflow-hidden shadow-lg">
// // //   <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"/>
// // //   <div className="px-6 py-4">
// // //     <div className="font-bold text-xl mb-2">{item?.title}</div>
// // //     <p className="text-gray-700 text-base">
// // //       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
// // //     {item?.description}
// // //     </p>
// // //   </div>
// // //   <div className="px-6 pt-4 pb-2">
// // //     <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
// // //     <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
// // //     <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
// // //   </div>
// // // </div>

// // /* <div className="bg-white py-24 sm:py-32">
// //   <div className="mx-auto max-w-7xl px-6 lg:px-8">
// //     <div className="mx-auto max-w-2xl lg:mx-0">
// //       <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
// //       <p className="mt-2 text-lg leading-8 text-gray-600">Learn how to grow your business with our expert advice.</p>
// //     </div>
// //     <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
// //       <article className="flex max-w-xl flex-col items-start justify-between">
// //         <div className="flex items-center gap-x-4 text-xs">
// //           <time  className="text-gray-500">Mar 16, 2020</time>
// //           <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Marketing</a>
// //         </div>
// //         <div className="group relative">
// //           <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
// //             <a href="#">
// //               <span className="absolute inset-0"></span>
// //               Boost your conversion rate
// //             </a>
// //           </h3>
// //           <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.</p>
// //         </div>
// //         <div className="relative mt-8 flex items-center gap-x-4">
// //           <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="h-10 w-10 rounded-full bg-gray-50"/>
// //           <div className="text-sm leading-6">
// //             <p className="font-semibold text-gray-900">
// //               <a href="#">
// //                 <span className="absolute inset-0"></span>
// //                 Michael Foster
// //               </a>
// //             </p>
// //             <p className="text-gray-600">Co-Founder / CTO</p>
// //           </div>
// //         </div>
// //       </article>

      
// //     </div>
// //   </div>
// // </div> */

// //       )

// //      })}
// //     </div>
// //   )
// // }

// // export default Fetch



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Navbar2 from './Navbar2';
// // import { links } from './Navbar2';
// // import styles from '~/styles/home.css'
// // import Demo from '~/routes/demo'


// const Fetch = () => {
//   const [data, setData] = useState([]);
//   const [data2,setData2]=useState(true);
//   interface Product {
//     id: number;
//     title: string;
//     description: string;
//     image: string;
//     price:number
    
//   }

//   function filterItems(){
//     let filteredData=data.filter((item:Product)=>{
//       return item.price>100&&item.price<500
//     })
//     setData(filteredData)

//   }
 
  

//   const fetchData = async () => {
//     try {
//       const response = await axios.get("https://fakestoreapi.com/products/");
//       setData(response.data);
//     } catch (error) {
//       console.log(error, "Error fetching data");
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);
//   useEffect(()=>{
//     fetchData()
//   },[data2])

//   return (
//     <>
//     <Navbar2/>
//     <button onClick={filterItems}>Filter</button>
//     <button onClick={()=>setData2(!data2)}>Display All</button>
//     {/* <Demo/> */}
//     <div className="d-flex flex-wrap justify-content-around">
//       {data.map((item: Product, index: number) => (
//         <Card key={index} style={{ width: '18rem', margin: '10px' }}>
//           <Card.Img variant="top" src={item.image} style={{ height: '200px', objectFit: 'cover' }} />
//           <Card.Body>
//             <Card.Title>{item.title}</Card.Title>
//             <Card.Text>{item.price}</Card.Text>
//             <Card.Text>{item.description}</Card.Text>
//             <Button variant="primary">Go somewhere</Button>
            
//           </Card.Body>
//         </Card>
//       ))}
//     </div>
//     </>
//   );
// };

// export default Fetch;


