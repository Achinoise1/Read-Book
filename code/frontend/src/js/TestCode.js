// import React, { useEffect, useState } from 'react';
// import { Card, Button } from 'react-bootstrap'
// import { justifyTextStyle } from './utils';
// import $ from 'jquery'
// import axios from 'axios';

// export default function TestCode() {
//     const choice = ['A', 'B', 'C', 'D'];
//     const [userChoose, setUserChoose] = useState({});

//     //有bug，待完善
//     // const handleMultipleClick = (uc) => {
//     //     setUserChoose(prevUserChoose => {
//     //         const existingValues = prevUserChoose[uc.key] || [];
//     //         if (Object.keys(existingValues).length > 0 && prevUserChoose[uc.key].includes(uc.value)) {

//     //             prevUserChoose[uc.key] = prevUserChoose[uc.key].filter(item => item != uc.value)
//     //             return {
//     //                 ...prevUserChoose
//     //             };
//     //         } else {
//     //             return {
//     //                 ...prevUserChoose,
//     //                 [uc.key]: [...existingValues, uc.value]
//     //             };
//     //         }
//     //     });
//     // };

//     const handleSingleClick = (uc) => {
//         setUserChoose(prevUserChoose => {
//             return {
//                 ...prevUserChoose,
//                 [uc.key]: uc.value
//             };
//         });
//     };

//     const show = () => {
//         const formData = new FormData();
//         formData.append('userChoice', JSON.stringify(userChoose));
//         axios.post('/api/Submit', formData)
//             .then(
//                 window.location.href = '/'
//             )
//             .catch(error => {
//                 console.log(error)
//             })
//         console.log(userChoose)
//     }

//     // var userChoose = {};
//     useEffect(() => {
//         //单选
//         $(function () {
//             $("#test-single li").click(function () {
//                 if ($(this).hasClass('li-selected')) {
//                     // $(this).removeClass('li-selected');
//                     // $(this).attr('name', '');
//                 } else {
//                     $(this).siblings('li').removeClass('li-selected');
//                     $(this).addClass('li-selected');
//                     $(this).siblings('li').attr('name', '');
//                     $(this).attr('name', 'li-selected');

//                 }

//             });
//         });
//     })

//     useEffect(() => {
//         //多选
//         $(function () {
//             $("#test-multiple li").click(function () {
//                 if ($(this).hasClass('li-selected')) {
//                     $(this).removeClass('li-selected');
//                     $(this).attr('name', '');
//                 } else {
//                     $(this).addClass('li-selected');
//                     $(this).attr('name', 'li-selected');
//                 }
//             });
//         });
//     })


//     return (
//         <div className="d-flex flex-column justify-content-center align-items-center">
//             <Card className="w-75 test-card">
//                 <Card.Body>
//                     <div className='row' key={1}>
//                         <div className='col-2 test-id'>1</div>
//                         <div style={justifyTextStyle} className='col-10'>
//                             <Card.Title style={{ fontSize: '36px' }}><b>Card title Card title Card title Card title Card title Card title Card title Card title Card title Card title Card title Card title Card title Card title Card title Card title Card title </b></Card.Title>
//                         </div>
//                     </div>
//                     <ul value={1} style={{ paddingInlineStart: '0px' }} id='test-single'>
//                         {choice.map((item, index) => {
//                             return (
//                                 <li key={index} className='ori' value={item} onClick={() => handleSingleClick({ key: 1, value: item })}>
//                                     {/* // <li key={index} className='ori' value={item}> */}
//                                     <div className='row' >
//                                         <Card.Text className='col-2' style={{ margin: '0px', fontSize: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{item}</Card.Text>
//                                         <Card.Text className='col-10' style={{ fontSize: '22px', textAlign: 'left', display: 'flex', alignItems: 'center' }}>With supporting text below as a natural lead-in to additional content.</Card.Text>
//                                     </div>
//                                 </li>
//                             );
//                         })}
//                     </ul>
//                 </Card.Body>
//             </Card>
//             {/* <Card className="w-75 test-card">
//                 <Card.Body>
//                     <div className='row' key={2}>
//                         <div className='col-2 test-id'>1</div>
//                         <div style={justifyTextStyle} className='col-10'>
//                             <Card.Title style={{ fontSize: '36px' }}><b>Card title Card title Card title Card title Card title Card title Card title Card title Card title Card title Card title Card title Card title Card title Card title Card title Card title </b></Card.Title>
//                         </div>
//                     </div>
//                     <ul value={2} style={{ paddingInlineStart: '0px' }} id='test-multiple'>
//                         {choice.map((item, index) => {
//                             return (
//                                 // <li key={index} className='ori' value={item} onClick={() => handleMultipleClick({ key: 2, value: item })}>
//                                 <li key={index} className='ori' value={item}>
//                                     <div className='row' >
//                                         <Card.Text className='col-2' style={{ margin: '0px', fontSize: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{item}</Card.Text>
//                                         <Card.Text className='col-10' style={{ fontSize: '22px', textAlign: 'left', display: 'flex', alignItems: 'center' }}>With supporting text below as a natural lead-in to additional content.</Card.Text>
//                                     </div>
//                                 </li>
//                             );
//                         })}
//                     </ul>
//                 </Card.Body>
//             </Card> */}
//             <div className='click-box' onClick={show}>Button</div>
//         </div>
//     );
// }


