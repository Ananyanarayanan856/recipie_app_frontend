
// import React, { useState, useEffect, useRef } from "react";

// export const Home = () => {
//   const [data, setData] = useState([]);
//   const [searchItem, setSearchItem] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const recipesRef = useRef(null); // Ref for scrolling

//   useEffect(() => {
//     // Sample data for testing
//     const fetchData = async () => {
//       const item = [
//         { id: 1, name: "Pesarattu", time: "10:30 AM", image: "dish1.jpeg" },
//         { id: 2, name: "Masaladosa", time: "11:00 AM", image: "dish2.jpeg" },
//         { id: 3, name: "Paneer Biriyani", time: "12:15 PM", image: "dish3.jpeg" },
//         { id: 4, name: "Chowmein", time: "10:30 AM", image: "dish4.jpeg" },
//         { id: 5, name: "Chillie Gobi", time: "11:00 AM", image: "dish5.jpeg" },
//         { id: 6, name: "Ice-cream", time: "12:15 PM", image: "dish6.jpeg" },
//         { id: 7, name: "Curdrice", time: "10:30 AM", image: "dish7.jpeg" },
//         { id: 8, name: "Gulab Jamun", time: "11:00 AM", image: "dish8.jpeg" },
//         { id: 9, name: "Fried Rice", time: "12:15 PM", image: "dish9.jpeg" },
//       ];
//       setData(item);
//     };
//     fetchData();
//   }, []);

//   // Filter recipes based on search
//   const filteredData = data.filter((item) =>
//     item.name.toLowerCase().includes(searchItem.toLowerCase())
//   );

//   // Pagination logic (showing 3 dishes per page)
//   const recordsPerPage = 3;
//   const lastIndex = currentPage * recordsPerPage;
//   const firstIndex = lastIndex - recordsPerPage;
//   const records = filteredData.slice(firstIndex, lastIndex);
//   const totalPages = Math.ceil(filteredData.length / recordsPerPage);

//   // Function to go to next/previous page
//   const nextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const prevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   // Function to scroll to the recipes section
//   const scrollToRecipes = () => {
//     if (recipesRef.current) {
//       recipesRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
//     }
//   };

//   return (
//     <div
//       style={{
//         backgroundImage: `url('/bg..jpeg')`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         minHeight: "100vh",
//         color: "white",
//         textAlign: "center",
//       }}
//     >
//       {/* First Section - Search Bar */}
//       <div
//         style={{
//           height: "100vh",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//           padding: "20px",
//         }}
//       >
//         <h2>Discover Amazing Recipes!</h2>
//         <p>Find, cook, and enjoy your favorite dishes.</p>

//         {/* Search Bar */}
//         <input
//           type="text"
//           placeholder="Search recipes..."
//           value={searchItem}
//           onChange={(e) => setSearchItem(e.target.value)}
//           style={{
//             padding: "10px",
//             width: "80%",
//             maxWidth: "400px",
//             borderRadius: "5px",
//             border: "none",
//             outline: "none",
//             fontSize: "16px",
//           }}
//         />

//         {/* Button to scroll down */}
//         <button
//           onClick={scrollToRecipes}
//           style={{
//             marginTop: "20px",
//             padding: "10px 20px",
//             backgroundColor: "#ff9800",
//             color: "white",
//             border: "none",
//             borderRadius: "5px",
//             cursor: "pointer",
//             fontSize: "16px",
//           }}
//         >
//           View Recipes ↓
//         </button>
//       </div>

//       {/* Second Section - Recipes List */}
//       <div
//         ref={recipesRef}
//         id="recipes-section"
//         style={{
//           minHeight: "100vh",
//           padding: "40px 10px",
//           backgroundImage: `url('/bg..jpeg')`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <h2 style={{ marginBottom: "20px" }}>Recipes</h2>

