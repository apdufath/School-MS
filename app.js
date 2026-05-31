/* ==========================================================================
   STATE AND LOCAL STORAGE INITIALIZATION
   ========================================================================== */
const SEEDS = {
  teachers: [
    { id: 'TCH001', name: 'Mr. Hassan Ahmed', subject: 'Mathematics', qualification: 'PhD in Math', phone: '528630', email: 'teacher@abaarso.edu', joiningDate: '2022-09-01', experience: '8 Years', status: 'Active' },
    { id: 'TCH002', name: 'Mariam Muse', subject: 'English', qualification: 'MA in Applied Linguistics', phone: '528631', email: 'mariam@abaarsotechuniversity.org', joiningDate: '2023-01-15', experience: '5 Years', status: 'Active' },
    { id: 'TCH003', name: 'Mohamed Duale', subject: 'Science', qualification: 'MSc in Physics', phone: '528632', email: 'm.duale@abaarsotechuniversity.org', joiningDate: '2020-08-10', experience: '12 Years', status: 'Active' },
    { id: 'TCH004', name: 'Mustafe Gedi', subject: 'Somali', qualification: 'BA in Somali Literature', phone: '528633', email: 'gedi@abaarsotechuniversity.org', joiningDate: '2019-10-01', experience: '15 Years', status: 'Active' },
    { id: 'TCH005', name: 'Sarah Jenkins', subject: 'History', qualification: 'BA in World History', phone: '528634', email: 'sarah.j@abaarsotechuniversity.org', joiningDate: '2024-02-18', experience: '3 Years', status: 'On Leave' },
    { id: 'TCH006', name: 'Ayan Elmi', subject: 'Art', qualification: 'MA in Fine Arts', phone: '528635', email: 'ayan@abaarsotechuniversity.org', joiningDate: '2021-05-12', experience: '6 Years', status: 'Active' }
  ],
  classes: [
    { id: 'CLS001', name: 'Grade 10-A', teacherId: 'TCH001', room: 'Room 204' },
    { id: 'CLS002', name: 'Grade 10-B', teacherId: 'TCH002', room: 'Room 205' },
    { id: 'CLS003', name: 'Grade 11-A', teacherId: 'TCH003', room: 'Science Lab 1' },
    { id: 'CLS004', name: 'Grade 11-B', teacherId: 'TCH004', room: 'Room 102' },
    { id: 'CLS005', name: 'Grade 12-A', teacherId: 'TCH005', room: 'Main Lecture Hall' }
  ],
  students: [
    { id: 'STU001', name: 'Mohamed Ali', age: 16, gender: 'Male', class: 'Grade 10-A', parentName: 'Ali Mohamed', phone: '511223', address: '26 June District, Hargeisa', status: 'Active' },
    { id: 'STU002', name: 'Faduma Omer', age: 15, gender: 'Female', class: 'Grade 10-A', parentName: 'Omer Dahir', phone: '511224', address: 'Shaab Area, Hargeisa', status: 'Active' },
    { id: 'STU003', name: 'Hamza Yusuf', age: 16, gender: 'Male', class: 'Grade 10-B', parentName: 'Yusuf Elmi', phone: '511225', address: 'Koodbuur, Hargeisa', status: 'Active' },
    { id: 'STU004', name: 'Yasmin Warsame', age: 17, gender: 'Female', class: 'Grade 11-A', parentName: 'Warsame Abdi', phone: '511226', address: 'Jigjiga Yar, Hargeisa', status: 'Active' },
    { id: 'STU005', name: 'Barkhad Barre', age: 18, gender: 'Male', class: 'Grade 12-A', parentName: 'Barre Hassan', phone: '511227', address: 'Sinay, Hargeisa', status: 'Active' },
    { id: 'STU006', name: 'Hodan Kahin', age: 15, gender: 'Female', class: 'Grade 10-B', parentName: 'Kahin Farah', phone: '511228', address: 'Goljano, Hargeisa', status: 'Active' },
    { id: 'STU007', name: 'Zakarie Mohamed', age: 17, gender: 'Male', class: 'Grade 11-B', parentName: 'Mohamed Duale', phone: '511229', address: 'Masalaha, Hargeisa', status: 'Active' },
    { id: 'STU008', name: 'Nasteha Guleid', age: 16, gender: 'Female', class: 'Grade 11-A', parentName: 'Guleid Haddi', phone: '511230', address: 'Macalin Harun, Hargeisa', status: 'Active' },
    { id: 'STU009', name: 'Khadar Said', age: 17, gender: 'Male', class: 'Grade 11-B', parentName: 'Said Ahmed', phone: '511231', address: 'Mohamoud Haybe, Hargeisa', status: 'Active' },
    { id: 'STU010', name: 'Hawa Liban', age: 18, gender: 'Female', class: 'Grade 12-A', parentName: 'Liban Artan', phone: '511232', address: 'Pepsi District, Hargeisa', status: 'Active' },
    { id: 'STU011', name: 'Sulieman Jama', age: 16, gender: 'Male', class: 'Grade 10-A', parentName: 'Jama Ali', phone: '511233', address: 'Stadium Area, Hargeisa', status: 'Active' },
    { id: 'STU012', name: 'Muna Gele', age: 17, gender: 'Female', class: 'Grade 12-A', parentName: 'Gele Roble', phone: '511234', address: 'Airport District, Hargeisa', status: 'Active' }
  ],
  exams: [
    { id: 'EX001', subject: 'Mathematics', date: '2026-06-15', time: '09:00 AM', room: 'Main Lecture Hall' },
    { id: 'EX002', subject: 'English', date: '2026-06-16', time: '09:00 AM', room: 'Room 204 & 205' },
    { id: 'EX003', subject: 'Science', date: '2026-06-17', time: '11:00 AM', room: 'Science Lab 1' },
    { id: 'EX004', subject: 'Somali', date: '2026-06-18', time: '09:00 AM', room: 'Main Hall' }
  ],
  results: [
    { id: 'RES001', studentId: 'STU001', subject: 'Mathematics', score: 92 },
    { id: 'RES002', studentId: 'STU001', subject: 'English', score: 85 },
    { id: 'RES003', studentId: 'STU002', subject: 'Mathematics', score: 78 },
    { id: 'RES004', studentId: 'STU002', subject: 'English', score: 94 },
    { id: 'RES005', studentId: 'STU003', subject: 'Mathematics', score: 62 },
    { id: 'RES006', studentId: 'STU003', subject: 'English', score: 71 },
    { id: 'RES007', studentId: 'STU004', subject: 'Science', score: 98 },
    { id: 'RES008', studentId: 'STU005', subject: 'Mathematics', score: 45 }
  ],
  fees: [
    { studentId: 'STU001', amountDue: 1500, amountPaid: 1350 },
    { studentId: 'STU002', amountDue: 1500, amountPaid: 1000 },
    { studentId: 'STU003', amountDue: 1500, amountPaid: 500 },
    { studentId: 'STU004', amountDue: 1500, amountPaid: 1500 },
    { studentId: 'STU005', amountDue: 1500, amountPaid: 0 },
    { studentId: 'STU006', amountDue: 1500, amountPaid: 1200 },
    { studentId: 'STU007', amountDue: 1500, amountPaid: 300 },
    { studentId: 'STU008', amountDue: 1500, amountPaid: 1500 },
    { studentId: 'STU009', amountDue: 1500, amountPaid: 1500 },
    { studentId: 'STU010', amountDue: 1500, amountPaid: 0 },
    { studentId: 'STU011', amountDue: 1500, amountPaid: 1500 },
    { studentId: 'STU012', amountDue: 1500, amountPaid: 800 }
  ],
  announcements: [
    { id: 'ANN001', title: 'End of Term Examinations Schedule', date: '2026-05-28', category: 'Academic', message: 'The end-of-term academic schedules have been posted on the central portal. Testing begins June 15th, 2026. Please check your rooms and timings.', pinned: true },
    { id: 'ANN002', title: 'Annual Somali Cultural Festival', date: '2026-05-25', category: 'Event', message: 'Join us for our yearly Cultural Celebration on June 5th, 2026. Traditional dances, poetry, and displays of Somaliland history will take place in the main quadrangle.', pinned: false },
    { id: 'ANN003', title: 'New Science Laboratory Inauguration', date: '2026-05-20', category: 'General', message: 'We are thrilled to unveil our fully upgraded chemistry and physics modules in Lab 1. Modern equipment facilitates experimental learning for Grades 11 and 12 starting Sunday.', pinned: false }
  ],
  timetable: {
    'Grade 10-A': {
      'Saturday': { '1': { subject: 'Mathematics', teacherId: 'TCH001' }, '2': { subject: 'Mathematics', teacherId: 'TCH001' }, '3': { subject: 'Somali', teacherId: 'TCH004' } },
      'Sunday': { '1': { subject: 'English', teacherId: 'TCH002' }, '2': { subject: 'English', teacherId: 'TCH002' }, '4': { subject: 'Science', teacherId: 'TCH003' } },
      'Monday': { '3': { subject: 'History', teacherId: 'TCH005' }, '5': { subject: 'Art', teacherId: 'TCH006' } }
    }
  },
  settings: {
    name: 'Abaarso School',
    tagline: 'Imagine · Innovate · Inspire',
    location: "Sha'ab Area, Hargiesa, Somaliland",
    phone: '528629',
    email: 'info@abaarsotechuniversity.org',
    primaryColor: '#8B0000',
    language: 'en'
  }
};

const DEFAULT_USERS = [
  { id: 'USR001', name: 'Admin Registrar', email: 'admin@abaarso.edu', password: 'admin123', role: 'Admin', status: 'Active', lastLogin: '2026-05-30 09:00 AM' },
  { id: 'USR002', name: 'Mr. Hassan Ahmed', email: 'teacher@abaarso.edu', password: 'teacher123', role: 'Teacher', status: 'Active', lastLogin: '2026-05-30 10:15 AM', teacherId: 'TCH001' },
  { id: 'USR003', name: 'Mohamed Ali', email: 'student@abaarso.edu', password: 'student123', role: 'Student', status: 'Active', lastLogin: '2026-05-30 08:30 AM', studentId: 'STU001' }
];

let teachers = JSON.parse(localStorage.getItem('teachers')) || [...SEEDS.teachers];
let classes = JSON.parse(localStorage.getItem('classes')) || [...SEEDS.classes];
let students = JSON.parse(localStorage.getItem('students')) || [...SEEDS.students];
let exams = JSON.parse(localStorage.getItem('exams')) || [...SEEDS.exams];
let results = JSON.parse(localStorage.getItem('results')) || [...SEEDS.results];
let fees = JSON.parse(localStorage.getItem('fees')) || [...SEEDS.fees];
let announcements = JSON.parse(localStorage.getItem('announcements')) || [...SEEDS.announcements];
let timetable = JSON.parse(localStorage.getItem('timetable')) || {...SEEDS.timetable};
let settings = JSON.parse(localStorage.getItem('settings')) || {...SEEDS.settings};
let users = JSON.parse(localStorage.getItem('users')) || [...DEFAULT_USERS];

/* Seeding historical data generator for 30 school days back (skipping Fridays) */
function generateMockAttendance() {
  let mockList = [];
  const today = new Date("2026-05-30");
  
  for (let i = 30; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    
    // Skip Fridays (day index 5)
    if (date.getDay() === 5) continue;
    
    const dateStr = date.toISOString().slice(0, 10);
    
    students.forEach((s, idx) => {
      const subjectsList = ['Mathematics', 'English', 'Science', 'History', 'Somali', 'Art'];
      const subject = subjectsList[(idx + date.getDate()) % subjectsList.length];
      
      const rand = Math.random();
      let status = 'present';
      let note = '';
      
      if (rand < 0.84) {
        status = 'present';
      } else if (rand < 0.89) {
        status = 'absent';
        const absentNotes = ['Fever flu', 'Family travel', 'Doctor appointment', 'Severe headache'];
        note = absentNotes[Math.floor(Math.random() * absentNotes.length)];
      } else if (rand < 0.96) {
        status = 'late';
        const lateNotes = ['Transport breakdown', 'Heavy rain delay', 'Overslept', 'Traffic congestion'];
        note = lateNotes[Math.floor(Math.random() * lateNotes.length)];
      } else {
        status = 'excused';
        const excusedNotes = ['Official sports event', 'Visa application interview', 'Family emergency'];
        note = excusedNotes[Math.floor(Math.random() * excusedNotes.length)];
      }
      
      mockList.push({
        id: Date.now() - (i * 86400000) + idx,
        date: dateStr,
        studentId: s.id,
        studentName: s.name,
        class: s.class,
        subject: subject,
        status: status,
        note: note,
        markedBy: 'Admin Registrar',
        markedAt: new Date(date).toISOString()
      });
    });
  }
  return mockList;
}

let attendance = JSON.parse(localStorage.getItem('attendance')) || [];
if (attendance.length === 0) {
  attendance = generateMockAttendance();
  localStorage.setItem('attendance', JSON.stringify(attendance));
}

function saveAllToLocalStorage() {
  localStorage.setItem('teachers', JSON.stringify(teachers));
  localStorage.setItem('classes', JSON.stringify(classes));
  localStorage.setItem('students', JSON.stringify(students));
  localStorage.setItem('exams', JSON.stringify(exams));
  localStorage.setItem('results', JSON.stringify(results));
  localStorage.setItem('fees', JSON.stringify(fees));
  localStorage.setItem('announcements', JSON.stringify(announcements));
  localStorage.setItem('timetable', JSON.stringify(timetable));
  localStorage.setItem('settings', JSON.stringify(settings));
  localStorage.setItem('attendance', JSON.stringify(attendance));
  localStorage.setItem('users', JSON.stringify(users));
}

/* ==========================================================================
   TRANSLATION SYSTEM (BILINGUAL DICTIONARY)
   ========================================================================== */
const dictionary = {
  en: {
    dashboard: "Dashboard", students: "Students", teachers: "Teachers", classes: "Classes",
    timetable: "Timetable", exams: "Exams & Results", fees: "Fees Ledger", announcements: "Notices",
    settings: "Settings", admin_role: "System Admin", students_lbl: "Students", teachers_lbl: "Teachers",
    classes_lbl: "Classes", events_lbl: "Upcoming Events", add_stud_btn: "Add Student", add_teach_btn: "Add Teacher",
    add_class_btn: "Add Class", add_exam_btn: "Add Exam", enter_score_btn: "Enter Score",
    record_pay_btn: "Record Payment", export_csv_btn: "Export CSV", print_btn: "Print Timetable",
    welcome_title: "Welcome to Abaarso School Management System",
    welcome_body: "Abaarso School is a leader in progressive academic excellence. This single page platform enables educators and administrators to maintain student profiles, structure academic timetables, record exams performance, regulate fee collection registers, and manage institutional publications efficiently.",
    recent_ann_title: "Recent Announcements", quick_act_title: "Quick Actions", notice_bar_lbl: "Notice",
    student_ledger: "Student Registry", teacher_ledger: "Teachers Directory", class_ledger: "Classes Overview",
    weekly_grid: "Weekly Grid Schedule", exam_schedule: "Exam Schedule", exam_results: "Results Ledger",
    fees_summary: "Fees Management Accounts", post_ann: "Post Announcement", school_details: "School Profile Details",
    theme_cust: "Theme & Language", color_pick: "Primary Theme Accent", lang_toggle: "System Language",
    save_btn: "Save Settings", total_col_card: "Total Collected", total_pend_card: "Total Pending",
    total_over_card: "Total Overdue", footer_text: "© 2026 Abaarso School · Hargiesa, Somaliland",
    performance_graph: "Performance GPA Trend", exam_stats: "Exam Status",
    attendance: "Attendance", todays_rate: "Today's Attendance"
  },
  so: {
    dashboard: "Dashboard-ka", students: "Ardayda", teachers: "Macallimiinta", classes: "Fasallada",
    timetable: "Jadwalka", exams: "Imtixaannada", fees: "Lacagaha", announcements: "Ogaysiisyada",
    settings: "Habeeynta", admin_role: "Maamulaha Nidaamka", students_lbl: "Ardayda", teachers_lbl: "Macallimiinta",
    classes_lbl: "Fasallada", events_lbl: "Dhacdooyinka", add_stud_btn: "Ku Dar Arday", add_teach_btn: "Ku Dar Macallin",
    add_class_btn: "Ku Dar Fasal", add_exam_btn: "Ku Dar Imtixaan", enter_score_btn: "Geli Natiijo",
    record_pay_btn: "Diiwaangeli Lacag", export_csv_btn: "U Dhoofi CSV", print_btn: "Daabac Jadwalka",
    welcome_title: "Ku soo dhowow Nidaamka Dugsiga Abaarso",
    welcome_body: "Dugsiga Abaarso waa hormuudka tayada waxbarasho. Mashruucan wuxuu u suurtagelinayaa macallimiinta iyo maamulayaasha inay hayaan macluumaadka ardayda, habaynta jadwalka waxbarashada, diiwaangelinta natiijooyinka imtixaanka, xisaabinta lacagaha iyo maamulka ogeysiisyada dugsiga.",
    recent_ann_title: "Ogeysiisyadii Ugu Dambeeyey", quick_act_title: "Hawlo Degdeg Ah", notice_bar_lbl: "Ogeysiis",
    student_ledger: "Diiwaanka Ardayda", teacher_ledger: "Macallimiinta Dugsiga", class_ledger: "Guudmar Fasallada",
    weekly_grid: "Jadwalka Toddobaadlaha ah", exam_schedule: "Jadwalka Imtixaanka", exam_results: "Natiijooyinka",
    fees_summary: "Maamulka Xisaabaadka Lacagaha", post_ann: "Daabac Ogeysiis cusub", school_details: "Macluumaadka Dugsiga",
    theme_cust: "Midabada & Luuqadda", color_pick: "Midabka Nidaamka", lang_toggle: "Luuqadda Interface-ka",
    save_btn: "Keydi Habeeynta", total_col_card: "Wadarta la Ururiyey", total_pend_card: "Wadarta Sugan",
    total_over_card: "Wadarta Daahday", footer_text: "© 2026 Dugsiga Abaarso · Hargeysa, Somaliland",
    performance_graph: "GPA-da & Natiijooyinka", exam_stats: "Heerka Imtixaannada",
    attendance: "Joogitaanka", todays_rate: "Joogitaanka Maanta"
  }
};

/* ==========================================================================
   === LOGIN ACCESS SECURE SYSTEM GATE ===
   ========================================================================== */
// Current logged in user
let currentUser = JSON.parse(sessionStorage.getItem('currentUser')) || null;

function checkSessionGuard() {
  const isAuthorized = sessionStorage.getItem('loggedIn') === 'true';
  const loginScreen = document.getElementById('login-screen');
  const splashScreen = document.getElementById('splash-screen');

  // Ensure all role app containers are hidden initially
  const adminApp = document.getElementById('admin-app');
  const teacherApp = document.getElementById('teacher-app');
  const studentApp = document.getElementById('student-app');
  if (adminApp) adminApp.style.display = 'none';
  if (teacherApp) teacherApp.style.display = 'none';
  if (studentApp) studentApp.style.display = 'none';

  if (isAuthorized) {
    const user = JSON.parse(sessionStorage.getItem('currentUser'));
    if (user) {
      if (loginScreen) loginScreen.classList.add('hidden');
      
      // Play splash screen clean transition
      if (splashScreen && !splashScreen.classList.contains('fade-out')) {
        setTimeout(() => {
          splashScreen.classList.add('fade-out');
        }, 1000);
      }
      
      loadApp(user);
    } else {
      handleLogout();
    }
  } else {
    if (loginScreen) loginScreen.classList.remove('hidden');
    if (splashScreen) splashScreen.classList.add('fade-out');
  }
}

function handleLogin(event) {
  event.preventDefault();
  const emailInput = document.getElementById('login-email').value.trim();
  const passwordInput = document.getElementById('login-password').value.trim();

  // Query unified users table
  const user = users.find(u => u.email.toLowerCase() === emailInput.toLowerCase() && u.password === passwordInput);

  if (user) {
    if (user.status === 'Suspended') {
      showToast('Account suspended', 'error');
      return;
    }

    // Set last login time
    const now = new Date();
    user.lastLogin = now.toLocaleDateString() + ' ' + now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    saveAllToLocalStorage();

    sessionStorage.setItem('loggedIn', 'true');
    sessionStorage.setItem('currentUser', JSON.stringify(user));
    currentUser = user;

    showToast(`Access Granted. Welcome back, ${user.name}`, "success");
    
    // Transition clean fade
    const loginScreen = document.getElementById('login-screen');
    if (loginScreen) loginScreen.style.opacity = '0';
    setTimeout(() => {
      if (loginScreen) {
        loginScreen.classList.add('hidden');
        loginScreen.style.opacity = '1';
      }
      loadApp(user);
    }, 400);
  } else {
    showToast("Unauthorized entry. Invalid credentials", "error");
    document.getElementById('login-password').value = '';
    document.getElementById('login-password').focus();
  }
}

function handleLogout() {
  sessionStorage.removeItem('loggedIn');
  sessionStorage.removeItem('currentUser');
  currentUser = null;
  showToast("Logged out successfully", "info");
  
  const loginScreen = document.getElementById('login-screen');
  const adminApp = document.getElementById('admin-app');
  const teacherApp = document.getElementById('teacher-app');
  const studentApp = document.getElementById('student-app');
  
  if (adminApp) adminApp.style.display = 'none';
  if (teacherApp) teacherApp.style.display = 'none';
  if (studentApp) studentApp.style.display = 'none';
  
  if (loginScreen) {
    loginScreen.classList.remove('hidden');
    document.getElementById('login-password').value = '';
    document.getElementById('login-email').value = '';
  }
}

function autofillDemo(role) {
  const emailInput = document.getElementById('login-email');
  const passwordInput = document.getElementById('login-password');
  if (!emailInput || !passwordInput) return;
  
  if (role === 'admin') {
    emailInput.value = 'admin@abaarso.edu';
    passwordInput.value = 'admin123';
    showToast('Admin credentials filled', 'info');
  } else if (role === 'teacher') {
    emailInput.value = 'teacher@abaarso.edu';
    passwordInput.value = 'teacher123';
    showToast('Teacher credentials filled', 'info');
  } else if (role === 'student') {
    emailInput.value = 'student@abaarso.edu';
    passwordInput.value = 'student123';
    showToast('Student credentials filled', 'info');
  }
}

function hasPermission(action) {
  const perms = {
    Admin: ['all'],
    Teacher: ['view_own_classes','mark_attendance',
      'enter_grades','view_announcements',
      'post_announcements','edit_own_profile'],
    Student: ['view_own_attendance','view_own_results',
      'view_own_fees','view_announcements',
      'edit_own_profile']
  };
  const role = currentUser?.role;
  return perms[role]?.includes('all') || 
         perms[role]?.includes(action);
}

// Role-based app loader
function loadApp(user) {
  currentUser = user;
  sessionStorage.setItem('currentUser', JSON.stringify(user));
  
  // Hide all role apps first
  document.getElementById('admin-app').style.display = 'none';
  document.getElementById('teacher-app').style.display = 'none';
  document.getElementById('student-app').style.display = 'none';
  
  // Set role accent colors and load
  const colors = {
    Admin: '#C0392B',
    Teacher: '#00d4ff',
    Student: '#D4AF37'
  };
  document.documentElement.style.setProperty('--role-color', colors[user.role]);
  
  // Show correct app container
  if (user.role === 'Admin') {
    document.getElementById('admin-app').style.display = 'flex';
    initAdminApp();
  } else if (user.role === 'Teacher') {
    document.getElementById('teacher-app').style.display = 'flex';
    initTeacherApp();
  } else if (user.role === 'Student') {
    document.getElementById('student-app').style.display = 'flex';
    initStudentApp();
  }
}

/* ==========================================================================
   === NAVIGATION & INTERFACE SWITCHING ===
   ========================================================================== */
let activeSection = 'dashboard';

function showSection(sectionId) {
  const role = currentUser?.role || 'Admin';
  if (role === 'Admin') {
    showAdminSection(sectionId);
  } else if (role === 'Teacher') {
    showTeacherSection(sectionId);
  } else if (role === 'Student') {
    showStudentSection(sectionId);
  }
}

function initAdminApp() {
  showAdminSection('dashboard');
}

