import React, { Component } from "react";

class Contact extends Component {
    state = {};
    render() {
        return (
            <section id="contacts">
                <header className="contacts_header">
                    <h1>有任何問題嗎？馬上聯絡我們</h1>
                </header>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-10">
                            <form action="">
                                <input type="text" name="name" placeholder='名字' required />
                                <input type="email" name="email" placeholder='信箱' required/>
                                <input type="text" name="phone" placeholder='電話' required/>
                                <select name="topic" required defaultValue="default">
                                    <option value="default" disabled hidden>
                                        請選擇主題
                                    </option>
                                    <option value="project">專案開發</option>
                                    <option value="technical">技術諮詢</option>
                                    <option value="coporation">企業內訓</option>
                                    <option value="course">課程詢問</option>
                                    <option value="other">其他</option>
                                </select>
                                <textarea name="message" id="" cols="30" rows="10" required></textarea>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Contact;
