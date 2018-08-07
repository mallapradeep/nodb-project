var movies = ['Avengers, ',   ' Extinction,  ', ' DeadPool, ', ' Aquaman, ', 
               ' Rampage, ' ];
let id = 0 ;

module.exports = {
    read: (req, res)=> {
        res.status(200).send(movies);
    },

    create:(req, res)=> {
        movies.push( req.body.movie );
        res.status(200).send( movies )
    },

    delete:(req, res)=> {
        const deleteID = req.params.id;
        movieIndex = movies.findIndex( movie =>movie.id == deleteID );
        movies.splice(movieIndex, 1);
        res.status(200).send( movies );
    }, 

    update: (req, res) => {
        let index = null;
        movies.forEach((movie, i)=> {
            if(movie.id === Number(req.params.id)) index = i;
        })
        movies[index]={
            id: movies[index].id
        };
        res.status(200).send(movies);
    }



    
}