function showAdminSection(sectionId) {
  activeSection = sectionId;
  
  // Hide all sections in admin main container
  const mainEl = document.getElementById('admin-main');
  if (mainEl) {
    mainEl.querySelectorAll(':scope > section').forEach(sec => {
      if (sec.id === `admin-${sectionId}`) {
        sec.classList.remove('hidden');
      } else {
        sec.classList.add('hidden');
      }
    });
  }

  // Update active links in admin sidebar
  const sidebarEl = document.getElementById('admin-sidebar');
  if (sidebarEl) {
    sidebarEl.querySelectorAll('.sidebar-link').forEach(link => {
      if (link.getAttribute('data-view') === sectionId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  // Update page heading title in admin header navbar
  const currentLang = settings.language || 'en';
  const headingText = dictionary[currentLang][sectionId] || sectionId.toUpperCase();
  const pageHeaderTitle = document.getElementById('admin-header-page-title');
  if (pageHeaderTitle) pageHeaderTitle.innerText = headingText;

  // Trigger admin-specific loaders
  if (sectionId === 'dashboard') {
    animateDashboardCounters();
    renderDashboardRecentAnnouncements();
    renderDashboardMiniCalendar();
    renderDashboardActiveClasses();
    renderDashboardRecentActivity();
    initCharts(); // Clean redraw of Chart.js widgets
  } else if (sectionId === 'students') {
    renderStudents();
  } else if (sectionId === 'teachers') {
    renderTeachers();
  } else if (sectionId === 'classes') {
    renderClasses();
  } else if (sectionId === 'timetable') {
    renderTimetable();
  } else if (sectionId === 'exams') {
    renderExams();
    renderResults();
  } else if (sectionId === 'fees') {
    renderFees();
  } else if (sectionId === 'announcements') {
    renderAnnouncements();
  } else if (sectionId === 'users') {
    renderAdminUsers();
  } else if (sectionId === 'settings') {
    loadSettingsInputs();
  } else if (sectionId === 'attendance') {
    initAttendanceSection();
  }
}

/* ==========================================================================
   === SIDEBAR RESPONSIVE TRANSITIONS ===
   ========================================================================== */
function toggleSidebar() {
  const role = currentUser?.role || 'Admin';
  const rolePrefix = role.toLowerCase();
  const sidebar = document.getElementById(`${rolePrefix}-sidebar`);
  const overlay = document.getElementById(`${rolePrefix}-overlay`);
  if (!sidebar) return;
  
  sidebar.classList.toggle('open');
  if (sidebar.classList.contains('open')) {
    if (overlay) {
      overlay.classList.remove('opacity-0', 'pointer-events-none');
      overlay.classList.add('opacity-100');
    }
  } else {
    if (overlay) {
      overlay.classList.add('opacity-0', 'pointer-events-none');
      overlay.classList.remove('opacity-100');
    }
  }
}

function closeSidebar() {
  const role = currentUser?.role || 'Admin';
  const rolePrefix = role.toLowerCase();
  const sidebar = document.getElementById(`${rolePrefix}-sidebar`);
  const overlay = document.getElementById(`${rolePrefix}-overlay`);
  if (sidebar) sidebar.classList.remove('open');
  if (overlay) {
    overlay.classList.add('opacity-0', 'pointer-events-none');
    overlay.classList.remove('opacity-100');
  }
}

/* ==========================================================================
   === CHART.JS DASHBOARD METRICS INTEGRATION ===
   ========================================================================== */
let performanceChartInstance = null;
let examStatusChartInstance = null;

function initCharts() {
  if (activeSection !== 'dashboard') return;
  
  const isLightTheme = document.documentElement.classList.contains('light');
  const fontColor = isLightTheme ? '#1A1A1A' : 'rgba(255, 255, 255, 0.7)';
  const gridColor = isLightTheme ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.05)';

  // Destroy previous Chart instances to prevent canvas hover loop memory crash
  if (performanceChartInstance) {
    performanceChartInstance.destroy();
    performanceChartInstance = null;
  }
  if (examStatusChartInstance) {
    examStatusChartInstance.destroy();
    examStatusChartInstance = null;
  }

  // 1. Line Performance Trend Chart (Grade Averages)
  const lineCanvas = document.getElementById('performance-chart');
  if (lineCanvas) {
    const ctx = lineCanvas.getContext('2d');
    
    // Create modern glowing neon area fill gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, 200);
    gradient.addColorStop(0, 'rgba(0, 212, 255, 0.45)');
    gradient.addColorStop(0.5, 'rgba(0, 212, 255, 0.15)');
    gradient.addColorStop(1, 'rgba(0, 212, 255, 0)');

    performanceChartInstance = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
          label: 'Student Grade average',
          data: [79.2, 81.4, 80.1, 83.5, 82.6, 85.0, 84.3, 86.8, 87.2],
          borderColor: '#00d4ff',
          borderWidth: 3,
          pointBackgroundColor: '#00d4ff',
          pointBorderColor: '#ffffff',
          pointBorderWidth: 1.5,
          pointRadius: 4,
          pointHoverRadius: 6,
          fill: true,
          backgroundColor: gradient,
          tension: 0.35
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false }
        },
        scales: {
          x: {
            grid: { color: gridColor, drawTicks: false },
            ticks: { color: fontColor, font: { family: 'Inter', size: 10 } }
          },
          y: {
            min: 50,
            max: 100,
            grid: { color: gridColor, drawTicks: false },
            ticks: { color: fontColor, font: { family: 'Inter', size: 10 } }
          }
        }
      }
    });
  }

  // 2. Passing Ratio Donut Chart (Passed/Failed/Pending Slices)
  const donutCanvas = document.getElementById('exam-status-chart');
  if (donutCanvas) {
    const ctx = donutCanvas.getContext('2d');

    // Calculate actual ratios from Results & Exams models
    let passedCount = results.filter(r => r.score >= 60).length;
    let failedCount = results.filter(r => r.score < 60).length;
    let pendingCount = exams.length; // mock pending exams schedules

    // Fallbacks if data empty
    if (passedCount === 0 && failedCount === 0) {
      passedCount = 6;
      failedCount = 2;
    }

    examStatusChartInstance = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Passed', 'Failed', 'Pending'],
        datasets: [{
          data: [passedCount, failedCount, pendingCount],
          backgroundColor: ['#00d4ff', '#8B0000', '#D4AF37'],
          borderWidth: isLightTheme ? 2 : 0,
          borderColor: isLightTheme ? '#ffffff' : 'transparent',
          hoverOffset: 4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false // We use our custom legend below the chart in HTML
          }
        },
        cutout: '72%'
      }
    });
  }
  
  // Redraw the Today's Attendance mini donut widget
  initDashboardAttendanceWidget();
}

/* ==========================================================================
   === DASHBOARD COUNTERS & METRICS ===
   ========================================================================== */
function animateDashboardCounters() {
  const targets = {
    'count-students': students.length + 120, // offset for visual density
    'count-teachers': teachers.length,
    'count-classes': classes.length,
    'count-events': exams.length + 1
  };

  Object.keys(targets).forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    const target = targets[id];
    let current = 0;
    const duration = 1000; // ms
    const increment = Math.ceil(target / (duration / 15)) || 1;
    
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        el.innerText = target.toLocaleString();
        clearInterval(interval);
      } else {
        el.innerText = current.toLocaleString();
      }
    }, 15);
  });

  // Load accounting card metrics below line chart dynamically
  const activeClassesBadge = document.getElementById('badge-active-classes');
  if (activeClassesBadge) activeClassesBadge.innerText = `${classes.length} Classes`;
  
  let totalCollectedSum = fees.reduce((sum, f) => sum + f.amountPaid, 0);
  const totalFeesBadge = document.getElementById('badge-total-fees');
  if (totalFeesBadge) totalFeesBadge.innerText = `$${totalCollectedSum.toLocaleString()}`;
}

function renderDashboardRecentAnnouncements() {
  const container = document.getElementById('recent-announcements-list');
  if (!container) return;
  container.innerHTML = '';
  
  const list = announcements.slice(0, 3);
  if (list.length === 0) {
    container.innerHTML = `<p class="text-xs italic text-white/40">No notices posted.</p>`;
    return;
  }
  
  list.forEach(ann => {
    let catClass = 'bg-white/5 text-white border border-white/10';
    if (ann.category === 'Academic') catClass = 'bg-blue-955/40 text-blue-300 border border-blue-500/25';
    if (ann.category === 'Event') catClass = 'bg-purple-955/40 text-purple-300 border border-purple-500/25';
    
    container.innerHTML += `
      <div class="py-2 border-b last:border-b-0 border-white/5">
        <div class="flex items-center justify-between mb-0.5">
          <span class="text-[9px] font-bold px-1.5 py-0.5 rounded ${catClass}">${ann.category}</span>
          <span class="text-[9px] text-white/40 font-semibold">${ann.date}</span>
        </div>
        <h4 class="font-bold text-white text-xs mb-0.5">${ann.title}</h4>
        <p class="text-[11px] text-white/60 line-clamp-1">${ann.message}</p>
      </div>
    `;
  });
}

function renderDashboardActiveClasses() {
  const list = document.getElementById('active-classes-progress-list');
  if (!list) return;
  list.innerHTML = '';
  
  const activeClasses = [
    { name: 'Grade 10-A (Mathematics)', percent: 84 },
    { name: 'Grade 10-B (English)', percent: 76 },
    { name: 'Grade 11-A (Science)', percent: 92 },
    { name: 'Grade 11-B (Somali)', percent: 68 },
    { name: 'Grade 12-A (History)', percent: 95 }
  ];
  
  activeClasses.forEach(c => {
    list.innerHTML += `
      <div class="space-y-1">
        <div class="flex justify-between items-center text-xs">
          <span class="text-white/80 font-bold">${c.name}</span>
          <span class="text-school-cyan font-bold">${c.percent}%</span>
        </div>
        <div class="w-full bg-white/5 border border-white/10 rounded-full h-2.5 overflow-hidden">
          <div class="progress-bar-fill h-full rounded-full animate-[progressBar_1s_ease-out]" style="width: ${c.percent}%"></div>
        </div>
      </div>
    `;
  });
}

function renderDashboardRecentActivity() {
  const list = document.getElementById('recent-activity-list');
  if (!list) return;
  list.innerHTML = '';
  
  const logs = [
    { initials: 'AA', text: 'Abdiwahab Ahmed paid $500 balance due', time: '10 mins ago', color: 'from-green-500 to-green-700' },
    { initials: 'JH', text: 'Dr. John Harrison rescheduled Math Exam', time: '1 hour ago', color: 'from-[#00d4ff] to-blue-700' },
    { initials: 'FO', text: 'Faduma Omer enrolled in Grade 10-A roster', time: '4 hours ago', color: 'from-[#D4AF37] to-amber-700' },
    { initials: 'AS', text: 'Sarah Jenkins announced History notices', time: 'Yesterday', color: 'from-[#C0392B] to-red-950' },
    { initials: 'MD', text: 'Mohamed Duale entered Physics test results', time: '2 days ago', color: 'from-[#8B0000] to-[#6B0000]' }
  ];
  
  logs.forEach(l => {
    list.innerHTML += `
      <div class="flex items-center gap-3.5 pb-2 border-b border-white/5 last:border-b-0">
        <div class="w-8 h-8 rounded-full bg-gradient-to-tr ${l.color} text-white font-bold text-xs flex items-center justify-center shadow-lg shrink-0">
          ${l.initials}
        </div>
        <div class="flex-grow flex justify-between items-start min-w-0">
          <p class="text-[11px] text-white/90 leading-snug truncate pr-2">${l.text}</p>
          <span class="text-[9px] text-white/40 font-semibold whitespace-nowrap bg-white/5 border border-white/10 rounded px-1.5 py-0.5">${l.time}</span>
        </div>
      </div>
    `;
  });
}

let miniCalDate = new Date();

function renderDashboardMiniCalendar() {
  const container = document.getElementById('mini-calendar-days');
  const monthLabel = document.getElementById('mini-calendar-title');
  if (!container || !monthLabel) return;
  container.innerHTML = '';

  const year = miniCalDate.getFullYear();
  const month = miniCalDate.getMonth();
  
  const startDay = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();
  
  const monthsList = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  monthLabel.innerText = `${monthsList[month]} ${year}`;
  
  const dayHeaders = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  dayHeaders.forEach(h => {
    container.innerHTML += `<div class="text-[10px] font-bold text-center text-school-cyan py-1">${h}</div>`;
  });
  
  for (let i = 0; i < startDay; i++) {
    container.innerHTML += `<div></div>`;
  }
  
  const today = new Date();
  for (let d = 1; d <= totalDays; d++) {
    const isToday = today.getDate() === d && today.getMonth() === month && today.getFullYear() === year;
    const formatted = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
    const hasExam = exams.some(ex => ex.date === formatted);
    
    let cellClasses = 'text-[10px] text-center font-bold py-1.5 rounded-lg cursor-pointer hover:bg-white/10 transition-colors text-white/90';
    if (isToday) cellClasses += ' bg-school-cyan text-gray-950 font-extrabold shadow-[0_0_10px_rgba(0,212,255,0.4)]';
    if (hasExam && !isToday) cellClasses += ' border border-school-gold text-school-gold bg-school-gold/5';
    
    container.innerHTML += `
      <div class="${cellClasses}" onclick="showCalendarInfo('${formatted}')">${d}</div>
    `;
  }
}

function prevCalendarMonth() {
  miniCalDate.setMonth(miniCalDate.getMonth() - 1);
  renderDashboardMiniCalendar();
}

function nextCalendarMonth() {
  miniCalDate.setMonth(miniCalDate.getMonth() + 1);
  renderDashboardMiniCalendar();
}

function showCalendarInfo(dateString) {
  const matches = exams.filter(ex => ex.date === dateString);
  if (matches.length > 0) {
    const list = matches.map(m => `${m.subject} (${m.time} in ${m.room})`).join(', ');
    showToast(`Exams scheduled: ${list}`, 'info');
  } else {
    showToast(`No events scheduled for ${dateString}`, 'info');
  }
}

/* ==========================================================================
   === STUDENTS REGISTRY & CRUD ===
   ========================================================================== */
let studentPage = 1;
const studentLimit = 10;

function renderStudents() {
  const searchVal = document.getElementById('search-students').value.toLowerCase();
  const filterClass = document.getElementById('filter-students-class').value;
  const tbody = document.getElementById('students-table-body');
  if (!tbody) return;
  tbody.innerHTML = '';
  
  // Seed dropdown lists in student filter & student modals
  const filterSelect = document.getElementById('filter-students-class');
  const modalClassSelect = document.getElementById('stud-class');
  
  let dropdownOptions = `<option value="">All Classes</option>`;
  let modalOptions = '';
  classes.forEach(c => {
    dropdownOptions += `<option value="${c.name}">${c.name}</option>`;
    modalOptions += `<option value="${c.name}">${c.name}</option>`;
  });
  
  if (filterSelect && filterSelect.children.length <= 1) filterSelect.innerHTML = dropdownOptions;
  if (modalClassSelect) modalClassSelect.innerHTML = modalOptions;
  
  if (filterSelect) filterSelect.value = filterClass;

  const filtered = students.filter(s => {
    const matchesSearch = s.name.toLowerCase().includes(searchVal) || s.id.toLowerCase().includes(searchVal);
    const matchesClass = filterClass === '' || s.class === filterClass;
    return matchesSearch && matchesClass;
  });

  const total = filtered.length;
  const totalPages = Math.ceil(total / studentLimit) || 1;
  
  if (studentPage > totalPages) studentPage = totalPages;
  if (studentPage < 1) studentPage = 1;

  const start = (studentPage - 1) * studentLimit;
  const end = Math.min(start + studentLimit, total);
  const pageData = filtered.slice(start, end);

  if (pageData.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" class="px-6 py-4 text-center text-sm text-white/50 italic">No student records found.</td></tr>`;
  } else {
    pageData.forEach(s => {
      tbody.innerHTML += `
        <tr class="app-table-row border-b border-white/5 hover:bg-white/5 transition-colors duration-150">
          <td class="px-6 py-4 text-xs font-bold text-school-cyan">${s.id}</td>
          <td class="px-6 py-4 text-sm font-bold text-white">${s.name}</td>
          <td class="px-6 py-4 text-xs text-white/80"><span class="px-2 py-0.5 rounded bg-white/5 text-school-gold border border-white/10 font-bold">${s.class}</span></td>
          <td class="px-6 py-4 text-xs text-white/60">${s.gender}</td>
          <td class="px-6 py-4 text-xs text-white/60">${s.age}</td>
          <td class="px-6 py-4 text-xs"><span class="px-2 py-0.5 rounded-full font-bold bg-green-955/60 text-green-400 border border-green-500/20">Active</span></td>
          <td class="px-6 py-4 text-xs text-white/60 no-print flex gap-2">
            <button class="text-school-cyan hover:text-white transition-all text-xs font-bold" onclick="editStudent('${s.id}')"><i class="fa-solid fa-pen"></i></button>
            <button class="text-red-400 hover:text-red-600 transition-all text-xs font-bold ml-2" onclick="deleteStudent('${s.id}')"><i class="fa-solid fa-trash"></i></button>
          </td>
        </tr>
      `;
    });
  }

  // Update indicators
  const pagInfo = document.getElementById('students-pagination-info');
  if (pagInfo) pagInfo.innerText = `Showing ${total > 0 ? start + 1 : 0}-${end} of ${total} entries`;
  
  const btnPrev = document.getElementById('btn-students-prev');
  const btnNext = document.getElementById('btn-students-next');
  if (btnPrev) btnPrev.disabled = studentPage === 1;
  if (btnNext) btnNext.disabled = studentPage === totalPages;
}

function prevStudentsPage() {
  if (studentPage > 1) {
    studentPage--;
    renderStudents();
  }
}

function nextStudentsPage() {
  const filteredCount = students.filter(s => {
    const searchVal = document.getElementById('search-students').value.toLowerCase();
    const filterClass = document.getElementById('filter-students-class').value;
    const matchesSearch = s.name.toLowerCase().includes(searchVal) || s.id.toLowerCase().includes(searchVal);
    const matchesClass = filterClass === '' || s.class === filterClass;
    return matchesSearch && matchesClass;
  }).length;
  
  if (studentPage < Math.ceil(filteredCount / studentLimit)) {
    studentPage++;
    renderStudents();
  }
}

function saveStudentForm(event) {
  event.preventDefault();
  const form = document.getElementById('student-form');
  if (!validateForm(form)) return;

  const id = document.getElementById('stud-edit-id').value;
  const name = document.getElementById('stud-name').value.trim();
  const age = parseInt(document.getElementById('stud-age').value);
  const gender = document.getElementById('stud-gender').value;
  const cls = document.getElementById('stud-class').value;
  const parent = document.getElementById('stud-parent').value.trim();
  const phone = document.getElementById('stud-phone').value.trim();
  const address = document.getElementById('stud-address').value.trim();

  if (id) {
    // Edit action
    const index = students.findIndex(s => s.id === id);
    if (index > -1) {
      students[index] = { id, name, age, gender, class: cls, parentName: parent, phone, address, status: 'Active' };
      showToast("Student profile updated successfully", "success");
    }
  } else {
    // Add action
    const nextId = 'STU' + String(students.length + 1).padStart(3, '0');
    students.push({ id: nextId, name, age, gender, class: cls, parentName: parent, phone, address, status: 'Active' });
    
    // Register initial blank balance inside accounts
    fees.push({ studentId: nextId, amountDue: 1500, amountPaid: 0 });
    showToast("Student enrolled successfully", "success");
  }

  saveAllToLocalStorage();
  closeModal('modal-add-student');
  renderStudents();
}

function editStudent(id) {
  const s = students.find(stud => stud.id === id);
  if (!s) return;

  document.getElementById('stud-edit-id').value = s.id;
  document.getElementById('stud-name').value = s.name;
  document.getElementById('stud-age').value = s.age;
  document.getElementById('stud-gender').value = s.gender;
  document.getElementById('stud-class').value = s.class;
  document.getElementById('stud-parent').value = s.parentName;
  document.getElementById('stud-phone').value = s.phone;
  document.getElementById('stud-address').value = s.address;

  document.getElementById('student-modal-title').innerText = "Edit Student Profile";
  openModal('modal-add-student');
}

/* ==========================================================================
   === TEACHERS DIR MODULES ===
   ========================================================================== */
function renderTeachers() {
  const searchVal = document.getElementById('search-teachers').value.toLowerCase();
  const container = document.getElementById('teachers-grid');
  if (!container) return;
  container.innerHTML = '';

  const filtered = teachers.filter(t => {
    return t.name.toLowerCase().includes(searchVal) || t.subject.toLowerCase().includes(searchVal);
  });

  if (filtered.length === 0) {
    container.innerHTML = `<div class="col-span-full py-8 text-center text-sm text-white/50 italic">No teachers match search criteria.</div>`;
    return;
  }

  filtered.forEach(t => {
    const initials = t.name.split(' ').map(n => n[0]).join('');
    const statusClass = t.status === 'Active' 
      ? 'bg-green-955/60 text-green-400 border border-green-500/20' 
      : 'bg-amber-955/60 text-amber-400 border border-amber-500/20';

    container.innerHTML += `
      <div class="glass flex flex-col justify-between overflow-hidden shadow-xl card-hover-lift">
        <div class="p-5 flex flex-col items-center border-b border-white/5 bg-white/5">
          <div class="w-16 h-16 rounded-full bg-gradient-to-tr from-school-red to-school-accent text-white flex items-center justify-center font-bold text-xl mb-3 border-2 border-school-gold shadow-[0_0_15px_rgba(0,212,255,0.2)]">${initials}</div>
          <h3 class="font-bold text-white text-base font-headings">${t.name}</h3>
          <p class="text-xs text-school-cyan font-bold uppercase tracking-widest mt-1">${t.subject}</p>
        </div>
        <div class="p-5 text-xs space-y-2.5 flex-grow">
          <div class="flex justify-between border-b border-white/5 pb-2"><span class="text-white/50 font-semibold">Qualification</span><span class="font-bold text-white/90">${t.qualification}</span></div>
          <div class="flex justify-between border-b border-white/5 pb-2"><span class="text-white/50 font-semibold">Experience</span><span class="px-2 py-0.5 rounded bg-white/5 text-school-gold font-bold text-[10px]">${t.experience}</span></div>
          <div class="flex justify-between border-b border-white/5 pb-2"><span class="text-white/50 font-semibold">Email</span><span class="font-bold text-white/80 select-all break-all">${t.email}</span></div>
          <div class="flex justify-between border-b border-white/5 pb-2"><span class="text-white/50 font-semibold">Phone</span><span class="font-bold text-white/90">${t.phone}</span></div>
          <div class="flex justify-between pb-1"><span class="text-white/50 font-semibold">Status</span><span class="px-2 py-0.5 rounded font-bold ${statusClass}">${t.status}</span></div>
        </div>
        <div class="p-4 bg-black/10 border-t border-white/5 flex justify-end gap-2 no-print font-semibold text-[10px]">
          <button class="px-3 py-1.5 bg-white/5 hover:bg-white/10 text-white/75 hover:text-white rounded-lg uppercase tracking-wider transition-all border border-white/10" onclick="editTeacher('${t.id}')">Edit Profile</button>
          <button class="px-3 py-1.5 bg-red-955/20 hover:bg-school-red/40 text-red-300 hover:text-white rounded-lg uppercase tracking-wider transition-all border border-red-500/25" onclick="deleteTeacher('${t.id}')">Remove</button>
        </div>
      </div>
    `;
  });
}

function deleteStudent(id) {
  if (confirm(`Are you sure you want to remove student ${id}? This will purge their ledger records.`)) {
    students = students.filter(s => s.id !== id);
    fees = fees.filter(f => f.studentId !== id);
    results = results.filter(r => r.studentId !== id);
    saveAllToLocalStorage();
    renderStudents();
    showToast("Student account deleted from database", "error");
  }
}

function saveTeacherForm(event) {
  event.preventDefault();
  const form = document.getElementById('teacher-form');
  if (!validateForm(form)) return;

  const id = document.getElementById('teach-edit-id').value;
  const name = document.getElementById('teach-name').value.trim();
  const subject = document.getElementById('teach-subject').value;
  const qualification = document.getElementById('teach-qual').value.trim();
  const experience = document.getElementById('teach-exp').value.trim();
  const phone = document.getElementById('teach-phone').value.trim();
  const email = document.getElementById('teach-email').value.trim();
  const joiningDate = document.getElementById('teach-join').value;
  const status = document.getElementById('teach-status').value;

  if (id) {
    const index = teachers.findIndex(t => t.id === id);
    if (index > -1) {
      teachers[index] = { id, name, subject, qualification, experience, phone, email, joiningDate, status };
      showToast("Teacher profile updated", "success");
    }
  } else {
    const nextId = 'TCH' + String(teachers.length + 1).padStart(3, '0');
    teachers.push({ id: nextId, name, subject, qualification, experience, phone, email, joiningDate, status });
    showToast("Teacher registered successfully", "success");
  }

  saveAllToLocalStorage();
  closeModal('modal-add-teacher');
  renderTeachers();
}

function editTeacher(id) {
  const t = teachers.find(teach => teach.id === id);
  if (!t) return;

  document.getElementById('teach-edit-id').value = t.id;
  document.getElementById('teach-name').value = t.name;
  document.getElementById('teach-subject').value = t.subject;
  document.getElementById('teach-qual').value = t.qualification;
  document.getElementById('teach-exp').value = t.experience || '3 Years';
  document.getElementById('teach-phone').value = t.phone;
  document.getElementById('teach-email').value = t.email;
  document.getElementById('teach-join').value = t.joiningDate;
  document.getElementById('teach-status').value = t.status;

  document.getElementById('teacher-modal-title').innerText = "Edit Teacher Profile";
  openModal('modal-add-teacher');
}

function deleteTeacher(id) {
  if (confirm(`Remove teacher ${id} from database register?`)) {
    teachers = teachers.filter(t => t.id !== id);
    saveAllToLocalStorage();
    renderTeachers();
    showToast("Teacher record purged", "error");
  }
}

/* ==========================================================================
   === CLASSES MANAGEMENT ===
   ========================================================================== */
