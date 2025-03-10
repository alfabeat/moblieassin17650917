import mongoose from 'mongoose';
const postschema = mongoose.Schema({
    musicId: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Music',
        required: true
    },
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
    genre: {
        type: String,
        trim: true,
         default: 'missing genre'
    }
}, {
    timestamps: true
});
export default mongoose.model('Post', postschema);
//module.exports = mongoose.model('Post', postschema);