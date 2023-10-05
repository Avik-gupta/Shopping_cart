import axios from "axios";

class WebService
{
   getAPICall(url)
   {
      return axios.get(url)
   }
}
export default new WebService