function renderClasses() {
  const container = document.getElementById('classes-grid');
  if (!container) return;
  container.innerHTML = '';

  // Seed select drop selectors inside modals
  const clsTutorSelect = document.getElementById('cls-teacher');
  let tutorOptions = '';
  teachers.forEach(t => {
    tutorOptions += `<option value="${t.id}">${t.name} (${t.subject})</option>`;
  });
  if (clsTutorSelect) clsTutorSelect.innerHTML = tutorOptions;

  classes.forEach(c => {
    const tutor = teachers.find(t => t.id === c.teacherId) || { name: 'Unassigned Tutor' };
    const studsInClass = students.filter(s => s.class === c.name).length;

    container.innerHTML += `
      <div class="glass p-6 card-hover-lift flex flex-col justify-between shadow-xl relative">
        <div>
          <div class="flex justify-between items-center mb-4">
            <h3 class="font-bold text-white text-lg font-headings">${c.name}</h3>
            <span class="px-2.5 py-0.5 rounded bg-white/5 border border-white/10 text-school-gold font-bold text-xs">${c.room}</span>
          </div>
          <div class="space-y-2 mb-6 text-xs">
            <div class="flex justify-between"><span class="text-white/50 font-semibold">Assigned Tutor</span><span class="font-bold text-white">${tutor.name}</span></div>
            <div class="flex justify-between"><span class="text-white/50 font-semibold">Enrolled Students</span><span class="px-2 py-0.5 bg-school-cyan/20 border border-school-cyan/35 text-school-cyan rounded font-bold text-[10px]">${studsInClass} Students</span></div>
          </div>
        </div>
        
        <div class="border-t border-white/5 pt-4 flex justify-between items-center text-xs">
          <button class="text-school-cyan hover:text-white font-bold uppercase transition-all hover:underline cursor-pointer" onclick="expandClass('${c.name}')">Expand Roster &rarr;</button>
          <div class="flex gap-2.5 no-print">
            <button class="text-white/50 hover:text-school-cyan transition-all cursor-pointer" onclick="editClass('${c.id}')"><i class="fa-solid fa-pen"></i></button>
            <button class="text-white/50 hover:text-red-400 transition-all cursor-pointer" onclick="deleteClass('${c.id}')"><i class="fa-solid fa-trash"></i></button>
          </div>
        </div>
      </div>
    `;
  });
}

function saveClassForm(event) {
  event.preventDefault();
  const form = document.getElementById('class-form');
  if (!validateForm(form)) return;

  const id = document.getElementById('cls-edit-id').value;
  const name = document.getElementById('cls-name').value.trim();
  const teacherId = document.getElementById('cls-teacher').value;
  const room = document.getElementById('cls-room').value.trim();

  if (id) {
    const index = classes.findIndex(c => c.id === id);
    if (index > -1) {
      classes[index] = { id, name, teacherId, room };
      showToast("Class configurations updated", "success");
    }
  } else {
    const nextId = 'CLS' + String(classes.length + 1).padStart(3, '0');
    classes.push({ id: nextId, name, teacherId, room });
    showToast("Class block registered successfully", "success");
  }

  saveAllToLocalStorage();
  closeModal('modal-add-class');
  renderClasses();
}

function editClass(id) {
  const c = classes.find(cls => cls.id === id);
  if (!c) return;

  document.getElementById('cls-edit-id').value = c.id;
  document.getElementById('cls-name').value = c.name;
  document.getElementById('cls-teacher').value = c.teacherId;
  document.getElementById('cls-room').value = c.room;

  document.getElementById('class-modal-title').innerText = "Edit Class Profile";
  openModal('modal-add-class');
}

function deleteClass(id) {
  if (confirm("Confirm removal of this class block? Registered students will remain active but will need re-routing.")) {
    classes = classes.filter(c => c.id !== id);
    saveAllToLocalStorage();
    renderClasses();
    showToast("Class section deleted", "error");
  }
}

function expandClass(className) {
  const list = students.filter(s => s.class === className);
  const title = document.getElementById('roster-modal-title');
  if (title) title.innerText = `${className} - Enrolled Roster (${list.length} Students)`;
  
  const tbody = document.getElementById('roster-table-body');
  if (!tbody) return;
  tbody.innerHTML = '';
  
  if (list.length === 0) {
    tbody.innerHTML = `<tr><td colspan="4" class="px-6 py-4 text-center text-sm text-white/40 italic">No students registered in this class.</td></tr>`;
  } else {
    list.forEach(s => {
      tbody.innerHTML += `
        <tr class="border-b border-white/5">
          <td class="px-6 py-4 text-xs font-bold text-school-cyan">${s.id}</td>
          <td class="px-6 py-4 text-sm font-bold text-white">${s.name}</td>
          <td class="px-6 py-4 text-xs text-white/70">${s.gender}</td>
          <td class="px-6 py-4 text-xs text-white/60">${s.status}</td>
        </tr>
      `;
    });
  }
  
  openModal('modal-class-roster');
}

/* ==========================================================================
   === WEEKLY TIMETABLE SESSIONS ===
   ========================================================================== */
const TIMETABLE_DAYS = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'];

function renderTimetable() {
  const select = document.getElementById('timetable-class-select');
  const tbody = document.getElementById('timetable-grid-body');
  if (!tbody || !select) return;
  tbody.innerHTML = '';
  
  // Seed Class selectors
  let selectOptions = '';
  classes.forEach(c => {
    selectOptions += `<option value="${c.name}">${c.name}</option>`;
  });
  if (select.children.length === 0) {
    select.innerHTML = selectOptions;
  }
  
  const selectedClass = select.value;
  if (!selectedClass) {
    tbody.innerHTML = `<tr><td colspan="8" class="border border-white/10 p-6 text-center text-white/50 italic text-sm">Please register classes in the Classes panel first.</td></tr>`;
    return;
  }

  // Seed teachers options in timetable edit modal
  const cellTeacherSelect = document.getElementById('tt-teacher');
  let teacherOptions = '<option value="Free">None (Free Study)</option>';
  teachers.forEach(t => {
    teacherOptions += `<option value="${t.id}">${t.name} (${t.subject})</option>`;
  });
  if (cellTeacherSelect) cellTeacherSelect.innerHTML = teacherOptions;

  TIMETABLE_DAYS.forEach(day => {
    let rowHtml = `<tr class="border-b border-white/5">
      <td class="border border-white/5 p-4 font-bold text-school-gold bg-white/5 text-center select-none font-headings text-xs uppercase">${day}</td>`;
      
    for (let period = 1; period <= 7; period++) {
      const cell = timetable[selectedClass] && timetable[selectedClass][day] && timetable[selectedClass][day][period];
      
      if (cell && cell.subject !== 'Free') {
        const tObj = teachers.find(t => t.id === cell.teacherId) || { name: 'Free' };
        rowHtml += `
          <td class="border border-white/5 p-2 h-20 text-center align-top cursor-pointer hover:bg-white/5 transition-all duration-150" onclick="openTimetableCellEditor('${day}', ${period})">
            <div class="h-full flex flex-col justify-center rounded-xl p-2 subject-${cell.subject}">
              <div class="text-[11px] font-extrabold uppercase tracking-wide leading-tight">${cell.subject}</div>
              <div class="text-[9px] opacity-75 font-semibold mt-1">${tObj.name.split(' ').slice(-1)[0]}</div>
            </div>
          </td>
        `;
      } else {
        rowHtml += `
          <td class="border border-white/5 p-2 h-20 text-center align-middle cursor-pointer hover:bg-white/5 transition-all duration-150" onclick="openTimetableCellEditor('${day}', ${period})">
            <div class="text-[10px] text-white/30 italic font-semibold">+ Assign</div>
          </td>
        `;
      }
    }
    
    rowHtml += '</tr>';
    tbody.innerHTML += rowHtml;
  });
}

function openTimetableCellEditor(day, period) {
  const selectedClass = document.getElementById('timetable-class-select').value;
  
  document.getElementById('tt-day').value = day;
  document.getElementById('tt-period').value = period;
  document.getElementById('tt-details-label').innerText = `${selectedClass} | ${day} | Period ${period}`;

  const cell = timetable[selectedClass] && timetable[selectedClass][day] && timetable[selectedClass][day][period];
  if (cell) {
    document.getElementById('tt-subject').value = cell.subject;
    document.getElementById('tt-teacher').value = cell.teacherId;
  } else {
    document.getElementById('tt-subject').value = 'Free';
    document.getElementById('tt-teacher').value = 'Free';
  }

  openModal('modal-timetable-cell');
}

function saveTimetableCell(event) {
  event.preventDefault();
  const selectedClass = document.getElementById('timetable-class-select').value;
  
  const day = document.getElementById('tt-day').value;
  const period = parseInt(document.getElementById('tt-period').value);
  const subject = document.getElementById('tt-subject').value;
  const teacherId = document.getElementById('tt-teacher').value;

  if (!timetable[selectedClass]) timetable[selectedClass] = {};
  if (!timetable[selectedClass][day]) timetable[selectedClass][day] = {};

  timetable[selectedClass][day][period] = { subject, teacherId };
  
  saveAllToLocalStorage();
  closeModal('modal-timetable-cell');
  renderTimetable();
  showToast("Academic timetable updated successfully", "success");
}

function printTimetable() {
  window.print();
}

/* ==========================================================================
   === EXAMS & RESULTS LEDGERS ===
   ========================================================================== */
let activeExamTab = 'schedules';

function switchExamsTab(tabName) {
  activeExamTab = tabName;
  const tabSchedules = document.getElementById('tab-exam-schedules');
  const tabResults = document.getElementById('tab-exam-results');
  const paneSchedules = document.getElementById('pane-exam-schedules');
  const paneResults = document.getElementById('pane-exam-results');

  if (!tabSchedules || !tabResults || !paneSchedules || !paneResults) return;

  if (tabName === 'schedules') {
    tabSchedules.className = "py-3 border-b-2 border-school-cyan text-school-cyan hover:text-white transition-all focus:outline-none cursor-pointer font-headings text-base font-bold";
    tabResults.className = "py-3 border-b-2 border-transparent text-white/50 hover:text-school-cyan transition-all focus:outline-none cursor-pointer font-headings text-base font-bold";
    
    paneSchedules.classList.remove('hidden');
    paneResults.classList.add('hidden');
    renderExams();
  } else {
    tabResults.className = "py-3 border-b-2 border-school-cyan text-school-cyan hover:text-white transition-all focus:outline-none cursor-pointer font-headings text-base font-bold";
    tabSchedules.className = "py-3 border-b-2 border-transparent text-white/50 hover:text-school-cyan transition-all focus:outline-none cursor-pointer font-headings text-base font-bold";
    
    paneResults.classList.remove('hidden');
    paneSchedules.classList.add('hidden');
    renderResults();
  }
}

function renderExams() {
  const tbody = document.getElementById('exams-table-body');
  if (!tbody) return;
  tbody.innerHTML = '';

  if (exams.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" class="px-6 py-4 text-center text-sm text-white/40 italic">No exams schedules published.</td></tr>`;
    return;
  }

  exams.forEach(ex => {
    tbody.innerHTML += `
      <tr class="app-table-row border-b border-white/5 hover:bg-white/5 transition-colors duration-150">
        <td class="px-6 py-4 text-sm font-bold text-white font-headings">${ex.subject}</td>
        <td class="px-6 py-4 text-xs text-white/70">${ex.date}</td>
        <td class="px-6 py-4 text-xs text-white/70">${ex.time}</td>
        <td class="px-6 py-4 text-xs text-white/80"><span class="px-2 py-0.5 bg-white/5 border border-white/10 rounded-md text-school-cyan font-bold">${ex.room}</span></td>
        <td class="px-6 py-4 text-xs text-white/60 no-print flex gap-2">
          <button class="text-school-cyan hover:text-white transition-all text-xs font-bold" onclick="editExam('${ex.id}')"><i class="fa-solid fa-pen"></i></button>
          <button class="text-red-400 hover:text-red-600 transition-all text-xs font-bold" onclick="deleteExam('${ex.id}')"><i class="fa-solid fa-trash"></i></button>
        </td>
      </tr>
    `;
  });
}

function saveExamForm(event) {
  event.preventDefault();
  const form = document.getElementById('exam-form');
  if (!validateForm(form)) return;

  const id = document.getElementById('ex-edit-id').value;
  const subject = document.getElementById('ex-subject').value;
  const date = document.getElementById('ex-date').value;
  const time = document.getElementById('ex-time').value.trim();
  const room = document.getElementById('ex-room').value.trim();

  if (id) {
    const index = exams.findIndex(e => e.id === id);
    if (index > -1) {
      exams[index] = { id, subject, date, time, room };
      showToast("Exam schedule corrected", "success");
    }
  } else {
    const nextId = 'EX' + String(exams.length + 1).padStart(3, '0');
    exams.push({ id: nextId, subject, date, time, room });
    showToast("Exam scheduled successfully", "success");
  }

  saveAllToLocalStorage();
  closeModal('modal-add-exam');
  renderExams();
}

function editExam(id) {
  const ex = exams.find(e => e.id === id);
  if (!ex) return;

  document.getElementById('ex-edit-id').value = ex.id;
  document.getElementById('ex-subject').value = ex.subject;
  document.getElementById('ex-date').value = ex.date;
  document.getElementById('ex-time').value = ex.time;
  document.getElementById('ex-room').value = ex.room;

  document.getElementById('exam-modal-title').innerText = "Edit Exam Schedule";
  openModal('modal-add-exam');
}

function deleteExam(id) {
  if (confirm("Are you sure you want to cancel this scheduled exam session?")) {
    exams = exams.filter(e => e.id !== id);
    saveAllToLocalStorage();
    renderExams();
    showToast("Exam session cancelled", "error");
  }
}

