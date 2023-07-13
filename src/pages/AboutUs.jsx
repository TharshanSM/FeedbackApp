import Card from "../components/shared/Card";
import { Link } from "react-router-dom";
const AboutUs = () => {
    return (
        <Card>
            <div>
                <h1>About US</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Consectetur quibusdam aut, vero et natus iusto commodi eos?
                    Perferendis, praesentium consectetur?
                </p>
                <Link to="/">Back</Link>
            </div>
        </Card>
    );
};

export default AboutUs;
