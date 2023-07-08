export default function Footer() {
    return (
        <footer class="footer p-4 bg-purple">
            <div class="flex justify-between items-center px-4 py-2">
                <div class="grid grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <p class="navbar-footer text-1xl font-bold">© 2023 Elaine Ye</p>
                </div>
                <div class="grid grid-flow-col grid-cols-2 gap-4">
                    <a class="navbar-footer text-yellow-500 text-1xl hover:text-white font-bold" href="mailto:ey9@rice.edu">Email</a>
                    <a class="navbar-footer text-yellow-500 text-1xl hover:text-white font-bold" href="https://www.linkedin.com/in/elaine-ye-11333a181/" target="_blank">LinkedIn</a>
                </div>
            </div>

        </footer>
    )
}