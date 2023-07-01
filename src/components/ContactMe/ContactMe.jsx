import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import { useRef } from "react";

const ContactMe = () => {
    const form = useRef();

    const { register, formState: { errors } } = useForm();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, form.current, "Ecv8GunLOyx7N5-gD")
            .then((result) => {
                form.current.reset();
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <section className="py-40 px-4 lg:px-0 bg-[#050810]" id="contact">
            <h2 className="text-4xl text-white font-semibold text-center uppercase w-fit mx-auto shadow-white 
                shadow-md px-8 py-3 border-0 border-[#050810] rounded-lg bg-transparent">
                Contact Me
            </h2>
            <div className="max-w-7xl mx-auto mt-20 flex justify-center items-center gap-12 lg:gap-28">
                <div className="w-full lg:w-4/6">
                    <form ref={form} onSubmit={sendEmail} className="w-full space-y-2">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-white text-2xl font-medium mb-1">Name: </span>
                            </label>
                            <input type="text" name="name" {...register("name", { required: true })} placeholder="Enter Your Name..."
                                className="input input-bordered text-white text-lg bg-opacity-5 w-full" />
                            {errors.name && <p className="text-red-500 text-xl font-medium mt-3">Name field is required!</p>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-white text-2xl font-medium mb-1">Email: </span>
                            </label>
                            <input type="email" name="email" {...register("email", { required: true })} placeholder="Enter Your Email..."
                                className="input input-bordered text-white text-lg bg-opacity-5 w-full" />
                            {errors.email && <p className="text-red-500 text-xl font-medium mt-3">Email filed is required!</p>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-white text-2xl font-medium mb-1">Subject: </span>
                            </label>
                            <input type="text" name="subject" {...register("subject")} placeholder="Write Your Subject..."
                                className="input input-bordered text-white text-lg bg-opacity-5 w-full" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white text-2xl font-medium mb-1">Message: </span>
                            </label>
                            <textarea name="message" {...register("message", { required: true })} className="textarea textarea-bordered 
                    text-white text-lg bg-opacity-5 h-24" placeholder="Write Your Message...">
                            </textarea>
                            {errors.message && <p className="text-red-500 text-xl font-medium mt-3">Message filed is required!</p>}
                        </div>
                        <div className="form-control lg:mx-10 pt-7">
                            <input type="submit" className="w-full btn bg-green-700 hover:bg-green-800 text-white hover:text-white 
                    border-0 text-xl font-medium capitalize" value="Send Message" />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactMe;