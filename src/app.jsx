import './app.css';
import About from './about';
import Skills from './skills';
import Projects from './projects';
import Navigation from './nav';
import Footer from './footer';

function App() {
    return (
        <>
            <Navigation />
            <main>
                <About />
                <Skills />
                <Projects />
                <svg
                    className='wave'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 1440 320'
                >
                    <path
                        fill='#0099ff'
                        fillOpacity='0.35'
                        d='M0,128L48,117.3C96,107,192,85,288,96C384,107,480,149,576,138.7C672,128,768,64,864,74.7C960,85,1056,171,1152,197.3C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'>
                    </path>
                </svg>
            </main>
            <Footer />
        </>
    );
}

export default App;