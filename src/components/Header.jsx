import moment from "moment";
import logoImage from "../assets/logo.png"
const Header = () => {
    return (
        <div className="flex justify-center pt-8 pb-4 gap-1 items-center flex-col text-center text-gray-400">
            <div>
                <img className="w-[300px]" src={logoImage} alt="" />
            </div>
            <h3>Journalism Without Fear or Favour</h3>
            <p>{moment().format("dddd, MMMM Do YYYY")}</p>
        </div>
    );
};

export default Header;