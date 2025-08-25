import { PrismaClient } from "@prisma/client"
import { response } from "express"
const prisma = new PrismaClient

export const getAllSiswa = async (req, res) => {
    try {
        const respone = await prisma.datasiswa.findMany()
        res.status(200).json(respone)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }

}
export const getSiswaById = async (req, res) => {
    try {
        const response = await prisma.datasiswa.findUnique({
            where: {
                id: Number(req.params.id)
            }
        })
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }

}

export const createSiswa = async (req, res) => {
    const { nama, umur } = req.body
    try {
        const response = await prisma.datasiswa.create({
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

export const updateSiswa = async (req, res) => {
    const {id}=req.params
    const { nama, umur } = req.body
    try {
        const response = await prisma.datasiswa.update({
            where:{id:Number(id)},
            data:{nama, umur}
        })
           
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }


}

export const deleteSiswa = async (req, res) => {
    try {
        const response = await prisma.datasiswa.delete({
            where: {
                id: Number(req.params.id)
            }
        })
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }

}



