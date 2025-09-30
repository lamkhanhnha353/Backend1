

const getHomepage = (req, res) =>{
    //process data
    //call model
    return res.render('home.ejs');
}

const getPageHello =( req, res) => {
    res.send('<h1>Hello anh em hello anh oi</h1>');
}

const getPageHoiDanIt = (req, res) =>{
    res.render('example.ejs');
}

const postCreateUser = (req, res)=> {
    console.log('check req.body', req.body)
    res.send('hello')
}
module.exports = {
    getHomepage, getPageHello, getPageHoiDanIt,
    postCreateUser
}