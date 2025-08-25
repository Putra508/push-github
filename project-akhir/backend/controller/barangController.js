import { PrismaClient } from "@prisma/client"
import { response } from "express"
const prisma = new PrismaClient

export const getBarang = async (req, res) => {
    try {
        const response = await prisma.data_barang.findMany()
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }

}
export const getBarangById = async (req, res) => {
    try {
        const response = await prisma.data_barang.findUnique({
            where: {
                id: Number(req.params.id)
            }
        })
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }

}

export const createBarang = async (req, res) => {
    const { nama, umur } = req.body
    try {
        const response = await prisma.data_barang.create({
            data: {
                nama: nama,
                umur: Number(umur)

            }

        })
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }



}

export const updateBarang = async (req, res) => {
    const {id}=req.params
    const { nama, umur } = req.body
    try {
        const response = await prisma.data_barang.update({
            where:{id:Number(id)},
            data:{nama, umur}
        })
           
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }


}

export const deleteBarang = async (req, res) => {
    try {
        const response = await prisma.data_barang.delete({
            where: {
                id: Number(req.params.id)
            }
        })
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }

}



