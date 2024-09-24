import conn from  "../conn.js";

const Schema = conn.Schema();

const routeSchema = new Schema({
    
});

const Route = conn.model("Route", routeSchema);

export default Route;