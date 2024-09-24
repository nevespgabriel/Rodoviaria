import conn from "../conn.js";

const Schema = conn.Schema();

const tripSchema = new Schema({

});

const Trip = conn.model("Trip", tripSchema);

export default Trip;