// import React, { useState } from "react";

// export default function TestCode() {
//     const [userChoose, setUserChoose] = useState({});
//     const [tagValues, setTagValues] = useState({});

//     const handleTagClick = (tag) => {
//         setTagValues(prevTagValues => ({
//             ...prevTagValues,
//             [tag.type]: tag.value
//         }));
//     }

//     const handleClick = (uc) => {
//         setUserChoose(prevUserChoose => ({
//             ...prevUserChoose,
//             [uc.key]: uc.value
//         }));
//     }

//     const show = () => {
//         console.log(userChoose)
//     }


//     return (
//         <div>
//             <button onClick={() => handleClick({ key: "tagType1", value: "tagValue1" })}>标签1</button>
//             <button onClick={() => handleClick({ key: "tagType2", value: "tagValue2" })}>标签2</button>
//             {/* 其他标签按钮 */}
//             <button onClick={show}>展示</button>
//         </div>
//     );
// }

// import React from 'react';

// export default function TestCode() {
//     const FloatingPanel = ({ children }) => {
//         return (
//             <div className="floating-panel">
//                 {children}
//             </div>
//         );
//     }
//     return (
//         <div>
//             <h1>My App</h1>
//             <h1>My App</h1>
//             <h1>My App</h1>
//             <h1>My App</h1>
//             <h1>My App</h1>
//             <h1>My App</h1>
//             <h1>My App</h1>
//             <h1>My App</h1>
//             <h1>My App</h1>
//             <h1>My App</h1>
//             <h1>My App</h1>
//             <h1>My App</h1>
//             <h1>My App</h1>
//             <h1>My App</h1>
//             <h1>My App</h1>
//             <h1>My App</h1>
//             <h1>My App</h1>
//             <h1>My App</h1>
//             <h1>My App</h1>
//             <h1>My App</h1>
//             <h1>My App</h1>
//             <h1>My App</h1>
//             <h1>My App</h1>
//             <h1>My App</h1>
//             <h1>My App</h1>
//             <h1>My App</h1>
//             <h1>My App</h1>
//             <h1>My App</h1>
//             <h1>My App</h1>
//             {/* 其他内容... */}
//             <FloatingPanel>
//                 {/* 悬浮面板的内容 */}
//                 <h2>Panel Content</h2>
//                 <p>This is the content of the floating panel.</p>
//             </FloatingPanel>
//         </div>
//     );
// }

// import '../../node_modules/font-awesome/less/font-awesome.less';
// import 'react-fontawesome';
// import '../css/bootstrap.css';
// import '../css/ion.rangeSlider.min.css';
// import '../css/responsive.css';
// import '../css/style.css';
// import '../css/style.css.map';
// import React, { Component } from 'react'
// import { subscribe, truncateText, indentTextStyle } from './utils.js';

// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import { Carousel } from 'react-responsive-carousel';
// import { action } from '@storybook/addon-actions';

// export default function TestCode() {
//     return (
//         <Carousel infiniteLoop autoPlay>
//             <div>
//                 <div className="container ">
//                     <div className="row">
//                         <div className="col-md-6">
//                             <div className="detail-box">
//                                 <h5>
//                                     Read-Book
//                                 </h5>
//                                 <h1>
//                                     今天读什么？
//                                 </h1>
//                                 <p style={indentTextStyle}>
//                                     {/* {truncateText(coreData.brief)} */}
//                                     {1}
//                                 </p>
//                                 <a className="empty" href="/bookDetail/{{bookReID}}">详情</a>
//                             </div>
//                         </div>
//                         <div className="col-md-2"></div>
//                         <div className="col-md-4">
//                             {/* <img src={require(`../figures/pic/${coreData.id}.jpg`)} className="img1" alt="" /> */}
//                             <img src={require(`../figures/pic/1.jpg`)} className="img1" alt="" />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div>
//                 <div className="container ">
//                     <div className="row">
//                         <div className="col-md-6">
//                             <div className="detail-box">
//                                 <h5>
//                                     Read-Book
//                                 </h5>
//                                 <h1>
//                                     测一测 <br />
//                                     掌握了多少知识？
//                                 </h1>
//                                 <p>
//                                     随机选取题目测试，看看你对这些知识的了解程度。
//                                 </p>
//                                 <a href="/test">
//                                     测试
//                                 </a>
//                             </div>
//                         </div>
//                         <div className="col-md-6">
//                             <div className="img-box">
//                                 <img src="static/images/slider-img.png" alt="" />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </Carousel>
//     )
// }


// () => {
//     switch (val) {
//         case (0):
//             return (
//                 <li key={indexInside} value={item} >
//                     <div className='row' >
//                         <Card.Text className='col-2' style={{ margin: '0px', fontSize: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{choice[indexInside]}</Card.Text>
//                         <Card.Text className='col-10' style={{ fontSize: '22px', textAlign: 'left', display: 'flex', alignItems: 'center' }}>{item}</Card.Text>
//                     </div>
//                 </li>
//             );
//         case (1):
//             return (
//                 <li key={indexInside} value={item} >
//                     <div className='row' >
//                         <Card.Text className='col-2' style={{ margin: '0px', fontSize: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{choice[indexInside]}</Card.Text>
//                         <Card.Text className='col-10' style={{ fontSize: '22px', textAlign: 'left', display: 'flex', alignItems: 'center' }}>{item}</Card.Text>
//                     </div>
//                 </li>
//             );
//         case (2):
//             return (
//                 <li key={indexInside} value={item} >
//                     <div className='row' >
//                         <Card.Text className='col-2' style={{ margin: '0px', fontSize: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{choice[indexInside]}</Card.Text>
//                         <Card.Text className='col-10' style={{ fontSize: '22px', textAlign: 'left', display: 'flex', alignItems: 'center' }}>{item}</Card.Text>
//                     </div>
//                 </li>
//             );
//         default:
//             return (
//                 <li key={indexInside} value={item} >
//                     <div className='row' >
//                         <Card.Text className='col-2' style={{ margin: '0px', fontSize: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{choice[indexInside]}</Card.Text>
//                         <Card.Text className='col-10' style={{ fontSize: '22px', textAlign: 'left', display: 'flex', alignItems: 'center' }}>{item}</Card.Text>
//                     </div>
//                 </li>
//             )
//     }
// }

// import { Column } from '@antv/g2plot';
// import React, { useEffect, useState } from "react";
// const data = [
//     {
//         name: 'London',
//         月份: 'Jan.',
//         月均降雨量: 18.9,
//     },
//     {
//         name: 'London',
//         月份: 'Feb.',
//         月均降雨量: 28.8,
//     },
//     {
//         name: 'London',
//         月份: 'Mar.',
//         月均降雨量: 39.3,
//     },
//     {
//         name: 'London',
//         月份: 'Apr.',
//         月均降雨量: 81.4,
//     },
//     {
//         name: 'London',
//         月份: 'May',
//         月均降雨量: 47,
//     },
//     {
//         name: 'London',
//         月份: 'Jun.',
//         月均降雨量: 20.3,
//     },
//     {
//         name: 'London',
//         月份: 'Jul.',
//         月均降雨量: 24,
//     },
//     {
//         name: 'London',
//         月份: 'Aug.',
//         月均降雨量: 35.6,
//     },
//     {
//         name: 'Berlin',
//         月份: 'Jan.',
//         月均降雨量: 12.4,
//     },
//     {
//         name: 'Berlin',
//         月份: 'Feb.',
//         月均降雨量: 23.2,
//     },
//     {
//         name: 'Berlin',
//         月份: 'Mar.',
//         月均降雨量: 34.5,
//     },
//     {
//         name: 'Berlin',
//         月份: 'Apr.',
//         月均降雨量: 99.7,
//     },
//     {
//         name: 'Berlin',
//         月份: 'May',
//         月均降雨量: 52.6,
//     },
//     {
//         name: 'Berlin',
//         月份: 'Jun.',
//         月均降雨量: 35.5,
//     },
//     {
//         name: 'Berlin',
//         月份: 'Jul.',
//         月均降雨量: 37.4,
//     },
//     {
//         name: 'Berlin',
//         月份: 'Aug.',
//         月均降雨量: 42.4,
//     },
// ];
// const CompareChartsDemo = () => {
//     useEffect(() => {
//         const stackedColumnPlot = new Column('container', {
//             data,
//             isGroup: true,
//             xField: '月份',
//             yField: '月均降雨量',
//             seriesField: 'name',
//             /** 设置颜色 */
//             //color: ['#1ca9e6', '#f88c24'],
//             /** 设置间距 */
//             // marginRatio: 0.1,
//             label: {
//                 // 可手动配置 label 数据标签位置
//                 position: 'middle', // 'top', 'middle', 'bottom'
//                 // 可配置附加的布局方法
//                 layout: [
//                     // 柱形图数据标签位置自动调整
//                     { type: 'interval-adjust-position' },
//                     // 数据标签防遮挡
//                     { type: 'interval-hide-overlap' },
//                     // 数据标签文颜色自动调整
//                     { type: 'adjust-color' },
//                 ],
//             },
//         });
//         stackedColumnPlot.render();
//     }, []);
//     return <div id="container"></div>
// };
// export default CompareChartsDemo;


// import { useState, useEffect } from 'react';

// function TestCode() {
//     const [token, setToken] = useState('');

//     useEffect(() => {
//         const savedToken = localStorage.getItem('token');
//         if (savedToken) {
//             setToken(savedToken);
//         }
//     }, []);

//     function handleLoginSuccess(token) {
//         console.log(token);
//         setToken(token);
//         localStorage.setItem('token', token);
//     }

//     function handleLogout() {
//         setToken('');
//         localStorage.removeItem('token');
//     }

//     if (!token) {
//         return <button onClick={handleLoginSuccess}>登录</button>;
//     }

//     return (
//         <div>
//             <div />
//             <button onClick={handleLogout}>退出登录</button>
//         </div>
//     );
// }

// export default TestCode;


// import React from 'react';
// import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
// import { Button, Input, Space } from 'antd';
// const TestCode = () => {
//     const [passwordVisible, setPasswordVisible] = React.useState(false);
//     return (
//         <Space direction="vertical">
//             <Input.Password placeholder="input password" />
//             <Input.Password
//                 placeholder="input password"
//                 iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
//             />
//             <Space direction="horizontal">
//                 <Input.Password
//                     placeholder="input password"
//                     visibilityToggle={{
//                         visible: passwordVisible,
//                         onVisibleChange: setPasswordVisible,
//                     }}
//                 />
//                 <Button
//                     style={{
//                         width: 80,
//                     }}
//                     onClick={() => setPasswordVisible((prevState) => !prevState)}
//                 >
//                     {passwordVisible ? 'Hide' : 'Show'}
//                 </Button>
//             </Space>
//         </Space>
//     );
// };
// export default TestCode;


