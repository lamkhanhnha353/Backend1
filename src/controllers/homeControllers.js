

const getHomepage = (req, res) =>{
    //process data
    //call model
    res.send('Hello world');
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