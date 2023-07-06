import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

export default function Nav () {

  const router = useRouter()

  const logOut = () => {
    Cookies.remove('key');
    router.replace('/login');
  }

    return (
        <nav className="container">
        <ul>
          <li><strong>FIFA Stats</strong></li>
        </ul>
        <ul>
          <li><a href='' onClick={logOut} role="button">Logout</a></li>
        </ul>
      </nav>
    )
}
