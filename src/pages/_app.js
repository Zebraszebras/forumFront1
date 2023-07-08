import Layout from "../components/layout/Layout";
import axios from "axios";
import userModel from "@/models/userModel";

axios.defaults.baseURL = process.env.apiUrl;
axios.interceptors.request.use(config => {
  if (userModel.loggedIn) {
    console.log("User authenticated, adding jwt token to headers");
    config.headers.Authorization = userModel.jwt; 
  } else {
    console.log("User is not authenticated, no header added");
  }
  
  return config;
});
console.log("Axios base url confugured to:", axios.defaults.baseURL);


export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
