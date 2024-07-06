module.exports = {
    buildSchool: [
        {
            model: 'longText',
            required: true,
            path: "school_name",
        },
        {
            model: 'arrayOfStrings',
            path: "classes",
            required: false,
        }
    ],
    assignClassesToSchool: [
        {
            model: 'id',
            path: "schoolId",
            required: true,
        },
        {
            model: 'arrayOfStrings',
            path: "classes",
            required: true,
        }
    ],
}

