import './MainMenu.css'
import {Dropdown} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

function MainMenu(prop) {
    return (
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Dropdown Button
        </Dropdown.Toggle>
  
        <Dropdown.Menu>
          <Dropdown.Item tag={Link} to="/">
            Home
          </Dropdown.Item>
          <Dropdown.Item tag={Link} to="/log">
            Calendar
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    )
}

export { MainMenu }