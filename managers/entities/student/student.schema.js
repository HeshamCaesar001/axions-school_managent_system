
module.exports ={
    createStudent:[
        {
            model:'longText',
            required:true,
            path:'name'
        },
        {
            model:'integer',
            required:true,
            path:'age'
        },{
            model:'id',
            required:true,
            path:'student_class',
            label:'Class'
        },{
            model:'id',
            required:true,
            path:'student_school',
            label:'School'
        }
    ]
}