//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
//             gap: "20px",
//             justifyContent: "center",
//             maxWidth: "1000px",
//             margin: "0 auto",
//           }}
//         >
//           {records.map((item) => (
//             <div
//               key={item.id}
//               style={{
//                 background: "white",
//                 color: "black",
//                 borderRadius: "10px",
//                 boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
//                 overflow: "hidden",
//                 textAlign: "center",
//               }}
//             >
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 style={{ width: "100%", height: "200px", objectFit: "cover" }}
//               />
//               <div style={{ padding: "10px" }}>
//                 <h5>{item.name}</h5>
//                 <p style={{ color: "Brown", fontWeight: "bold" }}>{item.time}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Pagination Buttons */}
//         <div style={{ marginTop: "20px" }}>
//           <button onClick={prevPage} disabled={currentPage === 1} style={{ marginRight: "10px", padding: "10px 15px", cursor: "pointer" }}>Previous</button>
//           <button onClick={nextPage} disabled={currentPage === totalPages} style={{ padding: "10px 15px", cursor: "pointer" }}>Next</button>
//         </div>
//       </div>
//     </div>
//   );
// };
import React, { useState, useEffect, useRef } from "react";

export const Home = () => {
  const [data, setData] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const recipesRef = useRef(null); // Ref for scrolling

  useEffect(() => {
    // Sample data for testing
    const fetchData = async () => {
      const item = [
        { id: 1, name: "Pesarattu", time: "10 mins", image: "dish1.jpeg" },
        { id: 2, name: "Masaladosa", time: "20 mins", image: "dish2.jpeg" },
        { id: 3, name: "Paneer Biriyani", time: "50 mins", image: "dish3.jpeg" },
        { id: 4, name: "Chowmein", time: "40 mins", image: "dish4.jpeg" },
        { id: 5, name: "Chillie Gobi", time: "50 mins", image: "dish5.jpeg" },
        { id: 6, name: "Ice-cream", time: "5 mins", image: "dish6.jpeg" },
        { id: 7, name: "Curdrice", time: "20 mins", image: "dish7.jpeg" },
        { id: 8, name: "Gulab Jamun", time: "10 mins", image: "dish8.jpeg" },
        { id: 9, name: "Fried Rice", time: "30 mins", image: "dish9.jpeg" },
      ];
      setData(item);
    };
    fetchData();
  }, []);

  // Filter recipes based on search
  const filteredData = searchItem
    ? data.filter((item) =>
        item.name.toLowerCase().includes(searchItem.toLowerCase())
      )
    : data;

  // Pagination logic (showing 3 dishes per page)
  const recordsPerPage = 3;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = filteredData.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(filteredData.length / recordsPerPage);

  // Function to go to next/previous page
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Function to scroll to the recipes section
  const scrollToRecipes = () => {
    if (recipesRef.current) {
      recipesRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url('/bg..jpeg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        color: "white",
        textAlign: "center",
      }}
    >
      {/* First Section - Search Bar */}
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        <h2>Discover Amazing Recipes!</h2>
        <p>Find, cook, and enjoy your favorite dishes.</p>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search recipes..."
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
          style={{
            padding: "10px",
            width: "50%",
            maxWidth: "200px",
            borderRadius: "5px",
            border: "none",
            outline: "none",
            fontSize: "16px",
          }}
        />

        {/* Button to scroll down */}
        <button
          onClick={scrollToRecipes}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "#ff9800",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          View Recipes ↓
        </button>
      </div>

      {/* Second Section - Recipes List */}
      <div
        ref={recipesRef}
        id="recipes-section"
        style={{
          minHeight: "100vh",
          padding: "40px 10px",
          backgroundImage: `url('/bg..jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>Recipes</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
            justifyContent: "center",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          {records.length > 0 ? (
            records.map((item) => (
              <div
                key={item.id}
                style={{
                  background: "white",
                  color: "black",
                  borderRadius: "10px",
                  boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
                  overflow: "hidden",
                  textAlign: "center",
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
                <div style={{ padding: "10px" }}>
                  <h5>{item.name}</h5>
                  <p style={{ color: "Brown", fontWeight: "bold" }}>{item.time}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No recipes found.</p>
          )}
        </div>

        {/* Pagination Buttons */}
        {filteredData.length > 3 && (
          <div style={{ marginTop: "20px" }}>
            <button onClick={prevPage} disabled={currentPage === 1} style={{ marginRight: "10px", padding: "10px 15px", cursor: "pointer" }}>Previous</button>
            <button onClick={nextPage} disabled={currentPage === totalPages} style={{ padding: "10px 15px", cursor: "pointer" }}>Next</button>
          </div>
        )}
      </div>
    </div>
  );
};
