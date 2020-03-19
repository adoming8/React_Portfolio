import NavBar from '../components/navBar';
import Link from 'next/link';

export default function Portfolio() {
    return (<>
        <NavBar></NavBar>

        <div class="row">
            <div class="offset-sm-1 col-sm-10 offset-sm-1 midsec">
                <div class="bio_box">
                    <div class="header_container">
                        <h2>Portfolio</h2>
                    </div>
                    <hr size="1px" width="50%" />
                        <div class="bio_img1">
                            <div><a href=" https://david197116.github.io/Class-Project-1/">Wat2Eat</a></div>
                            <img class="wat2eat" src="/img/wat2eat.png" alt="my face" />
                        </div>

                        <div class="bio_img2">
                            <div><a href="https://stormy-cove-40719.herokuapp.com">areYouSmart</a></div>
                            <img class="wat2eat" src="/img/areYouSmart.png" alt="project1" />
                        </div>
                        <div class="bio_img3">
                            <div>Hangman</div>
                            <img src="https://placehold.it/200x200" alt="my face" />
                        </div>
                        <div class="bio_img4">
                            <div>Hangman</div>
                            <img src="https://placehold.it/200x200" alt="my face" />
                        </div>
                        <div class="bio_img5">
                            <div>Hangman</div>
                            <img src="https://placehold.it/200x200" alt="my face" />
                        </div>
                        </div>
                </div>
            </div>
    </>);
}