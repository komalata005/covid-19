import React from 'react';
import CountUp from 'react-countup';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './Cards.css'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
     // display: 'flex',
     float:'left',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(3),
        width: theme.spacing(30),
        height: theme.spacing(15),
      },
    },
  }),
);

export default function SimplePaperCard({data}) {
  const classes = useStyles();
  const {confirmed,deaths,recovered,lastUpdate} = data;
  console.log(confirmed)
if(!confirmed){
  return 'data is loading...'
}
  return (
    <div className={`${classes.root} card-main`}>
      <Paper variant="square" elevation={4} component='div'>   
       <Card className='card-root1'>
      <CardContent>
        <Typography className='new' color="textSecondary" gutterBottom>
          Confirmed Cases
        </Typography>
       
      </CardContent>
   
    </Card>
    <Typography className='pos' variant="h5" component="h2">
        <CountUp start={0} end={confirmed.value} duration={2.75} separator="," />
        </Typography>
        <Typography variant="body2" component="p">
          Dated: {new Date(lastUpdate).toDateString()}
        </Typography>
</Paper>
      <Paper variant="square" elevation={5} component='div'> 
         <Card className='card-root2'>
      <CardContent>
        <Typography className='death' color="textSecondary" gutterBottom>
          Confirmed Deaths
        </Typography>
   
      </CardContent>
    </Card>
    <Typography className='pos' variant="h5" component="h2">
        <CountUp start={0} end={deaths.value} duration={2.75} separator="," />   
        </Typography>
         <Typography variant="body2" component="p">
          Dated: {new Date(lastUpdate).toDateString()}
        </Typography>
</Paper>
      <Paper variant="square" elevation={5} component='div'>   
       <Card className='card-root3'>
      <CardContent>
        <Typography className='rec' color="textSecondary" gutterBottom>
          Confirmed Recovered
        </Typography>
    
      </CardContent>
    </Card>
    <Typography className='pos' variant="h5" component="h2">
        <CountUp start={0} end={recovered.value} duration={2.75} separator="," />        </Typography>
        <Typography variant="body2" component="p">
          Dated: {new Date(lastUpdate).toDateString()}
        </Typography>
</Paper>
    </div>
  );
}