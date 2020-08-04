import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

const TeacherItem: React.FC = () => {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/32581187?s=460&u=cbcc47029730ef29677f8da0f5231920dd330766&v=4" alt="profile" />
                <div>
                    <strong>
                        Michel Maia
                            </strong>
                    <span>
                        Gastronomy
                            </span>
                </div>
            </header>

            <p>
                Bacon ipsum dolor amet hamburger rump porchetta sausage.
                        <br /> <br />
                        Leberkas ham hock meatball tongue filet mignon. Hamburger rump ham hock alcatra. Jerky prosciutto alcatra spare ribs frankfurter. Burgdoggen alcatra bacon capicola chislic. Ribeye jerky sirloin, tongue spare ribs pork belly porchetta tail pork meatloaf cow.
                    </p>

            <footer>
                <p>
                    Price per Hour
                            <strong>$ 40.00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                            Contact
                        </button>
            </footer>
        </article>
    );
};

export default TeacherItem;