import Hero from "./components/Hero"
import HomeCards from "./components/HomeCards"
import JobListings from "./components/JobListings"
import Navbar from "./components/Navbar"
import ViewAllJobs from "./components/ViewAllJobs"




// import React from 'react'


const App = () => {
  return (
   <>
    <body>
   
    <Navbar/>
    {/* <!-- Hero --> */}
    <Hero/>

    {/* <!-- Developers and Employers --> */}
    <HomeCards/>

    {/* <!-- Browse Jobs --> */}
    <JobListings/>

    <ViewAllJobs/>

    
  </body>   
   </>
  )
}

export default App