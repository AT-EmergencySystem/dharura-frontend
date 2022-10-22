import React from 'react'

import { Link,BrowserRouter  } from 'react-router-dom';

import { HashLink  } from 'react-router-hash-link'


const Header = () => {
  return (
    <BrowserRouter>
    <div className='p-5 bg-black text-white mb-5 '
    style={{
        backgroundImage: "url('https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?cs=srgb&dl=pexels-pixabay-164595.jpg&fm=jpg&_gl=1*gwoqpz*_ga*MTUxMjM0NjE5NC4xNjY2MDc5MDM2*_ga_8JE65Q40S6*MTY2NjA3OTAzOS4xLjEuMTY2NjA4MDcwNS4wLjAuMA..')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundOrigin: "center"
    }}
>
    <div className='flex justify-around '>
        <div className='justify-self-start'>

            <span className='font-extrabold cursor-pointer'>
               Dharura
            </span>


        </div>

        <div >
            <ul className='list-none flex gap-10 cursor-pointer'>
                
                    <li>Services</li>
                    <li>About Us</li>
                    <li>Contact</li>

                    <Link to='/register'>
                    <li>Register</li>
                    </Link>

               
            </ul>
        </div>
        <div>
            <img src="" alt="" />
        </div>

    </div>

    <div className='text-center p-10 '>
        <div className='text-2xl lg:text-5xl font-semibold'>
        An emergency information <br/>
        management system software <br/>
        as a service
        </div>
        <div>
            <span className='block '>
                Turn your room with ams into a lot more minimalist
            </span>
            <span>
                and modern with ease and speed
            </span>
        </div>
        <div className='p-10'>
           <button className='bg-white text-black p-2 rounded-sm'>
            Learn more
           </button>
        </div>

    </div>
</div>
</BrowserRouter>
   
  )
}

export default Header



