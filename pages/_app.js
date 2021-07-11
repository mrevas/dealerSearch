import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/pagination.scss';
import { DealerProvider } from '../components/DealerProvider';

function MyApp({ Component, pageProps }) {
  return(
    <DealerProvider>
      <Component {...pageProps} /> 
    </DealerProvider>
  )
}

export default MyApp
