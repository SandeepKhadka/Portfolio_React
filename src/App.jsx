import { Box, styled } from "@mui/material"
import "./App.css"
import Home from "./components/home/home"
import Navbar from "./components/navbar/navbar"


const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  maxWidth: '1920px'
}))

const MainComponent = styled(Box)(({ theme }) => ({
  width: "1200px",
  height: "960px",
  flexShrink: 0,
  background: 'white'
}))


const App = () => {
  return (
    <>
      <Container>
        <Navbar />
        <MainComponent>
          <Home />
        </MainComponent>
      </Container>
    </>
  )
}

export default App
