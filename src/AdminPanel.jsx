import React, { useState } from 'react';
import { useCourses } from './CourseContext';

function AdminPanel({ onBack }) {
  const { courses, addCourse, updateCourse, deleteCourse } = useCourses();
  const [currentView, setCurrentView] = useState('list');
  const [editingCourse, setEditingCourse] = useState(null);

  return (
    <div style={{ 
      fontFamily: "'Inter', 'Noto Sans TC', sans-serif", 
      background: 'linear-gradient(135deg, #2d3a4b 0%, #3c4858 100%)', 
      minHeight: '100vh' 
    }}>
      <header style={{ 
        background: 'linear-gradient(135deg, #1a252f 0%, #2d3a4b 100%)', 
        color: '#fff', 
        padding: '2rem 2rem', 
        marginBottom: '3rem', 
        boxShadow: '0 8px 32px rgba(0,0,0,0.3)' 
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ 
            margin: 0, 
            fontSize: '2.5rem', 
            fontWeight: '700',
            letterSpacing: '1px',
            background: 'linear-gradient(45deg, #ffffff, #a8edea)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            ⚙️ 課程管理後台
          </h1>
          <button 
            onClick={onBack}
            style={{ 
              background: 'linear-gradient(45deg, #667eea, #764ba2)', 
              color: '#fff', 
              border: 'none', 
              borderRadius: '25px', 
              padding: '0.8rem 1.5rem', 
              cursor: 'pointer', 
              fontWeight: '600',
              fontSize: '1rem',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(102,126,234,0.4)'
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 6px 20px rgba(102,126,234,0.6)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 15px rgba(102,126,234,0.4)';
            }}
          >
            🏠 返回前台
          </button>
        </div>
        <nav style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
          <button 
            onClick={() => setCurrentView('list')}
            style={{ 
              background: currentView === 'list' ? 'rgba(255,255,255,0.2)' : 'transparent', 
              color: '#fff', 
              border: '2px solid rgba(255,255,255,0.3)', 
              borderRadius: '25px',
              padding: '0.6rem 1.5rem',
              fontWeight: '600',
              cursor: 'pointer',
              fontSize: '1rem',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)'
            }}
            onMouseOver={(e) => {
              e.target.style.background = 'rgba(255,255,255,0.2)';
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 4px 15px rgba(255,255,255,0.2)';
            }}
            onMouseOut={(e) => {
              e.target.style.background = currentView === 'list' ? 'rgba(255,255,255,0.2)' : 'transparent';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            📋 課程列表
          </button>
          <button 
            onClick={() => setCurrentView('add')}
            style={{ 
              background: currentView === 'add' ? 'rgba(255,255,255,0.2)' : 'transparent', 
              color: '#fff', 
              border: '2px solid rgba(255,255,255,0.3)', 
              borderRadius: '25px',
              padding: '0.6rem 1.5rem',
              fontWeight: '600',
              cursor: 'pointer',
              fontSize: '1rem',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)'
            }}
            onMouseOver={(e) => {
              e.target.style.background = 'rgba(255,255,255,0.2)';
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 4px 15px rgba(255,255,255,0.2)';
            }}
            onMouseOut={(e) => {
              e.target.style.background = currentView === 'add' ? 'rgba(255,255,255,0.2)' : 'transparent';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            ➕ 新增課程
          </button>
        </nav>
      </header>
      
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        {currentView === 'list' && (
          <CourseList 
            courses={courses} 
            onEdit={(course) => {
              setEditingCourse(course);
              setCurrentView('edit');
            }}
            onDelete={deleteCourse}
          />
        )}
        {currentView === 'add' && (
          <CourseForm 
            onSubmit={(courseData) => {
              addCourse(courseData);
              setCurrentView('list');
            }}
            onCancel={() => setCurrentView('list')}
          />
        )}
        {currentView === 'edit' && editingCourse && (
          <CourseForm 
            course={editingCourse}
            onSubmit={(courseData) => {
              updateCourse(editingCourse.id, courseData);
              setCurrentView('list');
              setEditingCourse(null);
            }}
            onCancel={() => {
              setCurrentView('list');
              setEditingCourse(null);
            }}
          />
        )}
      </main>
    </div>
  );
}

function CourseList({ courses, onEdit, onDelete }) {
  return (
    <div>
      <h2 style={{ marginBottom: '1.5rem', color: '#2d3a4b' }}>課程列表 ({courses.length} 門課程)</h2>
      <div style={{ display: 'grid', gap: '1rem' }}>
        {courses.map(course => (
          <div key={course.id} style={{ 
            background: '#fff', 
            borderRadius: '8px', 
            boxShadow: '0 2px 8px #eee', 
            padding: '1.5rem',
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            alignItems: 'start',
            gap: '1rem'
          }}>
            <div>
              <h3 style={{ margin: '0 0 0.5rem 0', color: '#2d3a4b' }}>{course.title}</h3>
              <p style={{ color: '#666', fontSize: '0.95rem', margin: '0 0 0.5rem 0' }}>{course.description}</p>
              <div style={{ fontSize: '0.85rem', color: '#888' }}>
                <span>價格: ${course.price} | </span>
                <span>時長: {course.duration} | </span>
                <span>難度: {course.level} | </span>
                <span>講師: {course.instructor}</span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button 
                onClick={() => onEdit(course)}
                style={{ background: '#4CAF50', color: '#fff', border: 'none', borderRadius: '4px', padding: '0.3rem 0.8rem', cursor: 'pointer', fontSize: '0.85rem' }}
              >
                編輯
              </button>
              <button 
                onClick={() => {
                  if (confirm('確定要刪除這門課程嗎？')) {
                    onDelete(course.id);
                  }
                }}
                style={{ background: '#f44336', color: '#fff', border: 'none', borderRadius: '4px', padding: '0.3rem 0.8rem', cursor: 'pointer', fontSize: '0.85rem' }}
              >
                刪除
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CourseForm({ course, onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    title: course?.title || '',
    description: course?.description || '',
    price: course?.price || '',
    duration: course?.duration || '',
    level: course?.level || '初級',
    instructor: course?.instructor || '',
    poster: course?.poster || ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div>
      <h2 style={{ marginBottom: '1.5rem', color: '#2d3a4b' }}>
        {course ? '編輯課程' : '新增課程'}
      </h2>
      <form onSubmit={handleSubmit} style={{ 
        background: '#fff', 
        borderRadius: '8px', 
        boxShadow: '0 2px 8px #eee', 
        padding: '2rem',
        maxWidth: '600px'
      }}>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#2d3a4b' }}>課程名稱</label>
          <input 
            type="text"
            value={formData.title}
            onChange={(e) => handleChange('title', e.target.value)}
            required
            style={{ width: '100%', padding: '0.5rem', border: '1px solid #ddd', borderRadius: '4px', fontSize: '1rem' }}
          />
        </div>
        
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#2d3a4b' }}>課程描述</label>
          <textarea 
            value={formData.description}
            onChange={(e) => handleChange('description', e.target.value)}
            required
            rows="3"
            style={{ width: '100%', padding: '0.5rem', border: '1px solid #ddd', borderRadius: '4px', fontSize: '1rem', resize: 'vertical' }}
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#2d3a4b' }}>課程海報圖片網址</label>
          <input 
            type="url"
            value={formData.poster}
            onChange={(e) => handleChange('poster', e.target.value)}
            placeholder="https://example.com/image.jpg"
            style={{ width: '100%', padding: '0.5rem', border: '1px solid #ddd', borderRadius: '4px', fontSize: '1rem' }}
          />
          {formData.poster && (
            <div style={{ marginTop: '0.5rem' }}>
              <img 
                src={formData.poster} 
                alt="課程海報預覽"
                style={{ 
                  width: '200px', 
                  height: '125px', 
                  objectFit: 'cover', 
                  borderRadius: '4px',
                  border: '1px solid #ddd'
                }}
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
          )}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#2d3a4b' }}>價格</label>
            <input 
              type="text"
              value={formData.price}
              onChange={(e) => handleChange('price', e.target.value)}
              required
              placeholder="3,500"
              style={{ width: '100%', padding: '0.5rem', border: '1px solid #ddd', borderRadius: '4px', fontSize: '1rem' }}
            />
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#2d3a4b' }}>課程時長</label>
            <input 
              type="text"
              value={formData.duration}
              onChange={(e) => handleChange('duration', e.target.value)}
              required
              placeholder="8 週"
              style={{ width: '100%', padding: '0.5rem', border: '1px solid #ddd', borderRadius: '4px', fontSize: '1rem' }}
            />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#2d3a4b' }}>難度等級</label>
            <select 
              value={formData.level}
              onChange={(e) => handleChange('level', e.target.value)}
              style={{ width: '100%', padding: '0.5rem', border: '1px solid #ddd', borderRadius: '4px', fontSize: '1rem' }}
            >
              <option value="初級">初級</option>
              <option value="中級">中級</option>
              <option value="高級">高級</option>
            </select>
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#2d3a4b' }}>講師姓名</label>
            <input 
              type="text"
              value={formData.instructor}
              onChange={(e) => handleChange('instructor', e.target.value)}
              required
              placeholder="張講師"
              style={{ width: '100%', padding: '0.5rem', border: '1px solid #ddd', borderRadius: '4px', fontSize: '1rem' }}
            />
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <button 
            type="submit"
            style={{ background: '#2d3a4b', color: '#fff', border: 'none', borderRadius: '4px', padding: '0.75rem 1.5rem', cursor: 'pointer', fontWeight: 'bold' }}
          >
            {course ? '更新課程' : '新增課程'}
          </button>
          <button 
            type="button"
            onClick={onCancel}
            style={{ background: '#666', color: '#fff', border: 'none', borderRadius: '4px', padding: '0.75rem 1.5rem', cursor: 'pointer', fontWeight: 'bold' }}
          >
            取消
          </button>
        </div>
      </form>
    </div>
  );
}

export default AdminPanel;