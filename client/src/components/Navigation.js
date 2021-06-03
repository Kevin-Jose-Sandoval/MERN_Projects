import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export default function Navigation() {
    return (
        //Para tamaños lg ya se mostrará el menú expandido, de lo contrario se mostrará el menú para dispositibos móviles        
        <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark">
            <Navbar.Brand as={NavLink} to="/">Gestor de tareas</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" /> {/* movile version */}
            
            <Navbar.Collapse id="responsive-navbar-nav"> 
                
                <Nav >
                    <Nav.Link as={NavLink} to="/projects">Projectos</Nav.Link>
                    <NavDropdown title="Admin">
                        <NavDropdown.Item as={NavLink} to="/admin/users">Usuarios</NavDropdown.Item>
                    </NavDropdown>                    
                </Nav>

                {/* routes with authentication */}
                <Nav style={{marginLeft:'900px'}}>
                    <Nav.Link  as={NavLink} to="/login">Iniciar Sesión</Nav.Link>
                    <Nav.Link  as={NavLink} to="/register">Registrarse</Nav.Link>
                    <Nav.Link  as={NavLink} to="/account">Mi cuenta</Nav.Link>

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
