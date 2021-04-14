import axios from "axios";

export const signInFetcher = url => axios.post(url).then(res => res.data)