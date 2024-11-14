
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import LeftAside from '../components/LayoutComponents/LeftAside';
import RightNav from '../components/LayoutComponents/RightNav';
import Navbar from '../components/Navbar';

const HomeLayout = () => {
    return (
        <div className='font-poppins'>
            <Header></Header>
            <section className='md:w-11/12 px-5 mx-auto'>
                <LatestNews></LatestNews>
            </section>
            <nav className='md:w-11/12 px-5 mx-auto'>
                <Navbar></Navbar>
            </nav>

            <main className='mx-auto md:w-11/12 px-5 grid grid-cols-12 gap-6 mt-8'>
                <aside className='col-span-3'><LeftAside></LeftAside></aside>
                <section className='col-span-6'>
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-3'><RightNav></RightNav></aside>
            </main>



        </div>
    );
};

export default HomeLayout;