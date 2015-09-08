/**
 * Created by Sampath on 9/8/15.
 */
var mongoose = require('mongoose');
var blobSchema = new mongoose.Schema({
    name: String,
    badge: Number,
    dob: { type: Date, default: Date.now },
    isLoved: Boolean
});
mongoose.model('Blob', blobSchema);