import { Box, List, ListItem, ListItemText, Typography, styled } from '@mui/material'

const NavbarComponent = styled(Box)(({ theme }) => ({
    width: '285px',
    height: '960px',
    flexShrink: 0,
    borderRight: "1px solid rgba(20, 19, 19, 0.10)",
    background: "#141313",
    color: 'white'
}))


const LogoBox = styled(Box)(({ theme }) => ({
    marginLeft: '48px'
}))

const Logo = styled(Typography)(({ theme }) => ({
    color: '#FFF',
    // textAlign: "center",
    fontFamily: 'IBM Plex Serif',
    fontSize: '30px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: 'normal',
    marginTop: '56px'
}))

const NavItem = styled(Typography)(({ theme }) => ({
    displayInline: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 20,
    marginTop: '101px',
    marginLeft: '48px'
}))

const NavText = styled(Typography)(({ theme }) => ({
    color: "#FFF",
    // textAlign: "center",
    fontFamily: "IBM Plex Sans",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: "300",
    lineHeight: "30px",
    textTransform: "uppercase",
}))


const Navbar = () => {
    return (
        <NavbarComponent>
            <LogoBox>
                <Logo>
                    Sk
                </Logo>
            </LogoBox>

            {/* <List>
                <ListItem>
                    <ListItemText
                        primary="Single-line item"
                    />
                </ListItem>,
            </List> */}
            <NavItem>
                <NavText>Home</NavText>
                <NavText>About</NavText>
                <NavText>Services</NavText>
                <NavText>Works</NavText>
                <NavText>Blogs</NavText>
            </NavItem>
        </NavbarComponent>
    )
}

export default Navbar