// import React from 'react';
// import { Flex, Input, Typography } from 'antd';
// import { runes } from 'runes2';
// const TestCode = () => (
//     <Flex vertical gap={16}>
//         <div>
//             <Typography.Title level={5}>Exceed Max</Typography.Title>
//             <Input
//                 count={{
//                     show: true,
//                     max: 10,
//                 }}
//                 defaultValue="Hello, antd!"
//             />
//         </div>

//         <div>
//             <Typography.Title level={5}>Emoji count as length 1</Typography.Title>
//             <Input
//                 count={{
//                     show: true,
//                     strategy: (txt) => runes(txt).length,
//                 }}
//                 defaultValue="🔥🔥🔥"
//             />
//         </div>

//         <div>
//             <Typography.Title level={5}>Not exceed max</Typography.Title>
//             <Input
//                 count={{
//                     show: true,
//                     max: 6,
//                     strategy: (txt) => runes(txt).length,
//                     exceedFormatter: (txt, { max }) => runes(txt).slice(0, max).join(''),
//                 }}
//                 defaultValue="🔥 antd"
//             />
//         </div>
//     </Flex>
// );
// export default TestCode;

// import React, { useState } from 'react';
// import { Spin, Button, Image, Input, Space, Select } from 'antd';
// const TestCode = () => {
//     const [inputCount, setInputCount] = useState(0);

//     const handleInputChange = (e) => {
//         setInputCount(e.target.value.length);
//     };

//     return (
//         <Input
//             placeholder="请输入内容"
//             maxLength={20}
//             style={{ width: 400 }}
//             suffix={<span>{inputCount}/20</span>}
//             onChange={handleInputChange}
//         />
//     );
// };

// export default TestCode;

// import React, { useReducer } from 'react';
// import { Spin, Button, Image, Input, Space, Select } from 'antd';
// const initialState = {
//     inputCounts: {},
// };

// const reducer = (state, action) => {
//     switch (action.type) {
//         case 'updateInputCount': {
//             const { id, count } = action.payload;
//             return {
//                 ...state,
//                 inputCounts: {
//                     ...state.inputCounts,
//                     [id]: count,
//                 },
//             };
//         }
//         default:
//             return state;
//     }
// };

// const TestCode = () => {
//     const [state, dispatch] = useReducer(reducer, initialState);

//     const handleInputChange = (e) => {
//         const { id, value } = e.target;
//         dispatch({ type: 'updateInputCount', payload: { id, count: value.length } });
//     };

//     return (
//         <>
//             <Input
//                 id="input1"
//                 placeholder="请输入内容"
//                 maxLength={20}
//                 style={{ width: 400 }}
//                 suffix={<span>{state.inputCounts['input1'] || 0}/20</span>}
//                 onChange={handleInputChange}
//             />
//             <Input
//                 id="input2"
//                 placeholder="请输入内容"
//                 maxLength={20}
//                 style={{ width: 400 }}
//                 suffix={<span>{state.inputCounts['input2'] || 0}/20</span>}
//                 onChange={handleInputChange}
//             />
//             {/* 추가적인 Input 컴포넌트들 */}
//         </>
//     );
// };

// export default TestCode;

// import React, { useReducer } from 'react';
// import { Spin, Button, Image, Input, Space, Select } from 'antd';

// const initialState = {
//     inputCounts: {},
// };

// const reducer = (state, action) => {
//     switch (action.type) {
//         case 'updateInputCount': {
//             const { id, count } = action.payload;
//             return {
//                 ...state,
//                 inputCounts: {
//                     ...state.inputCounts,
//                     [id]: count,
//                 },
//             };
//         }
//         default:
//             return state;
//     }
// };

// const TestCode = () => {
//     const [state, dispatch] = useReducer(reducer, initialState);

//     const handleInputChange = (e) => {
//         const { id, value } = e.target;
//         dispatch({ type: 'updateInputCount', payload: { id, count: value.length } });
//     };

