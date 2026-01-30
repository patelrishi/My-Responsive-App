
import React from 'react'

export const Services = () => {
    return <>
        <div className='container container-fluid '>
            <h3 className='text-center my-5' >Our <span className='text-primary' >Services</span> <hr className="w-25 mx-auto" /> </h3>
            <div className='row mx-5' >
                <div className="card mx-5 my-3 " style={{width: '18rem'}}>
                    <div className="card-body">
                        <i className="fa-brands fa-sketch"></i>
                        <h5 className="card-title">Graphic Design</h5>
                        <p className="card-text">Creative graphic designer crafting visually compelling and impactful designs.</p>
                        <a href="#" className="btn btn-primary">Learn More</a>
                    </div>
                </div>
                <div className="card mx-5 my-3" style={{width: '18rem'}}>
                    <div className="card-body">
                        <i className='fa fa-code'></i>
                        <h5 className="card-title">Web Developer</h5>
                        <p className="card-text">Web developer building responsive, fast, and user-friendly websites.</p>
                        <a href="#" className="btn btn-primary">Learn More</a>
                    </div>
                </div>
                <div className="card mx-5 my-3" style={{width: '18rem'}}>
                    <div className="card-body">
                        <i className="fa-brands fa-app-store-ios "></i>
                        <h5 className="card-title">App Developer</h5>
                        <p className="card-text">App developer creating smooth and scalable mobile applications.</p>
                        <a href="#" className="btn btn-primary">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    </>

}
