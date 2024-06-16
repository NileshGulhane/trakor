import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';


function App() {

    return (
        <div className='bg-slate-900'>
            <Navbar expand="lg" className="bg-slate-900 text-white p-4">
                <Container fluid>
                    <p className="text-white p-4 font-bold text-3xl">trakor</p>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="flex justify-between items-center w-full">
                            <div className="flex justify-center items-center space-x-12 lg:ml-auto">
                                <p className="text-center font-bold">Product</p>
                                <p className="text-center font-bold">Solutions</p>
                                <p className="text-center font-bold">Documentation</p>
                                <p className="text-center font-bold">Pricing</p>
                            </div>
                            <div className="flex items-center ml-auto space-x-4">
                                <p className="text-white font-bold lg:block">Log In</p>
                                <button className="bg-secondary hover:bg-secondary-dark text-white font-bold py-2 px-4 rounded transition-colors duration-300 lg:mb-7 mt-3">
                                    Request more info
                                </button>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>


            </Navbar>
            <div className='text-center bg-slate-900 text-white bt-10'>
                <h5 className='text-indigo-400  mt-5'>Team Progress Tracking Tool</h5>
                <p className='font-bold text-7xl mt-3'>Track your team progress</p>
                <h6 className='mt-5'>Ut pouere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra.
                    <h6 className='mt-1'>Ultrices faucibus neque velit risus ac id lorem.</h6></h6>

                <div className='flex justify-center space-x-10 mt-7'>
                    <Button variant="primary" className="px-5 py-2">Start for free</Button>
                    <Button variant="secondary" className="px-5 py-2">Request more info</Button>
                </div>

                <div class="flex items-center justify-center mt-14 ">
                    <img src="bgs.png" alt="logo" className="h-60 w-70 mb-12" />
                </div>
            </div>
        </div>
    );
}

export default App;
