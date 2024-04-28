import React from 'react';
// import './HomePage.css'; // Import the CSS file
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import {
  DesktopOutlined,
  FileTextOutlined,
  UserOutlined,
  ProfileOutlined,
} from '@ant-design/icons';

const { Sider, Content } = Layout;
const { SubMenu } = Menu;

const DashboardLayout = ({ children }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible>
        <div className="logo" style={{ textAlign: 'center', padding: '16px 0' }}>
          <a href='https://static.vecteezy.com/system/resources/previews/010/885/250/non_2x/teacher-learning-education-illustration-school-classroom-with-laptop-cartoon-student-lesson-study-concept-university-design-knowledge-training-online-on-computer-tutor-lecture-web-course-vector.jpg'>
            <img src='https://static.vecteezy.com/system/resources/previews/010/885/250/non_2x/teacher-learning-education-illustration-school-classroom-with-laptop-cartoon-student-lesson-study-concept-university-design-knowledge-training-online-on-computer-tutor-lecture-web-course-vector.jpg' alt='logo' style={{ maxWidth: '100%' }} />
          </a>
        </div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<DesktopOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<ProfileOutlined />}>
            <Link to="/overview">Overview</Link>
          </Menu.Item>
          <SubMenu key="sub1" icon={<UserOutlined />} title="Students">
            <Menu.Item key="3"><Link to="/students">Student List</Link></Menu.Item>
            <Menu.Item key="4"><Link to="/students/add">Add Student</Link></Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<FileTextOutlined />} title="Courses">
            <Menu.Item key="5"><Link to="/courses">Course List</Link></Menu.Item>
            <Menu.Item key="6"><Link to="/courses/add">Add Course</Link></Menu.Item>
          </SubMenu>
          <Menu.Item key="7" icon={<ProfileOutlined />}>
            <Link to="/studentpage">Student Login</Link>
          </Menu.Item>
          <Menu.Item key="8" icon={<ProfileOutlined />}>
            <Link to="/teacherpage">Teacher Login</Link>
          </Menu.Item>
          <Menu.Item key="9" icon={<ProfileOutlined />}>
            <Link to="/adminpage">Admin Login</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Content style={{ margin: '0 16px', textAlign: 'center' }}>
          <div className="site-layout-background" style={{ padding: '24px', minHeight: '360px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h1 className="text-center sign flicker">Welcome to the Personalized Online Tutor Matching System</h1> {/* Apply CSS classes here */}
          </div>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}

export default DashboardLayout;