function renderResults() {
  const tbody = document.getElementById('results-table-body');
  if (!tbody) return;
  tbody.innerHTML = '';

  const classFilter = document.getElementById('filter-results-class');
  const subjectFilter = document.getElementById('filter-results-subject');
  if (!classFilter || !subjectFilter) return;
  
  // Seed selects inside options
  let classDropdown = '<option value="">All Classes</option>';
  classes.forEach(c => {
    classDropdown += `<option value="${c.name}">${c.name}</option>`;
  });
  if (classFilter.children.length <= 1) classFilter.innerHTML = classDropdown;

  // Seed dynamic student selectors inside score entries modal
  const modalStudentSelect = document.getElementById('res-student');
  let studentOptions = '';
  students.forEach(s => {
    studentOptions += `<option value="${s.id}">${s.name} (${s.class})</option>`;
  });
  if (modalStudentSelect) modalStudentSelect.innerHTML = studentOptions;

  const fClass = classFilter.value;
  const fSub = subjectFilter.value;

  const filtered = results.filter(r => {
    const stud = students.find(s => s.id === r.studentId) || { class: '', name: 'Purged Student' };
    const matchesClass = fClass === '' || stud.class === fClass;
    const matchesSub = fSub === '' || r.subject === fSub;
    return matchesClass && matchesSub;
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" class="px-6 py-4 text-center text-sm text-white/40 italic">No academic results recorded yet.</td></tr>`;
    return;
  }

  filtered.forEach(r => {
    const stud = students.find(s => s.id === r.studentId) || { name: 'Purged Student', class: '--' };
    const grade = autoCalculateGrade(r.score);
    let gradeColor = 'bg-red-955/60 text-red-400 border border-red-500/20';
    if (grade === 'A') gradeColor = 'bg-green-955/60 text-green-400 border border-green-500/20';
    else if (grade === 'B' || grade === 'C') gradeColor = 'bg-blue-955/60 text-school-cyan border border-[#00d4ff]/20';
    else if (grade === 'D') gradeColor = 'bg-amber-955/60 text-amber-400 border border-amber-500/20';

    tbody.innerHTML += `
      <tr class="app-table-row border-b border-white/5 hover:bg-white/5 transition-colors duration-150">
        <td class="px-6 py-4 text-sm font-bold text-white">${stud.name}</td>
        <td class="px-6 py-4 text-xs text-white/80"><span class="px-2 py-0.5 rounded bg-white/5 text-school-gold border border-white/10 font-bold">${stud.class}</span></td>
        <td class="px-6 py-4 text-xs text-white/70">${r.subject}</td>
        <td class="px-6 py-4 text-sm font-bold text-white">${r.score}%</td>
        <td class="px-6 py-4 text-xs"><span class="px-2.5 py-0.5 rounded-full font-bold ${gradeColor}">${grade}</span></td>
        <td class="px-6 py-4 text-xs text-white/60 no-print flex gap-2">
          <button class="text-school-cyan hover:text-white transition-all text-xs font-bold" onclick="editResult('${r.id}')"><i class="fa-solid fa-pen"></i></button>
          <button class="text-red-400 hover:text-red-600 transition-all text-xs font-bold" onclick="deleteResult('${r.id}')"><i class="fa-solid fa-trash"></i></button>
        </td>
      </tr>
    `;
  });
}

function autoCalculateGrade(score) {
  if (score >= 90) return 'A';
  if (score >= 80) return 'B';
  if (score >= 70) return 'C';
  if (score >= 60) return 'D';
  return 'F';
}

function saveResultForm(event) {
  event.preventDefault();
  const form = document.getElementById('result-form');
  if (!validateForm(form)) return;

  const id = document.getElementById('res-edit-id').value;
  const studentId = document.getElementById('res-student').value;
  const subject = document.getElementById('res-subject').value;
  const score = parseInt(document.getElementById('res-score').value);

  if (id) {
    const index = results.findIndex(r => r.id === id);
    if (index > -1) {
      results[index] = { id, studentId, subject, score };
      showToast("Student score updated", "success");
    }
  } else {
    const nextId = 'RES' + String(results.length + 1).padStart(3, '0');
    results.push({ id: nextId, studentId, subject, score });
    showToast("Academic scores recorded", "success");
  }

  saveAllToLocalStorage();
  closeModal('modal-add-result');
  renderResults();
}

function editResult(id) {
  const r = results.find(res => res.id === id);
  if (!r) return;

  document.getElementById('res-edit-id').value = r.id;
  document.getElementById('res-student').value = r.studentId;
  document.getElementById('res-subject').value = r.subject;
  document.getElementById('res-score').value = r.score;

  document.getElementById('result-modal-title').innerText = "Edit Recorded Score";
  openModal('modal-add-result');
}

function deleteResult(id) {
  if (confirm("Permanently remove score record?")) {
    results = results.filter(r => r.id !== id);
    saveAllToLocalStorage();
    renderResults();
    showToast("Score record purged", "error");
  }
}

function exportExamsResultsCSV() {
  const headers = ['Student ID', 'Student Name', 'Class', 'Subject', 'Score', 'Grade'];
  let content = "data:text/csv;charset=utf-8," + headers.join(",") + "\n";

  results.forEach(r => {
    const stud = students.find(s => s.id === r.studentId) || { name: 'Deleted Student', class: '--' };
    const grade = autoCalculateGrade(r.score);
    const row = [r.studentId, stud.name, stud.class, r.subject, `${r.score}%`, grade];
    content += row.map(v => `"${v}"`).join(",") + "\n";
  });

  const uri = encodeURI(content);
  const link = document.createElement("a");
  link.setAttribute("href", uri);
  link.setAttribute("download", `Abaarso_School_Exam_Ledger_${new Date().toISOString().slice(0,10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showToast("CSV report generated and downloaded", "success");
}

/* ==========================================================================
   === FEES BALANCES & TRANSACTIONS ===
   ========================================================================== */
function renderFees() {
  const tbody = document.getElementById('fees-table-body');
  if (!tbody) return;
  tbody.innerHTML = '';

  let colSum = 0;
  let pendSum = 0;
  let overSum = 0;

  // Sync options in payment record selectors
  const modalPaySelect = document.getElementById('pay-student');
  let payOptions = '';
  students.forEach(s => {
    payOptions += `<option value="${s.id}">${s.name} (${s.class})</option>`;
  });
  if (modalPaySelect) modalPaySelect.innerHTML = payOptions;

  students.forEach(s => {
    const feeObj = fees.find(f => f.studentId === s.id) || { amountDue: 1500, amountPaid: 0 };
    const due = feeObj.amountDue;
    const paid = feeObj.amountPaid;
    const balance = due - paid;

    let badgeClass = 'bg-red-955/60 text-red-400 border border-red-500/20';
    let label = 'Overdue';
    
    if (balance <= 0) {
      badgeClass = 'bg-green-955/60 text-green-400 border border-green-500/20';
      label = 'Paid';
      colSum += due;
    } else if (paid > 0) {
      badgeClass = 'bg-amber-955/60 text-amber-400 border border-amber-500/20';
      label = 'Pending';
      colSum += paid;
      pendSum += balance;
    } else {
      overSum += balance;
    }

    tbody.innerHTML += `
      <tr class="app-table-row border-b border-white/5 hover:bg-white/5 transition-colors duration-150">
        <td class="px-6 py-4 text-sm font-bold text-white">${s.name}</td>
        <td class="px-6 py-4 text-xs text-white/80"><span class="px-2 py-0.5 rounded bg-white/5 text-school-gold border border-white/10 font-bold">${s.class}</span></td>
        <td class="px-6 py-4 text-sm font-semibold text-white/80">$${due.toLocaleString()}</td>
        <td class="px-6 py-4 text-sm font-semibold text-green-400">$${paid.toLocaleString()}</td>
        <td class="px-6 py-4 text-sm font-bold text-red-400">$${balance.toLocaleString()}</td>
        <td class="px-6 py-4 text-xs"><span class="px-2.5 py-0.5 rounded-full font-bold ${badgeClass}">${label}</span></td>
        <td class="px-6 py-4 text-xs text-white/60 no-print">
          <button class="px-3 py-1 bg-school-red hover:bg-school-accent text-white hover:text-white border border-red-500/20 hover:border-red-500/50 rounded-lg text-[10px] font-bold tracking-widest uppercase transition-all duration-150" onclick="triggerFeesRecord('${s.id}')">PAY BALANCE</button>
        </td>
      </tr>
    `;
  });

  // Load accounting card metrics
  const totalCollEl = document.getElementById('fees-total-collected');
  const totalPendEl = document.getElementById('fees-total-pending');
  const totalOverEl = document.getElementById('fees-total-overdue');
  if (totalCollEl) totalCollEl.innerText = `$${colSum.toLocaleString()}`;
  if (totalPendEl) totalPendEl.innerText = `$${pendSum.toLocaleString()}`;
  if (totalOverEl) totalOverEl.innerText = `$${overSum.toLocaleString()}`;
}

function triggerFeesRecord(studId) {
  const payStudentEl = document.getElementById('pay-student');
  if (payStudentEl) payStudentEl.value = studId;
  openModal('modal-add-payment');
}

function savePaymentForm(event) {
  event.preventDefault();
  const form = document.getElementById('payment-form');
  if (!validateForm(form)) return;

  const studId = document.getElementById('pay-student').value;
  const payAmt = parseInt(document.getElementById('pay-amount').value) || 0;

  const index = fees.findIndex(f => f.studentId === studId);
  if (index > -1) {
    const baseDue = fees[index].amountDue;
    const prePaid = fees[index].amountPaid;
    const capped = Math.min(baseDue, prePaid + payAmt);
    fees[index].amountPaid = capped;
    showToast(`Transaction of $${payAmt.toLocaleString()} logged in ledger`, "success");
  } else {
    fees.push({ studentId: studId, amountDue: 1500, amountPaid: Math.min(1500, payAmt) });
    showToast("Fees balance account registered", "success");
  }

  saveAllToLocalStorage();
  closeModal('modal-add-payment');
  renderFees();
}

/* ==========================================================================
   === ANNOUNCEMENTS TIMELINE LOGS ===
   ========================================================================== */
function renderAnnouncements() {
  const container = document.getElementById('announcements-timeline');
  if (!container) return;
  container.innerHTML = '';

  const sorted = [...announcements].sort((a, b) => {
    if (a.pinned && !b.pinned) return -1;
    if (!a.pinned && b.pinned) return 1;
    return new Date(b.date) - new Date(a.date);
  });

  if (sorted.length === 0) {
    container.innerHTML = `<div class="p-8 text-center text-sm text-white/40 italic bg-white/5 border border-white/10 rounded-xl">No announcements drafted.</div>`;
    return;
  }

  sorted.forEach(ann => {
    let pinClass = '';
    let pinIconColor = 'text-white/40 hover:text-school-gold';
    if (ann.pinned) {
      pinClass = 'border-l-4 border-l-school-gold bg-school-gold/5';
      pinIconColor = 'text-school-gold shadow-[0_0_10px_rgba(212,175,55,0.4)]';
    }

    let badgeClass = 'bg-white/5 text-white border border-white/10';
    if (ann.category === 'Academic') badgeClass = 'bg-blue-955/60 text-blue-300 border border-blue-500/20';
    else if (ann.category === 'Event') badgeClass = 'bg-purple-955/60 text-purple-300 border border-purple-500/20';

    container.innerHTML += `
      <div class="glass p-6 shadow-2xl transition-all ${pinClass} relative group">
        <div class="flex items-center justify-between mb-3">
          <div class="flex items-center gap-3">
            <span class="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${badgeClass}">${ann.category}</span>
            <span class="text-[10px] text-white/40 font-semibold"><i class="fa-regular fa-clock"></i> ${ann.date}</span>
          </div>
          <div class="flex gap-2.5 no-print opacity-40 group-hover:opacity-100 transition-opacity">
            <button class="${pinIconColor} text-xs transition-colors cursor-pointer" onclick="togglePinNotice('${ann.id}')"><i class="fa-solid fa-thumbtack"></i></button>
            <button class="text-red-400 hover:text-red-600 text-xs transition-colors cursor-pointer" onclick="deleteNotice('${ann.id}')"><i class="fa-solid fa-trash"></i></button>
          </div>
        </div>
        <h3 class="font-bold text-white text-base font-headings mb-2">${ann.title}</h3>
        <p class="text-xs text-white/70 leading-relaxed">${ann.message}</p>
      </div>
    `;
  });
}

function saveAnnouncementForm(event) {
  event.preventDefault();
  const form = document.getElementById('announcement-form');
  if (!validateForm(form)) return;

  const title = document.getElementById('ann-title').value.trim();
  const date = document.getElementById('ann-date').value;
  const category = document.getElementById('ann-category').value;
  const message = document.getElementById('ann-message').value.trim();

  const nextId = 'ANN' + String(announcements.length + 1).padStart(3, '0');
  announcements.unshift({ id: nextId, title, date, category, message, pinned: false });

  saveAllToLocalStorage();
  form.reset();
  renderAnnouncements();
  showToast("New notice published", "success");
}

function togglePinNotice(id) {
  const idx = announcements.findIndex(ann => ann.id === id);
  if (idx > -1) {
    announcements[idx].pinned = !announcements[idx].pinned;
    saveAllToLocalStorage();
    renderAnnouncements();
    showToast(announcements[idx].pinned ? "Notice pinned to top" : "Notice unpinned", "info");
  }
}

function deleteNotice(id) {
  if (confirm("Are you sure you want to delete this notice?")) {
    announcements = announcements.filter(ann => ann.id !== id);
    saveAllToLocalStorage();
    renderAnnouncements();
    showToast("Announcement notice deleted", "error");
  }
}

/* ==========================================================================
   === CONFIGURATIONS SETTINGS ===
   ========================================================================== */
function loadSettingsInputs() {
  document.getElementById('set-name').value = settings.name;
  document.getElementById('set-tagline').value = settings.tagline;
  document.getElementById('set-location').value = settings.location;
  document.getElementById('set-phone').value = settings.phone;
  document.getElementById('set-email').value = settings.email;
  document.getElementById('set-color').value = settings.primaryColor;
  document.getElementById('color-hex-label').innerText = settings.primaryColor.toUpperCase();

  const lang = settings.language || 'en';
  toggleLanguageButtonStyles(lang);

  // Sync dark mode checkbox state
  const isDark = document.documentElement.classList.contains('light');
  const checkbox = document.getElementById('dark-theme-mode-check');
  if (checkbox) checkbox.checked = !isDark;
}

function saveSettingsForm(event) {
  event.preventDefault();
  
  settings.name = document.getElementById('set-name').value.trim();
  settings.tagline = document.getElementById('set-tagline').value.trim();
  settings.location = document.getElementById('set-location').value.trim();
  settings.phone = document.getElementById('set-phone').value.trim();
  settings.email = document.getElementById('set-email').value.trim();

  saveAllToLocalStorage();
  applySettingsAesthetics();
  showToast("School configuration profiles updated", "success");
}

function applySettingsAesthetics() {
  document.querySelectorAll('.school-name-text').forEach(el => el.innerText = settings.name);
  document.querySelectorAll('.school-tagline-text').forEach(el => el.innerText = settings.tagline);
  
  const navTagline = document.getElementById('school-nav-tagline');
  if (navTagline) navTagline.innerText = settings.tagline.split(' · ').slice(0, 2).join(' · ');

  // Update theme colors dynamically
  document.documentElement.style.setProperty('--crimson', settings.primaryColor);
  
  // Set language properties
  translateNavigationMenu(settings.language || 'en');
}

function updatePrimaryAccentColor(hexValue) {
  settings.primaryColor = hexValue;
  document.getElementById('color-hex-label').innerText = hexValue.toUpperCase();
  document.documentElement.style.setProperty('--crimson', hexValue);
  saveAllToLocalStorage();
  showToast("Primary theme accent midab updated", "info");
}

function changeLanguage(lang) {
  settings.language = lang;
  saveAllToLocalStorage();
  toggleLanguageButtonStyles(lang);
  applySettingsAesthetics();
  showToast(lang === 'so' ? "Nidaamka waxaa loo beddelay Somali" : "Language switched to English", "info");
}

function toggleLanguageButtonStyles(lang) {
  const btnEn = document.getElementById('lang-btn-en');
  const btnSo = document.getElementById('lang-btn-so');
  if (!btnEn || !btnSo) return;

  if (lang === 'so') {
    btnSo.className = "px-4 py-2 border border-school-gold rounded-lg text-xs font-bold text-school-gold bg-school-gold/10 transition-all uppercase tracking-wider cursor-pointer shadow-[0_0_10px_rgba(212,175,55,0.25)] font-headings";
    btnEn.className = "px-4 py-2 border border-white/10 rounded-lg text-xs font-bold text-white/70 hover:bg-white/5 hover:text-white transition-all uppercase tracking-wider cursor-pointer font-headings";
  } else {
    btnEn.className = "px-4 py-2 border border-school-cyan rounded-lg text-xs font-bold text-school-cyan bg-school-cyan/10 transition-all uppercase tracking-wider cursor-pointer shadow-[0_0_10px_rgba(0,212,255,0.25)] font-headings";
    btnSo.className = "px-4 py-2 border border-white/10 rounded-lg text-xs font-bold text-white/70 hover:bg-white/5 hover:text-white transition-all uppercase tracking-wider cursor-pointer font-headings";
  }
}

function translateNavigationMenu(lang) {
  document.querySelectorAll('[data-lang]').forEach(el => {
    const key = el.getAttribute('data-lang');
    if (dictionary[lang] && dictionary[lang][key]) {
      el.innerText = dictionary[lang][key];
    }
  });

  // Re-adjust input placeholders dynamically
  const sStud = document.getElementById('search-students');
  if (sStud) sStud.placeholder = lang === 'so' ? 'Raadi arday...' : 'Search student by name or code...';

  const sTeach = document.getElementById('search-teachers');
  if (sTeach) sTeach.placeholder = lang === 'so' ? 'Raadi macallimiin...' : 'Search teacher by name or subject...';

  // Redraw views on settings toggle
  showSection(activeSection);
}

/* ==========================================================================
   === USER MANAGEMENT PORTAL (Admin Only) ===
   ========================================================================== */
function renderAdminUsers() {
  const tbody = document.getElementById('users-table-body');
  if (!tbody) return;
  tbody.innerHTML = '';

  users.forEach(user => {
    let roleBadgeClass = '';
    if (user.role === 'Admin') roleBadgeClass = 'border-[#C0392B] text-[#C0392B] shadow-[0_0_10px_rgba(192,57,43,0.25)]';
    else if (user.role === 'Teacher') roleBadgeClass = 'border-[#00d4ff] text-[#00d4ff] shadow-[0_0_10px_rgba(0,212,255,0.25)]';
    else if (user.role === 'Student') roleBadgeClass = 'border-[#D4AF37] text-[#D4AF37] shadow-[0_0_10px_rgba(212,175,55,0.25)]';

    let statusClass = user.status === 'Active' 
      ? 'bg-green-955/60 text-green-400 border border-green-500/20' 
      : 'bg-red-955/60 text-red-400 border border-red-500/20';

    tbody.innerHTML += `
      <tr class="app-table-row border-b border-white/5 hover:bg-white/5 transition-colors duration-150">
        <td class="px-6 py-4 text-sm font-bold text-white">${user.name}</td>
        <td class="px-6 py-4 text-xs text-white/60 font-mono">${user.email}</td>
        <td class="px-6 py-4 text-center">
          <span class="px-2 py-0.5 rounded border text-[10px] font-bold ${roleBadgeClass}">${user.role}</span>
        </td>
        <td class="px-6 py-4 text-center">
          <span class="px-2.5 py-0.5 rounded-full font-bold text-[10px] ${statusClass}">${user.status}</span>
        </td>
        <td class="px-6 py-4 text-xs text-white/50">${user.lastLogin || '--'}</td>
        <td class="px-6 py-4 text-xs text-white/60 no-print text-center flex justify-center gap-3">
          <button type="button" class="text-school-cyan hover:text-white transition-all text-xs font-bold cursor-pointer" onclick="editUser('${user.id}')" title="Edit Role & Link"><i class="fa-solid fa-pen"></i></button>
          <button type="button" class="${user.status === 'Active' ? 'text-amber-400 hover:text-amber-500' : 'text-green-400 hover:text-green-500'} transition-all text-xs font-bold cursor-pointer" onclick="toggleUserStatus('${user.id}')" title="${user.status === 'Active' ? 'Suspend Account' : 'Activate Account'}">
            <i class="fa-solid ${user.status === 'Active' ? 'fa-ban' : 'fa-check-circle'}"></i>
          </button>
          <button type="button" class="text-red-400 hover:text-red-600 transition-all text-xs font-bold cursor-pointer" onclick="deleteUser('${user.id}')" title="Delete Account"><i class="fa-solid fa-trash"></i></button>
        </td>
      </tr>
    `;
  });
}

function toggleUserRoleFields() {
  const role = document.getElementById('user-role').value;
  const teacherCont = document.getElementById('role-link-teacher-container');
  const studentCont = document.getElementById('role-link-student-container');
  
  if (teacherCont) teacherCont.classList.add('hidden');
  if (studentCont) studentCont.classList.add('hidden');
  
  if (role === 'Teacher') {
    if (teacherCont) {
      teacherCont.classList.remove('hidden');
      const select = document.getElementById('user-link-teacher');
      if (select) {
        select.innerHTML = teachers.map(t => `<option value="${t.id}">${t.name} (${t.id} - ${t.subject})</option>`).join('');
      }
    }
  } else if (role === 'Student') {
    if (studentCont) {
      studentCont.classList.remove('hidden');
      const select = document.getElementById('user-link-student');
      if (select) {
        select.innerHTML = students.map(s => `<option value="${s.id}">${s.name} (${s.id} - ${s.class})</option>`).join('');
      }
    }
  }
}

function editUser(id) {
  const user = users.find(u => u.id === id);
  if (!user) return;
  
  openModal('modal-add-user');
  
  document.getElementById('user-modal-title').innerText = "Edit User Account";
  document.getElementById('user-edit-id').value = user.id;
  document.getElementById('user-name').value = user.name;
  document.getElementById('user-email').value = user.email;
  document.getElementById('user-password').value = user.password;
  document.getElementById('user-role').value = user.role;
  document.getElementById('user-status').value = user.status;
  
  toggleUserRoleFields();
  
  if (user.role === 'Teacher') {
    const select = document.getElementById('user-link-teacher');
    if (select) select.value = user.teacherId || '';
  } else if (user.role === 'Student') {
    const select = document.getElementById('user-link-student');
    if (select) select.value = user.studentId || '';
  }
}

function toggleUserStatus(id) {
  const user = users.find(u => u.id === id);
  if (!user) return;
  
  user.status = user.status === 'Active' ? 'Suspended' : 'Active';
  saveAllToLocalStorage();
  renderAdminUsers();
  showToast(`Account status updated to ${user.status}`, "success");
}

function deleteUser(id) {
  if (confirm("Are you sure you want to delete this user account?")) {
    users = users.filter(u => u.id !== id);
    saveAllToLocalStorage();
    renderAdminUsers();
    showToast("User account deleted successfully", "error");
  }
}

function saveUserForm(event) {
  event.preventDefault();
  const form = document.getElementById('user-form');
  if (!validateForm(form)) return;

  const id = document.getElementById('user-edit-id').value;
  const name = document.getElementById('user-name').value.trim();
  const email = document.getElementById('user-email').value.trim();
  const password = document.getElementById('user-password').value.trim();
  const role = document.getElementById('user-role').value;
  const status = document.getElementById('user-status').value;
  
  let teacherId = '';
  let studentId = '';
  
  if (role === 'Teacher') {
    teacherId = document.getElementById('user-link-teacher').value;
  } else if (role === 'Student') {
    studentId = document.getElementById('user-link-student').value;
  }

  if (id) {
    // Edit mode
    const idx = users.findIndex(u => u.id === id);
    if (idx > -1) {
      users[idx] = { ...users[idx], name, email, password, role, status, teacherId, studentId };
      showToast("User account updated", "success");
    }
  } else {
    // Add mode
    const emailExists = users.some(u => u.email.toLowerCase() === email.toLowerCase());
    if (emailExists) {
      showToast("Email address already registered", "error");
      return;
    }
    const nextId = 'USR' + String(users.length + 1).padStart(3, '0');
    users.push({ id: nextId, name, email, password, role, status, teacherId, studentId, lastLogin: '' });
    showToast("User account created successfully", "success");
  }

  saveAllToLocalStorage();
  closeModal('modal-add-user');
  renderAdminUsers();
}

/* ==========================================================================
   === MODALS CORE SYSTEM ===
   ========================================================================== */
function openModal(modalId) {
  const overlay = document.getElementById(modalId);
  if (!overlay) return;
  overlay.classList.add('active');
  
  const box = overlay.querySelector('.modal-box');
  if (box) box.focus();
}

function closeModal(modalId) {
  const overlay = document.getElementById(modalId);
  if (!overlay) return;
  overlay.classList.remove('active');
  
  // Clear forms and highlights if present
  const form = overlay.querySelector('form');
  if (form) {
    form.reset();
    form.querySelectorAll('input, select, textarea').forEach(el => el.classList.remove('border-red-500'));
    form.querySelectorAll('.form-error-msg').forEach(el => el.classList.add('hidden'));
    
    const editId = form.querySelector('[id*="-edit-id"]');
    if (editId) editId.value = '';
  }
}

// Keyboard ESC dismissal
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.active').forEach(modal => {
      closeModal(modal.id);
    });
  }
});

/* ==========================================================================
   === TOAST ALERTS NOTIFICATIONS ===
   ========================================================================== */
function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  
  const toast = document.createElement('div');
  toast.className = `toast toast-${type} p-4 flex items-center gap-3 rounded-xl border border-white/10 shadow-2xl`;
  
  let icon = 'fa-circle-check text-green-400';
  if (type === 'error') icon = 'fa-circle-exclamation text-red-400';
  if (type === 'info') icon = 'fa-circle-info text-school-cyan';

  toast.innerHTML = `
    <i class="fa-solid ${icon} text-lg shrink-0"></i>
    <div class="text-xs font-bold text-white/90 leading-tight">${message}</div>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.transform = 'translateX(120%)';
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

/* ==========================================================================
   === FORM VALIDATION ENGINE ===
   ========================================================================== */
function validateForm(formElement) {
  let valid = true;
  formElement.querySelectorAll('[required]').forEach(input => {
    const errorEl = input.nextElementSibling;
    if (!input.value.trim()) {
      input.classList.add('border-red-500');
      if (errorEl && errorEl.classList.contains('form-error-msg')) {
        errorEl.classList.remove('hidden');
      }
      valid = false;
    } else {
      input.classList.remove('border-red-500');
      if (errorEl && errorEl.classList.contains('form-error-msg')) {
        errorEl.classList.add('hidden');
      }
    }
  });
  return valid;
}

/* ==========================================================================
   === LIGHT / DARK MODE SYSTEM TRANSITIONS ===
   ========================================================================== */
function initTheme() {
  const saved = localStorage.getItem('theme') || 'dark'; // default to cyber dark
  if (saved === 'light') {
    document.documentElement.classList.add('light');
    updateThemeToggleIcon('light');
    const checkbox = document.getElementById('dark-theme-mode-check');
    if (checkbox) checkbox.checked = true;
  } else {
    document.documentElement.classList.remove('light');
    updateThemeToggleIcon('dark');
    const checkbox = document.getElementById('dark-theme-mode-check');
    if (checkbox) checkbox.checked = false;
  }
}

function toggleTheme() {
  const isLight = document.documentElement.classList.toggle('light');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
  updateThemeToggleIcon(isLight ? 'light' : 'dark');
  
  // Sync the settings mode checkbox
  const checkbox = document.getElementById('dark-theme-mode-check');
  if (checkbox) checkbox.checked = isLight;
  
  // Dynamic Chart redraw
  initCharts();
  
  showToast(isLight ? "Light theme overlays active" : "Futuristic cyber dark space theme active", "info");
}

function updateThemeToggleIcon(mode) {
  const btn = document.getElementById('theme-toggle');
  if (btn) {
    btn.innerHTML = mode === 'light' 
      ? '<i class="fas fa-sun text-yellow-400 text-base"></i>' 
      : '<i class="fas fa-moon text-school-cyan text-base"></i>';
  }
}

/* ==========================================================================
   === DYNAMIC BACKGROUND CANVAS PARTICLES DRIFT ===
   ========================================================================== */
function initBackgroundParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  
  let particles = [];
  const particleCount = 45;
  
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();
  
  // Seed drift coordinates
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 2 + 1,
      color: getRandomParticleColor()
    });
  }
  
  function getRandomParticleColor() {
    const r = Math.random();
    if (r < 0.4) return 'rgba(0, 212, 255, 0.15)'; // Cyan
    if (r < 0.7) return 'rgba(139, 0, 0, 0.1)';   // Crimson
    return 'rgba(255, 255, 255, 0.1)';            // White
  }
  
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      
      // Wrapping screen borders
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;
      
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
    });
    
    requestAnimationFrame(animate);
  }
  
  animate();
}

/* ==========================================================================
   === DYNAMIC JOOGITAANKA ATTENDANCE SECTION LOGIC ===
   ========================================================================== */
let activeAttendanceTab = 'mark';

function initAttendanceSection() {
  switchAttendanceTab(activeAttendanceTab);
  
  const markClassSelect = document.getElementById('att-mark-class');
  const recClassSelect = document.getElementById('att-rec-class');
  
  let classOpts = '';
  classes.forEach(c => {
    classOpts += `<option value="${c.name}">${c.name}</option>`;
  });
  if (markClassSelect) markClassSelect.innerHTML = classOpts;
  
  let recOpts = `<option value="">All Classes</option>`;
  classes.forEach(c => {
    recOpts += `<option value="${c.name}">${c.name}</option>`;
  });
  if (recClassSelect) recClassSelect.innerHTML = recOpts;
}

