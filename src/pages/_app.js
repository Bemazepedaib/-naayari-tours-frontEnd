import 'naayari-tours/styles/globals.css'
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
