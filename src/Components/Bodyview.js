import React from 'react';
import Button from 'react-bootstrap/Button';

function Bodyview() {
  return (
    <div>
      <div className='bg-indigo-600 items-center justify-center'>

        <div className='text-center '>
          <br></br>
          <br></br>
          <h1 className='text-white font-bold '>Diam quam tortor eget id.</h1>
          <h1 className='text-white font-bold '>Aliquet lacus volutpat tristique sed diam.</h1>
        </div>
        <img
          src='big3.png'
          alt='logo'
          className='items-center justify-center w-full '
        />
      </div>


      <div className='bg-slate-900 p-6'>
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <img
            src="img5.png"
            alt="logo"
            className="md:ml-16 w-98 h-72 mt-5"
          />
          <div className='mt-28 ml-24'>
            <div className="mt-12 md:mt-0 md:ml-48 flex flex-col justify-center md:text-left">
              <h1 className="text-white font-bold  text-5xl ">Powerful tools.</h1>
              <h1 className="font-bold text-indigo-400  text-5xl ">More control.</h1>
              <p className="text-white mt-4">
                Scelerisque auctor dolor diam tortor, fames faucibus non interdum nunc.
              </p>
              <p className="text-white ">
                Ultrices nibh sapien elit gravida ac, rutrum molestie adipiscing lancinia.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap  gap-4 m-4">
          <img
            src="img6.png"
            alt="logo"
            className="h-72 w-58 ml-6"
          />
          <img
            src="img7.png"
            alt="logo"
            className="h-72 w-58"
          />

          <div className='flex flex-col items-center'>
            <div className='flex items-center'>
              <img
                src='write.png'
                alt='logo'
                className='h-6 w-8 ml-40 mb-2'
              />
              <p className='text-white'>Interdum volutpat turpis malesuada ac turpis.</p>
            </div>

            <div className='flex items-center  ml-16'>
              <img
                src='write.png'
                alt='logo'
                className='h-6 w-8 mr-2 mb-2'
              />
              <p className='text-white'>Tortor ipsum pretium quis nunc.</p>
            </div>

            <div className='flex items-center'>
              <img
                src='write.png'
                alt='logo'
                className='h-6 w-8 mr-2 mb-2'
              />
              <p className='text-white'>Vitae odio a id purus in.</p>
            </div>
            <Button variant="primary" className="px-5 py-2 mt-2">Start for free</Button>
            <p className='mb-72'></p>
            


          </div>
        </div>
      </div>
    </div>
  )
}

export default Bodyview
