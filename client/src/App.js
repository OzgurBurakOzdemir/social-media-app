import React from 'react'
// eslint-disable-next-line
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import avatar from './images/avatar.png'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'

const App = () =>
{
    return (
        <Container maxwidth="lg">
            <AppBar position="static" color="inherit">
                <Typography variant="h2" align="center" > Social Network</Typography>
                <img src={avatar} alt="memories" heigth="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3} >
                        <Grid item xs={12} sm={7} >
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4} >
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App
