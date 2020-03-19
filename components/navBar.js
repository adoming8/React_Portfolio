import Link from 'next/link';

export default function NavBar() {
    return (<div class="row nav_l">
        <div class="col-sm-5 logo">
            <span class="navbar-brand">Alfredo Dominguez</span>
        </div>
        <div class="col-sm-3 offset-md-4 flex-center">
            <ul class="nav navbar-expand-md justify-content-center">
                <li class="nav-item">
                    <Link href="/index">
                        <a class="nav-link" href="index.html">About</a>
                    </Link>
                </li>
                <li class="nav-item">
                    <Link href="/portfolio">
                        <a class="nav-link" href="portfolio.html">Portfolio</a>
                    </Link>
                </li>
                <li class="nav-item">
                    <Link href="/contact">
                        <a class="nav-link" href="contact.html">Contact</a>
                    </Link>
                </li>
            </ul>
        </div>
    </div>);
}