//     return (
//         <>
//             <Input.TextArea
//                 id="textarea1"
//                 placeholder="请输入内容"
//                 maxLength={200}
//                 autoSize={{ minRows: 2, maxRows: 6 }}
//                 suffix={<span>{state.inputCounts['textarea1'] || 0}/200</span>}
//                 onChange={handleInputChange}
//             />
//             <Input.TextArea
//                 id="textarea2"
//                 placeholder="请输入内容"
//                 maxLength={200}
//                 autoSize={{ minRows: 2, maxRows: 6 }}
//                 suffix={<span>{state.inputCounts['textarea2'] || 0}/200</span>}
//                 onChange={handleInputChange}
//             />
//             {/* 추가적인 Input.TextArea 컴포넌트들 */}
//         </>
//     );
// };

// export default TestCode;

// import { useState } from 'react';
// import { Input, message } from 'antd';

// const TestCode = () => {
//     const [text, setText] = useState('');
//     const maxLength = 10;

//     const handleChange = (e) => {
//         const textLength = e.target.value.length;
//         if (textLength <= maxLength) {
//             setText(e.target.value);
//         } else {
//             message.warning(`最多只能输入${maxLength}个字符`);
//         }
//     };

//     return (
//         <div>
//             <Input.TextArea
//                 value={text}
//                 onChange={handleChange}
//                 autoSize={{ minRows: 2, maxRows: 6 }}
//                 maxLength={maxLength}
//                 showCount
//             />
//             <div style={{ marginTop: '10px' }}>已输入 {text.length} / {maxLength}</div>
//         </div>
//     );
// };

// export default TestCode;



// import React from 'react';
// import { Button, Checkbox, Form, Input } from 'antd';
// import { ItemCenter } from './utils'
// const onFinish = (values) => {
//     console.log('Success:', values);
// };
// const onFinishFailed = (errorInfo) => {
//     console.log('Failed:', errorInfo);
// };
// const TestCode = () => (

//     <Form

//         name="basic"
//         labelCol={{
//             span: 8,
//         }}
//         wrapperCol={{
//             span: 16,
//         }}
//         style={{
//             maxWidth: 600,
//         }}
//         initialValues={{
//             remember: false,
//         }}
//         onFinish={onFinish}
//         onFinishFailed={onFinishFailed}
//         autoComplete="off"
//     >

//         <Form.Item
//             label='Username'
//             name="username"
//             rules={[
//                 {
//                     required: true,
//                     message: 'Please input your username!',
//                 },
//             ]}
//         >
//             <Input />
//         </Form.Item>

//         <Form.Item
//             label="Password"
//             name="password"
//             rules={[
//                 {
//                     required: true,
//                     message: '请输入密码',
//                 }, {
//                     pattern: /^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]{6,18}$/,
//                     message: '密码长度为6-18位，必须由字母、数字组成',
//                 }
//             ]}
//         >
//             <Input.Password />
//         </Form.Item>

//         <Form.Item
//             label="Password"
//             name="confirmPassword"
//             rules={[
//                 {
//                     required: true,
//                     message: '请再次输入密码',
//                 }, ({ getFieldValue }) => ({
//                     validator(_, value) {
//                         if (!value || getFieldValue('passWord') === value) {
//                             return Promise.resolve();
//                         }
//                         return Promise.reject(new Error('两次密码不一致'));
//                     },
//                 })
//             ]}
//         >
//             <Input.Password />
//         </Form.Item>

//         <Form.Item
//             name="remember"
//             valuePropName="checked"
//             wrapperCol={{
//                 offset: 8,
//                 span: 16,
//             }}
//         >
//             <Checkbox >Remember me</Checkbox>
//         </Form.Item>

//         <Form.Item
//             wrapperCol={{
//                 offset: 8,
//                 span: 16,
//             }}
//         >
//             <Button type="primary" htmlType="submit">
//                 Submit
//             </Button>
//         </Form.Item>
//     </Form>
// );
// export default TestCode;


// import { useState, useRef } from "react"
// import { Form, Input, Button } from "antd"

