var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var RecipeSchema = new Schema(
	{
		recipes: [
			{
				type: Schema.Types.ObjectId,
				ref: "Formula"
			}
		]
	},
	{
		timestamps: true,
		discriminatorKey: "kind"
	}
);

var Recipe = mongoose.model("Recipe", RecipeSchema);
module.exports = Recipe;
