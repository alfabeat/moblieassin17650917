import * as Validator from '../Dtos/ValidatormusicDto.js'
import * as Mus from '../Models/Item.js'
export const getMusictitle = async (req, res) => {
    const {title}=req.body;
    try{
        // const {error, value} = Validator.ValidatormusicDto.validate({title});
        // if(error){
        //     return res.status(400).json({message:error.message});
        // }
       const result = await Mus.mu.findOne({title});
         if(result.length === 0){
              return res.status(401).json({message:"Music not found"});
         }
            return res.status(200).json({success:true,message:"got it", result});
    }catch(error){
    console.log("Error in getMusictitle",error);
    }
}

export const postMusic = async (req, res) => {
    const {title, artist, album, genre} = req.body;
    try{
        const {error, value} = Validator.ValidatormusicDto.validate({title});
        if(error){
            return res.status(400).json({message:error.message});
        }
        const newMusic = new Mus.mu({title, artist, album, genre});
        const result = await newMusic.save();
        res.status(201).json({success:true, message:"success", result})
    }catch(error){
    console.log("Error in getMusictitle",error);
    }
}
