import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const characterSchema = new Schema({
  characterName: String,
  houseId: Number,
  characterImageThumb: String,
  characterImageFull: String,
  actorName: String,
  siblings: Array,
  kills: Array
})

export default mongoose.model('Character', characterSchema);