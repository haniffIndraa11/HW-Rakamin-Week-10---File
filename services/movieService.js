const MovieRepo = require('../repositories/moviesRepository')

class MovieService {

    static async getAllMovies() {
        try {
            const movies = await MovieRepo.getAllMovies()
            if(!movies)
                throw {name: "ErrorNotFound", message: "Movie Not Found"}

            return movies
        } catch (error) {
            throw error
        }
    }

    static async getById(id) {
        try {
            const movieId = await MovieRepo.getById({where: {id}})
            if(!movieId)
                throw {name: "ErrorNotFound", message: "Movie Not Found"}

            return movieId  
        } catch (error) {
            throw error
        }
    }

    static async createMovie(param) {
        try {
            const createMovie = await MovieRepo.create(param)
            return createMovie
        } catch (error) {
            throw error
        }
    }

    static async uploadPhoto(file) {
        try {
            if(file){
                //buat url
                const url = `${process.env.BASE_URL}/api/images/${file.filename}`

                return url
            } else {
                throw {name: "missing file"}
            }
        } catch (error) {
            throw error
        }
    }

    static async updateMovieServ(params) {
        try {
            const {id, body} = params

            await MovieRepo.updateMovieRepo(id, body)
        } catch (error) {
            throw error
        }
    }

    static async deleteMovieServ(id) {
        try {
            const filterOptions = {
                where: {
                    id
                }
            }
            await MovieRepo.deleteMovieRepo(filterOptions)
        } catch (error) {
            throw error
        }
    }
}

module.exports = MovieService