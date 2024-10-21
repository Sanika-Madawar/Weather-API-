import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
// icons imported from mui inorder to display according to the conditions
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}){
    const INIT_URL = "https://plus.unsplash.com/premium_photo-1715972898845-62dd6786fb58?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL = "https://media.istockphoto.com/id/2162798317/photo/beautiful-snow-mountain-road-trip-in-leh-ladakh.webp?a=1&b=1&s=612x612&w=0&k=20&c=SudaJ5jJEXI3px_d_AIBfUQItSlX-YEk0AteZC-nRSs=";
    const HOT_URL = "https://media.istockphoto.com/id/1147335712/photo/grass-flower.webp?a=1&b=1&s=612x612&w=0&k=20&c=fFMyS8AySudis31IiqhFbsW3NclSnhPY1UzQanDRexo=";
    const RAIN_URL = "https://media.istockphoto.com/id/498063665/photo/rainy-landscape.webp?a=1&b=1&s=612x612&w=0&k=20&c=hOE6L7f7OoSKUW1Q4tR27GoEkOU_ywKJGCvSO77SeZg=";
    const cold_Image = "";
    const hot_Image = "";
    const rain_Image = "";
    // let info = {
    //     city : "Pune" ,
    //     temp : 27.81,
    //     tempMin : 27.81,
    //     tempMax : 27.81,
    //     humidity : 67 ,
    //     feelsLike : 29.94 ,
    //     weather : "haze" ,
    // };
    return(
        <div className="InfoBox">
          {/* <h1>WeatherInfo - {info.weather}</h1> */}
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image = {info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL} 
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {info.city} {info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ? <WbSunnyIcon/> : <AcUnitIcon/> }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
          <p>Temperature : {info.temp}&deg;C </p>
          <p>Humidity : {info.humidity}&deg;C</p>
          <p>Min temp : {info.tempMin}&deg;C</p>
          <p>Max temp : {info.tempMax}&deg;C</p>
          <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
      
    </Card>
    </div>
        </div>
    );
}