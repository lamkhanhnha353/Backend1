

const getHomepage = (req, res) =>{
    //process data
    //call model
    return res.render('home.ejs');
}

const pageHello =( req, res) => {
    res.send('<h1>Hello anh em hello anh oi</h1>');
}

const pageHoiDanIt = (req, res) =>{
    res.render('example.ejs');
}
module.exports = {
    getHomepage, pageHello, pageHoiDanIt
}