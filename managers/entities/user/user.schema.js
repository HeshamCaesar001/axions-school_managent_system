

module.exports = {
    createUser: [
        {
            model: 'username',
            required: true,
            path:'username'
        },
        {
            model:'email',
            required:true,
            path:'email'
        },
        {
            model:'password',
            required:true,
            path:'password'
        },{
            model:'string',
            required:true,
            path:'firstName'
        },{
            model:'string',
            required:true,
            path:'lastName'
        }
    ],
    login:[
        {
            model: 'username',
            required: true,
            path:'username'
        },{
            model:'password',
            required:true,
            path:'password'
        }
    ]
}


