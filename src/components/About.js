import React from 'react'
import "./App.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./App.css"

function About() {
  return (
    <div className='parent'>
        <div className='child'>
        <Card sx={{ maxWidth: 400, maxHeight: 400 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://www.w3schools.com/howto/img_avatar.png"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Parth Patel
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Bridesgroom
        </Typography>
      </CardContent>
    </Card>
    </div>
    <div className='child'>
    <Card sx={{ maxWidth: 400, maxHeight: 400 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://www.w3schools.com/howto/img_avatar.png"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Riya Patel
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Bride
        </Typography>
      </CardContent>
    </Card>
    </div>
    </div>

  )
}

export default About