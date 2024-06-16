import React from 'react';
import Button from 'react-bootstrap/Button';
import { FaLinkedinIn, FaTwitter, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
const Footer = () => {
    return (

        <div>
            <div className='bg-slate-900'>
                <div className='flex items-center justify-center bg-slate-900 '>
                    <p className='font-bold text-6xl mt-28 text-white'>Your team. Your projects.</p>
                </div>
                <div className='flex items-center justify-center '>
                    <p className='font-bold text-6xl mt-2 '> <span className='text-indigo-400'> Always toghether. </span></p>
                </div>

                <h6 className='text-center text-white mb-8 mt-8 '>Malesuada ut aliquam at ac est nisi, interdum etiam dignissim.</h6>
                <div className='flex justify-center space-x-10 mb-24'>
                    <Button variant="primary" className="px-5 py-2">Start for free</Button>
                    <Button variant="secondary" className="px-5 py-2">Request more info</Button>
                </div>

                <footer className="bg-gray-700 text-gray-300 py-12">
                    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-4 md:mb-0">
                            <h3 className="text-xl font-bold mb-4 ml-7">Categories</h3>
                            <ul className="space-y-2">
                                <li>User Interface</li>
                                <br />
                                <li>User Experience</li>
                                <br />
                                <li>Digital Media</li>
                                <br />
                                <li>Lifestyle</li>

                            </ul>
                        </div>
                        <div className="mb-4 md:mb-0">
                            <h3 className="text-xl font-bold mb-4 ml-7">Product</h3>
                            <ul className="space-y-2">
                                <li>Pricing</li>
                                <br />
                                <li>Overview</li>
                                <br />
                                <li>Browse</li>
                                <br />
                                <li>Accessibility <span className="bg-purple-500 text-white px-2 py-1 rounded-md">BETA</span></li>
                            </ul>
                        </div>
                        <div className="mb-4 md:mb-0">
                            <h3 className="text-xl font-bold mb-4 ml-7">Solutions</h3>
                            <ul className="space-y-2">
                                <li>Brainstorming</li>
                                <br />
                                <li>Ideation</li>
                                <br />
                                <li>Wireframing</li>
                                <br />
                                <li>Research</li>
                            </ul>
                        </div>
                        <div className="mb-4 md:mb-0">
                            <h3 className="text-xl font-bold mb-4 ml-7">Resources</h3>
                            <ul className="space-y-2">
                                <li>Help Center</li>
                                <br />
                                <li>Blog</li>
                                <br />
                                <li>Tutorials</li>
                                <br />
                                <li>FAQs</li>
                            </ul>
                        </div>
                        <div className="mb-4 md:mb-0">
                            <h3 className="text-xl font-bold mb-4 ml-7">Support</h3>
                            <ul className="space-y-2">
                                <li>Contact Us</li>
                                <br />
                                <li>Developers</li>
                                <br />
                                <li>Documentation</li>
                                <br />
                                <li>Integrations</li>
                            </ul>
                        </div>
                        <div className="mb-4 md:mb-0">
                            <h3 className="text-xl font-bold mb-4 ml-7">Company</h3>
                            <ul className="space-y-2">
                                <li>About</li>
                                <br />
                                <li>Press</li>
                                <br />
                                <li>Events</li>
                                <br />
                                <li><a href="#" className="flex items-center text-white">Request Demo <span className="ml-2">→</span></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="flex text-xl mt-4 md:mt-0 md:ml-36 space-x-5 items-center flex-col md:flex-row">
                        <p class="text-sm">Trakor@2023</p>
                        <p class="text-sm">Terms of Service</p>
                        <p class="text-sm">Privacy Policy</p>
                        <p class="text-sm">Manage Cookies</p>

                        <div class="flex flex-wrap justify-center md:justify-start social-icons space-y-4 md:space-y-0 md:space-x-5 mt-4 md:mt-0 ">
                        <a href="https://www.youtube.com/" class='text-white ml-36' target="_blank" rel="noopener noreferrer">
                            <FaYoutube size={24} />
                        </a>
                    
                        <a href="https://www.linkedin.com/" class='text-white' target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn size={24} />
                        </a>
                        
                        <a href="https://twitter.com/" class='text-white' target="_blank" rel="noopener noreferrer">
                            <FaTwitter size={24} />
                        </a>
                        
                        <a href="https://www.facebook.com/" class='text-white' target="_blank" rel="noopener noreferrer">
                            <FaFacebookF size={24} />
                        </a>
                        
                        <a href="https://www.instagram.com/" class='text-white' target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={24} />
                        </a>
                    
                        <a href="https://www.apple.com/" target="_blank" rel="noopener noreferrer">
                            <img src='appstore.png' alt='App Store logo' class='h-12 w-26' />
                        </a>
                    
                        <a href="https://play.google.com/" target="_blank" rel="noopener noreferrer" class="ml-4 md:ml-0 md:ml-64">
                            <img src='playstore.png' alt='Play Store logo' class='h-12 w-26' />
                        </a>
                    </div>
                    
                    
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;