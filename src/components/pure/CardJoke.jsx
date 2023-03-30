import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

export default function CardJoke({
  joke,
  like,
  disLike,
  updateLikes,
  obtainJoke,
}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/1.jpg"
        title="Chuck Joke"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Chuck Norris Joke
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {joke.value}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=>updateLikes('like')}> <span style={{fontSize: '20px'}}>{like}</span><ThumbUpIcon/></Button>
        <Button size="small" onClick={()=>updateLikes('dislike')}> <span style={{fontSize: '20px'}}>{disLike}</span> <ThumbDownIcon/></Button>
        <Button size="small" onClick={obtainJoke}>Generate</Button>

      </CardActions>
    </Card>
  );
}
