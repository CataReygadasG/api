import { Schema, model } from "mongoose";
//esquema de las fotos
const fotosSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    url: {
        type: String,
        required: true,
        trim: true,
        unique: true
    }
}, {
    versionKey: false,
    timestamps: true


});
//resive el nombre y esquema del modelo
export default model('Fotos', fotosSchema);