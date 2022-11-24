/*  ===========================================================================
//  DEPENDENCIES
//  =======================================================================  */
const mongoose = require("mongoose");




/*  ===========================================================================
//  SCHEMA
//  =======================================================================  */
const logsSchema = new mongoose.Schema({
    title: { type: String, required: true },
    entry: { type: String, required: true },
    shipIsBroken: { Boolean, default: true }
},
{
    timestamps: true
});




/*  ===========================================================================
//  MODEL
//  =======================================================================  */
const Log = mongoose.model("Log", logsSchema);

module.exports = Log;