function switchAttendanceTab(tabName) {
  activeAttendanceTab = tabName;
  
  document.querySelectorAll('.att-tab').forEach(btn => {
    if (btn.id === `att-tab-${tabName}`) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  
  const paneMark = document.getElementById('pane-att-mark');
  const paneRecords = document.getElementById('pane-att-records');
  const paneReports = document.getElementById('pane-att-reports');
  
  if (paneMark) paneMark.classList.add('hidden');
  if (paneRecords) paneRecords.classList.add('hidden');
  if (paneReports) paneReports.classList.add('hidden');
  
  if (tabName === 'mark') {
    if (paneMark) paneMark.classList.remove('hidden');
    const selectedClass = document.getElementById('att-mark-class').value;
    const selectedDate = document.getElementById('att-mark-date').value;
    if (selectedClass && selectedDate && !document.getElementById('att-mark-container').classList.contains('hidden')) {
      loadMarkAttendanceStudents();
    }
  } else if (tabName === 'records') {
    if (paneRecords) paneRecords.classList.remove('hidden');
    renderAttendanceRecords();
  } else if (tabName === 'reports') {
    if (paneReports) paneReports.classList.remove('hidden');
    renderAttendanceReports();
  }
}

let currentlyMarkingClass = '';
let currentlyMarkingDate = '';

function loadMarkAttendanceStudents() {
  const dateInput = document.getElementById('att-mark-date');
  const classSelect = document.getElementById('att-mark-class');
  const subjectSelect = document.getElementById('att-mark-subject');
  
  if (!dateInput || !classSelect || !subjectSelect) return;
  
  currentlyMarkingDate = dateInput.value;
  currentlyMarkingClass = classSelect.value;
  const subject = subjectSelect.value;
  
  if (!currentlyMarkingDate) {
    showToast("Please specify a marking date", "error");
    return;
  }
  
  const list = students.filter(s => s.class === currentlyMarkingClass);
  const tbody = document.getElementById('att-mark-table-body');
  if (!tbody) return;
  tbody.innerHTML = '';
  
  if (list.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" class="px-6 py-8 text-center text-xs text-white/50 italic font-medium">No students enrolled in class section ${currentlyMarkingClass}.</td></tr>`;
    document.getElementById('att-mark-container').classList.remove('hidden');
    document.getElementById('att-mark-fallback').classList.add('hidden');
    updateAttendanceSummaryBar();
    return;
  }
  
  const existing = attendance.filter(r => r.date === currentlyMarkingDate && r.class === currentlyMarkingClass && r.subject === subject);
  
  list.forEach((s, idx) => {
    const initial = s.name.charAt(0);
    const extRecord = existing.find(r => r.studentId === s.id);
    const status = extRecord ? extRecord.status : 'present';
    const note = extRecord ? extRecord.note : '';
    
    tbody.innerHTML += `
      <tr class="app-table-row border-b border-white/5" data-student-id="${s.id}" data-student-name="${s.name}">
        <td class="px-6 py-4 text-xs text-white/50 font-bold">${idx + 1}</td>
        <td class="px-6 py-4">
          <div class="w-8 h-8 rounded-full bg-gradient-to-tr from-school-red to-school-accent border border-school-gold text-school-gold flex items-center justify-center font-bold text-xs shadow-md shrink-0 select-none">
            ${initial}
          </div>
        </td>
        <td class="px-6 py-4 text-sm font-bold text-white">${s.name}</td>
        <td class="px-6 py-4 text-xs font-bold text-school-cyan">${s.id}</td>
        <td class="px-6 py-4">
          <div class="flex gap-1.5 no-print">
            <button type="button" class="status-btn present ${status === 'present' ? 'active' : ''}" onclick="toggleRowStatus(this, 'present')">✅ Present</button>
            <button type="button" class="status-btn absent ${status === 'absent' ? 'active' : ''}" onclick="toggleRowStatus(this, 'absent')">❌ Absent</button>
            <button type="button" class="status-btn late ${status === 'late' ? 'active' : ''}" onclick="toggleRowStatus(this, 'late')">🕐 Late</button>
            <button type="button" class="status-btn excused ${status === 'excused' ? 'active' : ''}" onclick="toggleRowStatus(this, 'excused')">🏥 Excused</button>
          </div>
        </td>
        <td class="px-6 py-4">
          <input type="text" class="glass-input px-3 py-1.5 rounded-lg text-xs w-full focus:outline-none placeholder-white/10" value="${note}" placeholder="Reason/Note...">
        </td>
      </tr>
    `;
  });
  
  document.getElementById('att-mark-container').classList.remove('hidden');
  document.getElementById('att-mark-fallback').classList.add('hidden');
  updateAttendanceSummaryBar();
  showToast(`Roster loaded successfully for ${currentlyMarkingClass}`, "info");
}

function toggleRowStatus(btn, status) {
  const parentDiv = btn.parentNode;
  parentDiv.querySelectorAll('.status-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  updateAttendanceSummaryBar();
}

function markAllStatus(status) {
  const tbody = document.getElementById('att-mark-table-body');
  if (!tbody) return;
  
  tbody.querySelectorAll('tr[data-student-id]').forEach(row => {
    row.querySelectorAll('.status-btn').forEach(b => {
      if (b.classList.contains(status)) {
        b.classList.add('active');
      } else {
        b.classList.remove('active');
      }
    });
  });
  updateAttendanceSummaryBar();
  showToast(`Marked all student lines as ${status.toUpperCase()}`, "info");
}

function updateAttendanceSummaryBar() {
  const tbody = document.getElementById('att-mark-table-body');
  if (!tbody) return;
  
  const rows = tbody.querySelectorAll('tr[data-student-id]');
  const total = rows.length;
  
  let present = 0;
  let absent = 0;
  let late = 0;
  let excused = 0;
  
  rows.forEach(row => {
    const activeBtn = row.querySelector('.status-btn.active');
    if (activeBtn) {
      if (activeBtn.classList.contains('present')) present++;
      else if (activeBtn.classList.contains('absent')) absent++;
      else if (activeBtn.classList.contains('late')) late++;
      else if (activeBtn.classList.contains('excused')) excused++;
    }
  });
  
  document.getElementById('att-mark-total').innerText = total;
  document.getElementById('att-mark-present').innerText = present;
  document.getElementById('att-mark-absent').innerText = absent;
  document.getElementById('att-mark-late').innerText = late;
  document.getElementById('att-mark-excused').innerText = excused;
  
  let rate = 0;
  if (total > 0) {
    rate = ((present + late) / total) * 100;
  }
  
  document.getElementById('att-mark-rate-percent').innerText = `${rate.toFixed(1)}%`;
  
  const bar = document.getElementById('att-mark-progress-bar');
  if (bar) bar.style.width = `${rate}%`;
}

function resetMarkAttendance() {
  if (confirm("Reset current marked selections? Unsaved modifications will be lost.")) {
    loadMarkAttendanceStudents();
  }
}

function submitMarkedAttendance() {
  const tbody = document.getElementById('att-mark-table-body');
  if (!tbody) return;
  
  const rows = tbody.querySelectorAll('tr[data-student-id]');
  if (rows.length === 0) {
    showToast("Roster table contains no entries to record", "error");
    return;
  }
  
  const subject = document.getElementById('att-mark-subject').value;
  let collected = [];
  
  rows.forEach(row => {
    const studentId = row.getAttribute('data-student-id');
    const studentName = row.getAttribute('data-student-name');
    const activeBtn = row.querySelector('.status-btn.active');
    const noteInput = row.querySelector('input[type="text"]');
    
    let status = 'present';
    if (activeBtn) {
      if (activeBtn.classList.contains('present')) status = 'present';
      else if (activeBtn.classList.contains('absent')) status = 'absent';
      else if (activeBtn.classList.contains('late')) status = 'late';
      else if (activeBtn.classList.contains('excused')) status = 'excused';
    }
    
    collected.push({
      id: Date.now() + Math.random(),
      date: currentlyMarkingDate,
      studentId: studentId,
      studentName: studentName,
      class: currentlyMarkingClass,
      subject: subject,
      status: status,
      note: noteInput ? noteInput.value.trim() : '',
      markedBy: 'Admin Registrar',
      markedAt: new Date().toISOString()
    });
  });
  
  // Clean records for class+date+subject
  attendance = attendance.filter(r => !(r.date === currentlyMarkingDate && r.class === currentlyMarkingClass && r.subject === subject));
  
  attendance.push(...collected);
  
  saveAllToLocalStorage();
  showToast(`Attendance recorded successfully for ${currentlyMarkingClass}!`, "success");
  
  loadMarkAttendanceStudents();
  initDashboardAttendanceWidget();
}

let attendanceRecordsPage = 1;
const attendanceRecordsLimit = 10;

function renderAttendanceRecords() {
  const search = document.getElementById('att-rec-search').value.toLowerCase();
  const cls = document.getElementById('att-rec-class').value;
  const status = document.getElementById('att-rec-status').value;
  const from = document.getElementById('att-rec-from').value;
  const to = document.getElementById('att-rec-to').value;
  
  const tbody = document.getElementById('att-rec-table-body');
  if (!tbody) return;
  tbody.innerHTML = '';
  
  const filtered = attendance.filter(r => {
    const matchesSearch = r.studentName.toLowerCase().includes(search) || r.studentId.toLowerCase().includes(search);
    const matchesClass = cls === '' || r.class === cls;
    const matchesStatus = status === '' || r.status === status;
    
    let matchesFrom = true;
    if (from) matchesFrom = r.date >= from;
    
    let matchesTo = true;
    if (to) matchesTo = r.date <= to;
    
    return matchesSearch && matchesClass && matchesStatus && matchesFrom && matchesTo;
  });
  
  filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
  
  const total = filtered.length;
  const totalPages = Math.ceil(total / attendanceRecordsLimit) || 1;
  
  if (attendanceRecordsPage > totalPages) attendanceRecordsPage = totalPages;
  if (attendanceRecordsPage < 1) attendanceRecordsPage = 1;
  
  const start = (attendanceRecordsPage - 1) * attendanceRecordsLimit;
  const end = Math.min(start + attendanceRecordsLimit, total);
  
  const pageData = filtered.slice(start, end);
  
  if (pageData.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" class="px-6 py-6 text-center text-xs text-white/50 italic">No attendance log history found matching filters.</td></tr>`;
  } else {
    pageData.forEach(r => {
      let pillClass = 'bg-white/5 text-white border border-white/10';
      let statusLabel = 'Present';
      
      if (r.status === 'present') {
        pillClass = 'bg-green-955/60 text-green-400 border border-green-500/20';
        statusLabel = 'Present';
      } else if (r.status === 'absent') {
        pillClass = 'bg-red-955/60 text-red-400 border border-red-500/20';
        statusLabel = 'Absent';
      } else if (r.status === 'late') {
        pillClass = 'bg-amber-955/60 text-school-gold border border-school-gold/25';
        statusLabel = 'Late';
      } else if (r.status === 'excused') {
        pillClass = 'bg-purple-955/60 text-purple-400 border border-purple-500/20';
        statusLabel = 'Excused';
      }
      
      tbody.innerHTML += `
        <tr class="app-table-row border-b border-white/5 hover:bg-white/5 transition-colors duration-150">
          <td class="px-6 py-4 text-xs font-bold text-white font-mono">${r.date}</td>
          <td class="px-6 py-4 text-sm font-bold text-white">${r.studentName} (${r.studentId})</td>
          <td class="px-6 py-4 text-xs text-white/80"><span class="px-2 py-0.5 rounded bg-white/5 text-school-gold border border-white/10 font-bold">${r.class}</span></td>
          <td class="px-6 py-4 text-xs text-white/70">${r.subject}</td>
          <td class="px-6 py-4 text-xs"><span class="px-2.5 py-0.5 rounded-full font-bold ${pillClass}">${statusLabel}</span></td>
          <td class="px-6 py-4 text-xs text-white/60">${r.note || '--'}</td>
          <td class="px-6 py-4 text-xs text-white/50 font-semibold">${r.markedBy}</td>
        </tr>
      `;
    });
  }
  
  document.getElementById('att-rec-pagination-info').innerText = `Showing ${total > 0 ? start + 1 : 0}-${end} of ${total} entries`;
  
  const btnPrev = document.getElementById('btn-att-rec-prev');
  const btnNext = document.getElementById('btn-att-rec-next');
  
  if (btnPrev) btnPrev.disabled = attendanceRecordsPage === 1;
  if (btnNext) btnNext.disabled = attendanceRecordsPage === totalPages;
}

function prevAttendanceRecordsPage() {
  if (attendanceRecordsPage > 1) {
    attendanceRecordsPage--;
    renderAttendanceRecords();
  }
}

function nextAttendanceRecordsPage() {
  attendanceRecordsPage++;
  renderAttendanceRecords();
}

function exportAttendanceCSV() {
  const headers = ['Date', 'Student ID', 'Student Name', 'Class', 'Subject', 'Status', 'Note', 'Marked By', 'Marked At'];
  let csvContent = "data:text/csv;charset=utf-8," + headers.join(",") + "\n";
  
  attendance.forEach(r => {
    const row = [r.date, r.studentId, r.studentName, r.class, r.subject, r.status, r.note || '', r.markedBy, r.markedAt];
    csvContent += row.map(v => `"${v}"`).join(",") + "\n";
  });
  
  const uri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", uri);
  link.setAttribute("download", `Abaarso_School_Attendance_Roster_${new Date().toISOString().slice(0,10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showToast("CSV Attendance report exported successfully", "success");
}

let trendChartInstance = null;
let comparisonChartInstance = null;
let overviewChartInstance = null;
let summaryTableSortField = 'name';
let summaryTableSortAsc = true;

function renderAttendanceReports() {
  if (attendance.length === 0) return;
  
  const totalCount = attendance.length;
  const presentOrLate = attendance.filter(r => r.status === 'present' || r.status === 'late').length;
  const overallRate = totalCount > 0 ? (presentOrLate / totalCount) * 100 : 0;
  document.getElementById('att-rep-stat-overall').innerText = `${overallRate.toFixed(1)}%`;
  
  let studAttendanceCounts = {};
  attendance.forEach(r => {
    if (!studAttendanceCounts[r.studentId]) {
      studAttendanceCounts[r.studentId] = { name: r.studentName, present: 0, total: 0 };
    }
    studAttendanceCounts[r.studentId].total++;
    if (r.status === 'present' || r.status === 'late') {
      studAttendanceCounts[r.studentId].present++;
    }
  });
  
  let mostPresentStud = '--';
  let highestPresentDays = 0;
  let mostAbsentStud = '--';
  let highestAbsentDays = 0;
  
  Object.keys(studAttendanceCounts).forEach(id => {
    const info = studAttendanceCounts[id];
    if (info.present > highestPresentDays) {
      highestPresentDays = info.present;
      mostPresentStud = `${info.name} (${highestPresentDays} days)`;
    }
    const absentDays = info.total - info.present;
    if (absentDays > highestAbsentDays) {
      highestAbsentDays = absentDays;
      mostAbsentStud = `${info.name} (${highestAbsentDays} days)`;
    }
  });
  
  document.getElementById('att-rep-stat-present').innerText = mostPresentStud;
  document.getElementById('att-rep-stat-absent').innerText = mostAbsentStud;
  
  const todayStr = "2026-05-30";
  const todayRecords = attendance.filter(r => r.date === todayStr);
  const todayTotal = todayRecords.length;
  const todayPresentOrLate = todayRecords.filter(r => r.status === 'present' || r.status === 'late').length;
  const todayRate = todayTotal > 0 ? (todayPresentOrLate / todayTotal) * 100 : 0;
  
  document.getElementById('att-rep-stat-today').innerText = `${todayRate.toFixed(1)}%`;
  const todayBar = document.getElementById('att-rep-stat-today-bar');
  if (todayBar) todayBar.style.width = `${todayRate}%`;
  
  renderAttendanceSummaryTable();
  initAttendanceCharts();
}

function renderAttendanceSummaryTable() {
  const tbody = document.getElementById('att-summary-table-body');
  if (!tbody) return;
  tbody.innerHTML = '';
  
  let summaryData = [];
  students.forEach(s => {
    const records = attendance.filter(r => r.studentId === s.id);
    const total = records.length;
    const present = records.filter(r => r.status === 'present').length;
    const absent = records.filter(r => r.status === 'absent').length;
    const late = records.filter(r => r.status === 'late').length;
    const excused = records.filter(r => r.status === 'excused').length;
    
    let rate = 0;
    if (total > 0) {
      rate = ((present + late) / total) * 100;
    }
    
    summaryData.push({
      id: s.id,
      name: s.name,
      class: s.class,
      total: total,
      present: present,
      absent: absent,
      late: late,
      excused: excused,
      rate: rate
    });
  });
  
  summaryData.sort((a, b) => {
    let valA = a[summaryTableSortField];
    let valB = b[summaryTableSortField];
    
    if (typeof valA === 'string') {
      valA = valA.toLowerCase();
      valB = valB.toLowerCase();
    }
    
    if (valA < valB) return summaryTableSortAsc ? -1 : 1;
    if (valA > valB) return summaryTableSortAsc ? 1 : -1;
    return 0;
  });
  
  summaryData.forEach(row => {
    const ratePct = row.rate.toFixed(1);
    let rateClass = 'rate-poor';
    let warnIcon = ' <i class="fa-solid fa-triangle-exclamation text-xs text-red-500 animate-pulse" title="Warning: Low attendance"></i> ⚠️';
    
    if (row.rate >= 90) {
      rateClass = 'rate-excellent';
      warnIcon = '';
    } else if (row.rate >= 75) {
      rateClass = 'rate-good';
      warnIcon = '';
    } else if (row.rate >= 60) {
      rateClass = 'rate-average';
      warnIcon = '';
    }
    
    tbody.innerHTML += `
      <tr class="app-table-row border-b border-white/5 hover:bg-white/5 transition-colors duration-150">
        <td class="px-6 py-4 text-sm font-bold text-white">${row.name} (${row.id})</td>
        <td class="px-6 py-4 text-xs"><span class="px-2 py-0.5 rounded bg-white/5 text-school-gold border border-white/10 font-bold">${row.class}</span></td>
        <td class="px-6 py-4 text-xs font-semibold text-center text-white/80 font-mono">${row.total}</td>
        <td class="px-6 py-4 text-xs font-semibold text-center text-green-400 font-mono">${row.present}</td>
        <td class="px-6 py-4 text-xs font-semibold text-center text-red-400 font-mono">${row.absent}</td>
        <td class="px-6 py-4 text-xs font-semibold text-center text-school-gold font-mono">${row.late}</td>
        <td class="px-6 py-4 text-xs font-semibold text-center text-purple-400 font-mono">${row.excused}</td>
        <td class="px-6 py-4 text-sm font-extrabold text-center ${rateClass} font-mono">${ratePct}%${warnIcon}</td>
      </tr>
    `;
  });
}

function sortAttendanceSummaryTable(field) {
  if (summaryTableSortField === field) {
    summaryTableSortAsc = !summaryTableSortAsc;
  } else {
    summaryTableSortField = field;
    summaryTableSortAsc = true;
  }
  renderAttendanceSummaryTable();
}

function initAttendanceCharts() {
  if (activeSection !== 'attendance' || activeAttendanceTab !== 'reports') return;
  
  const isLightTheme = document.documentElement.classList.contains('light');
  const fontColor = isLightTheme ? '#1A1A1A' : 'rgba(255, 255, 255, 0.7)';
  const gridColor = isLightTheme ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.05)';
  
  if (trendChartInstance) trendChartInstance.destroy();
  if (comparisonChartInstance) comparisonChartInstance.destroy();
  if (overviewChartInstance) overviewChartInstance.destroy();
  
  // Weekly Trend Line Chart
  const trendCanvas = document.getElementById('attendance-trend-chart');
  if (trendCanvas) {
    const labelDates = ['May 23 (Sat)', 'May 24 (Sun)', 'May 25 (Mon)', 'May 26 (Tue)', 'May 27 (Wed)', 'May 28 (Thu)', 'May 30 (Sat)'];
    const datesFilter = ['2026-05-23', '2026-05-24', '2026-05-25', '2026-05-26', '2026-05-27', '2026-05-28', '2026-05-30'];
    
    let presentData = [];
    let absentData = [];
    let lateData = [];
    
    datesFilter.forEach(dStr => {
      const dayRecs = attendance.filter(r => r.date === dStr);
      const total = dayRecs.length;
      if (total > 0) {
        presentData.push(((dayRecs.filter(r => r.status === 'present').length) / total * 100).toFixed(0));
        absentData.push(((dayRecs.filter(r => r.status === 'absent').length) / total * 100).toFixed(0));
        lateData.push(((dayRecs.filter(r => r.status === 'late').length) / total * 100).toFixed(0));
      } else {
        presentData.push(90);
        absentData.push(5);
        lateData.push(5);
      }
    });
    
    trendChartInstance = new Chart(trendCanvas.getContext('2d'), {
      type: 'line',
      data: {
        labels: labelDates,
        datasets: [
          { label: 'Present', data: presentData, borderColor: '#00d4ff', backgroundColor: 'transparent', borderWidth: 2.5, pointRadius: 3, tension: 0.3 },
          { label: 'Absent', data: absentData, borderColor: '#8B0000', backgroundColor: 'transparent', borderWidth: 2, pointRadius: 3, tension: 0.3 },
          { label: 'Late', data: lateData, borderColor: '#D4AF37', backgroundColor: 'transparent', borderWidth: 2, pointRadius: 3, tension: 0.3 }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { grid: { color: gridColor }, ticks: { color: fontColor, font: { size: 9 } } },
          y: { min: 0, max: 100, grid: { color: gridColor }, ticks: { color: fontColor, font: { size: 9 } } }
        }
      }
    });
  }
  
  // Class Comparison Horizontal Bar Chart
  const comparisonCanvas = document.getElementById('attendance-class-chart');
  if (comparisonCanvas) {
    const classNames = classes.map(c => c.name);
    let presentRates = [];
    let absentRates = [];
    
    classNames.forEach(cName => {
      const classRecs = attendance.filter(r => r.class === cName);
      const total = classRecs.length;
      if (total > 0) {
        const presCount = classRecs.filter(r => r.status === 'present' || r.status === 'late').length;
        const absCount = classRecs.filter(r => r.status === 'absent').length;
        presentRates.push((presCount / total * 100).toFixed(0));
        absentRates.push((absCount / total * 100).toFixed(0));
      } else {
        presentRates.push(85);
        absentRates.push(10);
      }
    });
    
    comparisonChartInstance = new Chart(comparisonCanvas.getContext('2d'), {
      type: 'bar',
      data: {
        labels: classNames,
        datasets: [
          { label: 'Present %', data: presentRates, backgroundColor: '#00d4ff', borderRadius: 4 },
          { label: 'Absent %', data: absentRates, backgroundColor: '#8B0000', borderRadius: 4 }
        ]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { min: 0, max: 100, grid: { color: gridColor }, ticks: { color: fontColor, font: { size: 9 } } },
          y: { grid: { display: false }, ticks: { color: fontColor, font: { size: 9 } } }
        }
      }
    });
  }
  
  // Monthly Overview Donut
  const overviewCanvas = document.getElementById('attendance-monthly-chart');
  if (overviewCanvas) {
    const total = attendance.length;
    let presPct = 85;
    let absPct = 5;
    let latePct = 7;
    let excPct = 3;
    
    if (total > 0) {
      presPct = ((attendance.filter(r => r.status === 'present').length) / total * 100).toFixed(0);
      absPct = ((attendance.filter(r => r.status === 'absent').length) / total * 100).toFixed(0);
      latePct = ((attendance.filter(r => r.status === 'late').length) / total * 100).toFixed(0);
      excPct = ((attendance.filter(r => r.status === 'excused').length) / total * 100).toFixed(0);
    }
    
    const centerTextPlugin = {
      id: 'centerText',
      afterDraw(chart) {
        const { ctx, chartArea: { top, bottom, left, right } } = chart;
        ctx.save();
        ctx.font = 'bold 15px Exo 2';
        ctx.fillStyle = fontColor;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        const presentOrLateRatio = parseFloat(presPct) + parseFloat(latePct);
        ctx.fillText(`${presentOrLateRatio.toFixed(0)}%`, (left + right) / 2, (top + bottom) / 2);
        ctx.restore();
      }
    };
    
    overviewChartInstance = new Chart(overviewCanvas.getContext('2d'), {
      type: 'doughnut',
      data: {
        labels: ['Present', 'Absent', 'Late', 'Excused'],
        datasets: [{
          data: [presPct, absPct, latePct, excPct],
          backgroundColor: ['#00d4ff', '#8B0000', '#D4AF37', '#7B2FBE'],
          borderWidth: isLightTheme ? 1.5 : 0,
          borderColor: isLightTheme ? '#ffffff' : 'transparent',
          hoverOffset: 4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        cutout: '72%'
      },
      plugins: [centerTextPlugin]
    });
  }
}

let dashAttendanceChartInstance = null;

function initDashboardAttendanceWidget() {
  const donutCanvas = document.getElementById('dash-attendance-donut-canvas');
  if (!donutCanvas) return;
  
  const isLightTheme = document.documentElement.classList.contains('light');
  
  if (dashAttendanceChartInstance) {
    dashAttendanceChartInstance.destroy();
    dashAttendanceChartInstance = null;
  }
  
  const todayStr = "2026-05-30";
  const todayRecords = attendance.filter(r => r.date === todayStr);
  const total = todayRecords.length;
  
  let present = 0;
  let absent = 0;
  let late = 0;
  let excused = 0;
  
  if (total > 0) {
    present = todayRecords.filter(r => r.status === 'present').length;
    absent = todayRecords.filter(r => r.status === 'absent').length;
    late = todayRecords.filter(r => r.status === 'late').length;
    excused = todayRecords.filter(r => r.status === 'excused').length;
  } else {
    present = 10;
    absent = 1;
    late = 1;
    excused = 0;
  }
  
  const rate = total > 0 ? (((present + late) / total) * 100).toFixed(0) : 91;
  
  document.getElementById('dash-att-present-val').innerText = present;
  document.getElementById('dash-att-absent-val').innerText = absent;
  document.getElementById('dash-att-late-val').innerText = late;
  
  dashAttendanceChartInstance = new Chart(donutCanvas.getContext('2d'), {
    type: 'doughnut',
    data: {
      labels: ['Present', 'Absent', 'Late', 'Excused'],
      datasets: [{
        data: [present, absent, late, excused],
        backgroundColor: ['#00d4ff', '#8B0000', '#D4AF37', '#7B2FBE'],
        borderWidth: isLightTheme ? 1 : 0,
        borderColor: isLightTheme ? '#ffffff' : 'transparent',
        hoverOffset: 3
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      cutout: '72%'
    },
    plugins: [{
      id: 'dashCenterText',
      afterDraw(chart) {
        const { ctx, chartArea: { top, bottom, left, right } } = chart;
        ctx.save();
        ctx.font = 'bold 12px Exo 2';
        ctx.fillStyle = isLightTheme ? '#1A1A1A' : 'rgba(255,255,255,0.85)';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(`${rate}%`, (left + right) / 2, (top + bottom) / 2);
        ctx.restore();
      }
    }]
  });
}

function initAttendanceSectionSelectors() {
  const markDate = document.getElementById('att-mark-date');
  const recFrom = document.getElementById('att-rec-from');
  const recTo = document.getElementById('att-rec-to');
  
  const todayStr = "2026-05-30";
  if (markDate) markDate.value = todayStr;
  
  const pastStr = "2026-05-01";
  if (recFrom) recFrom.value = pastStr;
  if (recTo) recTo.value = todayStr;
}

/* ==========================================================================
   === APPLICATION INITIALIZER SEQUENCE ===
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  // 1. Particle Canvas Initialization
  initBackgroundParticles();
  
  // 2. Sync visual customizer colors and languages
  initTheme();
  applySettingsAesthetics();

  // 3. Trigger session guard immediately
  checkSessionGuard();

  // Initialize Attendance Selectors and dashboard widget on load
  initAttendanceSectionSelectors();
  initDashboardAttendanceWidget();

  // 4. Time Update for Hargeisa clock (Mogadishu time zone GMT+3) across all header panels
  setInterval(() => {
    const timeStr = new Date().toLocaleString("en-US", {
      timeZone: "Africa/Mogadishu",
      hour12: true,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
    const label = settings.language === 'so' ? 'Hargeysa: ' : 'Hargeisa: ';
    
    // Select all clocks
    document.querySelectorAll('[id*="live-clock"]').forEach(clockEl => {
      clockEl.querySelector('span').innerText = `${label}${timeStr}`;
    });
  }, 1000);

  // 5. Connect modal click overlay dismissal bounds
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        closeModal(overlay.id);
      }
    });
  });
  
  // 6. Connect sidebar hamburger clicks for all roles
  document.querySelectorAll('[id*="-sidebar-hamburger"], #sidebar-hamburger').forEach(toggleBtn => {
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleSidebar();
    });
  });
  
  // 7. Connect mobile overlay backdrops for all roles
  document.querySelectorAll('[id*="-overlay"]').forEach(overlay => {
    overlay.addEventListener('click', () => {
      closeSidebar();
    });
  });
});

/* ==========================================================================
   ==========================================================================
   === TEACHER APP MODULES ===
   ==========================================================================
   ========================================================================== */
function initTeacherApp() {
  const sidebarName = document.getElementById('teacher-sidebar-name');
  if (sidebarName) sidebarName.innerText = currentUser.name;
  
  const sidebarAvatar = document.getElementById('teacher-sidebar-avatar');
  if (sidebarAvatar) {
    const initials = currentUser.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
    sidebarAvatar.innerText = initials;
  }
  
  showTeacherSection('dashboard');
}

function showTeacherSection(sectionId) {
  activeSection = sectionId;
  const mainEl = document.getElementById('teacher-main');
  if (mainEl) {
    // Hide all sections first
    mainEl.innerHTML = '';
  }

  // Update active links in teacher sidebar
  const sidebarEl = document.getElementById('teacher-sidebar');
  if (sidebarEl) {
    sidebarEl.querySelectorAll('.sidebar-link').forEach(link => {
      if (link.getAttribute('data-view') === sectionId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  // Update page heading title
  const currentLang = settings.language || 'en';
  const headingText = dictionary[currentLang][sectionId] || sectionId.toUpperCase();
  const pageHeaderTitle = document.getElementById('teacher-header-page-title');
  if (pageHeaderTitle) pageHeaderTitle.innerText = headingText;

  // Trigger page load and inject layout dynamically
  if (sectionId === 'dashboard') {
    renderTeacherDashboard();
  } else if (sectionId === 'classes') {
    renderTeacherClasses();
  } else if (sectionId === 'attendance') {
    renderTeacherAttendance();
  } else if (sectionId === 'exams') {
    renderTeacherExams();
  } else if (sectionId === 'announcements') {
    renderTeacherAnnouncements();
  } else if (sectionId === 'profile') {
    renderTeacherProfile();
  }
}

function renderTeacherDashboard() {
  const container = document.getElementById('teacher-main');
  if (!container) return;

  const teacherRecord = teachers.find(t => t.id === currentUser.teacherId) || teachers[0];
  const teacherClasses = classes.filter(c => c.teacherId === teacherRecord.id);
  const totalStudents = teacherClasses.reduce((sum, c) => sum + students.filter(s => s.class === c.name).length, 0);

  container.innerHTML = `
    <!-- Moving Notice Bar -->
    <div class="glass p-3 flex items-center gap-4 overflow-hidden select-none border-l-4 border-l-school-cyan shadow-lg">
      <span class="bg-[#00d4ff] text-gray-950 text-[9px] font-bold px-2 py-0.5 rounded tracking-widest shrink-0 uppercase">Notice</span>
      <div class="flex-grow whitespace-nowrap overflow-hidden">
        <span class="inline-block animate-[marquee_20s_linear_infinite] hover:paused text-sm text-school-cyan font-semibold tracking-wider">
          Abaarso Teacher Portal - Good Morning, ${currentUser.name}! Timetables and Grade Books are fully synced. Keep registers up to date.
        </span>
      </div>
    </div>

    <!-- Stats row -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 select-none">
      <div class="glass p-5 border-b-2 border-school-cyan flex flex-col justify-between h-32 card-hover-lift">
        <div class="flex justify-between items-start w-full">
          <div>
            <span class="text-3xl font-extrabold tracking-wide text-glow font-headings">${teacherClasses.length}</span>
            <p class="text-[10px] text-white/50 font-bold uppercase tracking-widest mt-1.5">My Classes</p>
          </div>
          <div class="w-10 h-10 bg-school-cyan/15 rounded-full flex items-center justify-center border border-school-cyan/35 shadow-[0_0_15px_rgba(0,212,255,0.25)]">
            <i class="fa-solid fa-school text-school-cyan text-sm"></i>
          </div>
        </div>
      </div>
      <div class="glass p-5 border-b-2 border-school-gold flex flex-col justify-between h-32 card-hover-lift">
        <div class="flex justify-between items-start w-full">
          <div>
            <span class="text-3xl font-extrabold tracking-wide text-glow font-headings">${totalStudents}</span>
            <p class="text-[10px] text-white/50 font-bold uppercase tracking-widest mt-1.5">My Students</p>
          </div>
          <div class="w-10 h-10 bg-school-gold/15 rounded-full flex items-center justify-center border border-school-gold/35 shadow-[0_0_15px_rgba(212,175,55,0.25)]">
            <i class="fa-solid fa-graduation-cap text-school-gold text-sm"></i>
          </div>
        </div>
      </div>
      <div class="glass p-5 border-b-2 border-school-cyan flex flex-col justify-between h-32 card-hover-lift">
        <div class="flex justify-between items-start w-full">
          <div>
            <span class="text-3xl font-extrabold tracking-wide text-glow font-headings">4</span>
            <p class="text-[10px] text-white/50 font-bold uppercase tracking-widest mt-1.5">Today's Lessons</p>
          </div>
          <div class="w-10 h-10 bg-school-cyan/15 rounded-full flex items-center justify-center border border-school-cyan/35 shadow-[0_0_15px_rgba(0,212,255,0.25)]">
            <i class="fa-solid fa-calendar-days text-school-cyan text-sm"></i>
          </div>
        </div>
      </div>
      <div class="glass p-5 border-b-2 border-school-red flex flex-col justify-between h-32 card-hover-lift">
        <div class="flex justify-between items-start w-full">
          <div>
            <span class="text-3xl font-extrabold tracking-wide text-glow font-headings">12</span>
            <p class="text-[10px] text-white/50 font-bold uppercase tracking-widest mt-1.5">Pending Grades</p>
          </div>
          <div class="w-10 h-10 bg-school-red/15 rounded-full flex items-center justify-center border border-school-red/35 shadow-[0_0_15px_rgba(139,0,0,0.25)]">
            <i class="fa-solid fa-file-pen text-[#ff4f4f] text-sm"></i>
          </div>
        </div>
      </div>
    </div>

    <!-- Widgets row -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      
      <!-- Timetable Widget -->
      <div class="glass p-6 shadow-2xl flex flex-col justify-between relative overflow-hidden">
        <div class="flex justify-between items-center mb-4 border-b border-white/10 pb-3">
          <h3 class="text-base font-bold text-white font-headings flex items-center gap-2">
            <i class="fa-solid fa-clock text-school-cyan"></i>
            <span>Today's Timetable</span>
          </h3>
          <span class="text-[9px] bg-school-cyan/20 text-school-cyan border border-school-cyan/35 px-2 py-0.5 rounded uppercase font-semibold">Lessons</span>
        </div>
        <div class="space-y-3 h-[250px] overflow-y-auto pr-1">
          <div class="p-3 rounded-lg border border-school-cyan/30 bg-school-cyan/10 flex justify-between items-center shadow-[0_0_15px_rgba(0,212,255,0.15)] animate-pulse">
            <div>
              <span class="text-[9px] font-bold text-school-cyan uppercase tracking-wider block mb-0.5">Period 1 (08:00 - 08:45)</span>
              <h4 class="font-bold text-white text-xs">Mathematics - Grade 10-A</h4>
            </div>
            <span class="px-2 py-0.5 rounded bg-school-cyan text-gray-950 font-bold text-[9px]">Room 204</span>
          </div>
          <div class="p-3 rounded-lg border border-white/5 bg-white/5 flex justify-between items-center">
            <div>
              <span class="text-[9px] font-bold text-white/40 uppercase tracking-wider block mb-0.5">Period 2 (08:45 - 09:30)</span>
              <h4 class="font-bold text-white text-xs">Mathematics - Grade 10-A</h4>
            </div>
            <span class="px-2 py-0.5 rounded bg-white/10 text-white/70 font-bold text-[9px]">Room 204</span>
          </div>
          <div class="p-3 rounded-lg border border-white/5 bg-white/5 flex justify-between items-center">
            <div>
              <span class="text-[9px] font-bold text-white/40 uppercase tracking-wider block mb-0.5">Period 4 (10:30 - 11:15)</span>
              <h4 class="font-bold text-white text-xs">Faculty Roster Review</h4>
            </div>
            <span class="px-2 py-0.5 rounded bg-white/10 text-white/70 font-bold text-[9px]">Admin Hall</span>
          </div>
          <div class="p-3 rounded-lg border border-white/5 bg-white/5 flex justify-between items-center">
            <div>
              <span class="text-[9px] font-bold text-white/40 uppercase tracking-wider block mb-0.5">Period 6 (12:15 - 01:00)</span>
              <h4 class="font-bold text-white text-xs">Grade 10 Syllabus Review</h4>
            </div>
            <span class="px-2 py-0.5 rounded bg-white/10 text-white/70 font-bold text-[9px]">Room 204</span>
          </div>
        </div>
      </div>

      <!-- Classes Overview progress -->
      <div class="glass p-6 shadow-2xl flex flex-col justify-between">
        <div class="flex justify-between items-center mb-4 border-b border-white/10 pb-3">
          <h3 class="text-base font-bold text-white font-headings flex items-center gap-2">
            <i class="fa-solid fa-list-check text-school-cyan"></i>
            <span>My Classes Overview</span>
          </h3>
        </div>
        <div class="space-y-4 py-2">
          ${teacherClasses.map(c => {
            const classStudents = students.filter(s => s.class === c.name);
            const classRecs = attendance.filter(r => r.class === c.name);
            const present = classRecs.filter(r => r.status === 'present' || r.status === 'late').length;
            const rate = classRecs.length > 0 ? ((present / classRecs.length) * 100).toFixed(0) : 92;
            return `
              <div class="space-y-1">
                <div class="flex justify-between items-center text-xs">
                  <span class="text-white/80 font-bold">${c.name} (${classStudents.length} Students)</span>
                  <span class="text-school-cyan font-bold">${rate}% Att.</span>
                </div>
                <div class="w-full bg-white/5 border border-white/10 rounded-full h-2 overflow-hidden">
                  <div class="progress-bar-fill h-full rounded-full" style="width: ${rate}%; background: linear-gradient(90deg, #00b4ff, #00d4ff) !important;"></div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Recent Attendance marked widget -->
      <div class="glass p-6 shadow-2xl flex flex-col justify-between">
        <div class="flex justify-between items-center mb-4 border-b border-white/10 pb-3">
          <h3 class="text-base font-bold text-white font-headings flex items-center gap-2">
            <i class="fa-solid fa-calendar-check text-school-cyan"></i>
            <span>Recent Registers Marked</span>
          </h3>
        </div>
        <div class="space-y-3 h-[250px] overflow-y-auto pr-1">
          <div class="p-3 bg-white/5 border border-white/10 rounded-lg flex justify-between items-center text-xs">
            <div>
              <span class="font-bold text-white block">Grade 10-A</span>
              <span class="text-[9px] text-white/50">Mathematics · May 30</span>
            </div>
            <div class="text-right">
              <span class="text-school-cyan font-bold block">11/12 Present</span>
              <span class="text-[9px] text-white/40">Rate: 91.7%</span>
            </div>
          </div>
          <div class="p-3 bg-white/5 border border-white/10 rounded-lg flex justify-between items-center text-xs">
            <div>
              <span class="font-bold text-white block">Grade 10-A</span>
              <span class="text-[9px] text-white/50">Mathematics · May 28</span>
            </div>
            <div class="text-right">
              <span class="text-school-cyan font-bold block">12/12 Present</span>
              <span class="text-[9px] text-white/40">Rate: 100%</span>
            </div>
          </div>
          <div class="p-3 bg-white/5 border border-white/10 rounded-lg flex justify-between items-center text-xs">
            <div>
              <span class="font-bold text-white block">Grade 10-A</span>
              <span class="text-[9px] text-white/50">Mathematics · May 27</span>
            </div>
            <div class="text-right">
              <span class="text-school-cyan font-bold block">10/12 Present</span>
              <span class="text-[9px] text-white/40">Rate: 83.3%</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  `;
}

function renderTeacherClasses() {
  const container = document.getElementById('teacher-main');
  if (!container) return;

  const teacherRecord = teachers.find(t => t.id === currentUser.teacherId) || teachers[0];
  const teacherClasses = classes.filter(c => c.teacherId === teacherRecord.id);

  container.innerHTML = `
    <div class="glass overflow-hidden shadow-xl border border-white/10">
      <div class="p-6 border-b border-white/10">
        <h3 class="text-xl font-bold text-school-gold font-serif">My Assigned Classes</h3>
      </div>
      <div class="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${teacherClasses.map(c => {
          const classStudents = students.filter(s => s.class === c.name);
          return `
            <div class="glass p-5 flex flex-col justify-between border border-white/10 card-hover-lift">
              <div>
                <h4 class="font-headings text-lg font-bold text-white mb-1">${c.name}</h4>
                <p class="text-xs text-white/50 mb-3"><i class="fa-solid fa-location-dot"></i> Room: ${c.room}</p>
                <div class="flex gap-5 text-xs text-white/80 font-bold border-t border-white/5 pt-3">
                  <span>Students: <span class="text-school-cyan font-extrabold">${classStudents.length}</span></span>
                  <span>Subject: <span class="text-school-gold font-extrabold">${teacherRecord.subject}</span></span>
                </div>
              </div>
              
              <div class="flex gap-2 mt-5">
                <button type="button" class="px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold rounded text-[10px] tracking-wider uppercase cursor-pointer flex-grow" onclick="viewTeacherClassStudents('${c.name}')">View Students</button>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
    
    <!-- Expanded students roster section -->
    <div id="teacher-class-students-container" class="glass overflow-hidden shadow-xl border border-white/10 hidden">
      <div class="p-6 border-b border-white/10 flex justify-between items-center">
        <h4 id="teacher-class-roster-title" class="font-bold text-white text-base font-headings">Class Student Roster</h4>
        <button class="text-white/45 hover:text-red-500 font-bold cursor-pointer" onclick="document.getElementById('teacher-class-students-container').classList.add('hidden')">Close</button>
      </div>
      <div class="p-6 overflow-x-auto">
        <div class="border border-white/10 rounded-xl bg-black/10">
          <table class="w-full text-left text-sm border-collapse text-white/95">
            <thead>
              <tr class="bg-white/5 border-b border-white/10 text-school-cyan text-xs font-bold uppercase tracking-wider">
                <th class="px-6 py-4">ID</th>
                <th class="px-6 py-4">Student Name</th>
                <th class="px-6 py-4">Gender</th>
                <th class="px-6 py-4">Age</th>
                <th class="px-6 py-4 text-center">Avg Grade</th>
                <th class="px-6 py-4 text-center">Attendance %</th>
              </tr>
            </thead>
            <tbody id="teacher-class-students-body">
              <!-- JS Injected -->
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

function viewTeacherClassStudents(className) {
  const container = document.getElementById('teacher-class-students-container');
  const tbody = document.getElementById('teacher-class-students-body');
  const title = document.getElementById('teacher-class-roster-title');
  if (!container || !tbody || !title) return;
  
  title.innerText = `Roster for ${className}`;
  tbody.innerHTML = '';
  
  const classStudents = students.filter(s => s.class === className);
  
  if (classStudents.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" class="px-6 py-4 text-center text-xs text-white/50 italic">No students enrolled.</td></tr>`;
  } else {
    classStudents.forEach(s => {
      // Calculate avg grade
      const studRes = results.filter(r => r.studentId === s.id);
      const avgScore = studRes.length > 0 ? (studRes.reduce((sum, r) => sum + r.score, 0) / studRes.length).toFixed(0) : '--';
      
      // Calculate attendance
      const studAtt = attendance.filter(r => r.studentId === s.id);
      const presCount = studAtt.filter(r => r.status === 'present' || r.status === 'late').length;
      const attRate = studAtt.length > 0 ? ((presCount / studAtt.length) * 100).toFixed(0) : '--';
      
      tbody.innerHTML += `
        <tr class="app-table-row border-b border-white/5 hover:bg-white/5 transition-colors duration-150">
          <td class="px-6 py-4 text-xs font-bold text-school-cyan font-mono">${s.id}</td>
          <td class="px-6 py-4 text-sm font-bold text-white">${s.name}</td>
          <td class="px-6 py-4 text-xs text-white/70">${s.gender}</td>
          <td class="px-6 py-4 text-xs text-white/70">${s.age}</td>
          <td class="px-6 py-4 text-center text-xs text-school-gold font-bold">${avgScore}%</td>
          <td class="px-6 py-4 text-center text-xs text-school-cyan font-bold">${attRate}%</td>
        </tr>
      `;
    });
  }
  container.classList.remove('hidden');
  container.scrollIntoView({ behavior: 'smooth' });
}

function renderTeacherAttendance() {
  const container = document.getElementById('teacher-main');
  if (!container) return;

  const teacherRecord = teachers.find(t => t.id === currentUser.teacherId) || teachers[0];
  const teacherClasses = classes.filter(c => c.teacherId === teacherRecord.id);

  container.innerHTML = `
    <!-- Mark Register Pane -->
    <div class="glass p-6 shadow-xl border border-white/10">
      <div class="flex justify-between items-center mb-6 border-b border-white/10 pb-3">
        <h3 class="text-base font-bold text-white font-headings flex items-center gap-2">
          <i class="fa-solid fa-calendar-check text-school-cyan"></i>
          <span>Mark Class Register</span>
        </h3>
      </div>
      <div class="flex flex-wrap gap-4 items-end justify-between">
        <div class="flex flex-wrap gap-4 items-center">
          <div class="flex flex-col gap-1 text-left">
            <label class="text-[10px] font-bold text-white/50 uppercase tracking-wider">Date</label>
            <input type="date" id="t-att-mark-date" class="glass-input px-3.5 py-2.5 rounded-lg text-xs focus:outline-none w-44" value="2026-05-30">
          </div>
          <div class="flex flex-col gap-1 text-left">
            <label class="text-[10px] font-bold text-white/50 uppercase tracking-wider">My Classes</label>
            <select id="t-att-mark-class" class="glass-input px-3.5 py-2.5 rounded-lg text-xs focus:outline-none w-44">
              ${teacherClasses.map(c => `<option value="${c.name}">${c.name}</option>`).join('')}
            </select>
          </div>
          <div class="flex flex-col gap-1 text-left">
            <label class="text-[10px] font-bold text-white/50 uppercase tracking-wider">Subject</label>
            <input type="text" class="glass-input px-3.5 py-2.5 rounded-lg text-xs focus:outline-none w-44" value="${teacherRecord.subject}" readonly>
          </div>
        </div>
        <button onclick="loadTeacherAttendanceRoster()" class="px-5 py-3 btn-primary text-white font-bold rounded-lg text-xs tracking-widest uppercase cursor-pointer">
          Load Class
        </button>
      </div>
    </div>

    <!-- Student Attendance marking table card -->
    <div id="t-att-mark-container" class="glass overflow-hidden shadow-xl border border-white/10 hidden mt-6 animate-fade">
      <div class="p-6 border-b border-white/10 flex justify-between items-center select-none">
        <h4 class="font-bold text-white text-base font-headings">Student Roster</h4>
        <div class="flex gap-2 text-[10px] font-semibold no-print">
          <button onclick="markAllTeacherAttendance('present')" class="px-3 py-1.5 bg-white/5 border border-white/15 hover:border-school-cyan rounded-lg text-white hover:text-white transition-all cursor-pointer">Mark All Present</button>
          <button onclick="markAllTeacherAttendance('absent')" class="px-3 py-1.5 bg-white/5 border border-white/15 hover:border-school-cyan rounded-lg text-white hover:text-white transition-all cursor-pointer">Mark All Absent</button>
        </div>
      </div>
      <div class="p-6 overflow-x-auto">
        <div class="border border-white/10 rounded-xl bg-black/10">
          <table class="w-full text-left text-sm border-collapse text-white/95">
            <thead>
              <tr class="bg-white/5 border-b border-white/10 text-school-cyan text-xs font-bold uppercase tracking-wider">
                <th class="px-6 py-4 w-12">#</th>
                <th class="px-6 py-4">Student Name</th>
                <th class="px-6 py-4 w-28">Roll No</th>
                <th class="px-6 py-4 w-[380px]">Status</th>
                <th class="px-6 py-4">Note / Reason</th>
              </tr>
            </thead>
            <tbody id="t-att-mark-table-body">
              <!-- Populated dynamically -->
            </tbody>
          </table>
        </div>
      </div>
      <div class="px-6 py-4 border-t border-white/10 flex justify-end gap-2.5 bg-black/20 no-print font-bold text-xs">
        <button onclick="submitTeacherAttendance()" class="px-5 py-2.5 btn-primary text-white rounded-lg transition-all cursor-pointer">Save Register</button>
      </div>
    </div>
  `;
}

let teacherAttendanceClass = '';
let teacherAttendanceDate = '';

function loadTeacherAttendanceRoster() {
  const dateInput = document.getElementById('t-att-mark-date');
  const classSelect = document.getElementById('t-att-mark-class');
  if (!dateInput || !classSelect) return;

  teacherAttendanceDate = dateInput.value;
  teacherAttendanceClass = classSelect.value;
  const teacherRecord = teachers.find(t => t.id === currentUser.teacherId) || teachers[0];

  if (!teacherAttendanceDate) {
    showToast("Please specify a marking date", "error");
    return;
  }

  const list = students.filter(s => s.class === teacherAttendanceClass);
  const tbody = document.getElementById('t-att-mark-table-body');
  if (!tbody) return;
  tbody.innerHTML = '';

  if (list.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" class="px-6 py-8 text-center text-xs text-white/50 italic">No students enrolled.</td></tr>`;
    document.getElementById('t-att-mark-container').classList.remove('hidden');
    return;
  }

  const existing = attendance.filter(r => r.date === teacherAttendanceDate && r.class === teacherAttendanceClass && r.subject === teacherRecord.subject);

  list.forEach((s, idx) => {
    const extRecord = existing.find(r => r.studentId === s.id);
    const status = extRecord ? extRecord.status : 'present';
    const note = extRecord ? extRecord.note : '';

    tbody.innerHTML += `
      <tr class="app-table-row border-b border-white/5" data-student-id="${s.id}" data-student-name="${s.name}">
        <td class="px-6 py-4 text-xs text-white/50 font-bold">${idx + 1}</td>
        <td class="px-6 py-4 text-sm font-bold text-white">${s.name}</td>
        <td class="px-6 py-4 text-xs font-bold text-school-cyan">${s.id}</td>
        <td class="px-6 py-4">
          <div class="flex gap-1.5 no-print">
            <button type="button" class="status-btn present ${status === 'present' ? 'active' : ''}" onclick="toggleRowStatus(this, 'present')">✅ Present</button>
            <button type="button" class="status-btn absent ${status === 'absent' ? 'active' : ''}" onclick="toggleRowStatus(this, 'absent')">❌ Absent</button>
            <button type="button" class="status-btn late ${status === 'late' ? 'active' : ''}" onclick="toggleRowStatus(this, 'late')">🕐 Late</button>
            <button type="button" class="status-btn excused ${status === 'excused' ? 'active' : ''}" onclick="toggleRowStatus(this, 'excused')">🏥 Excused</button>
          </div>
        </td>
        <td class="px-6 py-4">
          <input type="text" class="glass-input px-3 py-1.5 rounded-lg text-xs w-full focus:outline-none placeholder-white/10" value="${note}" placeholder="Reason/Note...">
        </td>
      </tr>
    `;
  });

  document.getElementById('t-att-mark-container').classList.remove('hidden');
  showToast("Roster loaded successfully", "info");
}

function markAllTeacherAttendance(status) {
  const tbody = document.getElementById('t-att-mark-table-body');
  if (!tbody) return;

  tbody.querySelectorAll('tr[data-student-id]').forEach(row => {
    row.querySelectorAll('.status-btn').forEach(b => {
      if (b.classList.contains(status)) {
        b.classList.add('active');
      } else {
        b.classList.remove('active');
      }
    });
  });
  showToast(`Marked all as ${status.toUpperCase()}`, "info");
}

function submitTeacherAttendance() {
  const tbody = document.getElementById('t-att-mark-table-body');
  if (!tbody) return;

  const rows = tbody.querySelectorAll('tr[data-student-id]');
  if (rows.length === 0) return;

  const teacherRecord = teachers.find(t => t.id === currentUser.teacherId) || teachers[0];
  let collected = [];

  rows.forEach(row => {
    const studentId = row.getAttribute('data-student-id');
    const studentName = row.getAttribute('data-student-name');
    const activeBtn = row.querySelector('.status-btn.active');
    const noteInput = row.querySelector('input[type="text"]');

    let status = 'present';
    if (activeBtn) {
      if (activeBtn.classList.contains('present')) status = 'present';
      else if (activeBtn.classList.contains('absent')) status = 'absent';
      else if (activeBtn.classList.contains('late')) status = 'late';
      else if (activeBtn.classList.contains('excused')) status = 'excused';
    }

    collected.push({
      id: Date.now() + Math.random(),
      date: teacherAttendanceDate,
      studentId: studentId,
      studentName: studentName,
      class: teacherAttendanceClass,
      subject: teacherRecord.subject,
      status: status,
      note: noteInput ? noteInput.value.trim() : '',
      markedBy: currentUser.name,
      markedAt: new Date().toISOString()
    });
  });

  // Clear records for class+date+subject
  attendance = attendance.filter(r => !(r.date === teacherAttendanceDate && r.class === teacherAttendanceClass && r.subject === teacherRecord.subject));
  attendance.push(...collected);

  saveAllToLocalStorage();
  showToast(`Attendance recorded successfully for ${teacherAttendanceClass}!`, "success");
  loadTeacherAttendanceRoster();
}

function renderTeacherExams() {
  const container = document.getElementById('teacher-main');
  if (!container) return;

  const teacherRecord = teachers.find(t => t.id === currentUser.teacherId) || teachers[0];
  const teacherClasses = classes.filter(c => c.teacherId === teacherRecord.id);

  container.innerHTML = `
    <div class="border-b border-white/10 no-print mb-6">
      <nav class="flex gap-6 text-sm font-semibold select-none">
        <button id="t-exam-tab-schedules" class="att-tab active py-3 font-headings text-base font-bold focus:outline-none cursor-pointer" onclick="switchTeacherExamsTab('schedules')">Exam Schedules</button>
        <button id="t-exam-tab-grades" class="att-tab py-3 font-headings text-base font-bold focus:outline-none cursor-pointer" onclick="switchTeacherExamsTab('grades')">Enter Grades</button>
      </nav>
    </div>

    <!-- PANE A: SCHEDULES -->
    <div id="t-pane-exam-schedules" class="space-y-6">
      <div class="glass overflow-hidden shadow-xl border border-white/10">
        <div class="p-6 border-b border-white/10 flex justify-between items-center">
          <h3 class="text-xl font-bold text-school-gold font-serif">Exams Schedules (${teacherRecord.subject})</h3>
          <button class="px-4 py-2 btn-primary text-white font-bold rounded text-xs tracking-wider transition-all shadow-lg cursor-pointer uppercase" onclick="openModal('modal-add-exam')">
            <i class="fa-solid fa-plus mr-1"></i> Add Exam
          </button>
        </div>
        <div class="p-6 overflow-x-auto">
          <div class="border border-white/10 rounded-xl bg-black/10">
            <table class="w-full text-left text-sm border-collapse text-white/95">
              <thead>
                <tr class="bg-white/5 border-b border-white/10 text-school-cyan text-xs font-bold uppercase tracking-wider">
                  <th class="px-6 py-4">Subject</th>
                  <th class="px-6 py-4">Date</th>
                  <th class="px-6 py-4">Time</th>
                  <th class="px-6 py-4">Room</th>
                </tr>
              </thead>
              <tbody id="t-exams-table-body">
                <!-- Filtered dynamically -->
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <!-- PANE B: ENTER GRADES -->
    <div id="t-pane-exam-grades" class="space-y-6 hidden">
      <div class="glass p-6 shadow-xl border border-white/10">
        <div class="flex flex-wrap gap-4 items-end">
          <div class="flex flex-col gap-1 text-left">
            <label class="text-[10px] font-bold text-white/50 uppercase tracking-wider">Select Class</label>
            <select id="t-grade-class" class="glass-input px-3.5 py-2.5 rounded-lg text-xs focus:outline-none w-44">
              ${teacherClasses.map(c => `<option value="${c.name}">${c.name}</option>`).join('')}
            </select>
          </div>
          <div class="flex flex-col gap-1 text-left">
            <label class="text-[10px] font-bold text-white/50 uppercase tracking-wider">Select Exam Subject</label>
            <input type="text" class="glass-input px-3.5 py-2.5 rounded-lg text-xs focus:outline-none w-44" value="${teacherRecord.subject}" readonly>
          </div>
          <button onclick="loadTeacherGradeEntryRoster()" class="px-5 py-3 btn-primary text-white font-bold rounded-lg text-xs tracking-widest uppercase cursor-pointer">
            Load Student List
          </button>
        </div>
      </div>

      <div id="t-grade-entry-card" class="glass overflow-hidden shadow-xl border border-white/10 hidden animate-fade">
        <div class="p-6 border-b border-white/10">
          <h4 class="font-bold text-white text-base font-headings">Student Grade Book</h4>
        </div>
        <div class="p-6 overflow-x-auto">
          <div class="border border-white/10 rounded-xl bg-black/10">
            <table class="w-full text-left text-sm border-collapse text-white/95">
              <thead>
                <tr class="bg-white/5 border-b border-white/10 text-school-cyan text-xs font-bold uppercase tracking-wider">
                  <th class="px-6 py-4">Student</th>
                  <th class="px-6 py-4 w-[200px]">Marks Obtained (0-100)</th>
                  <th class="px-6 py-4 text-center w-28">Grade</th>
                  <th class="px-6 py-4">Remarks / Notes</th>
                </tr>
              </thead>
              <tbody id="t-grade-entry-table-body">
                <!-- Dynamically populated -->
              </tbody>
            </table>
          </div>
        </div>
        <div class="px-6 py-4 border-t border-white/10 flex justify-end gap-2.5 bg-black/20 no-print font-bold text-xs">
          <button onclick="submitTeacherGrades()" class="px-5 py-2.5 btn-primary text-white rounded-lg transition-all cursor-pointer">Save Grades</button>
        </div>
      </div>
    </div>
  `;

  // Render exam schedules (filtered to this teacher's subject)
  const tbody = document.getElementById('t-exams-table-body');
  if (tbody) {
    const filteredExams = exams.filter(ex => ex.subject === teacherRecord.subject);
    if (filteredExams.length === 0) {
      tbody.innerHTML = `<tr><td colspan="4" class="px-6 py-4 text-center text-xs text-white/50 italic">No exams scheduled.</td></tr>`;
    } else {
      filteredExams.forEach(ex => {
        tbody.innerHTML += `
          <tr class="app-table-row border-b border-white/5 hover:bg-white/5 transition-colors duration-150">
            <td class="px-6 py-4 text-sm font-bold text-white">${ex.subject}</td>
            <td class="px-6 py-4 text-xs font-bold text-school-cyan">${ex.date}</td>
            <td class="px-6 py-4 text-xs text-white/80">${ex.time}</td>
            <td class="px-6 py-4 text-xs text-white/70">${ex.room}</td>
          </tr>
        `;
      });
    }
  }
}

function switchTeacherExamsTab(tabName) {
  const schedulesTab = document.getElementById('t-exam-tab-schedules');
  const gradesTab = document.getElementById('t-exam-tab-grades');
  const paneSchedules = document.getElementById('t-pane-exam-schedules');
  const paneGrades = document.getElementById('t-pane-exam-grades');

  if (tabName === 'schedules') {
    schedulesTab.classList.add('active');
    gradesTab.classList.remove('active');
    paneSchedules.classList.remove('hidden');
    paneGrades.classList.add('hidden');
  } else {
    schedulesTab.classList.remove('active');
    gradesTab.classList.add('active');
    paneSchedules.classList.add('hidden');
    paneGrades.classList.remove('hidden');
  }
}

let currentlyGradingClass = '';

function loadTeacherGradeEntryRoster() {
  const classSelect = document.getElementById('t-grade-class');
  if (!classSelect) return;

  currentlyGradingClass = classSelect.value;
  const teacherRecord = teachers.find(t => t.id === currentUser.teacherId) || teachers[0];

  const list = students.filter(s => s.class === currentlyGradingClass);
  const tbody = document.getElementById('t-grade-entry-table-body');
  const container = document.getElementById('t-grade-entry-card');
  if (!tbody || !container) return;

  tbody.innerHTML = '';

  if (list.length === 0) {
    tbody.innerHTML = `<tr><td colspan="4" class="px-6 py-8 text-center text-xs text-white/50 italic">No students in Grade ${currentlyGradingClass}.</td></tr>`;
    container.classList.remove('hidden');
    return;
  }

  list.forEach(s => {
    const existing = results.find(r => r.studentId === s.id && r.subject === teacherRecord.subject);
    const score = existing ? existing.score : '';
    const gradeVal = existing ? getGradeFromScore(existing.score) : '--';
    
    tbody.innerHTML += `
      <tr class="app-table-row border-b border-white/5" data-student-id="${s.id}">
        <td class="px-6 py-4 text-sm font-bold text-white">${s.name} (${s.id})</td>
        <td class="px-6 py-4">
          <input type="number" class="glass-input px-3 py-1.5 rounded-lg text-xs w-36 focus:outline-none" value="${score}" placeholder="Enter score..." min="0" max="100" oninput="updateGradeBookCell(this)">
        </td>
        <td class="px-6 py-4 text-center text-xs text-school-gold font-bold font-mono grade-cell-label">${gradeVal}</td>
        <td class="px-6 py-4">
          <input type="text" class="glass-input px-3 py-1.5 rounded-lg text-xs w-full focus:outline-none placeholder-white/10" value="${score >= 60 ? 'Passed' : (score === '' ? '' : 'Failed')}" placeholder="Remarks...">
        </td>
      </tr>
    `;
  });

  container.classList.remove('hidden');
  showToast("Grade sheet loaded", "info");
}

function updateGradeBookCell(input) {
  const score = parseInt(input.value);
  const row = input.closest('tr');
  const gradeLabel = row.querySelector('.grade-cell-label');
  const remarkInput = row.querySelectorAll('input')[1];

  if (!isNaN(score) && score >= 0 && score <= 100) {
    const grade = getGradeFromScore(score);
    if (gradeLabel) gradeLabel.innerText = grade;
    if (remarkInput) remarkInput.value = score >= 60 ? 'Passed' : 'Failed';
  } else {
    if (gradeLabel) gradeLabel.innerText = '--';
    if (remarkInput) remarkInput.value = '';
  }
}

function submitTeacherGrades() {
  const tbody = document.getElementById('t-grade-entry-table-body');
  if (!tbody) return;

  const rows = tbody.querySelectorAll('tr[data-student-id]');
  if (rows.length === 0) return;

  const teacherRecord = teachers.find(t => t.id === currentUser.teacherId) || teachers[0];

  rows.forEach(row => {
    const studentId = row.getAttribute('data-student-id');
    const scoreVal = row.querySelector('input[type="number"]').value.trim();

    if (scoreVal !== '') {
      const score = parseInt(scoreVal);
      if (score >= 0 && score <= 100) {
        // Clear old result
        results = results.filter(r => !(r.studentId === studentId && r.subject === teacherRecord.subject));
        // Add new
        results.push({
          id: 'RES' + String(results.length + 1).padStart(3, '0'),
          studentId: studentId,
          subject: teacherRecord.subject,
          score: score
        });
      }
    }
  });

  saveAllToLocalStorage();
  showToast(`Grades recorded successfully!`, "success");
  loadTeacherGradeEntryRoster();
}

function renderTeacherAnnouncements() {
  const container = document.getElementById('teacher-main');
  if (!container) return;

  container.innerHTML = `
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div class="lg:col-span-2 space-y-4" id="t-announcements-timeline">
        <!-- notice board -->
      </div>

      <div class="glass p-6 shadow-2xl h-fit">
        <h3 class="text-lg font-bold text-school-gold border-b border-white/10 pb-3 mb-4 uppercase tracking-wider">Draft Announcement</h3>
        <form id="t-announcement-form" onsubmit="saveTeacherAnnouncementForm(event)" class="space-y-4">
          <div>
            <label class="block text-xs font-bold text-white/50 uppercase mb-2">Title</label>
            <input type="text" id="t-ann-title" class="glass-input w-full p-2.5 rounded text-sm focus:outline-none" required>
          </div>
          <div>
            <label class="block text-xs font-bold text-white/50 uppercase mb-2">Date</label>
            <input type="date" id="t-ann-date" class="glass-input w-full p-2.5 rounded text-sm focus:outline-none" value="2026-05-30" required>
          </div>
          <div>
            <label class="block text-xs font-bold text-white/50 uppercase mb-2">Category</label>
            <select id="t-ann-category" class="glass-input w-full p-2.5 rounded text-sm focus:outline-none">
              <option value="Academic">Academic</option>
              <option value="Event">Event</option>
              <option value="General">General</option>
            </select>
          </div>
          <div>
            <label class="block text-xs font-bold text-white/50 uppercase mb-2">Message</label>
            <textarea id="t-ann-message" class="glass-input w-full p-2.5 rounded text-sm focus:outline-none" rows="5" required></textarea>
          </div>
          <button type="submit" class="w-full py-3 btn-primary text-white font-bold rounded text-xs uppercase tracking-wider transition-all shadow-lg cursor-pointer">
            <i class="fa-solid fa-paper-plane mr-1"></i> Publish Announcement
          </button>
        </form>
      </div>
    </div>
  `;

  // Timeline list
  renderTeacherAnnouncementsTimeline();
}

function renderTeacherAnnouncementsTimeline() {
  const container = document.getElementById('t-announcements-timeline');
  if (!container) return;

  container.innerHTML = '';
  const sorted = [...announcements].sort((a, b) => new Date(b.date) - new Date(a.date));

  if (sorted.length === 0) {
    container.innerHTML = `<div class="p-8 text-center text-xs text-white/40 italic bg-white/5 rounded-xl border border-white/10">No announcements.</div>`;
    return;
  }

  sorted.forEach(ann => {
    let badgeClass = 'bg-white/5 text-white border border-white/10';
    if (ann.category === 'Academic') badgeClass = 'bg-blue-955/60 text-blue-300 border border-blue-500/20';
    else if (ann.category === 'Event') badgeClass = 'bg-purple-955/60 text-purple-300 border border-purple-500/20';

    container.innerHTML += `
      <div class="glass p-6 shadow-2xl transition-all relative">
        <div class="flex items-center justify-between mb-3">
          <div class="flex items-center gap-3">
            <span class="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${badgeClass}">${ann.category}</span>
            <span class="text-[10px] text-white/40 font-semibold"><i class="fa-regular fa-clock"></i> ${ann.date}</span>
          </div>
        </div>
        <h3 class="font-bold text-white text-base font-headings mb-2">${ann.title}</h3>
        <p class="text-xs text-white/70 leading-relaxed">${ann.message}</p>
      </div>
    `;
  });
}

function saveTeacherAnnouncementForm(event) {
  event.preventDefault();
  const form = document.getElementById('t-announcement-form');
  if (!validateForm(form)) return;

  const title = document.getElementById('t-ann-title').value.trim();
  const date = document.getElementById('t-ann-date').value;
  const category = document.getElementById('t-ann-category').value;
  const message = document.getElementById('t-ann-message').value.trim();

  const nextId = 'ANN' + String(announcements.length + 1).padStart(3, '0');
  announcements.unshift({ id: nextId, title, date, category, message, pinned: false });

  saveAllToLocalStorage();
  form.reset();
  renderTeacherAnnouncementsTimeline();
  showToast("Notice published successfully", "success");
}

function renderTeacherProfile() {
  const container = document.getElementById('teacher-main');
  if (!container) return;

  const teacher = teachers.find(t => t.id === currentUser.teacherId) || teachers[0];
  const teacherClasses = classes.filter(c => c.teacherId === teacher.id);
  const totalStudents = teacherClasses.reduce((sum, c) => sum + students.filter(s => s.class === c.name).length, 0);

  // Calculate Avg Class Grade
  const classAvgSum = teacherClasses.reduce((sum, c) => {
    const classStudents = students.filter(s => s.class === c.name);
    if (classStudents.length === 0) return sum + 80;
    const scores = results.filter(r => r.subject === teacher.subject && classStudents.some(s => s.id === r.studentId));
    return sum + (scores.length > 0 ? scores.reduce((sSum, sc) => sSum + sc.score, 0) / scores.length : 82);
  }, 0);
  const avgClassGrade = teacherClasses.length > 0 ? (classAvgSum / teacherClasses.length).toFixed(0) : 84;

  container.innerHTML = `
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      
      <!-- Edit Profile form -->
      <div class="glass p-6 shadow-2xl lg:col-span-2">
        <h3 class="text-lg font-bold text-school-gold border-b border-white/10 pb-3 mb-6 uppercase tracking-wider">My Professional Profile</h3>
        <form id="t-profile-form" onsubmit="saveTeacherProfileForm(event)" class="space-y-4">
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-bold text-white/50 uppercase mb-2">Instructor Name</label>
              <input type="text" id="t-prof-name" class="glass-input w-full p-2.5 rounded text-sm focus:outline-none" value="${teacher.name}" required>
            </div>
            <div>
              <label class="block text-xs font-bold text-white/50 uppercase mb-2">Subject Specialty</label>
              <input type="text" class="glass-input w-full p-2.5 rounded text-sm focus:outline-none" value="${teacher.subject}" readonly>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-bold text-white/50 uppercase mb-2">Qualification</label>
              <input type="text" id="t-prof-qual" class="glass-input w-full p-2.5 rounded text-sm focus:outline-none" value="${teacher.qualification}" required>
            </div>
            <div>
              <label class="block text-xs font-bold text-white/50 uppercase mb-2">Phone</label>
              <input type="text" id="t-prof-phone" class="glass-input w-full p-2.5 rounded text-sm focus:outline-none" value="${teacher.phone}" required>
            </div>
          </div>
          <div>
            <label class="block text-xs font-bold text-white/50 uppercase mb-2">Email Address</label>
            <input type="email" id="t-prof-email" class="glass-input w-full p-2.5 rounded text-sm focus:outline-none" value="${teacher.email}" required>
          </div>
          <div>
            <label class="block text-xs font-bold text-white/50 uppercase mb-2">Professional Biography</label>
            <textarea id="t-prof-bio" class="glass-input w-full p-2.5 rounded text-sm focus:outline-none" rows="4">${currentUser.bio || 'Dedicated educator committed to supporting student growth and excellence.'}</textarea>
          </div>
          <button type="submit" class="w-full py-3 btn-primary text-white font-bold rounded text-xs uppercase tracking-wider transition-all shadow-lg cursor-pointer">
            <i class="fa-solid fa-save mr-1"></i> Save Profile Changes
          </button>
        </form>
      </div>

      <!-- Professional Sidebar summary card -->
      <div class="glass p-6 flex flex-col justify-between shadow-2xl relative overflow-hidden card-hover-lift h-fit">
        <div class="flex flex-col items-center text-center p-4">
          <div class="w-24 h-24 bg-gradient-to-tr from-school-cyan to-blue-600 border-2 border-school-cyan rounded-full flex items-center justify-center font-bold text-4xl shadow-[0_0_20px_rgba(0,212,255,0.4)] text-white mb-4">
            ${teacher.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}
          </div>
          <h4 class="font-headings text-lg font-bold text-white">${teacher.name}</h4>
          <span class="text-xs text-school-cyan font-bold uppercase tracking-widest mt-1">${teacher.subject} Tutor</span>
        </div>

        <div class="space-y-4 pt-6 border-t border-white/5 mt-4">
          <div class="bg-white/5 border border-white/10 rounded-xl p-3 flex justify-between items-center text-xs">
            <span class="text-white/50 uppercase font-bold tracking-wider">Total Students</span>
            <span class="font-extrabold text-white font-mono">${totalStudents} Students</span>
          </div>
          <div class="bg-white/5 border border-white/10 rounded-xl p-3 flex justify-between items-center text-xs">
            <span class="text-white/50 uppercase font-bold tracking-wider">Avg Attendance</span>
            <span class="font-extrabold text-green-400 font-mono">94.8%</span>
          </div>
          <div class="bg-white/5 border border-white/10 rounded-xl p-3 flex justify-between items-center text-xs">
            <span class="text-white/50 uppercase font-bold tracking-wider">Avg Grade Roster</span>
            <span class="font-extrabold text-school-gold font-mono">${avgClassGrade}%</span>
          </div>
        </div>
      </div>

    </div>
  `;
}

function saveTeacherProfileForm(event) {
  event.preventDefault();
  
  const name = document.getElementById('t-prof-name').value.trim();
  const qual = document.getElementById('t-prof-qual').value.trim();
  const phone = document.getElementById('t-prof-phone').value.trim();
  const email = document.getElementById('t-prof-email').value.trim();
  const bio = document.getElementById('t-prof-bio').value.trim();

  // Find user and teacher records
  const teacherIdx = teachers.findIndex(t => t.id === currentUser.teacherId);
  if (teacherIdx > -1) {
    teachers[teacherIdx].name = name;
    teachers[teacherIdx].qualification = qual;
    teachers[teacherIdx].phone = phone;
    teachers[teacherIdx].email = email;
  }

  const userIdx = users.findIndex(u => u.id === currentUser.id);
  if (userIdx > -1) {
    users[userIdx].name = name;
    users[userIdx].email = email;
    users[userIdx].bio = bio;
  }

  currentUser.name = name;
  currentUser.email = email;
  currentUser.bio = bio;
  sessionStorage.setItem('currentUser', JSON.stringify(currentUser));

  saveAllToLocalStorage();
  showToast("Teacher profile configurations synced", "success");
  
  // Re-sync sidebar and header names
  document.getElementById('teacher-sidebar-name').innerText = name;
  document.getElementById('teacher-sidebar-avatar').innerText = name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
  
  renderTeacherProfile();
}


/* ==========================================================================
   ==========================================================================
   === STUDENT APP MODULES ===
   ==========================================================================
   ========================================================================== */
function initStudentApp() {
  const sidebarName = document.getElementById('student-sidebar-name');
  if (sidebarName) sidebarName.innerText = currentUser.name;

  const sidebarAvatar = document.getElementById('student-sidebar-avatar');
  if (sidebarAvatar) {
    const initials = currentUser.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
    sidebarAvatar.innerText = initials;
  }

  showStudentSection('dashboard');
}

function showStudentSection(sectionId) {
  activeSection = sectionId;
  const mainEl = document.getElementById('student-main');
  if (mainEl) {
    mainEl.innerHTML = '';
  }

  // Update links in student sidebar
  const sidebarEl = document.getElementById('student-sidebar');
  if (sidebarEl) {
    sidebarEl.querySelectorAll('.sidebar-link').forEach(link => {
      if (link.getAttribute('data-view') === sectionId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  // Update page heading title
  const currentLang = settings.language || 'en';
  const headingText = dictionary[currentLang][sectionId] || sectionId.toUpperCase();
  const pageHeaderTitle = document.getElementById('student-header-page-title');
  if (pageHeaderTitle) pageHeaderTitle.innerText = headingText;

  // Trigger loads dynamically
  if (sectionId === 'dashboard') {
    renderStudentDashboard();
  } else if (sectionId === 'attendance') {
    renderStudentAttendance();
  } else if (sectionId === 'results') {
    renderStudentResults();
  } else if (sectionId === 'fees') {
    renderStudentFees();
  } else if (sectionId === 'announcements') {
    renderStudentAnnouncements();
  } else if (sectionId === 'profile') {
    renderStudentProfile();
  }
}

let studentPerformanceChart = null;

function renderStudentDashboard() {
  const container = document.getElementById('student-main');
  if (!container) return;

  const student = students.find(s => s.id === currentUser.studentId) || students[0];
  
  // Calculate attendance rate
  const studAtt = attendance.filter(r => r.studentId === student.id);
  const present = studAtt.filter(r => r.status === 'present' || r.status === 'late').length;
  const attRate = studAtt.length > 0 ? ((present / studAtt.length) * 100).toFixed(0) : 92;

  // Calculate Avg Grade
  const studRes = results.filter(r => r.studentId === student.id);
  const avgScore = studRes.length > 0 ? studRes.reduce((sum, r) => sum + r.score, 0) / studRes.length : 85;
  const letterGrade = getGradeFromScore(avgScore);

  // Calculate fees balance
  const studFees = fees.find(f => f.studentId === student.id) || { amountDue: 1500, amountPaid: 1350 };
  const balanceDue = studFees.amountDue - studFees.amountPaid;

  container.innerHTML = `
    <!-- Top banner -->
    <div class="glass p-5 border-l-4 border-l-school-gold shadow-lg flex justify-between items-center flex-wrap gap-4">
      <div>
        <h3 class="font-headings text-xl font-bold text-white">Hello, ${currentUser.name}! 🎓</h3>
        <p class="text-xs text-school-gold mt-1 font-semibold uppercase tracking-wider">${student.class} · Student ID: ${student.id}</p>
      </div>
      <span class="bg-school-gold/20 text-school-gold border border-school-gold/30 text-[10px] font-bold px-2.5 py-1 rounded uppercase">TERM A</span>
    </div>

    <!-- Stat cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 select-none">
      <div class="glass p-5 border-b-2 border-school-cyan flex flex-col justify-between h-32 card-hover-lift">
        <div class="flex justify-between items-start w-full">
          <div>
            <span class="text-3xl font-extrabold tracking-wide text-glow font-headings">${attRate}%</span>
            <p class="text-[10px] text-white/50 font-bold uppercase tracking-widest mt-1.5">Attendance Rate</p>
          </div>
          <div class="w-10 h-10 bg-school-cyan/15 rounded-full flex items-center justify-center border border-school-cyan/35 shadow-[0_0_15px_rgba(0,212,255,0.25)]">
            <i class="fa-solid fa-calendar-check text-school-cyan text-sm"></i>
          </div>
        </div>
      </div>
      <div class="glass p-5 border-b-2 border-school-gold flex flex-col justify-between h-32 card-hover-lift">
        <div class="flex justify-between items-start w-full">
          <div>
            <span class="text-3xl font-extrabold tracking-wide text-glow font-headings">${letterGrade}</span>
            <p class="text-[10px] text-white/50 font-bold uppercase tracking-widest mt-1.5">Average Grade</p>
          </div>
          <div class="w-10 h-10 bg-school-gold/15 rounded-full flex items-center justify-center border border-school-gold/35 shadow-[0_0_15px_rgba(212,175,55,0.25)]">
            <i class="fa-solid fa-graduation-cap text-school-gold text-sm"></i>
          </div>
        </div>
      </div>
      <div class="glass p-5 border-b-2 border-[#C0392B] flex flex-col justify-between h-32 card-hover-lift">
        <div class="flex justify-between items-start w-full">
          <div>
            <span class="text-3xl font-extrabold tracking-wide text-glow font-headings" style="color: ${balanceDue > 0 ? '#ff4f4f' : '#10B981'}">$${balanceDue}</span>
            <p class="text-[10px] text-white/50 font-bold uppercase tracking-widest mt-1.5">Fees Balance</p>
          </div>
          <div class="w-10 h-10 bg-red-955/40 rounded-full flex items-center justify-center border border-red-500/20">
            <i class="fa-solid fa-wallet text-[#ff4f4f] text-sm"></i>
          </div>
        </div>
      </div>
      <div class="glass p-5 border-b-2 border-purple-500 flex flex-col justify-between h-32 card-hover-lift">
        <div class="flex justify-between items-start w-full">
          <div>
            <span class="text-3xl font-extrabold tracking-wide text-glow font-headings">3</span>
            <p class="text-[10px] text-white/50 font-bold uppercase tracking-widest mt-1.5">Upcoming Exams</p>
          </div>
          <div class="w-10 h-10 bg-purple-500/15 rounded-full flex items-center justify-center border border-purple-500/35">
            <i class="fa-solid fa-file-signature text-purple-400 text-sm"></i>
          </div>
        </div>
      </div>
    </div>

    <!-- Widgets row -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      
      <!-- Timetable -->
      <div class="glass p-6 shadow-2xl flex flex-col justify-between relative overflow-hidden">
        <div class="flex justify-between items-center mb-4 border-b border-white/10 pb-3">
          <h3 class="text-base font-bold text-white font-headings flex items-center gap-2">
            <i class="fa-solid fa-clock text-school-cyan"></i>
            <span>Today's Timetable</span>
          </h3>
        </div>
        <div class="space-y-3 h-[240px] overflow-y-auto pr-1">
          <div class="p-3 rounded-lg border border-school-cyan/30 bg-school-cyan/10 flex justify-between items-center animate-pulse">
            <div>
              <span class="text-[8px] font-bold text-school-cyan uppercase tracking-wider block mb-0.5">Period 1 (08:00 - 08:45)</span>
              <h4 class="font-bold text-white text-xs">Mathematics - Mr. Hassan Ahmed</h4>
            </div>
            <span class="px-2 py-0.5 rounded bg-school-cyan text-gray-950 font-bold text-[9px]">Room 204</span>
          </div>
          <div class="p-3 rounded-lg border border-white/5 bg-white/5 flex justify-between items-center">
            <div>
              <span class="text-[8px] font-bold text-white/40 uppercase tracking-wider block mb-0.5">Period 2 (08:45 - 09:30)</span>
              <h4 class="font-bold text-white text-xs">Mathematics - Mr. Hassan Ahmed</h4>
            </div>
            <span class="px-2 py-0.5 rounded bg-white/10 text-white/70 font-bold text-[9px]">Room 204</span>
          </div>
          <div class="p-3 rounded-lg border border-white/5 bg-white/5 flex justify-between items-center">
            <div>
              <span class="text-[8px] font-bold text-white/40 uppercase tracking-wider block mb-0.5">Period 3 (09:45 - 10:30)</span>
              <h4 class="font-bold text-white text-xs">Somali Language - Mustafe Gedi</h4>
            </div>
            <span class="px-2 py-0.5 rounded bg-white/10 text-white/70 font-bold text-[9px]">Room 204</span>
          </div>
        </div>
      </div>

      <!-- Performance graph -->
      <div class="glass p-6 shadow-2xl flex flex-col justify-between relative overflow-hidden">
        <div class="flex justify-between items-center mb-4 border-b border-white/10 pb-3">
          <h3 class="text-base font-bold text-white font-headings flex items-center gap-2">
            <i class="fa-solid fa-chart-line text-school-cyan"></i>
            <span>My Performance Trend</span>
          </h3>
        </div>
        <div class="relative h-[200px] w-full mb-2">
          <canvas id="student-dashboard-chart"></canvas>
        </div>
      </div>

      <!-- Recent Grades Roster -->
      <div class="glass p-6 shadow-2xl flex flex-col justify-between">
        <div class="flex justify-between items-center mb-4 border-b border-white/10 pb-3">
          <h3 class="text-base font-bold text-white font-headings flex items-center gap-2">
            <i class="fa-solid fa-file-pen text-school-cyan"></i>
            <span>Recent Exam Marks</span>
          </h3>
        </div>
        <div class="space-y-3 h-[240px] overflow-y-auto pr-1">
          ${studRes.slice(0, 5).map(r => {
            const letter = getGradeFromScore(r.score);
            let pillClass = 'bg-[#00d4ff]/10 text-school-cyan border-[#00d4ff]/20';
            if (letter === 'F') pillClass = 'bg-[#8B0000]/10 text-red-400 border-red-500/20';
            return `
              <div class="p-3 bg-white/5 border border-white/10 rounded-lg flex justify-between items-center text-xs">
                <div>
                  <span class="font-bold text-white block">${r.subject}</span>
                  <span class="text-[9px] text-white/50">End-of-Term Score</span>
                </div>
                <div class="text-right flex items-center gap-3">
                  <span class="text-white font-bold block">${r.score}%</span>
                  <span class="px-2 py-0.5 rounded border text-[10px] font-extrabold ${pillClass}">${letter}</span>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>

    </div>
  `;

  // Draw chart
  setTimeout(() => {
    const canvas = document.getElementById('student-dashboard-chart');
    if (!canvas) return;
    
    const isLightTheme = document.documentElement.classList.contains('light');
    const fontColor = isLightTheme ? '#1A1A1A' : 'rgba(255, 255, 255, 0.7)';
    const gridColor = isLightTheme ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.05)';

    if (studentPerformanceChart) studentPerformanceChart.destroy();

    const subjects = studRes.map(r => r.subject);
    const scores = studRes.map(r => r.score);

    const ctx = canvas.getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 0, 150);
    gradient.addColorStop(0, 'rgba(0, 212, 255, 0.45)');
    gradient.addColorStop(1, 'rgba(0, 212, 255, 0)');

    studentPerformanceChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: subjects.length > 0 ? subjects : ['Math', 'English', 'Science'],
        datasets: [{
          label: 'Exam Grades',
          data: scores.length > 0 ? scores : [92, 85, 78],
          borderColor: '#00d4ff',
          borderWidth: 2.5,
          pointBackgroundColor: '#00d4ff',
          pointBorderColor: '#ffffff',
          fill: true,
          backgroundColor: gradient,
          tension: 0.3
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { grid: { color: gridColor }, ticks: { color: fontColor, font: { size: 9 } } },
          y: { min: 0, max: 100, grid: { color: gridColor }, ticks: { color: fontColor, font: { size: 9 } } }
        }
      }
    });
  }, 100);
}

function renderStudentAttendance() {
  const container = document.getElementById('student-main');
  if (!container) return;

  const student = students.find(s => s.id === currentUser.studentId) || students[0];
  const studAtt = attendance.filter(r => r.studentId === student.id);
  
  const present = studAtt.filter(r => r.status === 'present').length;
  const absent = studAtt.filter(r => r.status === 'absent').length;
  const late = studAtt.filter(r => r.status === 'late').length;
  const excused = studAtt.filter(r => r.status === 'excused').length;
  const rate = studAtt.length > 0 ? (((present + late) / studAtt.length) * 100).toFixed(0) : 92;

  container.innerHTML = `
    <!-- Stats Row -->
    <div class="grid grid-cols-2 md:grid-cols-5 gap-6 select-none text-center">
      <div class="glass p-4 border-t-2 border-t-school-cyan">
        <span class="text-white/40 text-[9px] uppercase font-bold tracking-widest block mb-1">Total Days</span>
        <span class="text-xl font-extrabold text-white">${studAtt.length}</span>
      </div>
      <div class="glass p-4 border-t-2 border-t-green-500">
        <span class="text-white/40 text-[9px] uppercase font-bold tracking-widest block mb-1">Present</span>
        <span class="text-xl font-extrabold text-green-400">${present}</span>
      </div>
      <div class="glass p-4 border-t-2 border-t-red-500">
        <span class="text-white/40 text-[9px] uppercase font-bold tracking-widest block mb-1">Absent</span>
        <span class="text-xl font-extrabold text-red-400">${absent}</span>
      </div>
      <div class="glass p-4 border-t-2 border-t-school-gold">
        <span class="text-white/40 text-[9px] uppercase font-bold tracking-widest block mb-1">Late</span>
        <span class="text-xl font-extrabold text-school-gold">${late}</span>
      </div>
      <div class="glass p-4 border-t-2 border-t-purple-500">
        <span class="text-white/40 text-[9px] uppercase font-bold tracking-widest block mb-1">Attendance Rate</span>
        <span class="text-xl font-extrabold text-school-cyan">${rate}%</span>
      </div>
    </div>

    <!-- Monthly Calendar View -->
    <div class="glass overflow-hidden shadow-xl border border-white/10 mt-6">
      <div class="p-6 border-b border-white/10">
        <h4 class="font-bold text-white text-base font-headings">Attendance Calendar - May 2026</h4>
      </div>
      <div class="p-6">
        <!-- Calendar Grid -->
        <div class="grid grid-cols-7 gap-3 text-center text-xs font-bold text-white/40 mb-3 select-none">
          <div>SAT</div><div>SUN</div><div>MON</div><div>TUE</div><div>WED</div><div>THU</div><div class="text-red-400">FRI</div>
        </div>
        <div class="grid grid-cols-7 gap-3 text-center" id="student-calendar-grid">
          <!-- Calendar cells generated below -->
        </div>
      </div>
    </div>

    <!-- Attendance table logs -->
    <div class="glass overflow-hidden shadow-xl border border-white/10 mt-6">
      <div class="p-6 border-b border-white/10 flex justify-between items-center">
        <h4 class="font-bold text-white text-base font-headings">Complete Attendance Ledger</h4>
        <select class="glass-input px-3.5 py-1.5 rounded-lg text-xs focus:outline-none w-40 select-none">
          <option>May 2026</option>
          <option>April 2026</option>
        </select>
      </div>
      <div class="p-6 overflow-x-auto">
        <div class="border border-white/10 rounded-xl bg-black/10">
          <table class="w-full text-left text-sm border-collapse text-white/95">
            <thead>
              <tr class="bg-white/5 border-b border-white/10 text-school-cyan text-xs font-bold uppercase tracking-wider">
                <th class="px-6 py-4">Date</th>
                <th class="px-6 py-4">Subject</th>
                <th class="px-6 py-4 text-center">Status</th>
                <th class="px-6 py-4">Note / Reason</th>
              </tr>
            </thead>
            <tbody>
              ${studAtt.slice(0, 10).map(r => {
                let statusLabel = 'Present';
                let colorClass = 'bg-green-955/60 text-green-400 border border-green-500/20';
                if (r.status === 'absent') {
                  statusLabel = 'Absent';
                  colorClass = 'bg-red-955/60 text-red-400 border-red-500/20';
                } else if (r.status === 'late') {
                  statusLabel = 'Late';
                  colorClass = 'bg-amber-955/60 text-school-gold border-school-gold/20';
                } else if (r.status === 'excused') {
                  statusLabel = 'Excused';
                  colorClass = 'bg-purple-955/60 text-purple-400 border border-purple-500/20';
                }
                return `
                  <tr class="app-table-row border-b border-white/5 hover:bg-white/5 transition-colors duration-150">
                    <td class="px-6 py-4 text-xs font-bold text-white font-mono">${r.date}</td>
                    <td class="px-6 py-4 text-xs font-bold text-white">${r.subject}</td>
                    <td class="px-6 py-4 text-center">
                      <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold ${colorClass}">${statusLabel}</span>
                    </td>
                    <td class="px-6 py-4 text-xs text-white/60">${r.note || '--'}</td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;

  // Populate calendar dots
  setTimeout(() => {
    const grid = document.getElementById('student-calendar-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    // Skip 5 days offset (Fri)
    // Render 31 days of May
    for (let d = 1; d <= 31; d++) {
      const formatted = `2026-05-${String(d).padStart(2, '0')}`;
      const record = studAtt.find(r => r.date === formatted);
      const isWeekend = d % 7 === 0; // mockup Fri
      
      let dotColor = 'bg-white/10';
      let title = 'Weekend/Holiday';
      
      if (record) {
        if (record.status === 'present') { dotColor = 'bg-green-400'; title = 'Present'; }
        else if (record.status === 'absent') { dotColor = 'bg-red-500'; title = 'Absent'; }
        else if (record.status === 'late') { dotColor = 'bg-yellow-400'; title = 'Late'; }
        else if (record.status === 'excused') { dotColor = 'bg-blue-400'; title = 'Excused'; }
      } else if (isWeekend) {
        dotColor = 'bg-white/20';
      }
      
      grid.innerHTML += `
        <div class="glass p-3 rounded-lg border border-white/5 relative flex flex-col items-center justify-between h-14" title="${title}">
          <span class="text-[10px] font-bold text-white/50 font-mono">${d}</span>
          <span class="w-2.5 h-2.5 rounded-full ${dotColor} block"></span>
        </div>
      `;
    }
  }, 50);
}

function renderStudentResults() {
  const container = document.getElementById('student-main');
  if (!container) return;

  const student = students.find(s => s.id === currentUser.studentId) || students[0];
  const studRes = results.filter(r => r.studentId === student.id);
  
  // Calculate GPA
  const totalScore = studRes.reduce((sum, r) => sum + r.score, 0);
  const avgScore = studRes.length > 0 ? (totalScore / studRes.length).toFixed(1) : 88.0;
  const letter = getGradeFromScore(parseFloat(avgScore));

  container.innerHTML = `
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      
      <!-- GPA indicators card -->
      <div class="glass p-6 flex flex-col justify-between shadow-2xl relative overflow-hidden card-hover-lift h-fit">
        <div class="flex flex-col items-center text-center p-4">
          <span class="text-[9px] text-white/40 uppercase font-bold tracking-widest block mb-2">My Semester Grade Point</span>
          <div class="w-28 h-28 bg-gradient-to-tr from-school-gold to-yellow-600 border-2 border-school-gold rounded-full flex flex-col items-center justify-center font-bold text-4xl shadow-[0_0_20px_rgba(212,175,55,0.4)] text-gray-950 mb-4 select-none">
            <span class="font-extrabold leading-none">${letter}</span>
            <span class="text-[10px] font-bold font-headings leading-none mt-1.5">${avgScore}%</span>
          </div>
          <h4 class="font-headings text-lg font-bold text-white">Overall Standing</h4>
          <span class="text-xs text-school-gold font-bold uppercase tracking-widest mt-1">Class Rank: 12th out of 42</span>
        </div>
      </div>

      <!-- Subject Performance Cards Grid -->
      <div class="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
        ${studRes.map(r => {
          const letterGrade = getGradeFromScore(r.score);
          let glowClass = 'text-school-cyan shadow-[0_0_10px_rgba(0,212,255,0.2)]';
          if (letterGrade === 'F') glowClass = 'text-red-400';
          return `
            <div class="glass p-5 border border-white/10 card-hover-lift flex flex-col justify-between h-36">
              <div>
                <span class="text-[8px] font-bold text-white/40 uppercase block mb-1">Subject Performance</span>
                <h4 class="font-headings text-sm font-bold text-white leading-tight">${r.subject}</h4>
              </div>
              <div class="flex justify-between items-end mt-4">
                <div>
                  <span class="text-[8px] text-white/40 font-bold block">Score Obtained</span>
                  <span class="text-sm font-bold text-white font-mono">${r.score}%</span>
                </div>
                <span class="px-2.5 py-0.5 rounded border text-[10px] font-extrabold font-mono ${glowClass}">${letterGrade}</span>
              </div>
            </div>
          `;
        }).join('')}
      </div>

    </div>

    <!-- Complete Ledger Table -->
    <div class="glass overflow-hidden shadow-xl border border-white/10 mt-6">
      <div class="p-6 border-b border-white/10">
        <h4 class="font-bold text-white text-base font-headings">Full Term Results Ledger</h4>
      </div>
      <div class="p-6 overflow-x-auto">
        <div class="border border-white/10 rounded-xl bg-black/10">
          <table class="w-full text-left text-sm border-collapse text-white/95">
            <thead>
              <tr class="bg-white/5 border-b border-white/10 text-school-cyan text-xs font-bold uppercase tracking-wider">
                <th class="px-6 py-4">Subject</th>
                <th class="px-6 py-4 text-center">Term Code</th>
                <th class="px-6 py-4 text-center">Score Obtained</th>
                <th class="px-6 py-4 text-center">Grade</th>
                <th class="px-6 py-4">Status</th>
              </tr>
            </thead>
            <tbody>
              ${studRes.map(r => {
                const gradeVal = getGradeFromScore(r.score);
                return `
                  <tr class="app-table-row border-b border-white/5 hover:bg-white/5 transition-colors duration-150">
                    <td class="px-6 py-4 text-sm font-bold text-white">${r.subject}</td>
                    <td class="px-6 py-4 text-center text-xs font-semibold text-white/70">TERM-2026A</td>
                    <td class="px-6 py-4 text-center text-xs font-bold text-white font-mono">${r.score}%</td>
                    <td class="px-6 py-4 text-center text-xs text-school-gold font-extrabold font-mono">${gradeVal}</td>
                    <td class="px-6 py-4 text-xs font-bold ${r.score >= 60 ? 'text-green-400' : 'text-red-400'}">${r.score >= 60 ? 'Passed' : 'Failed'}</td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

function renderStudentFees() {
  const container = document.getElementById('student-main');
  if (!container) return;

  const student = students.find(s => s.id === currentUser.studentId) || students[0];
  const studFees = fees.find(f => f.studentId === student.id) || { amountDue: 1500, amountPaid: 1350 };
  const balanceDue = studFees.amountDue - studFees.amountPaid;

  container.innerHTML = `
    <!-- Summary Row -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 select-none text-center">
      <div class="glass p-6 border-t-4 border-t-school-cyan">
        <span class="text-white/50 text-[10px] uppercase font-bold tracking-widest block mb-1">Total Term Fees</span>
        <h3 class="text-2xl font-bold text-white font-headings font-mono">$${studFees.amountDue.toLocaleString()}</h3>
      </div>
      <div class="glass p-6 border-t-4 border-t-green-500">
        <span class="text-white/50 text-[10px] uppercase font-bold tracking-widest block mb-1">Amount Paid</span>
        <h3 class="text-2xl font-bold text-white font-headings font-mono">$${studFees.amountPaid.toLocaleString()}</h3>
      </div>
      <div class="glass p-6 border-t-4 border-t-red-500">
        <span class="text-white/50 text-[10px] uppercase font-bold tracking-widest block mb-1">Balance Due</span>
        <h3 class="text-2xl font-bold font-headings font-mono ${balanceDue > 0 ? 'text-red-400' : 'text-green-400'}" id="student-fees-balance">$${balanceDue.toLocaleString()}</h3>
      </div>
    </div>

    <!-- Fees invoices and payments ledger list -->
    <div class="glass overflow-hidden shadow-xl border border-white/10 mt-6">
      <div class="p-6 border-b border-white/10 flex justify-between items-center flex-wrap gap-4">
        <h4 class="font-bold text-white text-base font-headings">Transactions & Payments History</h4>
        ${balanceDue > 0 ? `
          <button class="px-5 py-2 btn-primary text-white font-bold rounded text-xs tracking-wider transition-all shadow-lg cursor-pointer uppercase font-headings" onclick="openStudentPayNowModal()">
            <i class="fa-solid fa-credit-card mr-1.5 animate-bounce"></i> Pay Outstanding
          </button>
        ` : ''}
      </div>
      <div class="p-6 overflow-x-auto">
        <div class="border border-white/10 rounded-xl bg-black/10">
          <table class="w-full text-left text-sm border-collapse text-white/95">
            <thead>
              <tr class="bg-white/5 border-b border-white/10 text-school-cyan text-xs font-bold uppercase tracking-wider">
                <th class="px-6 py-4">Receipt #</th>
                <th class="px-6 py-4">Description</th>
                <th class="px-6 py-4">Amount</th>
                <th class="px-6 py-4">Date</th>
                <th class="px-6 py-4">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr class="app-table-row border-b border-white/5 hover:bg-white/5 transition-colors duration-150">
                <td class="px-6 py-4 text-xs font-bold text-school-cyan font-mono">REC-2026040</td>
                <td class="px-6 py-4 text-xs font-semibold text-white">First Installment Term Fees</td>
                <td class="px-6 py-4 text-xs font-bold text-white font-mono">$${studFees.amountPaid.toLocaleString()}</td>
                <td class="px-6 py-4 text-xs text-white/50">2026-05-10</td>
                <td class="px-6 py-4 text-xs">
                  <span class="px-2.5 py-0.5 rounded-full font-bold bg-green-955/60 text-green-400 border border-green-500/20 text-[10px]">Paid</span>
                </td>
              </tr>
              ${balanceDue > 0 ? `
                <tr class="app-table-row border-b border-white/5 hover:bg-white/5 transition-colors duration-150">
                  <td class="px-6 py-4 text-xs font-bold text-white/40 font-mono">--</td>
                  <td class="px-6 py-4 text-xs font-semibold text-white/70">Outstanding Roster Balance</td>
                  <td class="px-6 py-4 text-xs font-bold text-red-400 font-mono">$${balanceDue.toLocaleString()}</td>
                  <td class="px-6 py-4 text-xs text-white/30">Immediate</td>
                  <td class="px-6 py-4 text-xs">
                    <span class="px-2.5 py-0.5 rounded-full font-bold bg-red-955/60 text-red-400 border border-red-500/20 text-[10px] animate-pulse">Overdue ⚠️</span>
                  </td>
                </tr>
              ` : ''}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

function openStudentPayNowModal() {
  const schoolPhone = settings.phone || '528629';
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay active';
  overlay.id = 'modal-pay-now-custom';
  overlay.innerHTML = `
    <div class="glass modal-box w-full max-w-sm overflow-hidden relative shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/15 p-6 animate-fade text-center">
      <i class="fa-solid fa-circle-info text-school-gold text-4xl mb-3 block animate-pulse"></i>
      <h3 class="font-bold text-white text-lg font-headings mb-2">Process Fees Payment</h3>
      <p class="text-xs text-white/75 leading-relaxed mb-6">
        Please contact the school administrative office or finance department directly to process payments.
      </p>
      <div class="bg-white/5 border border-white/10 rounded-xl p-3 mb-6 flex justify-between items-center text-xs font-bold font-mono text-school-gold">
        <span>SCHOOL PHONE</span>
        <span>${schoolPhone}</span>
      </div>
      <button class="w-full py-2.5 btn-primary text-white font-bold rounded text-xs uppercase tracking-wider cursor-pointer" onclick="document.getElementById('modal-pay-now-custom').remove()">DISMISS</button>
    </div>
  `;
  document.body.appendChild(overlay);
}

function renderStudentAnnouncements() {
  const container = document.getElementById('student-main');
  if (!container) return;

  container.innerHTML = `
    <div class="space-y-4" id="s-announcements-timeline">
      <!-- Injected -->
    </div>
  `;

  const timeline = document.getElementById('s-announcements-timeline');
  const sorted = [...announcements].sort((a, b) => new Date(b.date) - new Date(a.date));

  if (sorted.length === 0) {
    timeline.innerHTML = `<div class="p-8 text-center text-xs text-white/40 italic bg-white/5 rounded-xl border border-white/10">No announcements posted.</div>`;
    return;
  }

  sorted.forEach(ann => {
    let badgeClass = 'bg-white/5 text-white border border-white/10';
    if (ann.category === 'Academic') badgeClass = 'bg-blue-955/60 text-blue-300 border border-blue-500/20';
    else if (ann.category === 'Event') badgeClass = 'bg-purple-955/60 text-purple-300 border border-purple-500/20';

    timeline.innerHTML += `
      <div class="glass p-6 shadow-2xl transition-all relative">
        <div class="flex items-center justify-between mb-3">
          <div class="flex items-center gap-3">
            <span class="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${badgeClass}">${ann.category}</span>
            <span class="text-[10px] text-white/40 font-semibold"><i class="fa-regular fa-clock"></i> ${ann.date}</span>
          </div>
        </div>
        <h3 class="font-bold text-white text-base font-headings mb-2">${ann.title}</h3>
        <p class="text-xs text-white/70 leading-relaxed">${ann.message}</p>
      </div>
    `;
  });
}

function renderStudentProfile() {
  const container = document.getElementById('student-main');
  if (!container) return;

  const student = students.find(s => s.id === currentUser.studentId) || students[0];
  const studAtt = attendance.filter(r => r.studentId === student.id);
  const present = studAtt.filter(r => r.status === 'present' || r.status === 'late').length;
  const attRate = studAtt.length > 0 ? ((present / studAtt.length) * 100).toFixed(0) : 92;

  const studRes = results.filter(r => r.studentId === student.id);
  const avgScore = studRes.length > 0 ? (studRes.reduce((sum, r) => sum + r.score, 0) / studRes.length).toFixed(0) : 85;

  container.innerHTML = `
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      
      <!-- Edit Profile form -->
      <div class="glass p-6 shadow-2xl lg:col-span-2">
        <h3 class="text-lg font-bold text-school-gold border-b border-white/10 pb-3 mb-6 uppercase tracking-wider">My Student Profile</h3>
        <form id="s-profile-form" onsubmit="saveStudentProfileForm(event)" class="space-y-4">
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-bold text-white/50 uppercase mb-2">Student Name</label>
              <input type="text" class="glass-input w-full p-2.5 rounded text-sm focus:outline-none" value="${student.name}" readonly>
            </div>
            <div>
              <label class="block text-xs font-bold text-white/50 uppercase mb-2">Student ID</label>
              <input type="text" class="glass-input w-full p-2.5 rounded text-sm focus:outline-none" value="${student.id}" readonly>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-bold text-white/50 uppercase mb-2">Class Section</label>
              <input type="text" class="glass-input w-full p-2.5 rounded text-sm focus:outline-none" value="${student.class}" readonly>
            </div>
            <div>
              <label class="block text-xs font-bold text-white/50 uppercase mb-2">Phone</label>
              <input type="text" id="s-prof-phone" class="glass-input w-full p-2.5 rounded text-sm focus:outline-none" value="${student.phone}" required>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-bold text-white/50 uppercase mb-2">Parent/Guardian Name</label>
              <input type="text" class="glass-input w-full p-2.5 rounded text-sm focus:outline-none" value="${student.parentName}" readonly>
            </div>
            <div>
              <label class="block text-xs font-bold text-white/50 uppercase mb-2">Residential Address</label>
              <input type="text" class="glass-input w-full p-2.5 rounded text-sm focus:outline-none" value="${student.address || 'Hargeisa, Somaliland'}" readonly>
            </div>
          </div>
          <div>
            <label class="block text-xs font-bold text-white/50 uppercase mb-2">Personal Biography</label>
            <textarea id="s-prof-bio" class="glass-input w-full p-2.5 rounded text-sm focus:outline-none" rows="4">${currentUser.bio || 'Hardworking Grade 10 student dedicated to mathematical sciences.'}</textarea>
          </div>
          <button type="submit" class="w-full py-3 btn-primary text-white font-bold rounded text-xs uppercase tracking-wider transition-all shadow-lg cursor-pointer">
            <i class="fa-solid fa-save mr-1"></i> Save Profile Details
          </button>
        </form>
      </div>

      <!-- Academic Summary Sidebar card -->
      <div class="glass p-6 flex flex-col justify-between shadow-2xl relative overflow-hidden card-hover-lift h-fit">
        <div class="flex flex-col items-center text-center p-4">
          <div class="w-24 h-24 bg-gradient-to-tr from-school-gold to-yellow-600 border-2 border-school-gold rounded-full flex items-center justify-center font-bold text-4xl shadow-[0_0_20px_rgba(212,175,55,0.4)] text-gray-950 mb-4 select-none">
            ${student.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}
          </div>
          <h4 class="font-headings text-lg font-bold text-white">${student.name}</h4>
          <span class="text-xs text-school-gold font-bold uppercase tracking-widest mt-1">${student.class} · STU001</span>
        </div>

        <div class="space-y-4 pt-6 border-t border-white/5 mt-4">
          <div class="bg-white/5 border border-white/10 rounded-xl p-3 flex justify-between items-center text-xs">
            <span class="text-white/50 uppercase font-bold tracking-wider">Average Grade</span>
            <span class="font-extrabold text-school-gold font-mono">${avgScore}% (${getGradeFromScore(parseFloat(avgScore))})</span>
          </div>
          <div class="bg-white/5 border border-white/10 rounded-xl p-3 flex justify-between items-center text-xs">
            <span class="text-white/50 uppercase font-bold tracking-wider">Attendance Rate</span>
            <span class="font-extrabold text-green-400 font-mono">${attRate}%</span>
          </div>
          <div class="bg-white/5 border border-white/10 rounded-xl p-3 flex justify-between items-center text-xs">
            <span class="text-white/50 uppercase font-bold tracking-wider">Class Rank</span>
            <span class="font-extrabold text-school-cyan font-mono">12th of 42</span>
          </div>
        </div>
      </div>

    </div>
  `;
}

function saveStudentProfileForm(event) {
  event.preventDefault();

  const phone = document.getElementById('s-prof-phone').value.trim();
  const bio = document.getElementById('s-prof-bio').value.trim();

  // Find student index
  const studentIdx = students.findIndex(s => s.id === currentUser.studentId);
  if (studentIdx > -1) {
    students[studentIdx].phone = phone;
  }

  const userIdx = users.findIndex(u => u.id === currentUser.id);
  if (userIdx > -1) {
    users[userIdx].bio = bio;
  }

  currentUser.bio = bio;
  sessionStorage.setItem('currentUser', JSON.stringify(currentUser));

  saveAllToLocalStorage();
  showToast("Student profile settings synchronized", "success");
  renderStudentProfile();
}

function getGradeFromScore(score) {
  if (score >= 90) return 'A';
  if (score >= 80) return 'B';
  if (score >= 70) return 'C';
  if (score >= 60) return 'D';
  return 'F';
}
