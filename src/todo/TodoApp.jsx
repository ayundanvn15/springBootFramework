import {useState} from 'react'
import {BrowserRouter, Routes, Route, useNavigate, useParams, Link} from 'react-router-dom'
import './TodoApp.css'

export default function TodoApp() {
    return (
        <div className="TodoApp">
            <HeaderComponent />

            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LoginComponent/>} />
                    <Route path='/login' element={<LoginComponent/>} />
                    <Route path='/welcome/:username' element={<WelcomeComponent />} />
                    <Routes path='/todos' element={<ListTodosComponent />} />
                    <Routes path='/logout' element={<LogoutsComponent />} />
                    <Routes path='*' element={<ErrorComponent/>} />
                </Routes>
            </BrowserRouter>

            <FooterComponent />

        </div>
    )
}

function LoginComponent() {
    const [username, setUsername] = useState('in28minutes')
    const [password, setPassword] = useState('')
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const [showErrorMessage, setShowErrorMessage] = useState(false)
    const navigate = useNavigate();

    function handlerUsernameChange(event) {
        setUsername(event.target.value)
    }

    function handlerPasswordChange(event) {
        setPassword(event.target.value)
    }

    function handleSubmit() {
        if (username==='in28minutes' && password==='dummy'){
            console.log('Success')
            setShowSuccessMessage(true)
            setShowErrorMessage(false)
            navigate('/welcome/${username}')
        } else {
            console.log('Failed')
            setShowSuccessMessage(false)
            setShowErrorMessage(true)
        }
    }

    return (
        <div className="Login">
            <h1>Time to Login!</h1>
            {showSuccessMessage && <div className="successMessage">Authenticated Successfully</div> }
            {showErrorMessage && <div className="errorMessage">Authenticated Failed. Please check your credentials.</div> }

            <div className="LoginForm">
                <div>
                    <label>User name</label>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="text" name="password" value={username} onChange={handlePasswordChange}/>
                </div>
                <div>
                    <button type="button" name="login" onClick={handleSubmit}>Login</button>
                </div>
            </div>
        </div>
    )
}

function WelcomeComponent() {

    const {username} = useParams()

    console.log(username)

    return (
        <div className="WelcomeComponent">
            <h1>Welcome in28minutes</h1>
            <div>
                Manage your todos - <Link to="/todos">Go Here</Link>
            </div>
        </div>

    )
}

function ErrorComponent() {
    return (
        <div className="ErrorComponent">
            <h1>We are working really hard!</h1>
            <div>
                Apologies for the 404. Reach out to our team at ABC-DEF-GHIJ.
            </div>
        </div>
    )
}

function ListTodosComponent() {

    const today = new Date();
    const targetDate = new Date(today.getFullYear()+12, today.getMonth(), today.getDay())

    const todos = [
        {id: 1, description: 'Learn AWS', done: false, targetDate:targetDate},
        {id: 1, description: 'Learn Full Stack Dev', done: false, targetDate:targetDate},
        {id: 1, description: 'Learn DevOps', done: false, targetDate:targetDate}
    ]

    return (
        <div className="container">
            <h1>Things You Want To Do!</h1>
            <div>
                <table className="table">
                    <thead>
                    <tr>
                        <td>id</td>
                        <td>description</td>
                        <td>Is Done?</td>
                        <td>Target Date</td>
                    </tr>
                    </thead>

                    <tbody>
                    {
                        todos.map(
                            todo => (
                                <tr key="{todos.id}">
                                    <td>{todos.id}</td>
                                    <td>{todos.description}</td>
                                    <td>{todos.done.toString()}</td>
                                    <td>{todos.targetDate.toDateString()}</td>
                                </tr>
                            )
                        )
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

function HeaderComponent() {
    return (
        <header className="header">
            <div className="container">
                <a href="https://www.in28minutes.com">in28minutes</a>
            </div>
        </header>
    )
}

function FooterComponent() {
    return (
        <div className="footer">
            <hr/> Footer
        </div>
    )
}

function LogoutComponent() {
    return (
        <div className="LogoutComponent">
            <h1>You are logged out!</h1>
            <div>
                The you for using our App. Come back soon!
            </div>
        </div>
    )
}

