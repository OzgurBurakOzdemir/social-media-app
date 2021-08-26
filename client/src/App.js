import React, { useEffect } from 'react'
// eslint-disable-next-line
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import { useDispatch } from 'react-redux'

import { getPosts } from './actions/posts'
import avatar from './images/avatar.png'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import useStyles from './styles'

const App = () =>
{
    const classes = useStyles()
    const dispatch = useDispatch()

    useEffect(() =>
    {
        dispatch(getPosts())
    }, [dispatch])

    return (
        <Container maxwidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center" > Social Network</Typography>
                <img className={classes.image} src={avatar} alt="social" height="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justifyContent="space-between" alignItems="stretch" spacing={3} >
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
