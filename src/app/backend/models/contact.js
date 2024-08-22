import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema({
    fullname: {
        type: String,
        required: [true, "Nama wajib diisi."],
        trim: true,
        minLength: [2, "Nama harus lebih dari 2 karakter"],
        maxLength: [50, "Nama harus kurang dari 50 karakter"],
    },

    email: {
        type: String,
        required: [true, "Email wajib diisi."],
        match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "Alamat email tidak valid"],
    },

    message: {
        type: String,
        required: [true, "Pesan wajib diisi."],
    },

    date: {
        type: Date,
        default: Date.now,
    },
});

const Contact = 
    mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default Contact;