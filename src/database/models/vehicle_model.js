import conn from "../conn.js";

const Schema = conn.Schema();

const vehicleSchema = new Schema({

});

const Vehicle = conn.model("Vehicle", vehicleSchema);

export default Vehicle;