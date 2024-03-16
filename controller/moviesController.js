const MovieService = require("../services/movieService")    

class MoviesController {
    //method untuk menampilkan semua movies
    static async getAll(req, res, next) {
        console.log('berhasil')
        try {
            const movies = await MovieService.getAllMovies(req.query)
            res.status(200).json(movies) 
        } catch (error) {
            next(error)
           
        }
    }
    
    static async getById(req, res, next){
        try {
            //ambil ID movie dari param permintaan
            const movieId = req.params.id
            const movie = await MovieService.getById(movieId)
    
            res.status(200).json({ data: movie})
            
        } catch (error) {
            next(error)
        }
    }

    static async addMovie(req, res, next){
        try {
            const newMovie = await MovieService.createMovie(req.body)
            res.status(201).json({
                message: 'New Movie added',  
                data: newMovie
            })
        } catch (error) {
            next(error)
        }
    }

    static async uploadPhoto(req, res, next){
        try {
            const uploads = await MovieService.uploadPhoto(req.file)

            res.status(201).json({message: "Upload success", image_url: uploads})
        } catch (error) {
            next(error)
        }
    }

    static async updateMovie(req, res, next){
        try {
            const params = {
                id: req.params.id,
                body: req.body
            }

            await MovieService.updateMovieServ(params)
            res.status(201).json({ message: "Movie Updated Successfully"})
        } catch (error) {
            next(error)
        }
    }

    static async deleteMovie(req, res, next) {
        try {   
            const movieId = req.params.id
        
            await MovieService.deleteMovieServ(movieId)

            res.status(201).json({message: `Movie deleted`})
        } catch (error) {
            next(error)
        }
    }
}

module.exports = MoviesController