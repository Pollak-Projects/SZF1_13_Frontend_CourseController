# API Endpoints

## Subject
- ### GET || api/nyiltnap/subjects - getAll
- ### GET || api/nyiltnap/subject:id - GetById
    - #### Params: id
- ### POST || api/nyiltnap/subject - Create
    - #### Body: name, category, TopicInfo, SubjectInfo, SubjectContent, SubjectTeachers, Grade, Description  , CreatedAt, UpdatedAt, Profession
- ### PUT || api/nyiltnap/subject:id - updateRound
    - #### Params: id
    - #### Body: name, category, TopicInfo, SubjectInfo, SubjectContent, SubjectTeachers, Grade, Description  , CreatedAt, UpdatedAt, Profession
- ### DELETE || api/nyiltnap/subject:id - deleteRound
    - #### Params: id