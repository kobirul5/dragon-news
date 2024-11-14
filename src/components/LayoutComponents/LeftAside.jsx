import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftAside = () => {
    const [categories, setCategories] = useState([])
    useEffect(()=>{
        fetch("https://openapi.programming-hero.com/api/news/categories")
        .then(res=>res.json())
        .then(data=>setCategories(data.data.news_category))
    },[])
    return (
        <div className=" space-y-4">
            <h1 className="font-semibold">All Category</h1>
            <div className="flex flex-col gap-4 *:bg-white *:text-gray-400">
               {
                categories.map((category)=>(<NavLink 
                    to={`/category/${category.category_id}`} 
                    className="btn pl-10 justify-start border-none shadow-sm" key={category.category_id}
                    >{category.category_name}</NavLink> ))
               }
            </div>
            
        </div>
    );
};

export default LeftAside;