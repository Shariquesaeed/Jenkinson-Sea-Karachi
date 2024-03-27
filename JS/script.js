window.onload = function(){
    var ticker = document.getElementById("ticker");
    function updateticker(position) {
        var now = new Date();
        var dateStr = now.toLocaleDateString();
        var timeStr = now.toLocaleTimeString();
        var locationStr = "Unknown" ; 
        if(position)
        {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            locationStr = "Latitude: "+latitude+", Longitude: "+longitude;
        }
        ticker.innerText = "Date: "+dateStr+" | Time: "+timeStr+" | Location: "+locationStr ; 
    }
    function getLocation()
    {
        navigator.geolocation.getCurrentPosition(updateticker,function(error){
            console.error("Error getting Location",error);
            updateticker(null)
        });
    }
    setInterval(getLocation,1000);
//---------------------------------------------

var visitorCount= 1000;
function updateVisitorCount()
{
   var visitorCountElement= document.getElementById("visitor-count");
   visitorCountElement.textContent  = visitorCount.toLocaleString();
   visitorCount++;
}
updateVisitorCount();
setInterval(updateVisitorCount,10000)
 }

                    // gallery
                    var products = [
                        {"Id":1,"Name":"Shoes","Price":1000,"Quantity":50,"Image":"flower1.jpg"},
                        {"Id":2,"Name":"Cloths","Price":2500,"Quantity":50,"Image":"flower2.jpg"},
                        {"Id":3,"Name":"Chips","Price":100,"Quantity":50,"Image":"https://media.istockphoto.com/id/1128248556/photo/chips-on-white.jpg?s=612x612&w=0&k=20&c=f2zT8opV1JCUoNIE48czcNjNE9_0QTo0JB8skBO2-k0="},
                        {"Id":4,"Name":"Chocolate","Price":5000,"Quantity":50,"Image":"https://i.pinimg.com/736x/4c/f7/b8/4cf7b8fa13224525d7a0a5480c4cb56d.jpg"},
                        {"Id":5,"Name":"Biscuits","Price":500,"Quantity":50,"Image":"https://t4.ftcdn.net/jpg/02/24/40/43/360_F_224404329_KrZ69DD38fjb4zYKL01AKCy46zALlkWv.jpg"},
                        {"Id":6,"Name":"Candies","Price":1000,"Quantity":50,"Image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1-ITqE_Ap5yNJnB5sr9rzx5y0vWz2q-iEI5TlMY1GlA&s"},
                        {"Id":7,"Name":"Burger","Price":2000,"Quantity":50,"Image":"https://images.unsplash.com/photo-1603064752734-4c48eff53d05?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YnVyZ2VyfGVufDB8fDB8fHww"},
                        {"Id":8,"Name":"Pizza","Price":3000,"Quantity":50,"Image":"https://img.freepik.com/free-psd/freshly-baked-pizza-with-cut-slice-isolated-transparent-background_191095-9041.jpg?size=338&ext=jpg&ga=GA1.1.1448711260.1706140800&semt=sph"},
                    ]