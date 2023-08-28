


//1- Create user: 
exports.createUser = async (req, res, next) => {
    try{
        res.status(201).json({
            data: {
                message: "success",
            }
        })
    }catch(err) {
        console.log(err)
    } 
}

/* 
exports.createUser = async (req, res) => {
    console.log(req.body);
    try {
      const newColomn = await ColomnModel.create(req.body);
  
      const task = await res.status(200).json({
        status: "success",
        data: {
          colomn: newColomn,
        },
      });
    } catch (err) {
      res.status(400).json({
        status: "fail",
        message: err,
      });
    }
  };
  
*/