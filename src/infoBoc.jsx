import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
export default function InfoBox({}){
    const INIT_URL="https://images.unsplash.com/photo-1696912158241-be58ad220dcc?q=80&w=1394&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    let info={
        city:"Delhi",
        feelsLike:24.23,
        temp:23,
        tempMin:25.03,
        tempMax:25.9,
        humidity:48,
        weather:"haze",
    }
    return (
        <div className="InfoBox">
            <Card sx={{ maxWidth: 345 }}>
    <CardMedia
        sx={{ height: 140 }}
        image={INIT_URL}
        title="green iguana"
    />
    <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
        <p>Temerature = {info.temp}&deg;C</p>
        <p>Humidity = {info.humidity}&deg;C</p>
        <p>Max Temp = {info.tempMax}&deg;C</p>

        </Typography>
    </CardContent>
    
    </Card>
        </div>
    );
}