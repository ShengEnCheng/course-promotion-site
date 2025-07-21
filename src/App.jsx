import React, { useState } from 'react';
import { CourseProvider, useCourses } from './CourseContext';
import AdminPanel from './AdminPanel';

function App() {
  return (
    <CourseProvider>
      <AppContent />
    </CourseProvider>
  );
}

function AppContent() {
  const [currentPage, setCurrentPage] = useState('home');
  const { courses } = useCourses();

  if (currentPage === 'admin') {
    return <AdminPanel onBack={() => setCurrentPage('home')} />;
  }

  return (
    <div style={{ 
      fontFamily: "'Inter', 'Noto Sans TC', sans-serif", 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
      minHeight: '100vh' 
    }}>
      <header style={{ 
        background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)', 
        color: '#fff', 
        padding: '2rem 2rem', 
        marginBottom: '3rem', 
        boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
        backdropFilter: 'blur(10px)'
      }}>
        <h1 style={{ 
          margin: 0, 
          fontSize: '2.8rem', 
          fontWeight: '700',
          letterSpacing: '1px',
          background: 'linear-gradient(45deg, #ffffff, #a8edea)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textShadow: '0 2px 4px rgba(0,0,0,0.3)'
        }}>
          ✨ 課程推廣網站
        </h1>
        <nav style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
          <button 
            onClick={() => setCurrentPage('home')}
            style={{ 
              background: currentPage === 'home' ? 'rgba(255,255,255,0.2)' : 'transparent', 
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
              e.target.style.background = currentPage === 'home' ? 'rgba(255,255,255,0.2)' : 'transparent';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            🏠 首頁
          </button>
          <button 
            onClick={() => setCurrentPage('courses')}
            style={{ 
              background: currentPage === 'courses' ? 'rgba(255,255,255,0.2)' : 'transparent', 
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
              e.target.style.background = currentPage === 'courses' ? 'rgba(255,255,255,0.2)' : 'transparent';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            📚 課程列表
          </button>
          <button 
            onClick={() => setCurrentPage('admin')}
            style={{ 
              background: 'linear-gradient(45deg, #11998e, #38ef7d)', 
              color: '#fff', 
              border: 'none', 
              borderRadius: '25px',
              padding: '0.6rem 1.5rem',
              fontWeight: '600',
              cursor: 'pointer',
              fontSize: '1rem',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(17,153,142,0.4)'
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 6px 20px rgba(17,153,142,0.6)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 15px rgba(17,153,142,0.4)';
            }}
          >
            ⚙️ 管理後台
          </button>
        </nav>
      </header>
      <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>
        {currentPage === 'home' && (
          <>
            <section style={{ 
              background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)', 
              padding: '3rem', 
              borderRadius: '20px', 
              marginBottom: '3rem', 
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.3)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: '-50%',
                right: '-50%',
                width: '200%',
                height: '200%',
                background: 'radial-gradient(circle, rgba(102,126,234,0.1) 0%, transparent 70%)',
                pointerEvents: 'none'
              }}></div>
              <h2 style={{ 
                fontSize: '2.5rem', 
                marginBottom: '1.5rem', 
                fontWeight: '700',
                background: 'linear-gradient(45deg, #1e3c72, #2a5298)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                position: 'relative',
                zIndex: 1
              }}>
                🚀 探索優質課程，開啟學習新旅程
              </h2>
              <p style={{ 
                fontSize: '1.2rem', 
                color: '#4a5568', 
                lineHeight: '1.8',
                position: 'relative',
                zIndex: 1
              }}>
                我們精選多元課程，協助您快速找到適合的學習資源，提升自我競爭力。💪
              </p>
            </section>
            <section>
              <h3 style={{ 
                marginBottom: '2rem', 
                fontSize: '2rem',
                fontWeight: '600',
                color: '#fff',
                textAlign: 'center',
                textShadow: '0 2px 4px rgba(0,0,0,0.3)'
              }}>
                ⭐ 熱門課程推薦 ({courses.length} 門課程)
              </h3>
              <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                {courses.map(course => (
                  <div 
                    key={course.id} 
                    style={{ 
                      background: 'linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.9) 100%)', 
                      borderRadius: '20px', 
                      boxShadow: '0 15px 35px rgba(0,0,0,0.1)', 
                      overflow: 'hidden', 
                      width: '320px',
                      transition: 'all 0.4s ease',
                      cursor: 'pointer',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255,255,255,0.3)',
                      position: 'relative'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                      e.currentTarget.style.boxShadow = '0 25px 50px rgba(0,0,0,0.2)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.1)';
                    }}
                  >
                    <div style={{
                      position: 'absolute',
                      top: '10px',
                      right: '10px',
                      background: 'linear-gradient(45deg, #667eea, #764ba2)',
                      color: '#fff',
                      padding: '0.3rem 0.8rem',
                      borderRadius: '15px',
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      zIndex: 2
                    }}>
                      {course.level}
                    </div>
                    {course.poster && (
                      <div style={{ position: 'relative', overflow: 'hidden' }}>
                        <img 
                          src={course.poster} 
                          alt={course.title}
                          style={{ 
                            width: '100%', 
                            height: '200px', 
                            objectFit: 'cover',
                            display: 'block',
                            transition: 'transform 0.4s ease'
                          }}
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                          onMouseOver={(e) => {
                            e.target.style.transform = 'scale(1.1)';
                          }}
                          onMouseOut={(e) => {
                            e.target.style.transform = 'scale(1)';
                          }}
                        />
                      </div>
                    )}
                    <div style={{ padding: '2rem' }}>
                      <h4 style={{ 
                        margin: '0 0 1rem 0', 
                        fontSize: '1.3rem',
                        fontWeight: '600',
                        color: '#1a202c'
                      }}>
                        {course.title}
                      </h4>
                      <p style={{ 
                        color: '#4a5568', 
                        fontSize: '1rem', 
                        marginBottom: '1.5rem',
                        lineHeight: '1.6'
                      }}>
                        {course.description}
                      </p>
                      <div style={{ 
                        fontSize: '0.9rem', 
                        color: '#718096', 
                        marginBottom: '1.5rem',
                        lineHeight: '1.8'
                      }}>
                        <div style={{ marginBottom: '0.5rem' }}>💰 價格: ${course.price}</div>
                        <div style={{ marginBottom: '0.5rem' }}>⏰ 時長: {course.duration}</div>
                        <div>👨‍🏫 講師: {course.instructor}</div>
                      </div>
                      <button 
                        style={{ 
                          background: 'linear-gradient(45deg, #667eea, #764ba2)', 
                          color: '#fff', 
                          border: 'none', 
                          borderRadius: '25px', 
                          padding: '0.8rem 2rem', 
                          cursor: 'pointer',
                          fontSize: '1rem',
                          fontWeight: '600',
                          width: '100%',
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
                        🎯 查看課程
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}
        {currentPage === 'courses' && (
          <section>
            <h2 style={{ 
              marginBottom: '2rem', 
              fontSize: '2.2rem',
              fontWeight: '600',
              color: '#fff',
              textAlign: 'center',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)'
            }}>
              📚 所有課程 ({courses.length} 門課程)
            </h2>
            <div style={{ display: 'grid', gap: '2rem' }}>
              {courses.map(course => (
                <div 
                  key={course.id} 
                  style={{ 
                    background: 'linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.9) 100%)', 
                    borderRadius: '20px', 
                    boxShadow: '0 15px 35px rgba(0,0,0,0.1)', 
                    overflow: 'hidden',
                    display: 'grid',
                    gridTemplateColumns: course.poster ? '250px 1fr auto' : '1fr auto',
                    alignItems: 'center',
                    gap: '2rem',
                    transition: 'all 0.3s ease',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255,255,255,0.3)',
                    position: 'relative'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.1)';
                  }}
                >
                  {course.poster && (
                    <div style={{ position: 'relative', overflow: 'hidden' }}>
                      <img 
                        src={course.poster} 
                        alt={course.title}
                        style={{ 
                          width: '250px', 
                          height: '150px', 
                          objectFit: 'cover',
                          display: 'block',
                          borderRadius: '15px',
                          transition: 'transform 0.3s ease'
                        }}
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                        onMouseOver={(e) => {
                          e.target.style.transform = 'scale(1.05)';
                        }}
                        onMouseOut={(e) => {
                          e.target.style.transform = 'scale(1)';
                        }}
                      />
                      <div style={{
                        position: 'absolute',
                        top: '10px',
                        left: '10px',
                        background: 'linear-gradient(45deg, #667eea, #764ba2)',
                        color: '#fff',
                        padding: '0.3rem 0.8rem',
                        borderRadius: '15px',
                        fontSize: '0.8rem',
                        fontWeight: '600'
                      }}>
                        {course.level}
                      </div>
                    </div>
                  )}
                  <div style={{ padding: '2rem' }}>
                    <h3 style={{ 
                      margin: '0 0 1rem 0', 
                      fontSize: '1.5rem',
                      fontWeight: '600',
                      color: '#1a202c'
                    }}>
                      {course.title}
                    </h3>
                    <p style={{ 
                      color: '#4a5568', 
                      fontSize: '1.1rem', 
                      margin: '0 0 1.5rem 0',
                      lineHeight: '1.6'
                    }}>
                      {course.description}
                    </p>
                    <div style={{ 
                      fontSize: '1rem', 
                      color: '#718096',
                      display: 'flex',
                      gap: '1.5rem',
                      flexWrap: 'wrap'
                    }}>
                      <span style={{ 
                        background: 'rgba(102,126,234,0.1)',
                        padding: '0.3rem 0.8rem',
                        borderRadius: '15px',
                        color: '#4c51bf'
                      }}>
                        💰 ${course.price}
                      </span>
                      <span style={{ 
                        background: 'rgba(56,178,172,0.1)',
                        padding: '0.3rem 0.8rem',
                        borderRadius: '15px',
                        color: '#38b2ac'
                      }}>
                        ⏰ {course.duration}
                      </span>
                      <span style={{ 
                        background: 'rgba(237,137,54,0.1)',
                        padding: '0.3rem 0.8rem',
                        borderRadius: '15px',
                        color: '#ed8936'
                      }}>
                        👨‍🏫 {course.instructor}
                      </span>
                    </div>
                  </div>
                  <div style={{ padding: '2rem', display: 'flex', alignItems: 'center' }}>
                    <button 
                      style={{ 
                        background: 'linear-gradient(45deg, #667eea, #764ba2)', 
                        color: '#fff', 
                        border: 'none', 
                        borderRadius: '25px', 
                        padding: '1rem 2rem', 
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
                      📖 查看詳情
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

export default App;