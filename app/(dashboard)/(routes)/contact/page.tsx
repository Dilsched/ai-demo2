
import Link from "next/link";
import { Mail, Twitter, Linkedin, Github, LinkedinIcon } from "lucide-react"; 

const Contact = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4 text-center">Contact Us</h1>

           
            <div className="mb-8 text-center">
                <h2 className="text-xl font-semibold mb-2">Dubacharla Gyaneshwar</h2>
                <div className="flex justify-center items-center mb-2">
                    <Mail size={20} className="mr-2 text-gray-600" />
                    <p className="text-gray-600">dgyaneshwar@iiitr.ac.in</p>
                </div>
                <div className="flex space-x-4 justify-center">
                    <a href="https://twitter.com/instructor" target="_blank" rel="noopener noreferrer">
                        <Github size={20} className="text-blue-500 hover:text-blue-600" />
                    </a>
                    <a href="https://linkedin.com/in/instructor" target="_blank" rel="noopener noreferrer">
                        <Linkedin size={20} className="text-blue-500 hover:text-blue-600" />
                    </a>
                </div>
            </div>

            <div className="flex justify-between">
                
                <div className="text-center">
                    <h2 className="text-xl font-semibold mb-2">Pranathi</h2>
                    <div className="flex justify-center items-center mb-2">
                        <Mail size={20} className="mr-2 text-gray-600" />
                        <p className="text-gray-600">cs21b1043@iiitr.ac.in</p>
                    </div>
                    <div className="flex space-x-4 justify-center">
                        <a href="https://twitter.com/student1" target="_blank" rel="noopener noreferrer">
                            <Github size={20} className="text-blue-500 hover:text-blue-600" />
                        </a>
                        <a href="https://www.linkedin.com/in/pranathi-ramavath-7587b5230?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                            <LinkedinIcon size={20} className="text-gray-600 hover:text-gray-800" />
                        </a>
                    </div>
                </div>

                
                <div className="text-center">
                    <h2 className="text-xl font-semibold mb-2">Dilsched</h2>
                    <div className="flex justify-center items-center mb-2">
                        <Mail size={20} className="mr-2 text-gray-600" />
                        <p className="text-gray-600">cs21b1009@iiitr.ac.in</p>
                    </div>
                    <div className="flex space-x-4 justify-center">
                        <a href="https://github.com/Dilsched" target="_blank" rel="noopener noreferrer">
                            <Github size={20} className="text-blue-500 hover:text-blue-600" />
                        </a>
                        <a href="https://www.linkedin.com/in/kalluru-satya-dilsched-941386239/" target="_blank" rel="noopener noreferrer">
                            <Linkedin size={20} className="text-blue-500 hover:text-blue-600" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
