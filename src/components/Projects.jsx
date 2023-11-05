
import img1 from '../assets/project1.png'
import img2 from '../assets/project2.png'
import img3 from '../assets/project3.png'

const Projects = () => {
    return (
        <main className="projects">
            <div className="project-container">
                <h1 className='project-container-header'>Projects</h1>
                <div className="project-contents">
                    <div className='project-img'><img className='img1' src={img1} alt="project-img" /></div>
                    <div className='project-info'>
                        <div className='project-info-header'>
                            <h2>TOKENTRACE</h2>
                            <p>TokenTrace is a crypto tracker app where you can search and see info about your favorite coins. </p>
                        </div>
                        <div className='project-tech'>
                            <p>React</p>
                            <p>CSS</p>
                        </div>
                        <div className='project-live'>
                            <a href='https://github.com/ronrustemi123/TokenTrace' target='_blank'>Code <i className="fa-brands fa-github"></i></a>
                            <a href='https://tokentrace.pages.dev/' target='_blank'>Live <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                        </div>
                    </div>
                </div>
                <div className="project-contents">
                    <div className='project-img'><img className='img2' src={img2} alt="project-img" /></div>
                    <div className='project-info'>
                        <div className='project-info-header'>
                            <h2>SIMPLE ECOMMERCE</h2>
                            <p>Simple eCommerce is a simple, user friendly store focused to make your shopping better and easier.</p>
                        </div>
                        <div className='project-tech'>
                            <p>React</p>
                            <p>Material UI</p>
                            <p>CSS</p>
                        </div>
                        <div className='project-live'>
                            <a href='https://github.com/ronrustemi123/eCommerce' target='_blank'>Code <i className="fa-brands fa-github"></i></a>
                            <a href='https://simple-ecommerce-pi.vercel.app/' target='_blank'>Live <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                        </div>
                    </div>
                </div>
                <div className="project-contents">
                    <div className='project-img'><img className='img3' src={img3} alt="project-img" /></div>
                    <div className='project-info'>
                        <div className='project-info-header'>
                            <h2>MYFLIX</h2>
                            <p>MYFLIX is an app where you can search for the best and latest movies, see which ones are the most loved and more.</p>
                        </div>
                        <div className='project-tech'>
                            <p>React</p>
                            <p>Material UI</p>
                        </div>
                        <div className='project-live'>
                            <a href='https://github.com/ronrustemi123/MyFlix' target='_blank'>Code <i className="fa-brands fa-github"></i></a>
                            <a href='https://myflix-rose.vercel.app/' target='_blank'>Live <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
 
export default Projects;