import Carousel from 'react-bootstrap/Carousel';

function DarkVariantExample() {
  return (

    <div className='bg-slate-900'>
      <div className='h-96 flex justify-center items-center bg-slate-900 '>
        <Carousel className='bg-slate-700 rounded-tr-lg rounded-bl-lg text-white'
          style={{ width: '370px', height: '500px', marginBottom: "230px" }}>
          <Carousel.Item>
            <img className="d-block w-28  ml-16 mb-7 mt-8"
              src="c1.png"
              alt="logo"
            />
            <div className='justify-centre items-center ml-16 text-xl'>
              <p className='text-white justify-center items-center'>Aliquet ridiculus mi porta <p> habitant vulputate rhoncus,  <p>mattis amet enim. Sit purus <p>venenatis velit semper lectus <p>sed ornare quam nulla. Lacus, <p>ut congue sagittis vel nisi <p>  integer imperdiet a vitae.</p></p></p></p></p></p>  </p>
            </div>
            <img
              src='p1.png'
              alt='logo'
              className='h-42 w-52  ml-16 mt-8'
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-32 ml-16 mb-7 mt-8"
              src="c2.png"
              alt="Second slide"
            />
            <div className='justify-centre items-center ml-16 text-xl'>
              <p className='text-white justify-center items-center'>Non risus viverra enim, quis. <p> Eget vitae arcu vivamus sit <p>tellus, viverra turpis lorem.<p>Varius a turpis urna id <p>porttitor</p></p></p></p>  </p>
            </div>
            <img
              src='p3.png'
              alt='logo'
              className='h-42 w-52  ml-16 mt-12'
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-38 h-10   ml-16 mb-7 mt-12"
              src="c3.png"
              alt="Third slide"
            />
            <div className='justify-centre items-center ml-16 text-xl'>
              <p className='text-white justify-center items-center'>A eget sed posuere dui risus <p> habitasse mauris. venenatis <p>Aliquet id ultrices a Lacus.<p>Pretium vehicula pretium<p>posuere justo sed lorem<p>cursus.</p></p></p></p></p>  </p>
            </div>
            <img
              src='p2.png'
              alt='logo'
              className='h-42 w-52  ml-16 mt-12'
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default DarkVariantExample;
