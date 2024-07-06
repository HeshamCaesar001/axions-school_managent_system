const bcrypt = require('bcrypt')
module.exports = class User { 

    constructor({utils, cache, config, cortex, managers, validators, mongomodels }={}){
        this.config              = config;
        this.cortex              = cortex;
        this.validators          = validators; 
        this.mongomodels         = mongomodels;
        this.tokenManager        = managers.token;
        this.usersCollection     = "users";
        this.userExposed         = ['createUser'];
        this.httpExposed         = ['createUser', 'login'];
    }

    async createUser({username, email, password,firstName,lastName}){
        const user = {username, email, password,firstName,lastName};

        // Data validation
        let result = await this.validators.user.createUser(user);
        if(result) return result;
        
        user.password = bcrypt.hashSync(user.password,8);
        // Creation Logic
        let createdUser     = await this.mongomodels.user.create(user)
        // let longToken       = this.tokenManager.genLongToken({userId: createdUser._id, userKey: createdUser.key });
        
        // Response
        return {
            user: createdUser, 
             
        };
    }
    async login({username,password}){
        let result = await this.validators.user.login({username,password})
        if(result) return result;

        let user = await this.mongomodels.user.findOne({username})
        if(!user){
            return{
                error:'user not found'
            }
        }
        let validPss = bcrypt.compare(password,user.password);
        if(!validPss){
            return{
                error:"wrong credentials"
            }
        }
        let longToken = this.tokenManager.genShortToken({userId:user._id.toString(),userRole:user.role});
        return{
            longToken
        }
    }

}
