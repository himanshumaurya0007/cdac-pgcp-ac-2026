export default function Register() {
    return (
        <>
            <main className="container py-4">

                <div className="card shadow-sm p-4">
                    <h2 className="mb-4">Register</h2>

                    <form style={{ margin: "18px 0" }} id="registerForm">

                        <div className="mb-3">
                            <label htmlFor="firstName" className="form-label">First name</label>
                            <input type="text" className="form-control" id="firstName" name="firstName" minLength="2" maxLength="20" required />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="lastName" className="form-label">Last name</label>
                            <input type="text" className="form-control" id="lastName" name="lastName" minLength="2" maxLength="20" required />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input type="text" className="form-control" id="username" name="username" minLength="2" maxLength="20" required />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Gender</label>

                            <div className="form-check">
                                <input className="form-check-input" type="radio" id="male" name="gender" value="male" defaultChecked />
                                <label className="form-check-label" htmlFor="male">Male</label>
                            </div>

                            <div className="form-check">
                                <input className="form-check-input" type="radio" id="female" name="gender" value="female" />
                                <label className="form-check-label" htmlFor="female">Female</label>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Known languages</label>

                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="english" name="knownLanguages" value="english" />
                                <label className="form-check-label" htmlFor="english">English</label>
                            </div>

                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="hindi" name="knownLanguages" value="hindi" />
                                <label className="form-check-label" htmlFor="hindi">Hindi</label>
                            </div>

                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="marathi" name="knownLanguages" value="marathi" />
                                <label className="form-check-label" htmlFor="marathi">Marathi</label>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" name="email" required />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" name="password" required />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                            <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" required />
                        </div>

                        <div className="d-flex gap-2">
                            <input type="submit" value="Register" className="btn btn-primary" />
                            <input type="reset" value="Reset" className="btn btn-secondary" />
                        </div>

                    </form>
                </div>

                <h2 style={{ margin: "18px 0" }} className="mt-5">Registered User Details</h2>

                <div className="table-responsive">
                    <table className="table table-bordered table-striped" id="resultTable" style={{ display: "none" }}>
                        <thead className="table-dark">
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                                <th>Gender</th>
                                <th>Languages</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                </div>

            </main>
        </>
    )
}