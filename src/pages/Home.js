

export default function Home() {
    return (
        <>
            <header class="main-header">
				<div class="layers">
					<div class="layer__header">
						<div class="layers__title">Elaine Ye</div>
                        <div class="layers__caption">Welcome to my world!</div>
					</div>
					<div class="layer layers__front bg-hero-front"></div>
                    <div class="layer layers__middle bg-hero-middle"></div>
                    <div class="layer layers__base bg-hero-pattern"></div>
				</div>
			</header>
            <article class="main-article flex  bg-cave-pattern">
                <div id= "about" class="main-article__content">
                <div class="absolute top-20 right-10">
                        <h1 class="main-article__header text-white text-4xl font-bold text-right">about</h1>
                        <p class="text-white text-2xl py-6 text-right">3rd year Computer Science major at Rice University <br></br>
                            Passionate about app development and program design</p>
                    </div>

                    <div class="h-screen flex flex-col 
                    items-center justify-center">
                        <h1 class="main-article__header  text-left text-white text-4xl font-bold ">currently</h1>
                        <p class="text-white text-2xl py-6 text-left ">UI Engineer Intern @Xactly<br></br>Developer @WeThePixies</p>
                    </div>
                    <div class="absolute bottom-10 left-10">
                        <h1 class="main-article__header  text-white text-4xl font-bold text-left">previously</h1>
                        <p class="text-white text-2xl  py-6 text-left">Developer @RiceApps<br></br>
                            Computational Biology Researcher @TreangenLab<br></br>
                            Co-President @Lynbrook High WiSTEM club</p>
                    </div>
                </div>
            </article>
        </>


    )
}