// const TestCode = () => {
//     const [form] = Form.useForm() // 使用useForm Hook创建表单实例
//     const onCheck = async () => {
//         try {
//             await form.validateFields() // 表单校验
//             const values = form.getFieldsValue() // 获取表单数据
//             console.log('Success:', values)
//             message.success('提交校验成功')
//         } catch (errorInfo) {
//             console.log('Failed:', errorInfo)
//             message.warn('提交校验失败')
//         }
//     }

//     return (
//         <div>
//             <Form form={form} labelCol={{ span: 5 }}>
//                 <Form.Item label="标题：" name="title" rules={[{ required: true, message: '请输入标题' }]}>
//                     <Input placeholder="请输入标题" />
//                 </Form.Item>
//                 <Form.Item label="描述：" name="desc" rules={[{ required: true, message: '请填写描述' }]}>
//                     <TextArea placeholder="请填写描述" rows={3} />
//                 </Form.Item>
//             </Form>
//             <div style={{ textAlign: "center" }}>
//                 <Button onClick={onCheck} htmlType="submit" type="primary">提交</Button>
//                 <Button onClick={() => { message.warn('取消提交') }} danger style={{ marginLeft: 30 }}>删除</Button>
//             </div>
//         </div>
//     )
// }

// import React, { useState, useReducer } from 'react';
// import '../css/style.css'
// import '../css/bootstrap.css';
// import '../css/ion.rangeSlider.min.css';
// import '../css/responsive.css';
// import '../css/style.css.map';
// import { ItemCenter } from './utils'

// import {
//     Button,
//     Cascader,
//     DatePicker,
//     Form,
//     Input,
//     InputNumber,
//     Radio,
//     Select,
//     Switch,
//     TreeSelect,
//     Col,
//     Row
// } from 'antd';

// const initialState = {
//     inputCounts: {},
//     inputLoginContent: {},
//     inputRegisterContent: {},
//     selectContent: {}
// };

// const reducer = (state, action) => {
//     switch (action.type) {
//         case 'clearInputCount': {
//             return {
//                 ...state,
//                 inputCounts: {
//                 },
//             };
//         }
//         case 'updateInputCount': {
//             const { id, count } = action.payload;
//             return {
//                 ...state,
//                 inputCounts: {
//                     ...state.inputCounts,
//                     [id]: count,
//                 },
//             };
//         }
//         case 'updateInputLoginContent': {
//             const { id, content } = action.payload;
//             return {
//                 ...state,
//                 inputLoginContent: {
//                     ...state.inputLoginContent,
//                     [id]: content,
//                 },
//             };
//         }
//         case 'updateInputRegisterContent': {
//             const { id, content } = action.payload;
//             return {
//                 ...state,
//                 inputRegisterContent: {
//                     ...state.inputRegisterContent,
//                     [id]: content,
//                 },
//             };
//         }
//         case 'updateSelectContent': {
//             const { name, content } = action.payload;
//             // console.log(action)
//             return {
//                 ...state,
//                 selectContent: {
//                     ...state.selectContent,
//                     [name]: content,
//                 },
//             };
//         }
//         default:
//             return state;
//     }
// };


