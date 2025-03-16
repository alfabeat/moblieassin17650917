// using System;
// using Microsoft.AspNetCore.Authorization.Infrastructure;
// namespace myapp.Models
// {
//     public record Unit{
//         public Guid Id {get; init;}
//         public string? Name {get; init;}
//         public Int32 Points {get; init;}
//         public DateTimeOffset CreatedDate {get; init;}
//     }
// }
// music tracks,
// artists, albums, and genres
import mongoose from 'mongoose';
const musicschema = mongoose.Schema({

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
    genre: {
        type: String,
        trim: true,
         default: 'missing genre'
    }
}, {
    timestamps: true
});

export const mu = mongoose.model('Music', musicschema);
//export default mongoose.model('Music', musicschema);

//module.exports 
