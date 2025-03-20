import * as Validator from '../Dtos/ValidatormusicDto.js'
import * as Mus from '../Models/Item.js'
//todo: add edit and delete music
//todo: add search by artist, album, genre or generic search
//todo: add get all music
//look at the database
//add testing
//add admin area with the token
//create a login API
//creates the music APIs
//get music by title
export const getMusictitle = async (req, res) => {
    const {title}=req.body;
    try{
        // const {error, value} = Validator.ValidatormusicDto.validate({title});
        // if(error){
        //     return res.status(400).json({message:error.message});
        // }
       const result = await Mus.mu.findOne({title});//find the music
         if(result.length === 0){
              return res.status(401).json({message:"Music not found"});
         }
            return res.status(200).json({success:true,message:"got it", result});
    }catch(error){
    console.log("Error in getMusictitle",error);
    }
}


//post music
export const postMusic = async (req, res) => {
    const {title, artist, album, genre} = req.body;
    try{
        const {error, value} = Validator.ValidatormusicDto.validate({title, artist, album, genre});//validate the input
        if(error){
            return res.status(400).json({message:error.message});
        }
        const newMusic = new Mus.mu({title, artist, album, genre});//create a new music
        const result = await newMusic.save();
        res.status(201).json({success:true, message:"success", result})
    }catch(error){
    console.log("Error in getMusictitle",error);
    }
}
//edit music
export const editMusic = async (req, res) => {
    const {_id} = req.query;
    const { title, artist, album, genre} = req.body;
    try{
        const {error, value} = Validator.ValidatormusicDto.validate({title, artist, album, genre});//validate the input
        if(error){
            return res.status(401).json({message:error.message});
        }
        const existing = await Mus.mu.findOne({_id});
        if(!existing){//check if the music exists
            return res.status(401).json({message:"Music not found"+_id});
        }
        if(title!==""){//update the music
            existing.title = title;
        }
        if(artist!==""){
            existing.artist = artist;
        }
        if(album!==""){
            existing.album = album;
        }
        if(genre!==""){
            existing.genre = genre;
        }
        const result = await existing.save();
        res.status(200).json({success:true, message:"Edit success", result})
    }catch(error){
    console.log("Error in editMusic",error);
    }
}
//delete music
export const deleteMusic = async (req, res) => {
    const {_id} = req.query;
    const { title, artist, album, genre} = req.body;
    try{
        const {error, value} = Validator.ValidatormusicDto.validate({title, artist, album, genre});//validate the input
        if(error){
            return res.status(401).json({message:error.message});
        }
        const existing = await Mus.mu.findOne({_id});
        //check if the music exists
        if(!existing){
            return res.status(404).json({message:"Music not found"});
        }
 
        await Mus.mu.deleteOne({title});
        res.status(200).json({success:true, message:"delete success"})
    }catch(error){
    console.log("Error in editMusic",error);
    }
}
//get all music
export const getallMusic = async (req, res) => {
    const {amount}=req.query;
    const limit=10;
    try{
        let musicnum =0;
        if (amount <= 1){
            musicnum = 0;

        }else{
            musicnum = amount -1;
        }
        const result = await Mus.mu.find().sort({title:-1}).skip(musicnum * limit).limit(limit)
        .populate({path:'_id', select:'title'});

        if(result.length === 0){//gets the music
             return res.status(401).json({message:"Music not found"});
        }
           return res.status(200).json({success:true,message:"got it", result});
   
       }catch(error){
        console.log("Error in getallMusic",error);
    }
}