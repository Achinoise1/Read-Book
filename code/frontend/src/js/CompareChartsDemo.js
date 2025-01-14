import { Radar } from '@antv/g2plot';
import React, { useEffect, useState } from 'react';
import '../../node_modules/font-awesome/less/font-awesome.less';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEnvelopeOpen, faPhone, faUniversity
} from '@fortawesome/fontawesome-free-solid'
import {
    faFacebook,
    faGithub, faQq
} from '@fortawesome/fontawesome-free-brands'
import { subscribe } from './utils.js';
import '../css/style.css';
import { justifyTextStyle } from './utils';
import { Progress, Space } from 'antd';
import axios from "axios";


function CompareChartsDemo() {
    const [res, setRes] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);

    const formData = new FormData();
    formData.append('userId', 2);
    axios.post('/api/Statistics', formData)
        .then(response => {
            setRes(response.data.data);
            setIsLoaded(true); // 设置 isLoaded 为 true
        })
        .catch(error => {
            console.log(error);
        });

    const data = (res && res.Testscore) ? [
        { name: 'recently', attribute: 'figure', score: res.Testscore[0] },
        { name: 'recently', attribute: 'author', score: res.Testscore[1] },
        { name: 'recently', attribute: 'main', score: res.Testscore[2] },
        { name: 'recently', attribute: 'content', score: res.Testscore[3] },
        { name: 'recently', attribute: 'detail', score: res.Testscore[4] },
        { name: 'total', attribute: 'figure', score: res.Testscore[5] },
        { name: 'total', attribute: 'author', score: res.Testscore[6] },
        { name: 'total', attribute: 'main', score: res.Testscore[7] },
        { name: 'total', attribute: 'content', score: res.Testscore[8] },
        { name: 'total', attribute: 'detail', score: res.Testscore[9] }
    ] : [
        { name: 'recently', attribute: 'figure', score: 20 },
        { name: 'recently', attribute: 'author', score: 30 },
        { name: 'recently', attribute: 'main', score: 40 },
        { name: 'recently', attribute: 'content', score: 10 },
        { name: 'recently', attribute: 'detail', score: 20 },
        { name: 'total', attribute: 'figure', score: 60 },
        { name: 'total', attribute: 'author', score: 50 },
        { name: 'total', attribute: 'main', score: 70 },
        { name: 'total', attribute: 'content', score: 10 },
        { name: 'total', attribute: 'detail', score: 20 }
    ]

    //感觉所有的交互数据都可以用这个去操作，也避免渲染多次
    useEffect(() => {
        if (isLoaded) { // 添加判断条件
            const radarPlot = new Radar('result-container', {
                data,
                xField: 'attribute',
                yField: 'score',
                seriesField: 'name',
                radius: 0.8,
                angleField: 'attribute',
                area: {},
            });
            radarPlot.render();

            return () => {
                radarPlot.destroy();
            };
        }
    }, [isLoaded]);

    return (
        <div>
            <div >
                <header className="header_section">
                    <div className="container-fluid">
                        <nav className="navbar navbar-expand-lg custom_nav-container ">
                            <a className="navbar-brand" href="/">
                                <span>
                                    Read-Book
                                </span>
                            </a>

                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className=""> </span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link pl-lg-0" href="/">Home </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/books"> Books</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/test">Test</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/statistics"> Statistics </a>
                                    </li>
                                    {/*                                         
                                        <li className="nav-item active">
                                            <a className="nav-link" href="/login">Login <span className="sr-only">(current)</span> </a>
                                        </li>
                                        
                                        <li className="nav-item active">
                                            <a className="nav-link" href="/profile">Profile <span className="sr-only">(current)</span> </a>
                                        </li> */}

                                </ul>
                            </div>
                        </nav>
                    </div>
                </header>

            </div>

            <section className="blog_section layout_padding">
                <div className="container">

                    <div className="heading_container heading_center">
                        <h2>
                            历史数据
                        </h2>
                    </div>

                    <br /><br />
                    <div className="row">
                        <div className="col-md-5" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <div style={{ marginBottom: "20px" }}>
                                    <Space>
                                        <Progress type="circle" percent={res.avgAccuracy} />
                                        <Progress type="circle" percent={res.lastAccuracy} />
                                        {/* <CompareChartsDemo /> */}
                                    </Space>
                                </div>

                                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <div id="result-container" style={{ width: "300px", height: "300px" }}></div>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-7" style={justifyTextStyle}>
                            <div>
                                用户{res.username}：
                            </div>
                            <br />
                            <div>
                                &emsp;您共测试<b style={{ fontSize: '20px' }}>{res.times}</b>次，
                                平均用时<b style={{ fontSize: '20px' }}>{res.avgDuration}</b>，
                                正确率为<b style={{ fontSize: '20px' }}>{res.avgAccuracy}%</b>。
                                最近一次在<b style={{ fontSize: '20px' }}>{res.lastTime}</b>测试，
                                用时<b style={{ fontSize: '20px' }}>{res.lastDuration}</b>，
                                正确率为<b style={{ fontSize: '20px' }}>{res.lastAccuracy}%</b>。
                            </div>
                            <br />
                            <div>
                                &emsp;综合来看，您对<span style={{ fontSize: '20px', fontWeight: 'bold' }}>总体知识</span>的掌握程度：
                                {(() => {
                                    if (res.avgAccuracy < 60) {
                                        return <b style={{ fontSize: '20px' }}>仍有待提高。</b>;
                                    } else if (res.avgAccuracy < 70) {
                                        return <b style={{ fontSize: '20px' }}>为一般。</b>;
                                    } else if (res.avgAccuracy < 80) {
                                        return <b style={{ fontSize: '20px' }}>为较好。</b>;
                                    } else if (res.avgAccuracy < 90) {
                                        return <b style={{ fontSize: '20px' }}>为良好。</b>;
                                    } else {
                                        return <b style={{ fontSize: '20px' }}>为优秀。</b>;
                                    }
                                })()}
                                <br />
                            </div>
                            <div>
                                &emsp;其中，您对各类书籍中<span style={{ fontSize: '20px', fontWeight: 'bold' }}>人物部分</span>知识掌握程度
                                {(() => {
                                    if (res.Testscore && res.Testscore[5] < 60) {
                                        return <b style={{ fontSize: '20px' }}>仍有待提高。</b>;
                                    } else if (res.Testscore && res.Testscore[5] < 70) {
                                        return <b style={{ fontSize: '20px' }}>为一般。</b>;
                                    } else if (res.Testscore && res.Testscore[5] < 80) {
                                        return <b style={{ fontSize: '20px' }}>为较好。</b>;
                                    } else if (res.Testscore && res.Testscore[5] < 90) {
                                        return <b style={{ fontSize: '20px' }}>为良好。</b>;
                                    } else {
                                        return <b style={{ fontSize: '20px' }}>为优秀。</b>;
                                    }
                                })()}
                                <br />
                            </div>
                            <div>
                                &emsp;其中，您对各类书籍中<span style={{ fontSize: '20px', fontWeight: 'bold' }}>作者部分</span>知识掌握程度
                                {(() => {
                                    if (res.Testscore && res.Testscore[6] < 60) {
                                        return <b style={{ fontSize: '20px' }}>仍有待提高。</b>;
                                    } else if (res.Testscore && res.Testscore[6] < 70) {
                                        return <b style={{ fontSize: '20px' }}>为一般。</b>;
                                    } else if (res.Testscore && res.Testscore[6] < 80) {
                                        return <b style={{ fontSize: '20px' }}>为较好。</b>;
                                    } else if (res.Testscore && res.Testscore[6] < 90) {
                                        return <b style={{ fontSize: '20px' }}>为良好。</b>;
                                    } else {
                                        return <b style={{ fontSize: '20px' }}>为优秀。</b>;
                                    }
                                })()}
                                <br />
                            </div>
                            <div>
                                &emsp;其中，您对各类书籍中<span style={{ fontSize: '20px', fontWeight: 'bold' }}>主旨部分</span>知识掌握程度
                                {(() => {
                                    if (res.Testscore && res.Testscore[7] < 60) {
                                        return <b style={{ fontSize: '20px' }}>仍有待提高。</b>;
                                    } else if (res.Testscore && res.Testscore[7] < 70) {
                                        return <b style={{ fontSize: '20px' }}>为一般。</b>;
                                    } else if (res.Testscore && res.Testscore[7] < 80) {
                                        return <b style={{ fontSize: '20px' }}>为较好。</b>;
                                    } else if (res.Testscore && res.Testscore[7] < 90) {
                                        return <b style={{ fontSize: '20px' }}>为良好。</b>;
                                    } else {
                                        return <b style={{ fontSize: '20px' }}>为优秀。</b>;
                                    }
                                })()}
                                <br />
                            </div>
                            <div>
                                &emsp;其中，您对各类书籍中<span style={{ fontSize: '20px', fontWeight: 'bold' }}>情节部分</span>知识掌握程度
                                {(() => {
                                    if (res.Testscore && res.Testscore[8] < 60) {
                                        return <b style={{ fontSize: '20px' }}>仍有待提高。</b>;
                                    } else if (res.Testscore && res.Testscore[8] < 70) {
                                        return <b style={{ fontSize: '20px' }}>为一般。</b>;
                                    } else if (res.Testscore && res.Testscore[8] < 80) {
                                        return <b style={{ fontSize: '20px' }}>为较好。</b>;
                                    } else if (res.Testscore && res.Testscore[8] < 90) {
                                        return <b style={{ fontSize: '20px' }}>为良好。</b>;
                                    } else {
                                        return <b style={{ fontSize: '20px' }}>为优秀。</b>;
                                    }
                                })()}
                                <br />
                            </div>
                            <div>
                                &emsp;其中，您对各类书籍中<span style={{ fontSize: '20px', fontWeight: 'bold' }}>细节部分</span>知识掌握程度
                                {(() => {
                                    if (res.Testscore && res.Testscore[9] < 60) {
                                        return <b style={{ fontSize: '20px' }}>仍有待提高。</b>;
                                    } else if (res.Testscore && res.Testscore[9] < 70) {
                                        return <b style={{ fontSize: '20px' }}>为一般。</b>;
                                    } else if (res.Testscore && res.Testscore[9] < 80) {
                                        return <b style={{ fontSize: '20px' }}>为较好。</b>;
                                    } else if (res.Testscore && res.Testscore[9] < 90) {
                                        return <b style={{ fontSize: '20px' }}>为良好。</b>;
                                    } else {
                                        return <b style={{ fontSize: '20px' }}>为优秀。</b>;
                                    }
                                })()}
                                <br />
                            </div>

                            <div>
                                <br /><br />
                                {(() => {
                                    if (res.avgAccuracy < 60) {
                                        return <b style={{ fontSize: '20px' }}>如果不读书，行万里路，也只是个邮差——钱钟书</b>;
                                    } else if (res.avgAccuracy < 70) {
                                        return <b style={{ fontSize: '20px' }}>只要打开书，就随时打开了一个崭新的世界——《人民日报》</b>;
                                    } else if (res.avgAccuracy < 80) {
                                        return <b style={{ fontSize: '20px' }}>无论是驱赶迷茫，还是对抗平庸，读书都是最简单也最实用的方法</b>;
                                    } else if (res.avgAccuracy < 90) {
                                        return <b style={{ fontSize: '20px' }}>世界上任何一个书籍都不能给你带来好运，但他们能让你悄悄地成为自己——赫尔曼·黑塞</b>;
                                    } else {
                                        return <b style={{ fontSize: '20px' }}>脚步丈量不到的地方，书可以；眼睛到不了的地方，书可以——《人民日报》</b>;
                                    }
                                })()}
                                <br />
                            </div>

                        </div>
                    </div>

                    {/* <div className="heading_container heading_center">
                            <h2>
                                您还没有进行过任何测试，请先进行测试，或返回主页
                            </h2>
                        </div> */}

                </div>
            </section>

            <section className="info_section layout_padding2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-4 info-col">
                            <div className="info_detail">
                                <h4>
                                    About Us
                                </h4>
                                <p>
                                    Contact us on these social-medias.
                                </p>
                                <div className="info_social">
                                    <a href="https://www.facebook.com/profile.php?id=100064520177692">
                                        <FontAwesomeIcon icon={faFacebook} />
                                    </a>
                                    <a href="https://user.qzone.qq.com/1659455853">
                                        <FontAwesomeIcon icon={faQq} />
                                    </a>
                                    <a href="https://github.com/Achinoise1">
                                        <FontAwesomeIcon icon={faGithub} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 info-col">
                            <div className="info_contact">
                                <h4>
                                    Address
                                </h4>
                                <div className="contact_link_box">
                                    <a href="https://www.zstu.edu.cn/">
                                        <FontAwesomeIcon icon={faUniversity} />
                                        <span>
                                            ZSTU
                                        </span>
                                    </a>

                                    <a href="https://github.com/Casta-mere/Read-Book">
                                        <FontAwesomeIcon icon={faGithub} />
                                        <span>
                                            View our Github page
                                        </span>
                                    </a>
                                    <a href="" style={{ pointerEvents: "none" }}>
                                        <FontAwesomeIcon icon={faPhone} />
                                        <span>
                                            Call +86 13834230484
                                        </span>
                                    </a>
                                    <a href="" style={{ pointerEvents: "none" }}>
                                        <FontAwesomeIcon icon={faEnvelopeOpen} />
                                        <span>
                                            E-mail castamego@gmail.com
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 info-col">
                            <div className="info_contact">
                                <h4>
                                    Newsletter
                                </h4>
                                <form action="#">
                                    <input type="text" placeholder="Enter email" />
                                    <button type="submit" onClick={subscribe}>
                                        Subscribe
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="footer_section">
                <div className="container">
                    <p>
                        &copy; <span id="displayYear"></span> All Rights Reserved By
                        <a href="https://github.com/Casta-mere">Castamere</a>
                    </p>
                </div>
            </footer>
        </div>
    )
};

export default CompareChartsDemo;