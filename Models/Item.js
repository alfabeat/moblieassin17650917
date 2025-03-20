
import mongoose from 'mongoose';
const musicschema = mongoose.Schema({//schema for music

    // _id: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: [true, 'missing id'],
    //     trim: true,
    //     unique: true
    // },
    title: {
        type: String,
        trim: true,
         default: 'missing title'
    },
    artist: {
        type: String,
        trim: true,
         default: 'missing artist'
    },
    album: {
        type: String,
        trim: true,
         default: 'missing album'
    },
    genre: [{
        type: String,
        trim: true,
         default: 'missing genre'
    }]
}, {
    timestamps: true
});
//music schema export
export const mu = mongoose.model('Music', musicschema);
//export default mongoose.model('Music', musicschema);

//module.exports 
