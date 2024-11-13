import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
    return (
        <div >
            <h2 className="font-semibold mb-2">Find Us On</h2>
            <div className="join flex join-vertical">
                <button className="btn join-item bg-white border justify-start"><FaFacebook className="text-blue-600"></FaFacebook> Facebook</button>
                <button className="btn join-item bg-white border justify-start"><FaInstagram className="text-pink-600"/> Instagram</button>
                <button className="btn join-item bg-white border justify-start"><FaTwitter className="text-cyan-600"/> Twitter</button>
            </div>
        </div>
    );
};

export default FindUs;