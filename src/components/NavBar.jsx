import React from 'react'
import { FiChevronDown } from 'react-icons/fi';

const tournaments = [
  { id: 1, name: "Summer Showdown", date: "2023-10-15" },
  { id: 2, name: "Winter Clash", date: "2024-01-20" },
  { id: 3, name: "Spring Championship", date: "2024-04-10" },
];

const Games = [
  { id: 1, name: "League Of Lagends" },
  { id: 2, name: "Siege X" },
  { id: 3, name: "Valorant" },
];

function NavBar() {
  return (
   <nav className='fixed bg-black w-full flex itex-center justify-between py-5 px-5 md:px-10 left-0 top-0 z-100'>
    <div><h1 className=' font-bold text-xl text-white font-general  '>Game<span className='font-MyFont'>Zone</span></h1></div>
    <div className='hidden md:flex items-center space-x-8'>
       <a  className='text-white font-bold transition-colors duration-300 lowercasae  font-general hover:text-primary'  href="#hero">Home</a>
          <div className="group relative ">
          <button className="flex items-center gap-1 text-white hover:text-primary transition-colors duration-300 font-general font-bold ">
            Games <FiChevronDown className="mt-[2px]" />
          </button>

          {/* Dropdown List */}
          <div className="absolute top-full left-0 py-10 hidden group-hover:flex flex-col bg-black/80 shadow-md rounded-md z-50 min-w-[200px] text-white">
           {
            tournaments.map(tournament => (
              <a
                key={tournament.id}
                href={`#tournament${tournament.id}`}
                className="px-4 py-2 hover:bg-primary/20 transition"
              >
                {tournament.name} - {new Date(tournament.date).toLocaleDateString()}
              </a>
            ))
           }
         
      
          </div>
        </div>
       <div className="group relative ">
          <button className="flex items-center gap-1 text-white hover:text-primary transition-colors duration-300 font-general font-bold">
            Tournaments <FiChevronDown className="mt-[2px]" />
          </button>

          {/* Dropdown List */}
          <div className="absolute top-full left-0 py-10 hidden group-hover:flex flex-col bg-black/80 shadow-md rounded-md z-50 min-w-[200px] text-white">
           {
            tournaments.map(tournament => (
              <a
                key={tournament.id}
                href={`#tournament${tournament.id}`}
                className="px-4 py-2 hover:bg-primary/20 transition"
              >
                {tournament.name} - {new Date(tournament.date).toLocaleDateString()}
              </a>
            ))
           }
         
      
          </div>
        </div>
       <a  className='text-white transition-colors duration-300 lowercasae font-bold font-general hover:text-primary' href="#Scorboard">Scoreboard</a>
    </div>
   </nav>
  )
}

export default NavBar