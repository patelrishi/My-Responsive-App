import React from 'react'

export const Team = () => {
    return <>
        <div className='container my-5'>
            <h3 className='text-center' >Our <span className='text-primary' >Team</span> <hr className='w-25 mx-auto' /> </h3>
            <div className='row text-center mx-5 my-5' >
                <div className="card col-sm-12 col-md-4 col-lg-4 col-12 mx-5 my-3 p-2" style={{width: "18rem"}} >
                    <img src="/girl.jpg" className="img-fluid rounded-circle border border-primary p-2 " alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Graphic Designer</h5>
                            <p className="card-text">Professional and Creative Graphic designer.</p>
                            <a href="#" className="btn btn-primary">Read More</a>
                        </div>
                </div>
                <div className="card col-sm-12 col-md-4 col-lg-4 col-12 mx-5 my-3 p-2" style={{width: "18rem"}} >
                    <img src="/boy.jpg" className=" img-fluid rounded-circle border border-primary p-2 " alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Front-end Developer</h5>
                            <p className="card-text">He build a Responsive and User friendly Website.</p>
                            <a href="#" className="btn btn-primary">Read More</a>
                        </div>
                </div>
                <div className="card col-sm-12 col-md-4 col-lg-4 col-12 mx-5 my-3 p-2" style={{width: "18rem"}}>
                    <img src="/girl2.jpg" className=" img-fluid rounded-circle border border-primary p-2" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">App Developer</h5>
                            <p className="card-text">She build App Scalable and flexible,Smoother Apps.</p>
                            <a href="#" className="btn btn-primary">Read More</a>
                        </div>
                </div>

            </div>
        </div>
    </>
}
