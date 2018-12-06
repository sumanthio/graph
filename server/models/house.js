import mongoose from 'mongoose';

const houseSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    characters: { type: Array, required: true }
  }, { collection: 'House' });



export default mongoose.model('House', houseSchema);