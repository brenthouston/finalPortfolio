import React from "react";
import "../styles/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode} from "@fortawesome/free-solid-svg-icons";


export default function About() {
    return (
    <section id="code-blog">
        <div className="flex">
            <div className="title">
                <h2>CodeBlog</h2>
                <FontAwesomeIcon className="icon" icon={faCode} />
            </div>
            <p>Code I wish to share.</p>
            <div className="code-area">
                Coding Explinations here.
            </div>
        </div>
    </section>

    ) 
} 