import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard";


const CategoryNews = () => {
    const {data} = useLoaderData()
    return (
        <div>
            <h3 className="font-semibold">Dragon News Home</h3>
           <div>
            {
                data.map((data,idx)=> <NewsCard key={idx} data={data} ></NewsCard>)
            }
           </div>
        </div>
    );
};

export default CategoryNews;