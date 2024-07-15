// multi import
import { apikey1,apikey2,apikey3 as keys} from "./util";

// for default no {}
import apiKeyDefault from "./util";

console.log("Api key :: " ,apikey1,apikey2,apikey3);
console.log("Api key :: " ,apiKeyDefault);

// assigned alias to apiKey3
console.log("Keys :: " , keys);