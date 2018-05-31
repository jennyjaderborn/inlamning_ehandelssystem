module.exports = mongoose.model('Order', new mongoose.Schema({
    customerId: Number,
    amount: Number,
  }));
  