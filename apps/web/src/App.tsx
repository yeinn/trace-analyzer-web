import { Navigate, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Error404 from "./common/pages/ErrorPage"

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<Error404 />} />
        </Routes>
    )
}

export default App