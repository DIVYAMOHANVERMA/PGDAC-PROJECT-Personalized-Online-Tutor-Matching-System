import React, { useState } from 'react';
// import './TeacherOnboard.module.css';
import { Layout, Menu } from 'antd';       
import {
  FileTextOutlined,
  UserOutlined,
  ProfileOutlined,
} from '@ant-design/icons';
import Overview from './Overview';
import StudentList from './StudentList';
import Courses from './Courses';

const { Sider, Content } = Layout;
const { SubMenu } = Menu;

const DashboardLayout = ({ children }) => {
  const [selectedMenuItem, setSelectedMenuItem] = useState('2');

  const handleMenuItemClick = (key) => {
    setSelectedMenuItem(key);
  };

  // Define content to render based on selected menu item
  const renderContent = () => {
    switch (selectedMenuItem) {
      case '2':
        return <Overview />;
      case '3':
        return <StudentList />;
      case '5':
        return <Courses />;  
      // Add cases for other menu items as needed
      default:
        return null;
    }
  };

  return (
    <Layout>
      <Sider collapsible style={{minHeight: '100vh'}}>
        <div className="logo" style={{ padding: '10px', marginTop: '20px' }}>
          <img
            src="https://static.vecteezy.com/system/resources/previews/010/885/250/non_2x/teacher-learning-education-illustration-school-classroom-with-laptop-cartoon-student-lesson-study-concept-university-design-knowledge-training-online-on-computer-tutor-lecture-web-course-vector.jpg"
            alt="logo"
            style={{ maxWidth: '100%' }}
          />
        </div>
        <div style={{ marginTop: '0px' }}>
          <Menu theme="dark" defaultSelectedKeys={['2']} mode="inline">
            <Menu.Item key="2" icon={<ProfileOutlined />} onClick={() => handleMenuItemClick('2')}>
              Overview
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="Students">
              <Menu.Item key="3" icon={<ProfileOutlined />} onClick={() => handleMenuItemClick('3')}>
                StudentList
              </Menu.Item>
              <Menu.Item key="4">Add Student</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<FileTextOutlined />} title="Courses">
              <Menu.Item key="5" onClick={() => handleMenuItemClick('5')}>CourseList</Menu.Item>
              <Menu.Item key="6">Add Course</Menu.Item>
            </SubMenu>
            {/* Add other menu items */}
          </Menu>
        </div>
      </Sider>
      <Layout className="site-layout">
        <Content style={{ marginLeft: '20px', marginTop: '20px' }}>
          <div className='container-fluid'>
            {renderContent()}
          </div>
         
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
