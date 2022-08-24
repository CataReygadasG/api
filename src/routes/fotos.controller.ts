import { RequestHandler } from 'express'
import { runInNewContext } from 'vm'
import Foto from './Fotos'

export const createFoto: RequestHandler = async (req, res) => {
    const fotoFound = await Foto.findOne({ url: req.body.url })
    if (fotoFound)
        return res.status(301).json({ message: 'La url ya existe' })
    const foto = new Foto(req.body)
    const savedFoto = await foto.save()
    res.json(savedFoto);
}
//obtener videos
export const getFotos: RequestHandler = async (req, res) => {
    try {
        const fotos = await Foto.find()
        return res.json(fotos);
    }
    catch (error) {
        res.json(error)

    }
}

//obtener una sola foto por id
//req.params:extrae id de routers
export const getFoto: RequestHandler = async (req, res) => {
    const fotoFound = await Foto.findById(req.params.id)
    if (!fotoFound) return res.status(204).json();
    return res.json(fotoFound)
}

export const deleteFoto: RequestHandler = async (req, res) => {
    const fotoFound = await Foto.findByIdAndDelete(req.params.id)
    if (!fotoFound) return res.status(204).json();
    return res.json(fotoFound)

}

export const updateFoto: RequestHandler = async (req, res) => {
    const fotoUpdate = await Foto.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!fotoUpdate) return res.status(204).json();
    res.json(fotoUpdate)
} 