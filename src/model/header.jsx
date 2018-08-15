import React, { Component } from "react";
import "./header.less"

class Header extends Component {
	render() {
		return (
			<div className="header">
				<div className="inner">
					<div className="top">
						<div className="tel">服务热线：400-0577-981（8:30-20:30）</div>
						<ul className="info">																												
							<li>登录</li>
							<li>注册</li>
							<li>帮助中心</li>
							<li>手机APP</li>
							<li>新浪</li>
							<li>微信</li>
						</ul>
					</div>
					<div className="bottom">
						<div className="logo">
							<img src="/logo.png" alt=""/>
						</div>
						<div className="ad"></div>
						<div className="nav">
							<ul>					
								<li>我的账户</li>
								<li>信息披露</li>
								<li>新手指引</li>							
								<li>走进三信</li>
								<li>我要投资</li>
								<li>首页</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Header;