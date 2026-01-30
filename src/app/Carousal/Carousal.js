import './Carousal.css';

export const Carousal = () => {
    return <>
        <div id="carouselExampleCaptions" className="carousel slide my-5">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="/buddha.jpg" className="d-block w-100 img-fluid img-thumbnail " alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Gautama Buddha was an enlightened spiritual teacher whose teachings on peace, compassion, and wisdom guide millions around the world..</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="/abdul.jpg" className="d-block w-100 img-fluid img-thumbnail" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>A. P. J. Abdul Kalam was a visionary scientist and former President of India, admired for his humility, leadership, and inspiration to millions.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="/sachin.jpg" className="d-block w-100 img-fluid img-thumbnail" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>Sachin Tendulkar is a legendary cricketer, widely regarded as the “God of Cricket,” known for his unmatched consistency and records.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="/messi.jpg" className="d-block w-100 img-fluid img-thumbnail" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Fourth slide label</h5>
                        <p>Lionel Messi is a legendary footballer known for his extraordinary skill, vision, and record-breaking achievements in the game.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="/brucelee.jpg" className="d-block w-100 img-fluid img-thumbnail" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Fifth slide label</h5>
                        <p>Bruce Lee was a legendary martial artist, actor, and philosopher who revolutionized martial arts and inspired millions with his discipline and mindset..</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </>
}