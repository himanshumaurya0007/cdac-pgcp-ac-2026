export default function Login() {
    return (
        <>
            <main className="container py-5 d-flex justify-content-center">

                <div className="card shadow-sm p-4" style={{ maxWidth: "400px", width: "100%" }}>
                    <h2 className="text-center mb-4">Login</h2>

                    <form style={{ margin: "18px 0" }} action="/login.html" method="post">

                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                id="username"
                                name="username"
                                minLength="2"
                                maxLength="20"
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                name="password"
                                minLength="2"
                                maxLength="20"
                                required
                            />
                        </div>

                        <div className="d-flex gap-2">
                            <input type="submit" value="Login" className="btn btn-primary w-100" />
                            <input type="reset" value="Reset" className="btn btn-secondary w-100" />
                        </div>

                    </form>
                </div>

            </main>
        </>
    )
}