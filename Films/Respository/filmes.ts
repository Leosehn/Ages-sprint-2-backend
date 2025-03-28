import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

function createFilms(title:String, genre:String) {
    prisma.film.create(titulo=title,genero=genre);
}