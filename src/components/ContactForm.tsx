"use client";

import { useState } from "react";

export default function ContactForm() {
        const [fullname, setFullname] = useState("");
        const [email, setEmail] = useState("");
        const [message, setMessage] = useState("");
        const [error, setError] = useState([]);
        const [success, setSuccess] = useState(false);

        const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();

            console.log("Nama Panjang: ", fullname);
            console.log("Email: ", email);
            console.log("Pesan: ", message);

            const res = await fetch("backend/api/contact", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    fullname,
                    email,
                    message,
                }),
            });

            const { msg, success } = await res.json();
            setError(msg);
            setSuccess(success);

            if (success) {
                setFullname("");
                setEmail("");
                setMessage("");
              }
        };

    return (
        <>
            <form onSubmit={handleSubmit} className="py-4 mt-4 border-t flex flex-col gap-5">
                <div>
                    <label htmlFor="fullname">Nama Panjang</label>
                    <input onChange={(e) => setFullname(e.target.value)} 
                    value={fullname} 
                    type="text" 
                    id="fullname" 
                    placeholder="Kanjeng Dhimas" />
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} 
                    value={email} 
                    type="text" 
                    id="email" 
                    placeholder="kanjeng@gmail.com" />
                </div>

                <div>
                    <label htmlFor="message">Pesan Anda</label>
                    <textarea onChange={(e) => setMessage(e.target.value)} 
                    value={message}
                    className="h-32" 
                    id="message" 
                    placeholder="Ketik pesan anda disini..."></textarea>
                </div>

                <button className="bg-primary p-3 text-white font-bold hover:shadow-lg hover:opacity-80" type="submit">Kirim</button>
            </form>

            <div className="bg-slate-100 flex flex-col">
                {error &&
                    error.map((e) => (
                        <div
                        className={`${
                            success ? "text-green-800" : "text-red-600"
                        } px-5 py-2`}
                        >
                        {e}
                        </div>
                ))}
            </div>
        </>
    );
}