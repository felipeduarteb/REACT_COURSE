import React, { useEffect, useState } from 'react';
import Course from '../../components/Course';
import { getCourses } from '../../services/getCourses';
import { Container } from './styled';

function Courses() {
    const [courses, setCourses] = useState([]);
    const handleCourses = async () => {
        const response = await getCourses();
        setCourses(response);
    }

    useEffect(() => {
        handleCourses();
    }, []);

    return (
        <Container>
            {
                courses.map((item) => {
                    return (
                        <Course
                            imagem={item.image}
                            curso={item.name}
                        />
                    );
                })
            }

        </Container>
    );
}

export default Courses;