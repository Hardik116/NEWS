const validate=(schema)=>async(req,res,next)=>{
    try {
        const parsebody = await schema.parseAsync(req.body);
        req.body = parsebody;
        next();
    } catch (err) {
        const message = "FILL INPUT PROPERLY";
        const extdetail =err.errors[0].message; 
        const status = 422;
        const error ={
            status,message,extdetail
        };
        console.log(message);
        next(error);

    }

};

module.exports=validate;