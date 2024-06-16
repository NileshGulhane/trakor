import React from 'react';
import Button from 'react-bootstrap/Button';

function Bottomview() {
  return (
    <div className="bg-slate-900">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-10 px-6">
        <div className="md:w-1/2">
          <h1 className="text-white font-bold text-5xl md:text-5xl mb-2">Team management.</h1>
          <h1 className="font-bold text-indigo-400 text-5xl md:text-5xl  mb-8 ">Effortless synchronization.</h1>
          <p className="text-white">
            Massa nunc nisi fames adipiscing scelerisque placerat et sagittis cursus.
          </p>
          <p className="text-white mb-8">Mi commodo id maecenas amet, elementum a, in.</p>
          <div className="flex flex-col ">
            <div className="flex items-center">
              <img src="write.png" alt="logo" className="h-6 w-8 mr-2" />
              <p className="text-white">Interdum volutpat turpis malesuada ac turpis.</p>
            </div>
            <div className="flex items-center">
              <img src="write.png" alt="logo" className="h-6 w-8 mr-2" />
              <p className="text-white">Tortor ipsum pretium quis nunc.</p>
            </div>
            <div className="flex items-center">
              <img src="write.png" alt="logo" className="h-6 w-8 mr-2" />
              <p className="text-white">Vitae odio a id purus in.</p>
            </div>
            <div>
              <Button variant="primary" className="px-5 py-2 mt-2">Start for free</Button>
            </div>
          </div>
        </div>

        <div className="md:w-1/2">
          <img src="big4.png" alt="logo" className="mx-auto h-auto md:h-96 w-full ml-5" />
          <p className='mb-42'></p>
        </div>
       
      </div>
  
    </div>
  );
}

export default Bottomview;
