import React from 'react';
import Button from 'react-bootstrap/Button';

function Functionview() {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between bg-slate-800">
        <div className="bg-slate-800 flex flex-col justify-center md:ml-28">
          <div>
            <br />
            <br />
            <br />
            <h1 className="text-white font-bold text-3xl md:text-5xl mb-2">Control the flow.</h1>
            <h1 className="font-bold text-indigo-400 text-3xl md:text-5xl mb-8 ">Work faster.</h1>
            <p className="text-white">Scelerisque auctor dolor diam tortor, fames faucibus non interdum nunc.</p>
            <p className="text-white">Ultrices nibh sapien elit gravida ac, rutrum molestie adipiscing lacinia.</p>
            <Button variant="primary" className="px-4 py-2 mt-2">Start for free</Button>
          </div>
        </div>
        <div>
          <img
            src='last.png'
            alt='logo'
            className='h-64 md:h-96 w-112 w-112 mt-20'
          />
        </div>
      </div>
      <div className='bg-slate-900 text-center'>
        <br />
        <br />
        <h1 className="text-white font-bold text-3xl md:text-5xl mb-2 mt-5">Our partners Our friends.</h1>
        <h1 className="font-bold text-indigo-400 text-3xl md:text-5xl mb-8 ">They Love us.</h1>
        <p className='text-white mb-56'>
          Sem malesuada sed lectus id nunc mattis est eget tincidunt.
        </p>
        <br />
        <br />
     
       
      </div>
    </div>
  );
}

export default Functionview;
