import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Portfolio.css';
import { useEffect } from 'react';

const Portfolio = () => {

    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <section className="py-24">
            <h2 className="text-4xl text-white font-semibold text-center uppercase w-fit mx-auto shadow-white 
                shadow-md px-8 py-3 border-0 border-[#050810] rounded-lg bg-transparent">
                Portfolio
            </h2>
            <div className="mt-24 max-w-7xl mx-auto space-y-24">
                <div className="card card-compact w-[800px] mx-auto rounded-md bg-base-200 shadow-xl" data-aos="slide-up" data-aos-easing="ease-in-out" data-aos-duration="800">
                    <div className="overflow-hidden h-[341px]">
                        <div className="project-image h-full rounded-t-md project-3"></div>
                    </div>
                    <div className="card-body">
                        <div className="flex justify-between items-center">
                            <h2 className="text-3xl font-semibold text-black">Chef’s Diary</h2>
                            <div className="flex justify-center items-center gap-3">
                                <div className="badge badge-neutral badge-lg">React JS</div>
                                <div className="badge badge-neutral badge-lg">Tailwind</div>
                                <div className="badge badge-neutral badge-lg">Firebase</div>
                                <div className="badge badge-neutral badge-lg">Node JS</div>
                                <div className="badge badge-neutral badge-lg">Express JS</div>
                            </div>
                        </div>
                        <div>
                            <p className="ms-2 mt-1 text-lg font-medium text-black leading-6">
                                Chef’s Diary is a recipe website that features the best Indian Chefs and their Indian recipes.
                            </p>
                            <ul className="ms-12 mt-1 text-lg text-black font-medium list-disc leading-7">
                                <li>The Chefs section shows all the best Indian chefs for the users on the home page.</li>
                                <li>A chef’s recipes can be seen by clicking the view recipes button of that chef, while logged in.</li>
                                <li>Cooking methods and required ingredients are well written for every recipe.</li>
                            </ul>
                        </div>
                        <div className="card-actions mt-3 mb-1">
                            <Link to="https://chef-recipe-hunter-467d1.web.app/" target="_blank" className="btn bg-green-600 hover:bg-green-700 text-white hover:text-white text-lg capitalize">
                                Live Site
                            </Link>
                            <Link to="https://github.com/swapnilaanam/Chefs-Diary-Client" target="_blank" className="btn bg-yellow-500 hover:bg-yellow-600 text-lg capitalize">
                                Client Side Repo
                            </Link>
                            <Link to="https://github.com/swapnilaanam/Chefs-Diary-Server" target="_blank" className="btn bg-red-600 hover:bg-red-700 text-white hover:text-white text-lg capitalize">
                                Server Side Repo
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-[800px] mx-auto rounded-md bg-base-200 shadow-xl" data-aos="slide-up" data-aos-easing="ease-in-out" data-aos-duration="800">
                    <div className="overflow-hidden h-[341px]">
                        <div className="project-image h-full rounded-t-md project-2"></div>
                    </div>
                    <div className="card-body">
                        <div className="flex justify-between items-center">
                            <h2 className="text-3xl font-semibold text-black">Toys Yard</h2>
                            <div className="flex justify-center items-center gap-3">
                                <div className="badge badge-neutral badge-lg">React JS</div>
                                <div className="badge badge-neutral badge-lg">Firebase</div>
                                <div className="badge badge-neutral badge-lg">Node JS</div>
                                <div className="badge badge-neutral badge-lg">Express JS</div>
                                <div className="badge badge-neutral badge-lg">MongoDB</div>
                            </div>
                        </div>
                        <div>
                            <p className="ms-2 mt-1 text-lg font-medium text-black leading-6">
                                Toys Yard is a toy marketplace website from where users can find action figure toys.
                            </p>
                            <ul className="ms-12 mt-1 text-lg text-black font-medium list-disc leading-7">
                                <li>The users on the Home page can see action figure toys based on category.</li>
                                <li>Users can log in or register using email and password or Google.</li>
                                <li>Added toys of a user can be on the My Toys page with the option to edit or delete those toys.</li>
                            </ul>
                        </div>
                        <div className="card-actions mt-3 mb-1">
                            <Link to="https://toy-marketplace-766c0.web.app/" target="_blank" className="btn bg-green-600 hover:bg-green-700 text-white hover:text-white text-lg capitalize">
                                Live Site
                            </Link>
                            <Link to="https://github.com/swapnilaanam/Toys-Yard-Client" target="_blank" className="btn bg-yellow-500 hover:bg-yellow-600 text-lg capitalize">
                                Client Side Repo
                            </Link>
                            <Link to="https://github.com/swapnilaanam/Toys-Yard-Server" target="_blank" className="btn bg-red-600 hover:bg-red-700 text-white hover:text-white text-lg capitalize">
                                Server Side Repo
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-[800px] mx-auto rounded-md bg-base-200 shadow-xl" data-aos="slide-up" data-aos-easing="ease-in-out" data-aos-duration="800">
                    <div className="overflow-hidden h-[341px]">
                        <div className="project-image h-full rounded-t-md project-1"></div>
                    </div>
                    <div className="card-body">
                        <div className="flex justify-between items-center">
                            <h2 className="text-3xl font-semibold text-black">Sporty Smash</h2>
                            <div className="flex justify-center items-center gap-3">
                                <div className="badge badge-neutral badge-lg">React JS</div>
                                <div className="badge badge-neutral badge-lg">Express JS</div>
                                <div className="badge badge-neutral badge-lg">MongoDB</div>
                                <div className="badge badge-neutral badge-lg">JWT</div>
                                <div className="badge badge-neutral badge-lg">Stripe</div>

                            </div>
                        </div>
                        <div>
                            <p className="ms-2 mt-1 text-lg font-medium text-black leading-6">
                                Sporty Smash is a summer sports-based platform website where instructors can add their summer sports
                                classes, host them on the platform and students can enroll in those classes after paying class fee.
                            </p>
                            <ul className="ms-12 mt-1 text-lg text-black font-medium list-disc leading-7">
                                <li>Separate easy to manage the dashboard for students, instructors, and system admins.</li>
                                <li>Easy Class Adding facility for instructors to add their needed classes to the website.</li>
                                <li>The Stripe card payment system allows students to pay their fees and enroll in their classes.</li>
                            </ul>
                        </div>
                        <div className="card-actions mt-3 mb-1">
                            <Link to="https://summer-camp-school-ad589.web.app/" target="_blank" className="btn bg-green-600 hover:bg-green-700 text-white hover:text-white text-lg capitalize">
                                Live Site
                            </Link>
                            <Link to="https://github.com/swapnilaanam/Sporty-Smash-Client" target="_blank" className="btn bg-yellow-500 hover:bg-yellow-600 text-lg capitalize">
                                Client Side Repo
                            </Link>
                            <Link to="https://github.com/swapnilaanam/Sporty-Smash-Server" target="_blank" className="btn bg-red-600 hover:bg-red-700 text-white hover:text-white text-lg capitalize">
                                Server Side Repo
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;