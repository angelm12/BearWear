import { Link } from "react-router-dom"
import Nav from "./Nav"

function Home(){
    return (
      <div className="text-3xl text-gray-700 font-bold mb-5 grid place-items-center h-screen ">
          <div>
            Nice to see you again ... ;)
          </div>
          <div className="box-decoration-slice bg-gradient-to-r from-red-600 to-yellow-500 text-white px-2 rounded-lg  shadow-inner">
              <Link to={"/outer"}>Outer</Link>
          </div>
          <div className="box-decoration-slice bg-gradient-to-r from-purple-600 to-pink-500 text-white px-2 rounded-lg  shadow-inner">
              <Link to={"/top"}>Top</Link>
          </div>
          <div className="box-decoration-slice bg-gradient-to-r from-indigo-600 to-cyan-500 text-white px-2 rounded-lg  shadow-inner"> 
              <Link to={"/bottom"}>Bottom</Link>
          </div>
          <div className="box-decoration-slice bg-gradient-to-r from-blue-600 to-red-500 text-white px-2 rounded-lg  shadow-inner">
              <Link to={"/accessories"}>Accessories</Link>
          </div>
          <div className="box-decoration-slice bg-gradient-to-r from-green-600 to-blue-500 text-white px-2 rounded-lg  shadow-inner">
              <Link to={"/dresses"}>Dresses</Link>
          </div>
          <div className="box-decoration-slice bg-gradient-to-r from-teal-600 to-teal-900 text-white px-2 rounded-lg  shadow-inner">
              <Link to={"/shoes"}>Shoes</Link>
          </div>

      </div>
    
    // <div>
    //     <body>
    //         <h1>Digital Closet</h1>
    //         <div class="content">
    //             <h2>Outer</h2>
    //             <div class="container">
    //                 <div class="grey vert"></div>
    //                 </div>
    //                 <h2>Top</h2>
    //                 <div class="container">
    //   <div class="grey vert"></div>
    // </div>

    // <h2>Bottom</h2>
    // <div class="container">
    //   <div class="grey vert"></div>
    // </div>

    // <h2>Accessories</h2>
    // <div class="container">
    //   <div class="grey vert"></div>
    // </div>

    // <h2>Dresses</h2>
    // <div class="container">
    //   <div class="grey vert"></div>
    // </div>

    // <h2>Shoes</h2>
    // <div class="container">
    //   <div class="grey vert"></div>
    //   </div>
    // </div>
    
    // </body> 
    // </div>
    )
}

export default Home