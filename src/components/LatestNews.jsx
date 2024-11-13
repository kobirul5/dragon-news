import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <div className="flex gap-5 bg-base-200 p-4">
            <p className='bg-[#D72050] px-5 text-white py-2 '>Latest</p>
            <Marquee pauseOnHover={true} className=" space-x-10 ">
                <Link to="/news">Match Highlights: Germany vs Spain — as it happened   !</Link>
                <Link to="/news">Match Highlights: Germany vs Spain as...!</Link>
                <Link to="/news">Match Highlights: Germany vs Spain as...!</Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;