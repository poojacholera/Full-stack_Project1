var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var moment = require('moment');
var AuthorSchema = new Schema(
	{
		first_name: {type: String, required: true, max: 100},
		family_name: {type: String, required: true, max: 100},
		date_of_birth: {type: Date},
		date_of_death:{type: Date},	
	}
);

// Virtual for author's date_of_birth
AuthorSchema
.virtual('dob')
.get(function () {
  return moment(this.date_of_birth).format('MMMM Do, YYYY');
});

// Virtual for author's date_of_death
AuthorSchema
.virtual('dod')
.get(function () {
  return moment(this.date_of_death).format('MMMM Do, YYYY');
});

// Virtual for author's full name
AuthorSchema
.virtual('name')
.get(function () {
  return this.family_name + ', ' + this.first_name;
});

// Virtual for author's lifespan
AuthorSchema
.virtual('lifespan')
.get(function () {
  return (moment(this.date_of_birth).format('MMMM Do, YYYY') + ' - ' +moment(this.date_of_death).format('MMMM Do, YYYY'));
/* (this.date_of_death.getYear() - this.date_of_birth.getYear()).toString();
*/
});

// Virtual for author's URL
AuthorSchema
.virtual('url')
.get(function () {
  return '/catalog/author/' + this._id;
});

//Export model
module.exports = mongoose.model('Author', AuthorSchema);
