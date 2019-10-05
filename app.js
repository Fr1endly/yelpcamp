const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000


app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

var campgrounds = [
    {name: "Salmon Creek", image: "https://pixabay.com/get/57e2d54b4852ad14f6da8c7dda793f7f1636dfe2564c704c732773d79744c35e_340.jpg"},
    {name: "Granite Hill", image: "https://pixabay.com/get/57e8d0424a5bae14f6da8c7dda793f7f1636dfe2564c704c732773d79744c35e_340.jpg"},
    {name: "Montain goats rest", image: "https://pixabay.com/get/57e8d3444855a914f6da8c7dda793f7f1636dfe2564c704c732773d79744c35e_340.jpg"},
    {name: "Montain goats rest", image: "https://pixabay.com/get/57e8d3444855a914f6da8c7dda793f7f1636dfe2564c704c732773d79744c35e_340.jpg"},
    {name: "Salmon Creek", image: "https://pixabay.com/get/57e2d54b4852ad14f6da8c7dda793f7f1636dfe2564c704c732773d79744c35e_340.jpg"},
    {name: "Granite Hill", image: "https://pixabay.com/get/57e8d0424a5bae14f6da8c7dda793f7f1636dfe2564c704c732773d79744c35e_340.jpg"},
    {name: "Montain goats rest", image: "https://pixabay.com/get/57e8d3444855a914f6da8c7dda793f7f1636dfe2564c704c732773d79744c35e_340.jpg"},
    {name: "Montain goats rest", image: "https://pixabay.com/get/57e8d3444855a914f6da8c7dda793f7f1636dfe2564c704c732773d79744c35e_340.jpg"},
]

//Routes
app.get('/', (req, res)=>{
    res.render("landing")
})

app.get('/campgrounds', (req, res)=>{
    res.render('campgrounds', {campgrounds: campgrounds})
})

app.post('/campgrounds', (req, res)=>{
    var name = req.body.name;
    var img = req.body.image;
    var newCamp = {name: name, image: img};
    campgrounds.push(newCamp);
    res.redirect('/campgrounds');
})

app.get('/campgrounds/new', (req, res)=>{
    res.render('new')
})


app.listen(PORT, process.env.IP, ()=>{console.log( `App is running on PORT ${PORT}` )});