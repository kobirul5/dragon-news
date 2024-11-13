import { useEffect, useState } from "react";

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
            <div className="flex flex-col gap-4">
               {
                categories.map((category)=>(<button className="btn pl-10 justify-start" key={category.category_id}>{category.category_name}</button> ))
               }
            </div>
            
        </div>
    );
};

export default LeftAside;