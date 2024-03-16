const { Movie } = require('../models');


class MovieRepository {
    //method untuk get all movie
    static async getAllMovies() {
        try {
            const movies = await Movie.findAll()
            return movies
        } catch (error) {
            throw error
        }
    }

    static async getById(movieId) {
        try {
            const movie = await Movie.findOne(movieId)
            return movie
        } catch (error) {
            throw error
        }
    }

    static async create(params) {
        try {
            const movie = await Movie.create(params, { returning: true })
            return movie
        } catch (error) {
            throw error
        }
    }

    static async updateMovieRepo(id, body) {
        try {
            const movie = await Movie.findOne({ where: {id}})

            if (!movie)
                throw ({ name: "ErrorNotFound", message: "Movie Not Found" })

            await movie.update(body)
        } catch (error) {
            throw error
        }
    }

    static async deleteMovieRepo(params) {
        try {
            const movieDelete = await Movie.findOne(params)

            if (!movieDelete) 
                throw { name: "ErrorNotFound", message: "Movie Not Found" };
            
            return movieDelete.destroy()
        } catch (error) {
            throw error;
        }

    }
}

module.exports = MovieRepository