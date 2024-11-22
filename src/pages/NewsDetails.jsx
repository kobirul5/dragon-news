import { Link, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import RightNav from "../components/LayoutComponents/RightNav";

const NewsDetails = () => {
    const data = useLoaderData()
    console.log(data)
    const news = data.data[0]
    return (
        <div className='font-poppins'>
            <Header></Header>


            <main className='mx-auto md:w-11/12 px-5 grid grid-cols-12 gap-6 mt-8'>
                <section className='col-span-9'>
                    <h2 className="text-2xl font-bold">Dragon News</h2>
                    <div className="mt-5">
                        <div className="card bg-base-100 border">
                            <figure className="px-5 pt-5">
                                <img
                                    src={news?.image_url}
                                    alt={news?.title}
                                    className="w-full" />
                            </figure>
                            <div className="card-body p-5 space-y-6">
                                <h2 className="card-title mt-5">{news?.title}</h2>
                                <p>{news?.details}</p>
                                <div className="card-actions">
                                    <Link to={`/category/${news?.category_id}`} className="btn bg-pink-600 text-white rounded-none">All news in this category</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
                <aside className='col-span-3'><RightNav></RightNav></aside>
            </main>



        </div>
    );
};

export default NewsDetails;