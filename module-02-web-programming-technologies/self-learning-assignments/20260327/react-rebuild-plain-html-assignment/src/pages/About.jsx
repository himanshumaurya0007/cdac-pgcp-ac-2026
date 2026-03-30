export default function AboutUs() {
    return (
        <>
            <main className="bg-light py-5">
                <div className="container">

                    {/* Header Section */}
                    <section className="mb-5">
                        <h1 className="fw-bold text-center">Himanshu Maurya</h1>
                        <hr className="w-25 mx-auto" />

                        <p><strong>Email: </strong>
                            <a href="mailto:himanshumaurya7781@gmail.com" className="text-decoration-none">
                                himanshumaurya7781@gmail.com</a>
                        </p>
                        <p><strong>Phone: </strong>
                            <a href="tel:+919767564425" className="text-decoration-none">
                                (+91) 97675 64425</a>
                        </p>

                        <p>
                            <strong>LinkedIn:</strong>{" "}
                            <a
                                href="https://www.linkedin.com/in/himanshumaurya0007"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-decoration-none"
                            >
                                linkedin.com/in/himanshumaurya0007
                            </a>
                        </p>
                        <p>
                            <strong>GitHub:</strong>{" "}
                            <a
                                href="https://www.github.com/himanshumaurya0007"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-decoration-none"
                            >
                                github.com/himanshumaurya0007
                            </a>
                        </p>
                    </section>

                    {/* Objective */}
                    <section className="card shadow-sm mb-4">
                        <div className="card-body">
                            <h2 className="card-title">Objective</h2>
                            <hr />
                            <p>
                                Aspiring software developer with a strong foundation in Full-Stack MERN Development and a passion
                                for building impactful, scalable web applications.
                            </p>
                        </div>
                    </section>

                    {/* Skills */}
                    <section className="card shadow-sm mb-4">
                        <div className="card-body">
                            <h2 className="card-title">Skills</h2>
                            <hr />

                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><strong>Languages:</strong> JavaScript (ES6+), Typescript, Python, Java, HTML, CSS</li>
                                <li className="list-group-item"><strong>Framework & Libraries:</strong> React.js, Node.js, Express.js, Bootstrap, Tailwind CSS, Django, Flask</li>
                                <li className="list-group-item"><strong>Databases:</strong> MongoDB, MySQL, SQLite</li>
                                <li className="list-group-item"><strong>Tools & Platforms:</strong> Git, GitHub, Postman, Docker, VS Code, Linux, Windows</li>
                                <li className="list-group-item"><strong>Deployment & Hosting:</strong> Vercel, Railway, Firebase Hosting</li>
                                <li className="list-group-item"><strong>Core Concepts:</strong> RESTful APIs, Data Modeling, JWT Authentication, Component-Based Architecture, Responsive Design</li>
                            </ul>
                        </div>
                    </section>

                    {/* Projects */}
                    <section className="card shadow-sm mb-4">
                        <div className="card-body">
                            <h2 className="card-title">MERN Projects</h2>
                            <hr />

                            {/* Project 1 */}
                            <div className="mb-4">
                                <h3 className="fw-semibold">EazyVenue: Venue Booking Dashboard</h3>
                                <p className="text-muted">
                                    <i>React.js, Vite, Tailwind CSS, TanStack React Query, Lucide Icons, Node.js, Express.js, MongoDB</i>
                                </p>
                                <ul>
                                    <li>Built a full-stack booking dashboard for users and venue owners.</li>
                                    <li>Implemented RESTful APIs and scalable backend.</li>
                                    <li>Designed modular UI for extensibility.</li>
                                </ul>
                                <p>
                                    <strong>GitHub:</strong>{" "}
                                    <a href="https://github.com/himanshumaurya0007/MERN_Projects/tree/main/easyvenue" target="_blank" rel="noopener noreferrer">
                                        github.com/himanshumaurya0007/MERN_Projects/easyvenue
                                    </a>
                                </p>
                            </div>

                            {/* Project 2 */}
                            <div className="mb-4">
                                <h3 className="fw-semibold">Blog Website: Full-Stack Blog Platform</h3>
                                <p className="text-muted">
                                    <i>React.js, Vite, Node.js, Express.js, MongoDB, Axios</i>
                                </p>
                                <ul>
                                    <li>Developed responsive blog platform with category filtering.</li>
                                    <li>Maintained clean frontend/backend separation.</li>
                                    <li>Integrated React Router navigation.</li>
                                </ul>
                                <p>
                                    <strong>GitHub:</strong>{" "}
                                    <a href="https://github.com/himanshumaurya0007/MERN_Projects/tree/main/blog-website" target="_blank" rel="noopener noreferrer">
                                        github.com/himanshumaurya0007/MERN_Projects/blog-website
                                    </a>
                                </p>
                            </div>

                            {/* Project 3 */}
                            <div>
                                <h3 className="fw-semibold">TaskTide: To-Do Management Application</h3>
                                <p className="text-muted">
                                    <i>MongoDB, Express.js, React.js, Node.js, Vite, Tailwind CSS</i>
                                </p>
                                <ul>
                                    <li>Engineered a full-stack task management system.</li>
                                    <li>Designed RESTful APIs using Express and Mongoose.</li>
                                    <li>Implemented real-time UI updates with React.</li>
                                    <li>Built responsive UI using Tailwind CSS.</li>
                                </ul>
                                <p>
                                    <strong>GitHub:</strong>{" "}
                                    <a href="https://github.com/himanshumaurya0007/MERN_Projects/tree/main/tasktide" target="_blank" rel="noopener noreferrer">
                                        github.com/himanshumaurya0007/MERN_Projects/tasktide
                                    </a>
                                </p>
                            </div>

                        </div>
                    </section>

                    {/* Education */}
                    <section className="card shadow-sm mb-4">
                        <div className="card-body">
                            <h2 className="card-title">Education</h2>
                            <hr />

                            <ul>
                                <li>
                                    <strong>B.E. (Computer Science and Engineering – Data Science)</strong>
                                    <p className="mb-1"><i>A. P. Shah Institute of Technology, Thane, Maharashtra</i></p>
                                    <p>CGPA: 7.53 | 2025</p>
                                </li>

                                <li>
                                    <strong>Class XII (Higher Secondary Certificate)</strong>
                                    <p className="mb-1"><i>New English High School & Junior College, Ulhasnagar</i></p>
                                    <p>89.33% | 2021</p>
                                </li>

                                <li>
                                    <strong>Class X (Secondary School Certificate)</strong>
                                    <p className="mb-1"><i>Holy Spirit High School, Badlapur</i></p>
                                    <p>78.00% | 2019</p>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Extra Curricular */}
                    <section className="card shadow-sm mb-4">
                        <div className="card-body">
                            <h2 className="card-title">Extra-Curricular Activities</h2>
                            <hr />

                            <ul>
                                <li>
                                    <strong>HackWave Hackathon 2024 Winner</strong>
                                    <p>Secured 1st Place among 30+ national teams for a grid optimization solution using ML.</p>
                                </li>

                                <li>
                                    <strong>Participated in 10+ Hackathons</strong>
                                    <p>Demonstrated innovation, collaboration, and real-time development under pressure.</p>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Personal Details */}
                    <section className="card shadow-sm">
                        <div className="card-body">
                            <h2 className="card-title">Personal Details</h2>
                            <hr />

                            <ul>
                                <li><strong>Address:</strong> Badlapur, Thane, Maharashtra - 421503</li>
                                <li><strong>Date of Birth:</strong> 13 January 2003</li>
                                <li><strong>Nationality:</strong> Indian</li>
                            </ul>
                        </div>
                    </section>

                </div>
            </main>
        </>
    )
}