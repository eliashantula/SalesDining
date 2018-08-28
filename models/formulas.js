var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var FormulaSchema = new Schema(
	{
		food: {
			type: Schema.Types.ObjectId,
			ref: "Recipe"
		},
		recipeName: String,
		ingredients: String
	},
	{ timestamps: true }
);

var Formula = mongoose.model("Formula", FormulaSchema);
module.exports = Formula;
