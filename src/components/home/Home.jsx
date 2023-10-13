import { Box, Typography, styled } from '@mui/material'

const Layout = styled(Box)(({ theme }) => ({
    // background: 'red',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
    // width: '80%',
    // height: '80%',
    // margin: 'auto'
}))

const LeftContainer = styled(Box)(({ theme }) => ({

}))

const RightContainer = styled(Box)(({ theme }) => ({

}))

const Content = styled(Box)(({ theme }) => ({
    display: "inline-flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "64px",
    width: '545px',
    height: '270px'
}))

const TextStyles = styled(Typography)(({ theme }) => ({
    color: "#141313",
    fontFamily: "IBM Plex Sans",
    fontSize: "102px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "90px",
    textTransform: "uppercase",
}))

const NameStyles = styled(Box)(({ theme }) => ({
    color: "#141313",
    fontFamily: "IBM Plex Sans",
    fontSize: "102px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "90px",
    textTransform: "uppercase",
}))



const Home = () => {
    return (
        <Layout>
            <LeftContainer>
                <Content>
                    <TextStyles>
                        My name
                        is <NameStyles>Sandeep Khadka...</NameStyles>
                        <Typography>Full Stack Developer</Typography>
                    </TextStyles>
                </Content>
            </LeftContainer>
            <RightContainer></RightContainer>
        </Layout>
    )
}

export default Home
