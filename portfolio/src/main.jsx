import { createRoot } from 'react-dom/client'
import MainLayout from './layout/MainLayout'
import "bootstrap/dist/css/bootstrap.min.css"
import "./styles/global.css"
import "bootstrap/dist/js/bootstrap.min.js"
createRoot(document.getElementById('root')).render(
<MainLayout></MainLayout>
)
