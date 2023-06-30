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
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <section className="py-24 bg-[#050810]">
            <h2 className="text-4xl text-white font-semibold text-center uppercase w-fit mx-auto shadow-white 
                shadow-md px-8 py-3 border-0 border-[#050810] rounded-lg bg-transparent">
                Contact Me
            </h2>
            <form ref={form} onSubmit={sendEmail} className="max-w-[800px] mt-24 mx-auto space-y-3">
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
                    text-white text-lg bg-opacity-5 h-36" placeholder="Write Your Message...">
                    </textarea>
                    {errors.message && <p className="text-red-500 text-xl font-medium mt-3">Message filed is required!</p>}
                </div>
                <div className="form-control w-[50%] mx-auto pt-5">
                    <input type="submit" className="w-full btn bg-green-700 hover:bg-green-800 text-white hover:text-white 
                    border-0 text-xl font-medium capitalize" value="Send Message" />
                </div>
            </form>
        </section>
    );
};

export default ContactMe;