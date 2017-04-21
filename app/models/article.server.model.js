const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ArticleSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    rating: {
        type:Number,
        trim: true,
        required: 'Rate the Employee'
    },
    title: {
        type: String,
        default: '',
        trim: true,
        required: 'Title cannot be blank'
    },
    content: {
        type: String,
        default: '',
        trim: true
    },
    value:{
        type:String,
        trim:true
    },
    creator: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    toggle:{
        type:Boolean,
        
    }
});
mongoose.model('Article', ArticleSchema);