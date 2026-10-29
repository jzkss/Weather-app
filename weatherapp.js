





let inputbox = document.getElementById("searchcity")

inputbox.addEventListener('keydown',()=>{
	if (event.key==="Enter"){
		let link = "https://api.openweathermap.org/data/2.5/weather?q=" + inputbox.value+"&appid=865ddd9e8c93b74eca4d1e4eed82b21e"
		console.log(link)
		
		fetch(link).then(x => x.text()).then(data => {
			data= JSON.parse(data)
			console.log(typeof(data))

			let cityname = inputbox.value
			let description = data["weather"][0].description;
			console.log(data["weather"][0].icon)
			let temp = data.main.temp
			let humidity = data.main.humidity 
			let windspeed = data.wind.speed
			let sunset = data.sys.sunset
			
			let today = new Date()
			todaydate = parseInt(today.getMonth())+1 + "/" +today.getDate()
			
			const date = new Date(sunset *1000)
			let timesunset = date.toLocaleTimeString()
			timesunset = timesunset.slice(0,4);

			let imagediv = document.getElementById("icon")
			let citydiv = document.getElementById("cityname")
			let tempdiv = document.getElementById("temp")
			let descripdiv = document.getElementById("description")
			let humdiv = document.getElementById("hum2")
			let wspeeddiv = document.getElementById("wspeed2")
			let sunsetdiv = document.getElementById("sunset2")
			let todaydiv = document.getElementById("date")

			citydiv.innerHTML = cityname 
			tempdiv.innerHTML = Math.round ((parseFloat(temp) - 273.15) * 1.8 +32)
			descripdiv.innerHTML = description
			humdiv.innerHTML = humidity
			wspeeddiv.innerHTML = windspeed
			sunsetdiv.innerHTML = timesunset
			todaydiv.innerHTML = todaydate
			imagediv.src = "https://openweathermap.org/payload/api/media/file/" + data["weather"][0].icon + ".png"
			
		});
	}
})