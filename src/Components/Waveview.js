import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function Waveview() {
    return (
        <div className="bg-slate-900 p-6 flex item-centre justify-center ">
            <div className='border-1 border-white rounded-lg mb-12'>
                <div className=" border-white p-6 max-w-screen-lg w-full rounded-full">
                    <div className="flex flex-col lg:flex-row ">
                        <div className="text-section lg:w-1/2 p-4">
                            <h1 className="text-white">Ultrices risus, sagittis, ullamcorper</h1>
                            <h1 className="text-white mb-8">gravida aliquam auctor.</h1>
                            <p className="text-white mb-8">
                                Risus sit suscipit et nibh. Morbi pretium volutpat eget habitasse habitant elementum dignissim arcu mauris. Ullamcorper euismod id commodo mi nec. Sit egestas mauris imperdiet feugiat eros, sapien at pellentesque.
                            </p>
                            <Button variant="secondary" className="px-5 py-2">Request more info</Button>
                        </div>                         <div className="image-section lg:w-1/2 p-6 flex justify-center lg:justify-end">
                            <img
                                src="wave.png"
                                alt="logo"
                                className="w-112 h-96 -mt-42"
                            />
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Waveview;
