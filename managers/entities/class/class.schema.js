module.exports = {
    buildClass: [
        {
            model: 'longText',
            required: true,
            path: "class_name",
        },
        {
            model: 'arrayOfStrings',
            path: "students",
            required: false,
        },
        {
            model: 'id',
            path: "school",
            required: true,
        }
    ],
    assignStudentsToClass: [
        {
            model: 'arrayOfStrings',
            path: "students",
            required: true,
        },
    ]
}

