'use client'

export const About = () => {
    return <>
        <div className="container mt-5" >
            <h3 className="text-center my-5" >About <span className='text-primary'> Me </span> <hr className="w-25 mx-auto" /></h3>
            <div className="row">
                {/*this is column 1 */}
                <div className="col-sm-12 col-md-6 col-lg-6 col-12">
                    {/*this is column 1 inside container 1 */}
                    <div className="mb-5" >
                        <h3>what do you <span className="text-primary" >want to know?</span></h3>
                        <p className="fst-italic" >use our powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks to twelve coloumn system, six default responsive tiers, Sass variables and mixins, and dozens of predefine classNamees.</p>
                        <button className="btn btn-outline-primary" >More about me</button>
                    </div>
                    {/*this is column 1  inside container 2 */}
                    <div>
                        <div className="accordion ">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false">
                                        Education
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse " data-bs-parent="#accordionExample">
                                    <div className="accordion-body" > I have completed My Master's in Finance from Kakatiya University.</div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Experience
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body" > I have not Realtime experience but i have gain some experience from build Projects <code></code></div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Habbies
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body" > My Habbies are Reading News and listening to music and playing Cricket.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*this is column 2 */}
                <div className="col-sm-12 col-md-6 col-lg-6 col-12">
                    <img className="img-fluid img-thumbnail" src="/boy.jpg" />
                </div>
            </div>
        </div>
    </>
}