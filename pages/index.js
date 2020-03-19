import NavBar from '../components/navBar';


export default function Home() {
    return (<>
        <NavBar></NavBar>

            <div class="row background">
                <div class="col-sm-10 offset-sm-1 midsec2">
                    <div class="row-sm-4 offset-sm-4 aboutme2 bio_box">
                        <h2> About Me</h2>
                        <div class="bio_img">
                            <img src='/img/profilepic.png' alt="my face" />
                        </div>

                        <div class="bio_text">
                            <p>Been born in a family who values education but never had the opportunity to accomplish their
                            dreams makes me responsibility as the oldest son in the house to push the barrier further in
                            order to inspire my younger siblings to strive for their personal greatness.</p><br />
                            <p>Been born in a family who values education but never had the opportunity to accomplish their
                            dreams makes me responsibility as the oldest son in the house to push the barrier further in
                            order to inspire my younger siblings to strive for their personal greatness. </p><br />
                            <p>Been born in a family who values education but never had the opportunity to accomplish their
                            dreams makes me responsibility as the oldest son in the house to push the barrier further in
                            order to inspire my younger siblings to strive for their personal greatness. </p>
                        </div>
                    </div>
                </div>
            </div>

    </>
    );
}