```react
import React, { useState, useEffect } from 'react';
import { 
  Home, 
  Calendar, 
  BookOpen, 
  GraduationCap, 
  User, 
  Bell, 
  ChevronRight, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  Circle,
  FileText,
  TrendingUp,
  LogOut,
  Settings
} from 'lucide-react';

// --- MOCK DATA ---
const studentData = {
  name: "Alex Johnson",
  grade: "11th Grade",
  gpa: "3.84",
  school: "Lincoln High School",
  studentId: "94827104",
  avatar: "https://i.pravatar.cc/150?img=11"
};

const scheduleToday = [
  { id: 1, subject: "AP Calculus AB", time: "08:00 AM - 08:50 AM", room: "Room 302", teacher: "Mr. Smith", color: "bg-blue-500" },
  { id: 2, subject: "US History", time: "08:55 AM - 09:45 AM", room: "Room 105", teacher: "Ms. Davis", color: "bg-red-500" },
  { id: 3, subject: "Biology Honors", time: "09:50 AM - 10:40 AM", room: "Lab 2", teacher: "Dr. Roberts", color: "bg-green-500" },
  { id: 4, subject: "Lunch", time: "10:40 AM - 11:20 AM", room: "Cafeteria", teacher: "", color: "bg-gray-400" },
  { id: 5, subject: "English Lit", time: "11:25 AM - 12:15 PM", room: "Room 201", teacher: "Mrs. Clark", color: "bg-purple-500" },
];

const assignmentsData = [
  { id: 1, title: "Chapter 4 Math Exercises", subject: "AP Calculus AB", dueDate: "Today, 11:59 PM", status: "pending", type: "Homework" },
  { id: 2, title: "Cold War Essay Draft", subject: "US History", dueDate: "Tomorrow, 8:00 AM", status: "pending", type: "Essay" },
  { id: 3, title: "Cell Structure Lab Report", subject: "Biology Honors", dueDate: "Friday, 11:59 PM", status: "pending", type: "Lab" },
  { id: 4, title: "Read Gatsby Ch 1-3", subject: "English Lit", dueDate: "Last Monday", status: "completed", type: "Reading" },
];

const gradesData = [
  { id: 1, subject: "AP Calculus AB", grade: "A-", percentage: 91, trend: "up" },
  { id: 2, subject: "US History", grade: "B+", percentage: 88, trend: "down" },
  { id: 3, subject: "Biology Honors", grade: "A", percentage: 95, trend: "up" },
  { id: 4, subject: "English Lit", grade: "A", percentage: 94, trend: "same" },
  { id: 5, subject: "Physical Education", grade: "A+", percentage: 100, trend: "same" },
];


// --- COMPONENTS ---

const Dashboard = () => {
  const nextClass = scheduleToday[2]; // Mocking currently being after 2nd period
  const pendingAssignments = assignmentsData.filter(a => a.status === 'pending');

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header section for mobile (hidden on desktop sidebar layout) */}
      <div className="md:hidden flex justify-between items-center mb-6">
        <div>
          <p className="text-sm text-slate-500 font-medium">Good morning,</p>
          <h1 className="text-2xl font-bold text-slate-800">{studentData.name.split(' ')[0]}!</h1>
        </div>
        <button className="p-2 bg-white rounded-full shadow-sm relative">
          <Bell className="w-6 h-6 text-slate-600" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
      </div>

      {/* Up Next Card */}
      <section>
        <h2 className="text-lg font-bold text-slate-800 mb-3">Up Next</h2>
        <div className="bg-gradient-to-br from-indigo-500 to-blue-600 rounded-3xl p-5 text-white shadow-lg shadow-indigo-200">
          <div className="flex justify-between items-start mb-4">
            <div>
              <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">In 15 mins</span>
            </div>
            <div className="p-2 bg-white/20 rounded-xl backdrop-blur-sm">
              <Clock className="w-5 h-5 text-white" />
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-1">{nextClass.subject}</h3>
          <p className="text-indigo-100 mb-4">{nextClass.teacher}</p>
          
          <div className="flex items-center space-x-4 text-sm font-medium">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1 opacity-80" />
              {nextClass.time.split(' - ')[0]}
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-1 opacity-80" />
              {nextClass.room}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded-3xl p-5 shadow-sm border border-slate-100 flex flex-col justify-center items-center text-center">
          <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-3">
            <TrendingUp className="w-6 h-6" />
          </div>
          <p className="text-3xl font-bold text-slate-800">{studentData.gpa}</p>
          <p className="text-sm text-slate-500 font-medium">Current GPA</p>
        </div>
        <div className="bg-white rounded-3xl p-5 shadow-sm border border-slate-100 flex flex-col justify-center items-center text-center">
          <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-3">
            <FileText className="w-6 h-6" />
          </div>
          <p className="text-3xl font-bold text-slate-800">{pendingAssignments.length}</p>
          <p className="text-sm text-slate-500 font-medium">Due Tasks</p>
        </div>
      </section>

      {/* Due Soon */}
      <section>
        <div className="flex justify-between items-end mb-4">
          <h2 className="text-lg font-bold text-slate-800">Due Soon</h2>
          <button className="text-sm text-indigo-600 font-semibold hover:underline">View All</button>
        </div>
        <div className="space-y-3">
          {pendingAssignments.slice(0, 2).map(assignment => (
            <div key={assignment.id} className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center">
              <div className="w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center mr-4 flex-shrink-0">
                <BookOpen className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-slate-800 font-semibold truncate">{assignment.title}</h4>
                <p className="text-sm text-slate-500 truncate">{assignment.subject}</p>
              </div>
              <div className="text-right ml-2 flex-shrink-0">
                <p className="text-xs font-semibold text-red-500 bg-red-50 px-2 py-1 rounded-md">{assignment.dueDate.split(',')[0]}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const Schedule = () => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-2xl font-bold text-slate-800">Today's Schedule</h2>
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-6 top-4 bottom-4 w-px bg-slate-200 z-0"></div>
        
        <div className="space-y-6 relative z-10">
          {scheduleToday.map((cls, index) => (
            <div key={cls.id} className="flex gap-4">
              <div className="flex flex-col items-center pt-1">
                <div className={`w-12 h-12 rounded-full ${cls.color} text-white flex items-center justify-center font-bold shadow-md border-4 border-slate-50`}>
                  {index + 1}
                </div>
              </div>
              <div className="bg-white flex-1 rounded-2xl p-4 shadow-sm border border-slate-100">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold text-slate-800 text-lg">{cls.subject}</h3>
                  <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-1 rounded-md">{cls.time.split(' - ')[0]}</span>
                </div>
                {cls.teacher && (
                  <div className="flex items-center text-sm text-slate-500 mt-2">
                    <User className="w-4 h-4 mr-2" /> {cls.teacher}
                  </div>
                )}
                <div className="flex items-center text-sm text-slate-500 mt-1">
                  <MapPin className="w-4 h-4 mr-2" /> {cls.room}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Assignments = () => {
  const [tasks, setTasks] = useState(assignmentsData);

  const toggleTask = (id) => {
    setTasks(tasks.map(t => 
      t.id === id ? { ...t, status: t.status === 'pending' ? 'completed' : 'pending' } : t
    ));
  };

  const pending = tasks.filter(t => t.status === 'pending');
  const completed = tasks.filter(t => t.status === 'completed');

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-2xl font-bold text-slate-800">Assignments</h2>
      
      <div className="space-y-4">
        <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider">To Do ({pending.length})</h3>
        {pending.map(task => (
          <div key={task.id} className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-start cursor-pointer hover:border-indigo-200 transition-colors" onClick={() => toggleTask(task.id)}>
            <button className="mt-1 mr-4 text-slate-300 hover:text-indigo-500 transition-colors">
              <Circle className="w-6 h-6" />
            </button>
            <div className="flex-1">
              <div className="flex justify-between">
                <h4 className="text-slate-800 font-semibold">{task.title}</h4>
                <span className="text-xs font-semibold px-2 py-1 bg-red-50 text-red-600 rounded-md whitespace-nowrap ml-2">
                  {task.dueDate}
                </span>
              </div>
              <p className="text-sm text-slate-500 mt-1">{task.subject} • {task.type}</p>
            </div>
          </div>
        ))}

        <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mt-8 pt-4 border-t border-slate-200">Completed ({completed.length})</h3>
        {completed.map(task => (
          <div key={task.id} className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-start opacity-70 cursor-pointer" onClick={() => toggleTask(task.id)}>
            <button className="mt-1 mr-4 text-green-500">
              <CheckCircle2 className="w-6 h-6" />
            </button>
            <div className="flex-1">
              <h4 className="text-slate-800 font-semibold line-through decoration-slate-300">{task.title}</h4>
              <p className="text-sm text-slate-500 mt-1">{task.subject}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Grades = () => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-slate-800">Grades</h2>
        <div className="text-right">
          <p className="text-sm text-slate-500">Cumulative GPA</p>
          <p className="text-xl font-bold text-indigo-600">{studentData.gpa}</p>
        </div>
      </div>

      <div className="grid gap-4">
        {gradesData.map((item) => (
          <div key={item.id} className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100 flex items-center justify-between">
            <div>
              <h3 className="font-bold text-slate-800 text-lg">{item.subject}</h3>
              <div className="flex items-center text-sm text-slate-500 mt-1">
                {item.trend === 'up' && <TrendingUp className="w-4 h-4 text-green-500 mr-1" />}
                {item.trend === 'down' && <TrendingUp className="w-4 h-4 text-red-500 mr-1 transform rotate-180" />}
                {item.trend === 'same' && <span className="w-4 h-4 bg-slate-300 rounded-full mr-1 flex items-center justify-center text-[10px] font-bold text-white">-</span>}
                Last updated 2d ago
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-2xl font-bold text-slate-800">{item.grade}</p>
                <p className="text-sm text-slate-500 font-medium">{item.percentage}%</p>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-300" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Profile = () => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-2xl font-bold text-slate-800">Profile</h2>
      
      {/* Digital ID Card */}
      <div className="bg-slate-900 rounded-3xl p-1 shadow-xl relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="bg-white/10 backdrop-blur-md rounded-[22px] p-6 text-white relative z-10 border border-white/20">
          <div className="flex justify-between items-start mb-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-indigo-200">{studentData.school}</p>
              <p className="text-sm font-medium text-slate-300">Student ID Card</p>
            </div>
            <GraduationCap className="w-8 h-8 text-indigo-300" />
          </div>
          
          <div className="flex items-center space-x-5">
            <img src={studentData.avatar} alt="Student Avatar" className="w-24 h-24 rounded-2xl border-2 border-white/30 shadow-lg object-cover" />
            <div>
              <h3 className="text-2xl font-bold mb-1">{studentData.name}</h3>
              <p className="text-indigo-200 mb-2">{studentData.grade}</p>
              <div className="bg-black/20 inline-block px-3 py-1 rounded-lg">
                <p className="text-xs font-mono text-slate-300">ID: {studentData.studentId}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-white/20 flex justify-between items-center">
             <div className="barcode w-32 h-8 bg-white/80 rounded-sm opacity-50"></div>
             <p className="text-xs text-slate-400">Valid 2023-2024</p>
          </div>
        </div>
      </div>

      {/* Settings List */}
      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
        <button className="w-full flex items-center justify-between p-4 hover:bg-slate-50 transition-colors border-b border-slate-100">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center mr-4">
              <Settings className="w-5 h-5" />
            </div>
            <span className="font-semibold text-slate-800">Account Settings</span>
          </div>
          <ChevronRight className="w-5 h-5 text-slate-400" />
        </button>
        <button className="w-full flex items-center justify-between p-4 hover:bg-slate-50 transition-colors border-b border-slate-100">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center mr-4">
              <Bell className="w-5 h-5" />
            </div>
            <span className="font-semibold text-slate-800">Notifications</span>
          </div>
          <ChevronRight className="w-5 h-5 text-slate-400" />
        </button>
        <button className="w-full flex items-center justify-between p-4 hover:bg-slate-50 transition-colors text-red-600">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-red-50 text-red-600 flex items-center justify-center mr-4">
              <LogOut className="w-5 h-5" />
            </div>
            <span className="font-semibold">Log Out</span>
          </div>
        </button>
      </div>
    </div>
  );
};


// --- MAIN APP ---

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'schedule', icon: Calendar, label: 'Schedule' },
    { id: 'assignments', icon: BookOpen, label: 'Tasks' },
    { id: 'grades', icon: GraduationCap, label: 'Grades' },
    { id: 'profile', icon: User, label: 'Profile' }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'home': return <Dashboard />;
      case 'schedule': return <Schedule />;
      case 'assignments': return <Assignments />;
      case 'grades': return <Grades />;
      case 'profile': return <Profile />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 md:flex md:justify-center">
      {/* Container wrapping everything to simulate a mobile app layout on desktop, 
        but fully functional and responsive on actual mobile devices. 
      */}
      <div className="w-full md:max-w-md md:h-screen md:overflow-hidden md:border-x md:border-slate-200 md:shadow-2xl md:bg-slate-50 relative flex flex-col">
        
        {/* Desktop Top Bar (Hidden on Mobile) */}
        <div className="hidden md:flex justify-between items-center p-6 bg-white border-b border-slate-100 shrink-0">
          <div className="flex items-center space-x-3">
             <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
               <GraduationCap className="w-5 h-5 text-white" />
             </div>
             <span className="font-bold text-lg text-slate-800">Student Portal</span>
          </div>
          <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </button>
        </div>

        {/* Main Scrollable Content Area */}
        <main className="flex-1 overflow-y-auto overflow-x-hidden p-5 pb-24 md:pb-6 custom-scrollbar">
           {renderContent()}
        </main>

        {/* Bottom Navigation (Mobile & Simulated App view) */}
        <nav className="fixed bottom-0 w-full md:absolute md:bottom-0 md:w-full bg-white border-t border-slate-200 px-6 py-4 pb-safe z-50 shrink-0">
          <div className="flex justify-between items-center max-w-md mx-auto">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex flex-col items-center justify-center space-y-1 w-16 transition-all duration-200 ${
                    isActive ? 'text-indigo-600' : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  <div className={`relative p-1.5 rounded-xl transition-all duration-300 ${isActive ? 'bg-indigo-50' : 'bg-transparent'}`}>
                    <Icon className={`w-6 h-6 ${isActive ? 'stroke-[2.5px]' : 'stroke-2'}`} />
                  </div>
                  <span className={`text-[10px] font-semibold ${isActive ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'} transition-all duration-300`}>
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>
        </nav>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .pb-safe { padding-bottom: env(safe-area-inset-bottom, 1rem); }
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background-color: #cbd5e1; border-radius: 20px; }
        
        /* Barcode CSS hack */
        .barcode {
          background-image: 
            linear-gradient(to right, 
              black 0%, black 2%, white 2%, white 4%, 
              black 4%, black 5%, white 5%, white 8%, 
              black 8%, black 12%, white 12%, white 13%,
              black 13%, black 16%, white 16%, white 18%,
              black 18%, black 19%, white 19%, white 22%,
              black 22%, black 24%, white 24%, white 25%,
              black 25%, black 27%, white 27%, white 30%,
              black 30%, black 33%, white 33%, white 35%,
              black 35%, black 37%, white 37%, white 40%,
              black 40%, black 41%, white 41%, white 44%,
              black 44%, black 48%, white 48%, white 50%,
              black 50%, black 52%, white 52%, white 54%, 
              black 54%, black 55%, white 55%, white 58%, 
              black 58%, black 62%, white 62%, white 63%,
              black 63%, black 66%, white 66%, white 68%,
              black 68%, black 69%, white 69%, white 72%,
              black 72%, black 74%, white 74%, white 75%,
              black 75%, black 77%, white 77%, white 80%,
              black 80%, black 83%, white 83%, white 85%,
              black 85%, black 87%, white 87%, white 90%,
              black 90%, black 91%, white 91%, white 94%,
              black 94%, black 98%, white 98%, white 100%
            );
        }
      `}} />
    </div>
  );
}

```