// function TestCode() {
//     const [form] = Form.useForm();
//     const [state, dispatch] = useReducer(reducer, initialState);
//     const handleInputChange = (e, name = '') => {
//         if (typeof (e) === typeof ('1')) {
//             dispatch({ type: 'updateSelectContent', payload: { name, content: e } })
//         } else {
//             const { id, value } = e.target;
//             if (id.includes('login')) {
//                 dispatch({ type: 'updateInputLoginContent', payload: { id, content: value } })
//             } else {
//                 dispatch({ type: 'updateInputRegisterContent', payload: { id, content: value } })
//             }
//             dispatch({ type: 'updateInputCount', payload: { id, count: value.length } });
//         }
//     };
//     const handleInputReset = () => {
//         form.resetFields();
//         dispatch({ type: 'clearInputCount' });
//     }
//     console.log(state)
//     return (
//         <Form
//             form={form}
//             labelCol={{ span: 6 }}
//             wrapperCol={{ span: 14 }}
//             layout="horizontal"
//             size='large'
//             style={{ maxWidth: 600 }}
//         >
//             <Form.Item
//                 name='regName'
//                 label="Username"
//                 rules={[
//                     {
//                         required: true,
//                         message: '请输入用户名',
//                     }
//                 ]}>
//                 <Input
//                     allowClear
//                     maxLength={10}
//                     suffix={<span style={{ color: '#8c8c8c' }}>{state.inputCounts['regName'] || 0}/10</span>}
//                     onChange={handleInputChange}
//                     id="regName" />
//             </Form.Item>
//             <Form.Item
//                 name='regGender'
//                 label="Gender"
//                 rules={[
//                     {
//                         required: true,
//                         message: '请选择性别',
//                     }
//                 ]}>
//                 <Select >
//                     <Select.Option value="M">Male</Select.Option>
//                     <Select.Option value="F">Female</Select.Option>
//                     <Select.Option value="N">None</Select.Option>
//                 </Select>
//             </Form.Item>
//             <Form.Item
//                 name='regPwd'
//                 label="Password"
//                 rules={[
//                     {
//                         required: true,
//                         message: '请输入密码',
//                     }, {
//                         pattern: /^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]{6,18}$/,
//                         message: '密码长度为6-18位，必须由字母、数字组成',
//                     }
//                 ]}>
//                 <Input.Password
//                     maxLength={18}
//                     allowClear />
//             </Form.Item>
//             <Form.Item
//                 name='regPwd2'
//                 label="Confirm Password"
//                 dependencies={['regPwd']}
//                 rules={[
//                     { required: true, message: '请再次输入密码' },
//                     ({ getFieldValue }) => ({
//                         validator(_, value) {
//                             if (!value || getFieldValue('regPwd') === value) {
//                                 return Promise.resolve();
//                             }
//                             return Promise.reject('两次输入密码不一致');
//                         },
//                     }),
//                 ]}>
//                 <Input.Password
//                     maxLength={18}
//                     allowClear />
//             </Form.Item>
//             <Form.Item
//                 name='regTele'
//                 label="Telephone"
//                 rules={[
//                     { required: true, message: '请输入手机号码' },
//                     { pattern: /^1[3456789]\d{9}$/, message: '手机号格式不正确' },
//                 ]}>
//                 <Input
//                     allowClear
//                     maxLength={11}
//                     suffix={<span style={{ color: '#8c8c8c' }}>{state.inputCounts['regTele'] || 0}/11</span>}
//                     onChange={handleInputChange}
//                     id="regTele" />
//             </Form.Item>
//             <Form.Item name='regBrief' label="Brief Introduction">
//                 <Input.TextArea
//                     allowClear
//                     autoSize={{ minRows: 3, maxRows: 5 }}
//                     maxLength={200}
//                     showCount
//                     onChange={handleInputChange}
//                     id="regBrief" />
//             </Form.Item>

//             <Button>Button</Button>
//             &emsp;
//             <Button htmlType="button" onClick={handleInputReset}>
//                 Reset
//             </Button>
//         </Form >
//     );
// };
// export default TestCode;


// // 在组件中创建一个表单实例
// const TestCode = () => {
//     const [form] = Form.useForm();

//     return (
//         <Form form={form}>
//             <Form.Item
//                 name="username"
//                 label="用户名"
//                 rules={[{ required: true, message: '请填写用户名' }]}
//             >
//                 <Input />
//             </Form.Item>

//             {/* 其他表单字段 */}

//             {/* 重置按钮 */}
//             <button type="button" onClick={() => form.resetFields()}>重置</button>
//         </Form>
//     )
// }
// export default TestCode;


import { Form, Input, Button } from 'antd';
import { FormInstance } from 'antd/lib/form';
import { useRef } from 'react';

const ComponentA = () => {
    const [form] = Form.useForm();
    // 其他逻辑

    return (
        <Form form={form}>
            <Form.Item name="username" label="Username">
                <Input />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

const ComponentB = () => {
    const [form] = Form.useForm();
    // 其他逻辑

    return (
        <Form form={form}>
            <Form.Item name="email" label="Email">
                <Input />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

const TestCode = () => {
    return (
        <div>
            <ComponentA />
            <ComponentB />
        </div>
    );
};

export default TestCode;