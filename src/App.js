import { useState } from 'react';
import './App.css';
import image1 from './images/Rectangle 68.png';
import image2 from './images/Rectangle 70.png';
import image3 from './images/Rectangle 71.png';
import image4 from './images/Rectangle 72.png';
import marker from './images/Vector.png'

function App() {
  let [image, setImage] = useState(image1);

  return (
    <div className="App h-lvh w-full flex justify-center items-center  bg-[#E8B389]">
      <div className='bg-[#F2F2F2] relative rounded-xl h-[34rem] w-[60rem]'>
        <p className='absolute left-[2rem] top-[1.50rem]'>Check In</p>
        <input className='top-[3.60rem] rounded-md absolute left-[2rem] h-[2.80rem] pl-2 pr-2 w-[20rem] bg-[#E4E4E4]' type='date' />
        <p className='absolute left-[2rem] top-[8rem]'>Check Out</p>
        <input className='top-[10rem] rounded-md absolute left-[2rem] h-[2.80rem] pl-2 pr-2 w-[20rem] bg-[#E4E4E4]' type='date' />
        <p className='absolute left-[2rem] top-[14rem]'>Adult</p>
        <select className='h-[2.80rem] absolute rounded-md pl-2 pr-2 left-[2rem] top-[16rem] w-[9.40rem]'>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <select className='h-[2.80rem] absolute rounded-md pl-2 pr-2 left-[12.40rem] top-[16rem] w-[9.40rem]'>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <button onClick={() => {
          alert("Your Booking Is Completed!!!!!!!!!!")
        }
        } className='h-[2.80rem] text-white left-[2rem] bottom-[1.50rem] absolute rounded-full w-[20rem] bg-[#FF8A00]'>Book a room</button>
        <img src={image} alt='main' className='h-[21rem] hover:cursor-pointer right-[1.50rem] top-[1.50rem] w-[35rem] absolute ' />
        <img src={image2} onClick={(e) =>

          setImage(image2)
        } alt='image2' className='absolute hover:cursor-pointer w-[11rem] h-[9rem] right-[25.50rem] bottom-[1.50rem]' />
        <img src={image3} onClick={() =>
          setImage(image3)
        } alt='image2' className='absolute hover:cursor-pointer w-[11rem] h-[9rem] right-[13.50rem] bottom-[1.50rem]' />
        <img src={image4} onClick={() =>
          setImage(image4)
        } alt='image2' className='absolute hover:cursor-pointer w-[11rem] h-[9rem] right-[1.50rem] bottom-[1.50rem]' />
        <img src={marker} className='absolute hover:cursor-pointer bottom-[12rem] left-[24.50rem]' />
        <p className='absolute font-semibold text-lg text-white left-[24.60rem] bottom-[14rem]'>Golden Apartments</p>
        <p className='absolute text-white left-[26.50rem] bottom-[12.20rem]'>Punta Cana, Dominican Republic</p>
      </div>
    </div>
  );
}

export default App;
