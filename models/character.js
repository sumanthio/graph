import mongoose from 'mongoose';

const characterSchema = mongoose.Schema(
  {
    characterName: { type: String },
    houseId: { type: String },
    characterImageThumb: { type: String },
    characterImageFull: { type: String },
    actorName: { type: String },
    siblings: { type: Array },
    kills: { type: Array }
  }, { collection: 'Character' })

export default mongoose.model('Character', characterSchema);