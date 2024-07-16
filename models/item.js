import mongoose from "mongoose"
const itemSchema = new mongoose.Schema({
    image: {
        type: String, // Stocker l'URL de l'image
    },
    title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    // required: true,
  },
  marque: {
    type: String,
    // required: true,
  },
  etat : {
    type: String,
    // required: true,
  },
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    // required: true,
  },
  price: {
    type: Number,
    // required: true,
  },
},{timestamps:true});

const Item = mongoose.model('Item', itemSchema);

export default Item
