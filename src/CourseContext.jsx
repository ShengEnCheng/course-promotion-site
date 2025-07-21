import React, { createContext, useContext, useState, useEffect } from 'react';

const CourseContext = createContext();

const defaultCourses = [
  {
    id: 1,
    title: 'Python 程式設計入門',
    description: '從零開始學習 Python，適合初學者，實作導向。',
    price: '3,500',
    duration: '8 週',
    level: '初級',
    instructor: '張講師',
    poster: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop',
    createdAt: new Date().toISOString()
  },
  {
    id: 2,
    title: '網頁前端開發實戰',
    description: '學習 HTML、CSS、JavaScript，打造互動網站。',
    price: '4,200',
    duration: '10 週',
    level: '中級',
    instructor: '李講師',
    poster: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=250&fit=crop',
    createdAt: new Date().toISOString()
  },
  {
    id: 3,
    title: '資料分析與視覺化',
    description: '掌握資料分析工具，學會數據視覺化呈現。',
    price: '3,800',
    duration: '6 週',
    level: '中級',
    instructor: '王講師',
    poster: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
    createdAt: new Date().toISOString()
  }
];

export function CourseProvider({ children }) {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const savedCourses = localStorage.getItem('courses');
    if (savedCourses) {
      setCourses(JSON.parse(savedCourses));
    } else {
      setCourses(defaultCourses);
      localStorage.setItem('courses', JSON.stringify(defaultCourses));
    }
  }, []);

  useEffect(() => {
    if (courses.length > 0) {
      localStorage.setItem('courses', JSON.stringify(courses));
    }
  }, [courses]);

  const addCourse = (courseData) => {
    const newCourse = {
      ...courseData,
      id: Date.now(),
      createdAt: new Date().toISOString()
    };
    setCourses(prev => [...prev, newCourse]);
    return newCourse;
  };

  const updateCourse = (id, courseData) => {
    setCourses(prev => prev.map(course => 
      course.id === id ? { ...course, ...courseData } : course
    ));
  };

  const deleteCourse = (id) => {
    setCourses(prev => prev.filter(course => course.id !== id));
  };

  const getCourse = (id) => {
    return courses.find(course => course.id === id);
  };

  const value = {
    courses,
    addCourse,
    updateCourse,
    deleteCourse,
    getCourse
  };

  return (
    <CourseContext.Provider value={value}>
      {children}
    </CourseContext.Provider>
  );
}

export function useCourses() {
  const context = useContext(CourseContext);
  if (!context) {
    throw new Error('useCourses must be used within a CourseProvider');
  }
  return context;
}