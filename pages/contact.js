import NavBar from  '../components/navBar';
import Link from 'next/link';

export default function Contact() {
    return (<>
        <NavBar></NavBar>
        <div class="row background">
            <div class="offset-sm-1 col-sm-10 offset-sm-4 midsec">
                <div class="offset-sm-4 row-sm-4 row-sm-4  aboutme">
                    <div class="contact-form">
                        <h1> Contact</h1>
                    <div class="txtb">
                        <label> Full Name</label>
                        <input type="text" name="" value="" placeholder="Enter Your Name" />
                    </div>
                  
                    <div class="txtb">
                        <label> Email</label>
                        <input type="text" name="" value="" placeholder="Enter Your Email" />
                    </div>
                  
                    <div class="txtb">
                        <label> Phone Number</label>
                        <input type="text" name="" value="" placeholder="Enter Your Phone Number" />
                    </div>
                  
                    <div class="txtb">
                        <label>Message :</label>
                        <textarea>lslsl</textarea>
                    </div>
                        <a class="btn btn-light">Send</a>
                    </div>

                </div>
            </div>
        </div>

    </>);
}