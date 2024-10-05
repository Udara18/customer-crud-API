const CustomerSchema = require('../model/CutomerSchema');

const create = (req,resp) => {
  try{
    let customerSchema = new CustomerSchema({
      name:req.body.name,
      address:req.body.address,
      salary:req.body.salary
    });

    customerSchema.save().then(result=>resp.status(201).json({'message':'customer was saved !'}))
        .catch(error=>resp.status(500).json({'message':'somthing went wrong',error:error}));
  }catch (e){
    resp.status(500).json({'message':'somthing went wrong',error:e});
  }
}

const findOneById = (req,resp) => {
    try{
      const customerId = req.params.Id;
        CustomerSchema.findById(customerId)
          .then(result=>{
            if(result){
              resp.status(200).json({'data':result})
            }else{
              resp.status(404).json({'message':'user not found'});
            }
          }).catch(error=>resp.status(500).json({'message':'something went wrong','error':error}));
    }catch (e){
      resp.status(500).json({'message':'somthing went wrong',error:e});
    }
}

const deleteOneById = (req,resp) => {
  try{
    const customerId = req.params.Id;
    CustomerSchema.findByIdAndDelete(customerId)
        .then(result=>resp.status(201).json({'message':'customer was deleted !'}))
        .catch(error=>resp.status(500).json({'message':'somthing went wrong',error:error}));
  }catch (e){
    resp.status(500).json({'message':'somthing went wrong',error:e});
  }
}

const updateOneById = (req,resp) => {
    try{
        const customerId = req.params.Id;
        CustomerSchema.findByIdAndUpdate(customerId,{
            name:req.body.name,
            address:req.body.address,
            salary:req.body.salary
        })
            .then(result=>resp.status(201).json({'message':'customer was updated !'}))
            .catch(error=>resp.status(500).json({'message':'somthing went wrong',error:error}));
    }catch (e){
        resp.status(500).json({'message':'somthing went wrong',error:e});
    }
}

const searchOneById = (req,resp) => {
    try{
        /*const name = req.query.searchText;
        const address = req.query.searchText;*/ //same way below
        const searchText = req.query.searchText || '';
        const page = parseInt(req.query.page) || 1;
        const size = parseInt(req.query.size) || 10;
        const query = {
            $or:[
                {name:new RegExp(searchText,'i')},
                {address:new RegExp(searchText,'i')}
            ]
        };

        //these are in query now
/*        if(name) query.name = new RegExp(name,'i'); //add data to below query object simple format (i)
        if(name) query.address = new RegExp(address,'i'); //add data to below query object simple format (i)*/

        CustomerSchema.find(query).skip((page-1)*size).limit(size)
            .then(result=>resp.status(200).json({'data':result}))
            .catch(error=>resp.status(500).json({'message':'something went wrong','error':error}));
    }catch (e){
        resp.status(500).json({'message':'somthing went wrong',error:e});
    }
}

module.exports = {create,findOneById,deleteOneById,updateOneById,searchOneById}