const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/nyc_outward');
const Schema = mongoose.Schema;

const School = new Schema({
  name: String
});
SchoolM = mongoose.model('School', School);

var record = [{
  name: 'Baldwin'
},
  {
    name: 'BCS'
  },
  {
    name: 'Channel View'
  },
  {
    name: 'Hahn'
  },
  {
    name: 'Leaders'
  },
  {
    name: 'McCown'
  },
  {
    name: 'MELS'
  },
  {
    name: 'WHEELS'
  },
  {
    name: 'Network'
  }];

record.forEach(function(el, index) {
  SchoolM.create(el, function(err, data) {
    console.log(data);
  });
});
