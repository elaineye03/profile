import '../style/Header.css';

export default function Header() {
    return (
        <nav className="navbar p-4 bg-purple">
            <div className="flex md:hidden absolute top-3">
                <button data-collapse-toggle="navbar-dropdown" class="mobile-menu-button inline-flex items-center" onClick={test}>
                    <svg xmlns="http://www.w3.org/2000/svg" size={30} className="inline-block w-6 h-6 stroke-current stroke-yellow-500">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>

            </div>

            <div className="flex justify-between items-center px-4 py-2">
                <div className="grid gap-4 md:place-self-center md:justify-self-end">
                    <a className="navbar-footer text-1xl hover:text-white hidden md:flex" href="/">Elaine Ye</a>
                </div>
                <div className="grid grid-cols-2 gap-6">
                    <a className="navbar-footer hover:text-white  hidden md:flex" href="/#about">About</a>
                    <a className="navbar-footer text-1xl hover:text-white  hidden md:flex" href="/devlog">Devlog</a>
                </div>
            </div>

            <div class="md:hidden mobile-menu p-4 bg-base-100 bg-purple grid grid-rows-3 ">
                <a className="navbar-footer text-1xl text-left hover:text-white" href="/">home</a>
                <a className=" navbar-footer text-1xl text-left hover:text-white" href="#about">about</a>
                <a className="navbar-footer text-1xl text-left hover:text-white" href="/devlog">dev log</a>
            </div>
        </nav>

    )

}



